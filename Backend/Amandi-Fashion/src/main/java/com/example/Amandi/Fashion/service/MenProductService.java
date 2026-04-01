package com.example.Amandi.Fashion.service;

import com.example.Amandi.Fashion.model.MenProduct;
import com.example.Amandi.Fashion.repository.MenProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenProductService {

    private final MenProductRepository repository;

    public MenProductService(MenProductRepository repository) {
        this.repository = repository;
    }

    public List<MenProduct> getAllProducts() {
        return repository.findAll();
    }

    public List<MenProduct> getBySubCategory(String sub) {
        return repository.findBySubCategory(sub);
    }

    public List<MenProduct> getByBadge(String badge) {
        return repository.findByBadge(badge);
    }

    public List<MenProduct> searchByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    public MenProduct saveProduct(MenProduct product) {
        return repository.save(product);
    }

    public MenProduct getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}