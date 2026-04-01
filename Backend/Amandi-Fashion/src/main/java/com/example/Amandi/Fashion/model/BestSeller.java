package com.example.Amandi.Fashion.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "best_sellers")
public class BestSeller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    @Column(name = "old_price")
    private Double oldPrice;
    private String badge;
    private String category;
    private String sizes;
    @Column(name = "image_url")
    private String imageUrl;
}