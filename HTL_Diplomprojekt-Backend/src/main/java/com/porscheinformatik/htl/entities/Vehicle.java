package com.porscheinformatik.htl.entities;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VHC_ID")
    private Long vhcID;

    @Column(name = "VIN")
    private String vin;
    @Column(name = "LICENSE_PLATE")
    private String licensePlate;
    @Column(name = "BRAND")
    private String brand;
    @Column(name = "MODEL")
    private String model;
    @Column(name = "KM_READING")
    private String kmReading;
    @Column(name = "PRODUCTION_YEAR")
    private String productionYear;
    @Column(name = "ENGINE_POWER")
    private Integer enginePower;
    @Column(name = "VHC_STATUS")
    private String status;
    @Column(name = "FUELTYPE")
    private String fuelType;
    @Column(name = "COLOR")
    private String color;
    @Column(name = "SCANNED")
    private Date scanned;

    @OneToMany(mappedBy = "vehicle")
    private List<Appointment> terminList;

    @Column(name="IMAGE")
    private String img;

    public Vehicle(String brand, String model, String vin, String license_plate, String kmreading, String production_year, Integer hp, String status, String fueltype, String color){
        this.brand=brand;
        this.model=model;
        this.vin=vin;
        this.licensePlate=license_plate;
        this.kmReading = kmreading;
        this.productionYear=production_year;
        this.enginePower=hp;
        this.status=status;
        this.fuelType=fueltype;
        this.color=color;
        this.scanned = Calendar.getInstance().getTime();
    }

    public Vehicle(){}

    public void setTimeStampBefore(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_YEAR, -2);
        this.scanned = cal.getTime();
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String license_plate) {
        this.licensePlate = license_plate;
    }

    public void setTimeStamp(){
        this.scanned = Calendar.getInstance().getTime();
    }

    public Date getScanned(){return scanned;}

    public Long getVhcID() {
        return vhcID;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public String getKmReading() {
        return kmReading;
    }

    public String getProductionYear() {
        return productionYear;
    }

    public Integer getEnginePower() {
        return enginePower;
    }

    public String getCondition() {
        return status;
    }

    public String getFuelType() {
        return fuelType;
    }

    public String getColor() {
        return color;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setKmReading(String kmreading) {
        this.kmReading = kmreading;
    }

    public void setProductionYear(String buildyear) {
        this.productionYear = buildyear;
    }

    public void setEnginePower(Integer hp) {
        this.enginePower = hp;
    }

    public void setCondition(String condition) {
        this.status = condition;
    }

    public void setFuelType(String fueltype) {
        this.fuelType = fueltype;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public List<Appointment> getTerminList(){
        return terminList;
    }

    public void setImg(String name){
        this.img = name;
    }

    public String getImg(){
        return img;
    }

    @Override
    public String toString() {
        return "Vehicle: "+brand+";"+model+";"+ kmReading +";"+productionYear+";"+enginePower+";"+color;
    }

    public boolean validateVIN(){
        String message;
        if(this.vin != null){
            if(!Pattern.matches("^[0-9A-Z&&[^IOQ]]{15}$", this.vin)) return false;
            else return true;
        } else return true;
    }
}
