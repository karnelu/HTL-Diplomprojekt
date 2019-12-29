package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.IPConfig;
import com.porscheinformatik.htl.entities.Vehicle;
import com.porscheinformatik.htl.exceptions.BPNotFoundException;
import com.porscheinformatik.htl.exceptions.VHCNotFoundException;
import com.porscheinformatik.htl.repositories.VehicleRepository;
import com.porscheinformatik.htl.storage.StorageService;
import org.apache.tomcat.util.file.ConfigurationSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/vehicle")
public class VHCController {

    @Autowired
    private VehicleRepository vhcRepo;

    private IPConfig ipConfig;

    @GetMapping("/{id}")
    public Vehicle getVHCById(@PathVariable Long id){
        Vehicle vhc = vhcRepo.findById(id).orElseThrow(() -> new VHCNotFoundException(id));
        vhc.setTimeStamp();
        return vhcRepo.save(vhc);
    }

    @GetMapping("/getLastUsed")
    public List<Vehicle> getLastUsedVHC(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_YEAR, -1);
        List<Vehicle> list = vhcRepo.findLastUsed(cal.getTime());
        if(list.size() > 10){
            int i = list.size()-1;
            while(i>=10){
                list.remove(i);
                i--;
            }
        }
        return list;
    }

    @PostMapping("/update")
    @ResponseBody
    public Map<String, String>  updateVHC(@RequestBody Vehicle vhc){
        HashMap<String, String> payload = new HashMap<>();
            if(!vhc.validateVIN()) payload.put("nopath", "VIN not valid");
            else if(vhc.getLicensePlate().isEmpty()) payload.put("nopath", "Licenseplate is empty");
            else {
                vhcRepo.save(vhc);
                payload.put("nopath","Successfully updated!");
            }
        return payload;
    }

    @PostMapping("/new")
    @ResponseBody
    public HashMap<String, String> createVHC(@RequestBody Vehicle vhc) {
        HashMap<String, String> payload = new HashMap<>();
        try {
            if(!vhc.validateVIN()) payload.put("nopath", "VIN not Valid");
            else if(vhc.getLicensePlate().isEmpty()) payload.put("nopath", "Licenseplate is empty");
            else {
                vhcRepo.save(vhc);
                payload.put("nopath","Successfully Added");
            }
        } catch (ConstraintViolationException ex) {
            String message;
            String path;
            for (ConstraintViolation<?> cv : ex.getConstraintViolations()) {
                path = cv.getPropertyPath().toString();
                message = cv.getMessage();
                path = Character.toUpperCase(path.charAt(0)) + path.substring(1);
                payload.put(path,path + " " + message);
            }
        }
        return payload;
    }

    @GetMapping("/search")
    public List<Vehicle> searchVehicle(@RequestParam(name="type") String type, @RequestParam(name = "q") String query){
        return vhcRepo.findAllContaining(query);
    }

    @PostMapping("/{id}/upload")
    @ResponseBody
    public Map<String, String> handleFileUpload(@RequestParam("image") MultipartFile file, @PathVariable Long id) {
        HashMap<String, String> payload = new HashMap<>();
        StorageService storageService = new StorageService();
        if (storageService.storeVHC(file, id)){
            Vehicle vehicle = vhcRepo.findById(id).orElseThrow(() -> new VHCNotFoundException(id));
            vehicle.setImg("http://"+ipConfig.toString()+"/vehicle/"+id.toString()+"/getAvatar?" +(int)(Math.random()*1000000));
            vhcRepo.saveAndFlush(vehicle);
            payload.put("nopath", "You successfully uploaded " + file.getOriginalFilename() + "!");
        } else {
            payload.put("nopath", "Upload failed " + file.getOriginalFilename() + "!");
        }
        return payload;
    }
    @GetMapping("/{id}/getAvatar")
    @ResponseBody
    public HttpEntity<byte[]> getVHCImage(@PathVariable Long id){
        String path = Paths.get(System.getProperty("user.dir") + "/src/main/resources/images/vehicle").toString();
        Vehicle vehicle = vhcRepo.findById(id).orElseThrow(() -> new BPNotFoundException(id));
        BufferedImage bufferedImage;
        try {
            File image = new File(path+"/"+"avatar_" + id.toString() + ".jpg");
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
    @GetMapping("/{id}/download")
    @ResponseBody
    public ResponseEntity<ByteArrayResource> download(@PathVariable Long id) throws IOException{
        Path rootLocation = Paths.get(System.getProperty("user.dir") + "/src/main/resources/images/pdf/vehicle_"+id.toString()+".pdf");
        byte[] data = Files.readAllBytes(rootLocation);
        ByteArrayResource resource = new ByteArrayResource(data);
        MediaType mediaType = MediaType.APPLICATION_PDF;
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,"attachment;filename=vehicle_"+id.toString()+".pdf")
                .contentType(mediaType).contentLength(data.length).body(resource);
    }
}