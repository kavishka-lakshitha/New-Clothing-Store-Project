package com.example.Amandi.Fashion.controller;

import com.example.Amandi.Fashion.model.MenProduct;
import com.example.Amandi.Fashion.service.MenProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/men")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class MenController {

    private final MenProductService service;

    public MenController(MenProductService service) { this.service = service; }

    // ✅ Get all / filter products
    @GetMapping
    public ResponseEntity<List<MenProduct>> get(
            @RequestParam(required = false) String sub,
            @RequestParam(required = false) String badge,
            @RequestParam(required = false) String search) {
        if (sub != null)    return ResponseEntity.ok(service.getBySubCategory(sub));
        if (badge != null)  return ResponseEntity.ok(service.getByBadge(badge));
        if (search != null) return ResponseEntity.ok(service.searchByName(search));
        return ResponseEntity.ok(service.getAllProducts());
    }

    // ✅ Add new product
    @PostMapping
    public ResponseEntity<MenProduct> add(@RequestBody MenProduct p) {
        return ResponseEntity.ok(service.saveProduct(p));
    }

    // ✅ Delete product
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.deleteProduct(id);
        return ResponseEntity.ok("Deleted successfully");
    }
}