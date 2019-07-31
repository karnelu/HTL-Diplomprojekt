package com.porscheinformatik.htl.repositories;

import com.porscheinformatik.htl.entities.BP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BPRepository extends JpaRepository<BP, Long> {
    List<BP> findBylastUsedGreaterThan(Date last_used);

    @Query("select b from BP b where b.lastUsed > ?1 order by b.lastUsed desc")
    List<BP> findLastUsedOrderedDesc(Date lastused);

}
