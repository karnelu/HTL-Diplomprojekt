package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.Information;
import com.porscheinformatik.htl.MailValidation;
import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.exceptions.BPNotFoundException;
import com.porscheinformatik.htl.repositories.BPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

@CrossOrigin
@RestController
@RequestMapping("/business-partner")
public class BPController {

    private Information inf;

    @Autowired
    private BPRepository bpRepository;

    @GetMapping("/{id}/detail")
    public BP getBP(@PathVariable Long id) {
        return bpRepository.findById(id).orElseThrow(() -> new BPNotFoundException(id));
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
}