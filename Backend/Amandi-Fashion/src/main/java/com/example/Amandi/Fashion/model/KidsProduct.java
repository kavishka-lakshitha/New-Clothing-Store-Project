package com.example.Amandi.Fashion.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "kids_products")
public class KidsProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String price;
    @Column(name = "old_price")
    private String oldPrice;
    private String badge;
    @Column(name = "sub_category")
    private String subCategory;
    private String sizes;
    private String colors;
    @Column(name = "image_url")
    private String imageUrl;
}