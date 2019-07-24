package com.porscheinformatik.htl.repositories;

import com.porscheinformatik.htl.entities.BP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BPRepository extends JpaRepository<BP, Long> {

}
