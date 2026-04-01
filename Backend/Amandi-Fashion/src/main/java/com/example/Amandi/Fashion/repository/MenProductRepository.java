package com.example.Amandi.Fashion.repository;

import com.example.Amandi.Fashion.model.MenProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenProductRepository extends JpaRepository<MenProduct, Long> {
    List<MenProduct> findBySubCategory(String subCategory);
    List<MenProduct> findByBadge(String badge);
    List<MenProduct> findByNameContainingIgnoreCase(String name);
}