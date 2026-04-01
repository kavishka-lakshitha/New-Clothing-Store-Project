package com.example.Amandi.Fashion.service;

import com.example.Amandi.Fashion.model.KidsProduct;
import com.example.Amandi.Fashion.repository.KidsProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class KidsProductService {
    private final KidsProductRepository repo;
    public KidsProductService(KidsProductRepository repo) { this.repo = repo; }

    public List<KidsProduct> getAllProducts() { return repo.findAll(); }
    public List<KidsProduct> getBySubCategory(String sub) { return repo.findBySubCategory(sub); }
    public List<KidsProduct> getByBadge(String badge) { return repo.findByBadge(badge); }
    public List<KidsProduct> searchByName(String name) { return repo.findByNameContainingIgnoreCase(name); }
    public KidsProduct saveProduct(KidsProduct p) { return repo.save(p); }
    public void deleteProduct(Long id) { repo.deleteById(id); }
}