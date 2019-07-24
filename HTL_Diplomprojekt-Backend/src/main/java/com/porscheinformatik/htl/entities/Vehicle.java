package com.porscheinformatik.htl.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VHC_ID")
    private Long vhc_Id;
    @Column(name = "VIN")
    private String vin;
    @Column(name = "LICENSE_PLATE")
    private String license_plate;
    @Column(name = "BRAND")
    private String brand;
    @Column(name = "MODEL")
    private String model;
    @Column(name = "KM_READING")
    private String mileage;
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

    @OneToMany(mappedBy = "vehicle")
    private List<Appointment> terminList;

    public Vehicle(String brand, String model){
        this.brand=brand;
        this.model=model;
    }

    public Long getVhc_Id() {
        return vhc_Id;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public String getMileage() {
        return mileage;
    }

    public String getBuildyear() {
        return production_year;
    }

    public Integer getHp() {
        return hp;
    }

    public String getCondition() {
        return status;
    }

    public String getFueltype() {
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

    public void setMileage(String mileage) {
        this.mileage = mileage;
    }

    public void setBuildyear(String buildyear) {
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

    @Override
    public String toString() {
        return "Vehicle: "+brand+";"+model+";"+mileage+";"+production_year+";"+hp+";"+color;
    }
}
