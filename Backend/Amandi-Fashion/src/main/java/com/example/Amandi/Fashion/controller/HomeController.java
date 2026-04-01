package com.example.Amandi.Fashion.controller;

import com.example.Amandi.Fashion.model.BestSeller;
import com.example.Amandi.Fashion.model.NewArrival;
import com.example.Amandi.Fashion.repository.BestSellerRepository;
import com.example.Amandi.Fashion.repository.NewArrivalRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/home")
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    private final NewArrivalRepository newArrivalRepo;
    private final BestSellerRepository bestSellerRepo;

    public HomeController(NewArrivalRepository newArrivalRepo, BestSellerRepository bestSellerRepo) {
        this.newArrivalRepo  = newArrivalRepo;
        this.bestSellerRepo  = bestSellerRepo;
    }

    @GetMapping("/new-arrivals")
    public List<NewArrival> getNewArrivals() {
        return newArrivalRepo.findAll();
    }

    @GetMapping("/best-sellers")
    public List<BestSeller> getBestSellers() {
        return bestSellerRepo.findAll();
    }
}