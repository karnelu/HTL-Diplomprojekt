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
    @Transient
    private final DateFormat timeformat = new SimpleDateFormat("HH:mm");
    @Transient
    private final DateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITEL")
    private String title;
    @Column(name = "ACTION")
    private String action;
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

    public Appointment(){}

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

    public String getAction() {
        return action;
    }

    public void setAction(String location) {
        this.action = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    //public BP getBp() {
    //    return bp;
    //}

    public void setBp(BP bp) {
        this.bp = bp;
    }

    //public Vehicle getVehicle() {
    //    return vehicle;
    //}

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public String getStart_date(){
        return dateformat.format(end_date);
    }

    public String getStart_time(){
        return timeformat.format(start_date);
    }

    public String getEnd_date(){
        return dateformat.format(start_date);
    }

    public String getEnd_time(){
        return timeformat.format(end_date);
    }

    @Override
    public String toString() {
        return "Appointment: " + start_date + ";" + end_date + ";" + title + ";" + action;
    }
}
