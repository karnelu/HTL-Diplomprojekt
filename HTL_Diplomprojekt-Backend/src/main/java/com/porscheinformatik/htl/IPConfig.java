package com.porscheinformatik.htl;

public class IPConfig {
    private final String ip = "localhost:";
    private final String port = "8080";

    @Override
    public String toString() {
        return ip+port;
    }
}
