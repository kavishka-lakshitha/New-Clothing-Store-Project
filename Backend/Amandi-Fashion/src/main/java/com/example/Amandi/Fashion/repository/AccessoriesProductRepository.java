package com.example.Amandi.Fashion.repository;

import com.example.Amandi.Fashion.model.AccessoriesProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AccessoriesProductRepository extends JpaRepository<AccessoriesProduct, Long> {
    List<AccessoriesProduct> findBySubCategory(String subCategory);
    List<AccessoriesProduct> findByBadge(String badge);
    List<AccessoriesProduct> findByNameContainingIgnoreCase(String name);
}