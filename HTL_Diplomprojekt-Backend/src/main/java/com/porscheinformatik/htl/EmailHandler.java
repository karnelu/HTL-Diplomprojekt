package com.porscheinformatik.htl;

import com.porscheinformatik.htl.entities.Appointment;
import com.porscheinformatik.htl.entities.BP;
import org.springframework.core.io.ByteArrayResource;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Properties;


public class EmailHandler {

    public static String sendEmail(String email, Appointment appointment) throws MessagingException {

        String username = "gocard.project@gmail.com";
        String password = "190?:896Ac";

        String receiver = email;
        String content = "Test";
        String status;
        try{
            Properties props = new Properties();
            props.setProperty("mail.smtp.host", "smtp.gmail.com");
            props.setProperty("mail.smtp.ssl.enable", "true");

            Session session = Session.getInstance(props);
            MimeMessage message = new MimeMessage(session);

            message.setFrom(new InternetAddress(username));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
            message.setSubject(content);
            message.setText("Dies ist eine Automatisch-Generierte Email, bitte nicht Antworten!");

            Multipart multipart = new MimeMultipart();
            MimeBodyPart messageBodyPart = new MimeBodyPart();
            String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
            String filename = timeStamp+".ics";

            byte[] data = ICS_Generator.write(appointment, email);

            File tempFile = File.createTempFile("ics", null, null);
            OutputStream os = new FileOutputStream(tempFile);
            os.write(data);
            os.close();
            DataSource dataSource = new FileDataSource(tempFile);

            messageBodyPart.setFileName(filename);
            messageBodyPart.setDataHandler(new DataHandler(dataSource));
            multipart.addBodyPart(messageBodyPart);
            message.setContent(multipart);

            System.out.println("Sending.....");
            Transport.send(message, username, password);
            status="Successfully Send!";
        } catch (Exception e) {
            e.printStackTrace();
            status="Error:"+e.getMessage().toString();
        }
        return status;
    }
}
