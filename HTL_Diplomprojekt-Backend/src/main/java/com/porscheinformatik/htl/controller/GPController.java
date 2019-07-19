package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.exceptions.GPNotFoundException;
import com.porscheinformatik.htl.entities.GP;
import com.porscheinformatik.htl.repositories.GPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GPController {

    @Autowired
    GPRepository gpRepository;

    @GetMapping("/geschaeftspartner/{id}")
    public GP getGP(@PathVariable Long id){
        return gpRepository.findById(id).orElseThrow(() -> new GPNotFoundException(id));
    }

}
