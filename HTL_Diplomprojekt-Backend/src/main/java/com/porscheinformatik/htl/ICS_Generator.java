package com.porscheinformatik.htl;

import com.porscheinformatik.htl.entities.Appointment;

import java.io.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class ICS_Generator {

public ICS_Generator(){
        }

public static byte[] write(Appointment appointment){
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try {
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
        String[] currdate = timeStamp.split("_");

        String startdate = appointment.getStart_date().replace("-","");
        String enddate = appointment.getEnd_date().replace("-","");
        String starttime = appointment.getStart_time().replace(":","") +"00";
        String endtime = appointment.getEnd_time().replace(":","")+"00";

        String builder = timeStamp + ".ics";

        bos.write("BEGIN:VCALENDAR\r\n".getBytes(StandardCharsets.UTF_8));
        bos.write("VERSION:2.0\r\n".getBytes(StandardCharsets.UTF_8));
        bos.write("PRODID:server@projectname.com\r\n".getBytes(StandardCharsets.UTF_8));
        bos.write("BEGIN:VEVENT\r\n".getBytes(StandardCharsets.UTF_8));
        bos.write(("UID:"+startdate+starttime+"@projectname.com\r\n").getBytes(StandardCharsets.UTF_8));
        bos.write(("LOCATION:"+appointment.getAction()+"\r\n").getBytes(StandardCharsets.UTF_8));
        bos.write(("SUMMARY:"+appointment.getTitle()+"\r\n").getBytes(StandardCharsets.UTF_8));
        bos.write(("DESCRIPTION:"+appointment.getDescription()+"\r\n").getBytes(StandardCharsets.UTF_8));
        bos.write(("DTSTART:"+startdate+"T"+starttime+"Z\r\n").getBytes(StandardCharsets.UTF_8));
        bos.write(("DTEND:"+enddate+"T"+endtime+"Z\r\n").getBytes(StandardCharsets.UTF_8));
        bos.write(("DTSTAMP:"+currdate[0]+"T"+currdate[1]+"Z\r\n").getBytes(StandardCharsets.UTF_8));
        bos.write("END:VEVENT\r\n".getBytes(StandardCharsets.UTF_8));
        bos.write("END:VCALENDAR\r\n".getBytes(StandardCharsets.UTF_8));
        }
        catch (IOException e){
        e.printStackTrace();
        }
        return bos.toByteArray();
        }
        }