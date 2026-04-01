package com.example.Amandi.Fashion.service;

import com.example.Amandi.Fashion.model.GiftsProduct;
import com.example.Amandi.Fashion.repository.GiftsProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GiftsProductService {
    private final GiftsProductRepository repo;
    public GiftsProductService(GiftsProductRepository repo) { this.repo = repo; }

    public List<GiftsProduct> getAllProducts() { return repo.findAll(); }
    public List<GiftsProduct> getBySubCategory(String sub) { return repo.findBySubCategory(sub); }
    public List<GiftsProduct> getByBadge(String badge) { return repo.findByBadge(badge); }
    public List<GiftsProduct> searchByName(String name) { return repo.findByNameContainingIgnoreCase(name); }
    public GiftsProduct saveProduct(GiftsProduct p) { return repo.save(p); }
    public void deleteProduct(Long id) { repo.deleteById(id); }
}