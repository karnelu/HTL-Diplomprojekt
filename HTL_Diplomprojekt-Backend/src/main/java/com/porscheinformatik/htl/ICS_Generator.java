package com.porscheinformatik.htl;

import com.porscheinformatik.htl.entities.Appointment;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class ICS_Generator {

    private String start_time, end_time, start_date, end_date;
    private String location, summary, description;

    public ICS_Generator(Appointment termin){
        DateFormat dateformat = new SimpleDateFormat("yyyyMMdd");
        DateFormat timeformat = new SimpleDateFormat("HHmmss");

        this.start_date= dateformat.format(termin.getStart_date());
       // this.start_time= timeformat.format(termin.getStart_time());
        this.end_date= dateformat.format(termin.getEnd_date());
       // this.end_time= timeformat.format(termin.getEnd_time());
        this.description=termin.getDescription();
        this.summary=termin.getTitle();
        this.location=termin.getLocation();
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

    public void write(){
        try {

            String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
            String[] currdate = timeStamp.split("_");
            String uid = "UID:"+start_date+start_time+"@projectname.com\r\n";

            String builder = timeStamp +
                    ".ics";
            File ics = new File(builder);
            if (!ics.exists()) {
                ics.createNewFile();
            }

            FileWriter fw = new FileWriter(ics.getAbsoluteFile());
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write("BEGIN:VCALENDAR\r\n");
            bw.write("VERSION:2.0\r\n");
            bw.write("PRODID:server@projectname.com\r\n");
            String eventBegin = "BEGIN:VEVENT\r\n";
            bw.write(eventBegin);
            bw.write(uid);
            if(!location.equals(""))bw.write("LOCATION:"+location+"\r\n");
            if(!summary.equals(""))bw.write("SUMMARY:"+summary+"\r\n");
            if(!description.equals(""))bw.write("DESCRIPTION:"+description+"\r\n");
            bw.write("DTSTART:"+start_date+"T"+start_time+"Z\r\n");
            bw.write("DTEND:"+end_date+"T"+end_time+"Z\r\n");
            bw.write("DTSTAMP:"+currdate[0]+"T"+currdate[1]+"Z\r\n");
            bw.write("END:VEVENT\r\n");
            bw.write("END:VCALENDAR\r\n");
            bw.close();
        }
        catch (IOException e){
            e.printStackTrace();
        }
    }
}