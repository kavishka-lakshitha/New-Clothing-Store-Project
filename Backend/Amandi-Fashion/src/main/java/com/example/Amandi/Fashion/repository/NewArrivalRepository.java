package com.example.Amandi.Fashion.repository;

import com.example.Amandi.Fashion.model.NewArrival;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewArrivalRepository extends JpaRepository<NewArrival, Long> {}