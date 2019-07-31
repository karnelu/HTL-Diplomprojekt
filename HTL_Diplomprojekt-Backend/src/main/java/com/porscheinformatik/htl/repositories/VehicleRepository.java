package com.porscheinformatik.htl.repositories;

import com.porscheinformatik.htl.entities.BP;
import com.porscheinformatik.htl.entities.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    @Query("select v from Vehicle v where v.scanned > ?1 order by v.scanned desc")
    List<Vehicle> findLastScanned(Date scanned);

    List<Vehicle> findByScannedGreaterThan(Date scanned);
    List<Vehicle> findByBrandContaining(String name);

    @Query("select v from Vehicle v where v.brand like %?1% or v.model like %?1% or v.license_plate like %?1%")
    List<Vehicle> findAllContaining(String query);

}
