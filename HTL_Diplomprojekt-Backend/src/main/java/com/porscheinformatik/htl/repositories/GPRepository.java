package com.porscheinformatik.htl.repositories;

import com.porscheinformatik.htl.entities.GP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GPRepository extends JpaRepository<GP, Long> {
}
