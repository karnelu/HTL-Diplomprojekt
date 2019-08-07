package com.porscheinformatik.htl.repositories;

import com.porscheinformatik.htl.entities.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    @Query("select v from Vehicle v where v.lastUsed > ?1 order by v.lastUsed desc")
    List<Vehicle> findLastUsed(Date lastused);

    List<Vehicle> findByLastUsedGreaterThan(Date scanned);
    List<Vehicle> findByBrandContaining(String name);

    @Query("select v from Vehicle v where v.brand like %?1% or v.model like %?1% or v.licensePlate like %?1%")
    List<Vehicle> findAllContaining(String query);

}
