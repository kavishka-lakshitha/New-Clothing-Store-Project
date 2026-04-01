package com.example.Amandi.Fashion.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "new_arrivals")
public class NewArrival {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    @Column(name = "old_price")
    private Double oldPrice;
    private String badge;
    private String category;
    @Column(name = "image_url")
    private String imageUrl;
}