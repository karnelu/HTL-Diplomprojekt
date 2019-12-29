package com.porscheinformatik.htl.exceptions;

public class AppointmentNotFoundException extends RuntimeException {
    public AppointmentNotFoundException(Long id){super("Could not find Appointment wit ID:" + id);}
}
