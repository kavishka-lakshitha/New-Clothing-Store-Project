package com.example.Amandi.Fashion.service;

import com.example.Amandi.Fashion.model.WomenProduct;
import com.example.Amandi.Fashion.repository.WomenProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WomenProductService {

    private final WomenProductRepository repository;

    public WomenProductService(WomenProductRepository repository) {
        this.repository = repository;
    }

    public List<WomenProduct> getAllProducts() {
        return repository.findAll();
    }

    public List<WomenProduct> getBySubCategory(String sub) {
        return repository.findBySubCategory(sub);
    }

    public List<WomenProduct> getByBadge(String badge) {
        return repository.findByBadge(badge);
    }

    public List<WomenProduct> searchByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    public WomenProduct saveProduct(WomenProduct product) {
        return repository.save(product);
    }

    public WomenProduct getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found: " + id));
    }

    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}