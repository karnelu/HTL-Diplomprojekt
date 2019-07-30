package com.porscheinformatik.htl.exceptions;

public class VHCNotFoundException extends RuntimeException {

    public VHCNotFoundException(Long id){
        super("Could not find BP wit ID:" + id);
    }
}
