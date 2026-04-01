package com.example.Amandi.Fashion.controller;

import com.example.Amandi.Fashion.model.AccessoriesProduct;
import com.example.Amandi.Fashion.service.AccessoriesProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/accessories")
@CrossOrigin(origins = "http://localhost:5173") 
public class AccessoriesController {
    private final AccessoriesProductService service;
    public AccessoriesController(AccessoriesProductService service) { this.service = service; }

    @GetMapping
    public ResponseEntity<List<AccessoriesProduct>> get(
            @RequestParam(required = false) String sub,
            @RequestParam(required = false) String badge,
            @RequestParam(required = false) String search) {
        if (sub != null)    return ResponseEntity.ok(service.getBySubCategory(sub));
        if (badge != null)  return ResponseEntity.ok(service.getByBadge(badge));
        if (search != null) return ResponseEntity.ok(service.searchByName(search));
        return ResponseEntity.ok(service.getAllProducts());
    }

    @PostMapping
    public ResponseEntity<AccessoriesProduct> add(@RequestBody AccessoriesProduct p) {
        return ResponseEntity.ok(service.saveProduct(p));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.deleteProduct(id);
        return ResponseEntity.ok("Deleted successfully");
    }
}