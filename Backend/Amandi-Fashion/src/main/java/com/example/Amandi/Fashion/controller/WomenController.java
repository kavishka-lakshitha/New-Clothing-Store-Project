package com.example.Amandi.Fashion.controller;

import com.example.Amandi.Fashion.model.WomenProduct;
import com.example.Amandi.Fashion.service.WomenProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/women")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class WomenController {

    private final WomenProductService service;

    public WomenController(WomenProductService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<WomenProduct>> get(
            @RequestParam(required = false) String sub,
            @RequestParam(required = false) String badge,
            @RequestParam(required = false) String search) {
        if (sub != null)    return ResponseEntity.ok(service.getBySubCategory(sub));
        if (badge != null)  return ResponseEntity.ok(service.getByBadge(badge));
        if (search != null) return ResponseEntity.ok(service.searchByName(search));
        return ResponseEntity.ok(service.getAllProducts());
    }

    @PostMapping
    public ResponseEntity<WomenProduct> add(@RequestBody WomenProduct p) {
        return ResponseEntity.ok(service.saveProduct(p));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.deleteProduct(id);
        return ResponseEntity.ok("Deleted successfully");
    }
}