package com.porscheinformatik.htl.exceptions;

public class GPNotFoundException extends RuntimeException {

    public GPNotFoundException(Long id){
        super("Could not find GP wit ID:" + id);
    }
}
