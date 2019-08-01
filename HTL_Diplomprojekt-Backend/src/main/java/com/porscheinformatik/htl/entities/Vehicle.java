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
    private String license_plate;
    @Column(name = "BRAND")
    private String brand;
    @Column(name = "MODEL")
    private String model;
    @Column(name = "KM_READING")
    private String kmreading;
    @Column(name = "PRODUCTION_YEAR")
    private String production_year;
    @Column(name = "ENGINE_POWER")
    private Integer hp;
    @Column(name = "VHC_STATUS")
    private String status;
    @Column(name = "FUELTYPE")
    private String fueltype;
    @Column(name = "COLOR")
    private String color;
    @Column(name = "SCANNED")
    private Date scanned;

    @OneToMany(mappedBy = "vehicle")
    private List<Appointment> terminList;

    @Column(name="IMAGE")
    private String imageDir;

    public Vehicle(String brand, String model, String vin, String license_plate, String kmreading, String production_year, Integer hp, String status, String fueltype, String color){
        this.brand=brand;
        this.model=model;
        this.vin=vin;
        this.license_plate=license_plate;
        this.kmreading = kmreading;
        this.production_year=production_year;
        this.hp=hp;
        this.status=status;
        this.fueltype=fueltype;
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
        return license_plate;
    }

    public void setLicensePlate(String license_plate) {
        this.license_plate = license_plate;
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
        return kmreading;
    }

    public String getProductionYear() {
        return production_year;
    }

    public Integer getEnginePower() {
        return hp;
    }

    public String getCondition() {
        return status;
    }

    public String getFuelType() {
        return fueltype;
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

    public void setKmreading(String kmreading) {
        this.kmreading = kmreading;
    }

    public void setProductionyear(String buildyear) {
        this.production_year = buildyear;
    }

    public void setHp(Integer hp) {
        this.hp = hp;
    }

    public void setCondition(String condition) {
        this.status = condition;
    }

    public void setFueltype(String fueltype) {
        this.fueltype = fueltype;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public List<Appointment> getTerminlist(){
        return terminList;
    }

    public void setImageDir(String name){
        this.imageDir = name;
    }

    public String getImageDir(){
        return imageDir;
    }

    @Override
    public String toString() {
        return "Vehicle: "+brand+";"+model+";"+ kmreading +";"+production_year+";"+hp+";"+color;
    }

    public boolean validateVIN(){
        String message;
        if(!Pattern.matches("^[0-9A-Z&&[^IOQ]]{15}$", this.vin)) return false;
        else return true;
    }
}
