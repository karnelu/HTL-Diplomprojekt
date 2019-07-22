package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.Information;
import com.porscheinformatik.htl.exceptions.GPNotFoundException;
import com.porscheinformatik.htl.entities.GP;
import com.porscheinformatik.htl.repositories.GPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

@CrossOrigin
@RestController
public class GPController {


    private Information inf;

    @Autowired
    private GPRepository gpRepository;

    @GetMapping("/geschaeftspartner/{id}")
    public GP getGP(@PathVariable Long id){
        return gpRepository.findById(id).orElseThrow(() -> new GPNotFoundException(id));
    }

    @PostMapping("/geschaeftspartner/update")
    @ResponseBody
    public Information updateGP(@RequestBody GP gp){
        try{
            if(gp.getName().isEmpty())inf.addMessage("Name can't be empty!");
            if(gp.getEmail().isEmpty())inf.addMessage("Email can't be empty!");
        }catch (ConstraintViolationException ex) {
            String message;
            String path;
            for(ConstraintViolation<?> cv : ex.getConstraintViolations()){
                path=cv.getPropertyPath().toString();
                message=cv.getMessage();
                path=Character.toUpperCase(path.charAt(0)) + path.substring(1);
                inf.addMessage(path, path + " " + message);
            }
        }
        return inf;
    }
}
