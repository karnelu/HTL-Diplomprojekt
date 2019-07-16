package com.porscheinformatik.htl.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "VHC_ID")
    private Long vhc_Id;
    @Column(name = "BRAND")
    private String brand;
    @Column(name = "MODEL")
    private String model;
    @Column(name = "MILEAGE")
    private String mileage;
    @Column(name = "BUILD_YEAR")
    private String buildyear;
    @Column(name = "HP")
    private Integer hp;
    @Column(name = "CONDITION")
    private String condition;
    @Column(name = "FUELTYPE")
    private String fueltype;
    @Column(name = "COLOR")
    private String color;

    @OneToMany(mappedBy = "vehicle")
    private List<Termin> terminList;

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
        return buildyear;
    }

    public Integer getHp() {
        return hp;
    }

    public String getCondition() {
        return condition;
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
        this.buildyear = buildyear;
    }

    public void setHp(Integer hp) {
        this.hp = hp;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public void setFueltype(String fueltype) {
        this.fueltype = fueltype;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public List<Termin> getTerminlist(){
        return terminList;
    }

    @Override
    public String toString() {
        return "Vehicle: "+brand+";"+model+";"+mileage+";"+buildyear+";"+hp+";"+color;
    }
}
