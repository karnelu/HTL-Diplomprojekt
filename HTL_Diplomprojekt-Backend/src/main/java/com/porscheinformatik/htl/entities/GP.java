package com.porscheinformatik.htl.entities;

import javax.persistence.*;

@Entity
public class GP {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "GP_ID")
    private Long gpId;

    @Column(name = "FIRSTNAME")
    private String firstname;
    @Column(name = "SURENAME")
    private String surename;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "TEL")
    private String telephone;
    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "ZIP")
    private String zip;
    @Column(name = "COUNTRY")
    private String country;

    public GP (String firstname, String surename, String email){
        this.firstname=firstname;
        this.surename=surename;
        this.email=email;
    }

    public Long getGpId() {
        return gpId;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getSurename() {
        return surename;
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

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public void setSurename(String surename) {
        this.surename = surename;
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

    @Override
    public String toString() {
        return "GP: "+firstname+";"+surename+";"+email+";"+address+";"+zip+";"+country;
    }
}
