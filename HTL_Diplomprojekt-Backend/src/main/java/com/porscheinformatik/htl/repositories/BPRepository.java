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

    @Query("select b from BP b where b.name like %?1%")
    List<BP> findByName(String query);

    @Query("select b from BP b where b.email like %?1%")
    List<BP> findByEmail(String query);

    @Query("select b from BP b where b.city like %?1%")
    List<BP> findByCity(String query);

    @Query("select b from BP b where b.img IS NULL")
    BP findByAvatarNull();

    @Query("select b from BP b where b.bpID like ?1")
    BP findBPById(Long id);
}
