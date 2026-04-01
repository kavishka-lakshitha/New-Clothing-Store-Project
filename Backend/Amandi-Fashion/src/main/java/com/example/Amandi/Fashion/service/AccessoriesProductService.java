package com.example.Amandi.Fashion.service;

import com.example.Amandi.Fashion.model.AccessoriesProduct;
import com.example.Amandi.Fashion.repository.AccessoriesProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AccessoriesProductService {
    private final AccessoriesProductRepository repo;
    public AccessoriesProductService(AccessoriesProductRepository repo) { this.repo = repo; }

    public List<AccessoriesProduct> getAllProducts() { return repo.findAll(); }
    public List<AccessoriesProduct> getBySubCategory(String sub) { return repo.findBySubCategory(sub); }
    public List<AccessoriesProduct> getByBadge(String badge) { return repo.findByBadge(badge); }
    public List<AccessoriesProduct> searchByName(String name) { return repo.findByNameContainingIgnoreCase(name); }
    public AccessoriesProduct saveProduct(AccessoriesProduct p) { return repo.save(p); }
    public void deleteProduct(Long id) { repo.deleteById(id); }
}