package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.Information;
import com.porscheinformatik.htl.MailValidation;
import com.porscheinformatik.htl.exceptions.GPNotFoundException;
import com.porscheinformatik.htl.entities.GP;
import com.porscheinformatik.htl.repositories.GPRepository;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

@CrossOrigin
@RestController
@RequestMapping("/geschaeftspartner")
public class GPController {

    private Information inf;

    @Autowired
    private GPRepository gpRepository;

    @GetMapping("/{id}")
    public GP getGP(@PathVariable Long id) {
        return gpRepository.findById(id).orElseThrow(() -> new GPNotFoundException(id));
    }

    @PostMapping("/update")
    @ResponseBody
    public Information updateGP(@RequestBody GP gp) {
        try {
            if (gp.getName().isEmpty()) inf.addMessage("Name can't be empty!");
            else if (gp.getEmail().isEmpty()) inf.addMessage("Email can't be empty!");
            else if(MailValidation.isValid(gp.getEmail())){
                gpRepository.save(gp);
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
    public Information createGP(@RequestBody GP gp) {
        try {
            if (gp.getName().isEmpty()) inf.addMessage("Name can't be empty!");
             else if (gp.getEmail().isEmpty()) inf.addMessage("Email can't be empty!");
             else if (MailValidation.isValid(gp.getEmail())){
                 gpRepository.save(gp);
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
