package com.porscheinformatik.htl;

import com.porscheinformatik.htl.entities.GP;
import com.porscheinformatik.htl.repositories.GPRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import java.io.BufferedReader;
import java.io.FileReader;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Bean
	public CommandLineRunner loadData(GPRepository gpRepository){
		return (args) -> {

			if (gpRepository.findAll() == null){
				try {
					BufferedReader reader = new BufferedReader(new FileReader("D:/Dipl/HTL-Diplomprojekt/HTL_Diplomprojekt-Backend/src/main/java/com/porscheinformatik/htl/gp_init.csv"));

					// Reading first line..
					String[] header = reader.readLine().split(",");
					String line;
					while ((line=reader.readLine()) != null) {
						String[] data = line.split(",");
						GP gp = new GP(data[1], data[2], data[3], data[4], data[5], data[6], data[7]);
						gpRepository.save(gp);

					}

					reader.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}




		};
	}



}
