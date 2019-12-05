package com.porscheinformatik.htl.entities;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Entity
public class BP {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BP_ID")
    private Long bpID;

    @Column(name = "NAME")
    private String name;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "TEL")
    private String telephone;
    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "ZIP")
    private String zip;
    @Column(name="CITY")
    private String city;
    @Column(name = "COUNTRY")
    private String country;
    @Column(name="LASTUSED")
    private Date lastUsed;

    @OneToMany(mappedBy = "bp")
    private List<Appointment> terminList;

    @Column(name="Image")
    private String img;

    public BP(){}

    public BP(String name, String email, String telephone, String address, String zip, String city, String country){
        this.name=name;
        this.email=email;
        this.telephone=telephone;
        this.address=address;
        this.zip=zip;
        this.city=city;
        this.country=country;
        this.lastUsed = Calendar.getInstance().getTime();
    }

    public Long getbpID() {
        return bpID;
    }

    public void setTimeStampBefore(){
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_YEAR, -2);
        this.lastUsed = cal.getTime();
    }

    public void setTimeStamp(){
        this.lastUsed = Calendar.getInstance().getTime();
    }
    public Date getLastUsed(){return lastUsed;}

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getTelephone() {
        return telephone;
    }

    public String getAddress() {
        return address;
    }

    public String getZip() {
        return zip;
    }

    public String getCountry() {
        return country;
    }

    public String getCity(){return city;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public List<Appointment> getTerminList(){
        return terminList;
    }

    public void setImg(String url){
        this.img =url;
    }

    public String getImg(){
        return img;
    }

    public void setBpID(Long id){this.bpID=id;}

    public void setCity(String city){
        this.city=city;
    }

    @Override
    public String toString() {
        return "BP: "+name+";"+email+";"+address+";"+zip+";"+country;
    }
}
