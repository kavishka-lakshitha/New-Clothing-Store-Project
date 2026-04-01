package com.example.Amandi.Fashion.model;

import jakarta.persistence.*;

@Entity
@Table(name = "men_products")
public class MenProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    @Column(name = "price", columnDefinition = "double precision")
    private double price;

    @Column(name = "sub_category")
    private String subCategory;

    private String badge;

    @Column(name = "image_url")
    private String imageUrl;  // ✅ ADD THIS

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getSubCategory() { return subCategory; }
    public void setSubCategory(String subCategory) { this.subCategory = subCategory; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }

    public String getImageUrl() { return imageUrl; }        // ✅ ADD THIS
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }  // ✅ ADD THIS
}