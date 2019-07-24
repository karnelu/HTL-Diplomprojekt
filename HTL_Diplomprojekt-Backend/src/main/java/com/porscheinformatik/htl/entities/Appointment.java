package com.porscheinformatik.htl.entities;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Appointment {

    private DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
    private DateFormat timeFormat = new SimpleDateFormat("HH:mm");

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "TITEL")
    private String title;
    @Column(name = "ACTION")
    private String location="";
    @Column(name = "START_DATE")
    private Date start_date;
    @Column(name = "START_TIME")
    private Date start_time;
    @Column(name = "END_DATE")
    private Date end_date;
    @Column(name = "END_TIME")
    private Date end_time;
    @Column(name = "DESCRIPTION")
    private String description="";

    @ManyToOne
    @JoinColumn(name = "GP_ID")
    private BP bp;

    @ManyToOne
    @JoinColumn(name = "VHC_ID")
    private Vehicle vehicle;

    public Appointment(Date start_date, Date end_date, Date start_time, Date end_time, String title){
        this.start_date=start_date;
        this.end_date=end_date;
        this.start_time=start_time;
        this.end_time=end_time;
        this.title=title;
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

    public Date getStart_time() {
        return start_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Date getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
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
        return "Appointment: " + start_date + ";" + end_date + ";" + start_time +";" + end_time + ";" + title + ";" + location;
    }
}
