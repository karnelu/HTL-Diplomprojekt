package com.porscheinformatik.htl.exceptions;

public class VHCNotFoundException extends RuntimeException {

    public VHCNotFoundException(long id){
        super("Could not find BP wit ID:" + id);
    }
}
