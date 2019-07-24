package com.porscheinformatik.htl.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class BPNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(BPNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String GPNotFoundHandler(BPNotFoundException gpnfe){
        return gpnfe.getMessage();
    }
}
