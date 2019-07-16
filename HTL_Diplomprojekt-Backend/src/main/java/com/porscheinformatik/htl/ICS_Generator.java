package com.porscheinformatik.htl;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class ICS_Generator {

    private DateFormat dateformat = new SimpleDateFormat("yyyyMMdd");
    private DateFormat timeformat = new SimpleDateFormat("HHmmss");

    private String version =    "VERSION:2.0 \r\n";
    private String prodid =     "PRODID:server@projectname.com\r\n";
    private String calBegin =   "BEGIN:VCALENDAR\r\n";
    private String calEnd =     "END:VCALENDAR\r\n";
    private String eventBegin = "BEGIN:VEVENT\r\n";
    private String eventEnd =   "END:VEVENT\r\n";

    private String start_time, end_time, start_date, end_date;
    private String location="", summary="", description="";

    public ICS_Generator(Date start_date, Date end_date, Date start_time, Date end_time){
        this.start_date= dateformat.format(start_date);
        this.start_time= timeformat.format(start_time);
        this.end_date= dateformat.format(end_date);
        this.end_time= timeformat.format(end_time);
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void write(String name){
        try {
            StringBuilder builder = new StringBuilder();
            builder.append(name);
            builder.append(".ics");

            String uid = "UID:"+start_date+start_time+"@projectname.com\r\n";

            File ics = new File(builder.toString());
            if (!ics.exists()) {
                ics.createNewFile();
            }

            String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
            String[] currdate = timeStamp.split("_");

            FileWriter fw = new FileWriter(ics.getAbsoluteFile());
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(calBegin);
            bw.write(version);
            bw.write(prodid);
            bw.write(eventBegin);
            bw.write(uid);
            if(location!="")bw.write("LOCATION:"+location+"\r\n");
            if(summary!="")bw.write("SUMMARY:"+summary+"\r\n");
            if(description!="")bw.write("DESCRIPTION:"+description+"\r\n");
            bw.write("DTSTART:"+start_date+"T"+start_time+"Z\r\n");
            bw.write("DTEND:"+end_date+"T"+end_time+"Z\r\n");
            bw.write("DTSTAMP:"+currdate[0]+"T"+currdate[1]+"Z\r\n");
            bw.write(eventEnd);
            bw.write(calEnd);
            bw.close();
        }
        catch (IOException e){
            e.printStackTrace();
        }
    }
}