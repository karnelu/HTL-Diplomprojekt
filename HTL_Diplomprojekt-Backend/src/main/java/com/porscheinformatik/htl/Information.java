package com.porscheinformatik.htl;

import java.util.HashMap;

public abstract class Information {
    private String type;
    private HashMap<String, String> payload;

    public Information(String type){
        this.type=type;
        this.payload = new HashMap<String, String>();
    }

    public Information(String type, String path, String message) {
        this.type = type;
        this.payload = new HashMap<String, String>();
        this.addMessage(path, message);
    }

    public Information(String type, String message){
        this.type = type;
        this.payload = new HashMap<String, String>();
        this.addMessage(message);
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    public HashMap<String, String> getPayload() {
        return payload;
    }

    public void setPayload(HashMap<String, String> payload) {
        this.payload = payload;
    }

    public void addMessage(String path, String message){
        this.payload.put(path, message);
    }

    public void addMessage(String message){
        this.payload.put("nopath", message);
    }
}
