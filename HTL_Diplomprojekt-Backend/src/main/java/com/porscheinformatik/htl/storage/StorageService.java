package com.porscheinformatik.htl.storage;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class StorageService {

    private final Path rootLocation = Paths.get(System.getProperty("user.dir") + "/src/main/resources/images/business-partner");

    public  StorageService() {}

    public void store(MultipartFile file){
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        try{
            if(file.isEmpty()){
                //throw new StorageException("Failed to store empty file " + filename);
            }
            if(filename.contains("..")) {
                //throw new StorageException(
                //                        "Cannot store file with relative path outside current directory "
                //                                + filename);
            }
            try(InputStream inputStream = file.getInputStream()){
                Files.copy(inputStream, this.rootLocation.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
            }


        } catch (IOException e) {
            //throw new StorageException("Failed to store file " + filename, e);
        }
    }

}
