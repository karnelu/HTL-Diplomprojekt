package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.ICS_Generator;
import com.porscheinformatik.htl.entities.Appointment;
import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.repositories.AppointmentRepository;
import com.porscheinformatik.htl.repositories.BPRepository;
import com.porscheinformatik.htl.exceptions.AppointmentNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
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

    @GetMapping("/{id}/getAppointment")
    public Appointment getAppointment(@PathVariable Long id){
        return appointmentRepository.findById(id).orElseThrow(() -> new AppointmentNotFoundException(id));
    }

    @PostMapping("/{id}/update")
    @ResponseBody
    public Map<String, String> updateAppointment(@RequestBody Appointment appointment){
        HashMap<String, String> payload = new HashMap<>();
        try {
            appointmentRepository.save(appointment);
            payload.put("nopath","Successfully updated!");
        }catch (ConstraintViolationException ex) {
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
    @GetMapping("/download")
    @ResponseBody
    public ResponseEntity<ByteArrayResource> download(@RequestParam(name = "id") Long id) throws IOException {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new AppointmentNotFoundException(id));
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
        byte[] data = ICS_Generator.write(appointment);
        ByteArrayResource resource = new ByteArrayResource(data);
        //MediaType mediaType = MediaType.APPLICATION_;
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,"attachment;filename="+timeStamp+".ics")
                .contentLength(data.length).body(resource);
    }
    @DeleteMapping("/delete")
    public Map<String,String> deleteAppointment(@RequestParam(name = "id") Long id){
        String status;
        HashMap<String, String> payload = new HashMap<>();
        try{
            appointmentRepository.deleteById(id);
            status="200 OK";
        }catch (Exception e){
            status="404 NOT FOUND";
        }
       payload.put("HTTP", status);
        return payload;
    }
}