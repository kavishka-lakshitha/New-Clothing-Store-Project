package com.example.Amandi.Fashion.service;

import com.example.Amandi.Fashion.model.BestSeller;
import com.example.Amandi.Fashion.repository.BestSellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BestSellerService {

    @Autowired
    private BestSellerRepository bestSellerRepository;

    public List<BestSeller> getAllBestSellers() {
        return bestSellerRepository.findAll();
    }
}
