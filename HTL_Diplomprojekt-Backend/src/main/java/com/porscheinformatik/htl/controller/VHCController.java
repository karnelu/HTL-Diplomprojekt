package com.porscheinformatik.htl.controller;

import com.porscheinformatik.htl.Information;
import com.porscheinformatik.htl.entities.Vehicle;
import com.porscheinformatik.htl.exceptions.VHCNotFoundException;
import com.porscheinformatik.htl.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Calendar;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/vehicle")
public class VHCController {

    private Information inf;

    @Autowired
    private VehicleRepository vhcRepo;

    @GetMapping("/{id}")
    public Vehicle getVHCById(@PathVariable Long id){
        Vehicle vhc = vhcRepo.findById(id).orElseThrow(() -> new VHCNotFoundException(id));
        System.out.println("ID");
        return vhc;
    }

    @GetMapping("/getLastScanned")
    public List<Vehicle> getLastUsedVHC(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_YEAR, -1);
        return vhcRepo.findByScannedGreaterThan(cal.getTime());
    }

    @PostMapping("/{id}/update")
    @ResponseBody
    public Information updateVHC(@PathVariable Long id, @RequestParam Vehicle vhc){
            if(!vhc.validateVIN()) inf.addMessage("VIN not Valid");
            else if(vhc.getLicensePlate().isEmpty()) inf.addMessage("Licenseplate is empty");
            else {
                vhcRepo.save(vhc);
                inf.addMessage("Successfully Updated");
            }
        return inf;
    }

    @PostMapping("/new")
    @ResponseBody
    public Information createBP(@RequestBody Vehicle vhc) {
        try {
            if(!vhc.validateVIN()) inf.addMessage("VIN not Valid");
            else if(vhc.getLicensePlate().isEmpty()) inf.addMessage("Licenseplate is empty");
            else {
                vhcRepo.save(vhc);
                inf.addMessage("Successfully Added");
            }
        } catch (ConstraintViolationException ex) {
            String message;
            String path;
            for (ConstraintViolation<?> cv : ex.getConstraintViolations()) {
                path = cv.getPropertyPath().toString();
                message = cv.getMessage();
                path = Character.toUpperCase(path.charAt(0)) + path.substring(1);
                inf.addMessage(path, path + " " + message);
            }
        }
        return inf;
    }

    @GetMapping("/search")
    public List<Vehicle> searchVehicle(@RequestParam(name="type") String type, @RequestParam(name = "q") String query){
        return vhcRepo.findByBrandContaining(query);
    }

}
