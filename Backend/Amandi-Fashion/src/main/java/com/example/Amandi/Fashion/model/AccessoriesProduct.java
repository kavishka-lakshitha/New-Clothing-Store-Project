package com.example.Amandi.Fashion.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "accessories_products")
public class AccessoriesProduct {

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

    @Column(name = "colors")
    private String colors;

    @Column(name = "image_url")
    private String imageUrl;
}