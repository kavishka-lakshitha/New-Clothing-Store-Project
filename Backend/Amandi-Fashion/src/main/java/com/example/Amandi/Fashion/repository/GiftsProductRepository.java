package com.example.Amandi.Fashion.repository;

import com.example.Amandi.Fashion.model.GiftsProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface GiftsProductRepository extends JpaRepository<GiftsProduct, Long> {
    List<GiftsProduct> findBySubCategory(String subCategory);
    List<GiftsProduct> findByBadge(String badge);
    List<GiftsProduct> findByNameContainingIgnoreCase(String name);
}