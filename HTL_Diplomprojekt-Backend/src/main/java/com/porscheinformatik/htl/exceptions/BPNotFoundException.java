package com.porscheinformatik.htl.exceptions;

public class BPNotFoundException extends RuntimeException {

    public BPNotFoundException(Long id){
        super("Could not find BP wit ID:" + id);
    }
}
