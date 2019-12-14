package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.entities.Appointment;
import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.repositories.AppointmentRepository;
import com.porscheinformatik.htl.repositories.BPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    @Autowired
    AppointmentRepository appointmentRepository;

    @Autowired
    BPRepository bpRepository;

    @PostMapping("/new")
    @ResponseBody
    public Map<String, String> createAppointment(@RequestBody Appointment appointment, @RequestParam(name="bpid") Long bpid){
        HashMap<String, String> payload = new HashMap<>();
        BP bp = bpRepository.findBPById(bpid);

        try{
            appointment.setBp(bp);
            appointmentRepository.save(appointment);
            bp.addTermin(appointment);
            bpRepository.save(bp);
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
