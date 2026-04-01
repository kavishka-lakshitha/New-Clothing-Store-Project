package com.example.Amandi.Fashion.controller;

import com.example.Amandi.Fashion.model.BestSeller;
import com.example.Amandi.Fashion.service.BestSellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/best-sellers")
@CrossOrigin(origins = "*")
public class BestSellerController {

    @Autowired
    private BestSellerService bestSellerService;

    @GetMapping
    public List<BestSeller> getAllBestSellers() {
        return bestSellerService.getAllBestSellers();
    }
}

