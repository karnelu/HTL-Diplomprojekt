package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.IPConfig;
import com.porscheinformatik.htl.MailValidation;
import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.exceptions.BPNotFoundException;
import com.porscheinformatik.htl.repositories.BPRepository;
import com.porscheinformatik.htl.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/business-partner")
public class BPController {

    @Autowired
    private BPRepository bpRepository;

    private IPConfig ipConfig;


    @GetMapping("/{id}/detail")
    public BP getBP(@PathVariable Long id) {
        BP bp = bpRepository.findById(id).orElseThrow(() -> new BPNotFoundException(id));
        bp.setTimeStamp();
        return bpRepository.save(bp);
    }

    @GetMapping("/getLastUsed")
    public List<BP> getLastUsed(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_YEAR, -1);
        return bpRepository.findLastUsedOrderedDesc(cal.getTime());
    }

    @PostMapping("/update")
    @ResponseBody
    public Map<String, String> updateBP(@RequestBody BP bp) {
        HashMap<String, String> payload = new HashMap<>();
        try {
            if (bp.getName().isEmpty()) payload.put("nopath", "Name can't be empty!");
            else if (bp.getEmail().isEmpty()) payload.put("nopath", "Email can't be empty!");
            else if(MailValidation.isValid(bp.getEmail())){
                bpRepository.save(bp);
                payload.put("nopath","Successfully updated!");
            } else payload.put("nopath","Email is not valid!");
        } catch (ConstraintViolationException ex) {
            String message;
            String path;
            for (ConstraintViolation<?> cv : ex.getConstraintViolations()) {
                path = cv.getPropertyPath().toString();
                message = cv.getMessage();
                path = Character.toUpperCase(path.charAt(0)) + path.substring(1);
                payload.put(path, message);
            }
        }
        return payload;
    }

    @PostMapping("/new")
    @ResponseBody
    public Map<String, String> createBP(@RequestBody BP bp) {
        HashMap<String, String> payload = new HashMap<>();
        System.out.println("NEW");
        try {
             if (bp.getName().isEmpty()) payload.put("nopath", "Name can't be empty!");
             else if (bp.getEmail().isEmpty()) payload.put("nopath", "Email can't be empty!");
             else if (MailValidation.isValid(bp.getEmail())){
                 bp.setTimeStamp();
                 bpRepository.save(bp);

                 BP bp1 = bpRepository.findByAvatarNull();
                 bp1.setImg("http://"+ ipConfig.toString() +"/business-partner/"+bp.getbpID()+"/getAvatar?" +(int)(Math.random()*1000000));
                 bpRepository.save(bp1);

            } else System.out.println("Email not valid");
        } catch (ConstraintViolationException ex) {
            String message;
            String path;
            for (ConstraintViolation<?> cv : ex.getConstraintViolations()) {
                path = cv.getPropertyPath().toString();
                message = cv.getMessage();
                path = Character.toUpperCase(path.charAt(0)) + path.substring(1);
                payload.put(path, message);
            }
        }
        return payload;
    }

    @PostMapping("/{id}/upload")
    @ResponseBody
    public Map<String, String> handleFileUpload(@RequestParam("image") MultipartFile file, @PathVariable Long id) {
        HashMap<String, String> payload = new HashMap<>();
        StorageService storageService = new StorageService();
        if (storageService.storeBP(file, id)){
            BP bp = bpRepository.findById(id).orElseThrow(() -> new BPNotFoundException(id));
            bpRepository.saveAndFlush(bp);
            payload.put("nopath", "You successfully uploaded " + file.getOriginalFilename() + "!");
        } else {
            payload.put("nopath", "Upload failed " + file.getOriginalFilename() + "!");
        }
        return payload;
    }

    @GetMapping("/{id}/getAvatar")
    @ResponseBody
    public HttpEntity<byte[]> getBPImage(@PathVariable Long id){
        String path = Paths.get(System.getProperty("user.dir") + "/src/main/resources/images/business-partner").toString();
        BP bp = bpRepository.findById(id).orElseThrow(() -> new BPNotFoundException(id));
        BufferedImage bufferedImage;
        try {
            File image = new File(path+"/"+"avatar_"+id.toString()+".jpg");
            if(!image.exists()){
                File def = new File(path+"/default.jpg");
                bufferedImage = ImageIO.read(def);
            }
            else {
                bufferedImage = ImageIO.read(image);
            }
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ImageIO.write(bufferedImage, "png", bos);
            byte[] img = bos.toByteArray();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_PNG);
            headers.setContentLength(img.length);
            return new HttpEntity<>(img, headers);
        } catch (IOException e){
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("/search")
    public List<BP> searchBP(@RequestParam(name="type") String type, @RequestParam(name = "q") String query){
        List<BP> searchResult = null;
        switch (type){
            case "name":searchResult = bpRepository.findByName(query); break;
            case "email": searchResult = bpRepository.findByEmail(query); break;
            case "city": searchResult = bpRepository.findByCity(query); break;
        }
        return searchResult;
    }
}
