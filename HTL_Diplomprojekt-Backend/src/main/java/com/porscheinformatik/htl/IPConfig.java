package com.porscheinformatik.htl;

public final class IPConfig {
    private static final String ip = "localhost";
    private static final String port = "8080";

    public static String getConfig() {
        return ip+":"+port;
    }
}
