package com.example.Amandi.Fashion.repository;

import com.example.Amandi.Fashion.model.WomenProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WomenProductRepository extends JpaRepository<WomenProduct, Long> {
    List<WomenProduct> findBySubCategory(String subCategory);
    List<WomenProduct> findByBadge(String badge);
    List<WomenProduct> findByNameContainingIgnoreCase(String name);
}