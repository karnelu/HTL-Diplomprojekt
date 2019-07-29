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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Calendar;
import java.util.List;

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
        return bp;
    }

    @GetMapping("/getLastUsed")
    public List<BP> getLastUsed(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_YEAR, -1);
        return bpRepository.findBylastUsedGreaterThan(cal.getTime());
    }

    @PostMapping("/{id}/update")
    @ResponseBody
    public Information updateBP(@RequestBody BP bp) {
        try {
            if (bp.getName().isEmpty()) inf.addMessage("Name can't be empty!");
            else if (bp.getEmail().isEmpty()) inf.addMessage("Email can't be empty!");
            else if(MailValidation.isValid(bp.getEmail())){
                bpRepository.save(bp);
                inf.addMessage("Successfully updated!");
            } else inf.addMessage("Email is not valid!");
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

    @PostMapping("/new")
    @ResponseBody
    public Information createBP(@RequestBody BP bp) {
        try {
            if (bp.getName().isEmpty()) inf.addMessage("Name can't be empty!");
             else if (bp.getEmail().isEmpty()) inf.addMessage("Email can't be empty!");
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
                inf.addMessage(path, path + " " + message);
            }
        }
        return inf;
    }

    @PostMapping("/{id}/upload")
    @ResponseBody
    public String handleFileUpload(@RequestParam("image") MultipartFile file, @PathVariable Long id) {
        StorageService storageService = new StorageService();
        storageService.store(file);
        BP bp = bpRepository.findById(id).orElseThrow(() -> new BPNotFoundException(id));
        bp.setImageDir(storageService.getImageLocation());
        bpRepository.save(bp);
        return "You successfully uploaded " + file.getOriginalFilename() + "!";
    }

}
