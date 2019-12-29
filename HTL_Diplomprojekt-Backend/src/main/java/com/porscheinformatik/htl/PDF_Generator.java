package com.porscheinformatik.htl;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.porscheinformatik.htl.entities.Vehicle;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

public class PDF_Generator {

    public static void generatePDF(Vehicle vehicle){
        Path rootLocation = Paths.get(System.getProperty("user.dir") + "/src/main/resources/images");
        String filename = "vehicle_" + vehicle.getVhcID().toString() + ".pdf";
        Document document = new Document();

        try{
            PdfWriter.getInstance(document, new FileOutputStream(rootLocation.toString() + "/pdf/" + filename));
            document.open();

            PdfPTable table = new PdfPTable(2);
            table.setWidthPercentage(100);
            table.setWidths(new int[]{1, 2});
            table.setHorizontalAlignment(Element.ALIGN_CENTER);
            Image avatar = Image.getInstance(rootLocation.toString() + "/vehicle/avatar_"+vehicle.getVhcID().toString()+".jpg");
            avatar.scaleAbsolute(120f, 120f);
            avatar.setAlignment(Element.ALIGN_LEFT);

            Paragraph data = new Paragraph(
                    "Brand: "+ vehicle.getBrand()+
                            "\nModel: " + vehicle.getModel()+
                            "\nProduction Year: "+vehicle.getProductionYear()+
                            "\nEngine Power: "+vehicle.getEnginePower()+
                            "\nKilometer reading: "+vehicle.getKmReading()+
                            "\nFueltype: "+vehicle.getFuelType()+
                            "\nColor: "+vehicle.getColor());
            data.setIndentationLeft(50);
            data.setAlignment(Element.ALIGN_LEFT);

            Font text = new Font(Font.FontFamily.HELVETICA, 16, Font.BOLD);
            data.setFont(text);

            PdfPCell imagecell = new PdfPCell(avatar, true);
            imagecell.setBorder(Rectangle.NO_BORDER);

            PdfPCell datacell = new PdfPCell();
            datacell.addElement(data);
            datacell.setBorder(Rectangle.NO_BORDER);

            table.addCell(imagecell);
            table.addCell(datacell);


            Image qrcode = Image.getInstance(rootLocation.toString() + "/qrcodes/qr_vehicle_"+vehicle.getVhcID().toString()+".png");
            qrcode.scaleAbsolute(200f,200f);
            qrcode.setAbsolutePosition(200,400);

            document.add(table);
            document.add(qrcode);
            document.close();
        }catch (DocumentException | IOException e){
            e.printStackTrace();
        }
    }
}
