package com.porscheinformatik.htl.entities;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Appointment {

    @Transient
    private final DateFormat format = new SimpleDateFormat("yyyy-MM-ddHH:mm");

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITEL")
    private String title;
    @Column(name = "ACTION")
    private String location="";
    @Column(name = "START_DATE")
    private Date start_date;
    @Column(name = "END_DATE")
    private Date end_date;
    @Column(name = "DESCRIPTION")
    private String description;

    @ManyToOne
    @JoinColumn(name = "BP_ID")
    private BP bp;

    @ManyToOne
    @JoinColumn(name = "VHC_ID")
    private Vehicle vehicle;

    public Appointment(String start_date, String end_date, String start_time, String end_time, String title, String description){

        try {
            this.start_date=format.parse(start_date.substring(0,9) + start_time);
            this.end_date=format.parse(end_date.substring(0,9) + end_time);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        this.title=title;
        this.description=description;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BP getBp() {
        return bp;
    }

    public void setBp(BP bp) {
        this.bp = bp;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    @Override
    public String toString() {
        return "Appointment: " + start_date + ";" + end_date + ";" + title + ";" + location;
    }
}
