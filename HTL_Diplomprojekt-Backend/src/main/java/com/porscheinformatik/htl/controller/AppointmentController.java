package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.entities.Appointment;
import com.porscheinformatik.htl.repositories.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    @Autowired
    AppointmentRepository appointmentRepository;

    @PostMapping("/new")
    @ResponseBody
    public Map<String, String> createAppointment(@RequestBody Appointment appointment){
        HashMap<String, String> payload = new HashMap<>();
        System.out.println("NEW");
        try{
            System.out.println(appointment.getStart_date());
            System.out.println(appointment.getEnd_date());
            appointmentRepository.save(appointment);
        }catch (ConstraintViolationException ex){
            String message;
            String path;
            for (ConstraintViolation<?> cv : ex.getConstraintViolations()) {
                path = cv.getPropertyPath().toString();
                message = cv.getMessage();
                path = Character.toUpperCase(path.charAt(0)) + path.substring(1);
                payload.put(path, message);
            }
        }
        return payload;
    }
}
