package com.porscheinformatik.htl;

import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.entities.Vehicle;
import com.porscheinformatik.htl.repositories.BPRepository;
import com.porscheinformatik.htl.repositories.VehicleRepository;
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
	public CommandLineRunner loadData(BPRepository bpRepository, VehicleRepository vhcRepo){
		return (args) -> {

			if (bpRepository.findAll().isEmpty()){
				try {

					String Path = System.getProperty("user.dir") + "/src/main/java/com/porscheinformatik/htl/gp_init.csv";
					BufferedReader reader = new BufferedReader(new FileReader(Path));

					// Reading first line..
					String[] header = reader.readLine().split(",");
					String line;
					int i = 0;
					while ((line=reader.readLine()) != null) {
						String[] data = line.split(",");
						BP bp = new BP(data[1], data[2], data[3], data[4], data[5], data[6], data[7]);
						if( i <= 10)bp.setTimeStamp();
						else bp.setTimeStampBefore();
						bpRepository.save(bp);
						i++;
					}

					reader.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}

			if (vhcRepo.findAll().isEmpty()){
				try {
					String Path = System.getProperty("user.dir") + "/src/main/java/com/porscheinformatik/htl/vhc_init.csv";
					BufferedReader reader = new BufferedReader(new FileReader(Path));

					// Reading first line..
					String[] header = reader.readLine().split(",");
					String line;
					int i = 0;
					while ((line=reader.readLine()) != null) {
						String[] data = line.split(",");
						Vehicle vhc = new Vehicle(data[3], data[4], data[1], data[2], data[5], data[6], Integer.parseInt(data[7]), data[8], data[9], data[10]);
						//if( i <= 10)vhc.setTimeStamp();
						//else vhc.setTimeStampBefore();
						vhcRepo.save(vhc);
						i++;
					}
					reader.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		};
	}



}
