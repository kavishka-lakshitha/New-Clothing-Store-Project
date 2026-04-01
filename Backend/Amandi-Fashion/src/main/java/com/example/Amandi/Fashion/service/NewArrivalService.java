package com.example.Amandi.Fashion.service;

import com.example.Amandi.Fashion.model.NewArrival;
import com.example.Amandi.Fashion.repository.NewArrivalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewArrivalService {

    @Autowired
    private NewArrivalRepository newArrivalRepository;

    public List<NewArrival> getAllNewArrivals() {
        return newArrivalRepository.findAll();
    }
}