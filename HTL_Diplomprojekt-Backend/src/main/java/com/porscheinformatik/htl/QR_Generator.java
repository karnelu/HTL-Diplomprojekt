package com.porscheinformatik.htl;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.porscheinformatik.htl.IPConfig;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Hashtable;

public class QR_Generator{
    private static final int size = 400;
    private static final String fileType = "png";

    public QR_Generator(){
    }

    public static void createQRImage(Long vhcid) throws WriterException, IOException {
        Path rootLocation = Paths.get(System.getProperty("user.dir") + "/src/main/resources/images/qrcodes");
        String url = "/vehicle/" + vhcid.toString();
        String filename = "qr_vehicle_" + vhcid.toString() + ".png";
        File qrFile = new File(rootLocation.toString() + "/" + filename);

        // Create the ByteMatrix for the QR-Code that encodes the given String
        Hashtable<EncodeHintType,ErrorCorrectionLevel> hintMap = new Hashtable<>();
        hintMap.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(url, BarcodeFormat.QR_CODE, size, size, hintMap);

        // Make the BufferedImage that are to hold the QRCode
        int matrixWidth = bitMatrix.getWidth();
        BufferedImage image = new BufferedImage(matrixWidth, matrixWidth, BufferedImage.TYPE_INT_RGB);
        image.createGraphics();

        Graphics2D graphics = (Graphics2D) image.getGraphics();
        graphics.setColor(Color.WHITE);
        graphics.fillRect(0,0,matrixWidth,matrixWidth);
        graphics.setColor(Color.BLACK);

        for(int i=0; i<matrixWidth; i++){
            for(int y=0;y<matrixWidth;y++){
                if(bitMatrix.get(i,y))graphics.fillRect(i,y,1,1);
            }
        }
        ImageIO.write(image, fileType, qrFile);
    }
}
