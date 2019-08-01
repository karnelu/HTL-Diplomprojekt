package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.Information;
import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.entities.Vehicle;
import com.porscheinformatik.htl.exceptions.BPNotFoundException;
import com.porscheinformatik.htl.exceptions.VHCNotFoundException;
import com.porscheinformatik.htl.repositories.VehicleRepository;
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
@RequestMapping("/vehicle")
public class VHCController {

    private Information inf;

    @Autowired
    private VehicleRepository vhcRepo;

    @GetMapping("/{id}")
    public Vehicle getVHCById(@PathVariable Long id){
        Vehicle vhc = vhcRepo.findById(id).orElseThrow(() -> new VHCNotFoundException(id));
        System.out.println("ID");
        return vhc;
    }

    @GetMapping("/getLastScanned")
    public List<Vehicle> getLastUsedVHC(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_YEAR, -1);
        List<Vehicle> list = vhcRepo.findLastScanned(cal.getTime());
        if(list.size() > 10){
            int i = list.size()-1;
            while(i>=10){
                list.remove(i);
                i--;
            }
        }

        return list;
    }

    @PostMapping("/{id}/update")
    @ResponseBody
    public Information updateVHC(@PathVariable Long id, @RequestParam Vehicle vhc){
            if(!vhc.validateVIN()) inf.addMessage("VIN not Valid");
            else if(vhc.getLicensePlate().isEmpty()) inf.addMessage("Licenseplate is empty");
            else {
                vhcRepo.save(vhc);
                inf.addMessage("Successfully Updated");
            }
        return inf;
    }

    @PostMapping("/new")
    @ResponseBody
    public Information createVHC(@RequestBody Vehicle vhc) {
        try {
            if(!vhc.validateVIN()) inf.addMessage("VIN not Valid");
            else if(vhc.getLicensePlate().isEmpty()) inf.addMessage("Licenseplate is empty");
            else {
                vhcRepo.save(vhc);
                inf.addMessage("Successfully Added");
            }
        } catch (ConstraintViolationException ex) {
            String message;
            String path;
            for (ConstraintViolation<?> cv : ex.getConstraintViolations()) {
                path = cv.getPropertyPath().toString();
                message = cv.getMessage();
                path = Character.toUpperCase(path.charAt(0)) + path.substring(1);
                inf.addMessage(path, path + " " + message);
            }
        }
        return inf;
    }

    @GetMapping("/search")
    public List<Vehicle> searchVehicle(@RequestParam(name="type") String type, @RequestParam(name = "q") String query){
        query.toLowerCase();
        return vhcRepo.findAllContaining(query);
    }

    @PostMapping("/{id}/upload")
    @ResponseBody
    public Map<String, String> handleFileUpload(@RequestParam("image") MultipartFile file, @PathVariable Long id) {
        HashMap<String, String> payload = new HashMap<>();
        StorageService storageService = new StorageService();
        if (storageService.storeVHC(file, id)){
            Vehicle vehicle = vhcRepo.findById(id).orElseThrow(() -> new VHCNotFoundException(id));
            vehicle.setImageDir(storageService.getImageLocation());
            vhcRepo.saveAndFlush(vehicle);
            payload.put("nopath", "You successfully uploaded " + file.getOriginalFilename() + "!");
        } else {
            payload.put("nopath", "Upload failed " + file.getOriginalFilename() + "!");
        }
        return payload;
    }
    @GetMapping("/{id}/getAvatar")
    @ResponseBody
    public HttpEntity<byte[]> getBPImage(@PathVariable Long id){
        String path = Paths.get(System.getProperty("user.dir") + "/src/main/resources/images/vehicle").toString();
        Vehicle vehicle = vhcRepo.findById(id).orElseThrow(() -> new BPNotFoundException(id));
        BufferedImage bufferedImage;
        try {
            File image = new File(path+"/"+vehicle.getImageDir());
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
}
