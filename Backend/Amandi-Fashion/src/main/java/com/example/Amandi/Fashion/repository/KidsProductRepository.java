package com.example.Amandi.Fashion.repository;

import com.example.Amandi.Fashion.model.KidsProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface KidsProductRepository extends JpaRepository<KidsProduct, Long> {
    List<KidsProduct> findBySubCategory(String subCategory);
    List<KidsProduct> findByBadge(String badge);
    List<KidsProduct> findByNameContainingIgnoreCase(String name);
}