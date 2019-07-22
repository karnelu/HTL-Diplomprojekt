package com.porscheinformatik.htl.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class GP {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "GP_ID")
    private Long gpId;

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
    @Column(name = "COUNTRY")
    private String country;

    @OneToMany(mappedBy = "gp")
    private List<Termin> terminList;

    @Lob
    private byte[] picture;

    public GP(){}

    public GP (String name, String email){
        this.name=name;
        this.email=email;
    }

    public Long getGpId() {
        return gpId;
    }

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

    public void setName(String Name) {
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

    public List<Termin> getTerminList(){
        return terminList;
    }

    public byte[] getPicture() {
        return picture;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    @Override
    public String toString() {
        return "GP: "+name+";"+email+";"+address+";"+zip+";"+country;
    }
}
