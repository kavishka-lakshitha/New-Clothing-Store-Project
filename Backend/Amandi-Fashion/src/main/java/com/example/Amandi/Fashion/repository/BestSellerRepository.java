package com.example.Amandi.Fashion.repository;

import com.example.Amandi.Fashion.model.BestSeller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BestSellerRepository extends JpaRepository<BestSeller, Long> {}