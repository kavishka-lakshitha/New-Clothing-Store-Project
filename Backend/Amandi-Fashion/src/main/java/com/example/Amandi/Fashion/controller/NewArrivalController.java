package com.example.Amandi.Fashion.controller;

import com.example.Amandi.Fashion.model.NewArrival;
import com.example.Amandi.Fashion.service.NewArrivalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/new-arrivals")
@CrossOrigin(origins = "*")
public class NewArrivalController {

    @Autowired
    private NewArrivalService newArrivalService;

    @GetMapping
    public List<NewArrival> getAllNewArrivals() {
        return newArrivalService.getAllNewArrivals();
    }
}
