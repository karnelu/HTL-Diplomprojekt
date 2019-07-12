package com.porscheinformatik.htl.entities;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.zip.DataFormatException;

@Entity
public class Termin {

    private DateFormat dateFormat = new SimpleDateFormat("dd/MM/yy");
    private DateFormat timeFormat = new SimpleDateFormat("HH:mm");

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "TITEL")
    private String title;
    @Column(name = "ACTION")
    private String action;
    @Column(name = "START_DATE")
    private Date start_date;
    @Column(name = "START_TIME")
    private Date start_time;
    @Column(name = "END_DATE")
    private Date end_date;
    @Column(name = "END_TIME")
    private Date end_time;
    @Column(name = "DESCRIPTION")
    private String description;
    



}
