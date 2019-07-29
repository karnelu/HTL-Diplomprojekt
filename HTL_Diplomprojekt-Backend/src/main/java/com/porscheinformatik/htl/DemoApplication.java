package com.porscheinformatik.htl;

import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.repositories.BPRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.BufferedReader;
import java.io.FileReader;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Bean
	public CommandLineRunner loadData(BPRepository bpRepository){
		return (args) -> {

			if (bpRepository.findAll().isEmpty()){
				try {
					BufferedReader reader = new BufferedReader(new FileReader("D:/Workspace/HTL-Diplomprojekt/HTL_Diplomprojekt-Backend/src/main/java/com/porscheinformatik/htl/gp_init.csv"));

					// Reading first line..
					String[] header = reader.readLine().split(",");
					String line;
					while ((line=reader.readLine()) != null) {
						String[] data = line.split(",");
						BP bp = new BP(data[1], data[2], data[3], data[4], data[5], data[6], data[7]);
						bp.setTimeStampBefore();
						bpRepository.save(bp);
					}

					reader.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		};
	}



}
