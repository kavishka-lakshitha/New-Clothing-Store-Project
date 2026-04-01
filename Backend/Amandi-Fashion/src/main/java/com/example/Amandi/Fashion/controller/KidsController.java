package com.example.Amandi.Fashion.controller;

import com.example.Amandi.Fashion.model.KidsProduct;
import com.example.Amandi.Fashion.service.KidsProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/kids")
@CrossOrigin(origins = "http://localhost:5173") 
public class KidsController {
    private final KidsProductService service;
    public KidsController(KidsProductService service) { this.service = service; }

    @GetMapping
    public ResponseEntity<List<KidsProduct>> get(
            @RequestParam(required = false) String sub,
            @RequestParam(required = false) String badge,
            @RequestParam(required = false) String search) {
        if (sub != null)    return ResponseEntity.ok(service.getBySubCategory(sub));
        if (badge != null)  return ResponseEntity.ok(service.getByBadge(badge));
        if (search != null) return ResponseEntity.ok(service.searchByName(search));
        return ResponseEntity.ok(service.getAllProducts());
    }

    @PostMapping
    public ResponseEntity<KidsProduct> add(@RequestBody KidsProduct p) {
        return ResponseEntity.ok(service.saveProduct(p));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.deleteProduct(id);
        return ResponseEntity.ok("Deleted successfully");
    }
}