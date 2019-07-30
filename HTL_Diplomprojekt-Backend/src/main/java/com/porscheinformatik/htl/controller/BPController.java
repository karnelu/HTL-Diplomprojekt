package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.Information;
import com.porscheinformatik.htl.MailValidation;
import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.exceptions.BPNotFoundException;
import com.porscheinformatik.htl.repositories.BPRepository;
import com.porscheinformatik.htl.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/business-partner")
public class BPController {
    
    private Information inf;

    @Autowired
    private BPRepository bpRepository;


    @GetMapping("/{id}/detail")
    public BP getBP(@PathVariable Long id) {
        BP bp = bpRepository.findById(id).orElseThrow(() -> new BPNotFoundException(id));
        bp.setTimeStamp();
        bpRepository.save(bp);
        System.out.println("Yes");
        return bpRepository.findById(id).orElseThrow(() -> new BPNotFoundException(id));
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
        try {
            if (bp.getName().isEmpty()) payload.put("nopath", "Name can't be empty!");
             else if (bp.getEmail().isEmpty()) payload.put("nopath", "Email can't be empty!");
             else if (MailValidation.isValid(bp.getEmail())){
                 bpRepository.save(bp);
            }
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
        storageService.store(file);
        BP bp = bpRepository.findById(id).orElseThrow(() -> new BPNotFoundException(id));
        bp.setImageDir(storageService.getImageLocation());
        bpRepository.save(bp);
        payload.put("nopath", "You successfully uploaded " + file.getOriginalFilename() + "!");
        return payload;
    }
}
