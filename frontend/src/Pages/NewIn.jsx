import { useState } from "react";
import "./NewIn.css";
import homeImage from "../Images/home2.jpg";

// ── Filter tabs ──
const FILTERS = ["All", "Women", "Men", "Kids", "Accessories"];

// ── Products data ──
const PRODUCTS = [
  { id: 1,  name: "Floral Midi Dress",      price: "3,499", oldPrice: null,    badge: "New",  colors: ["#f5c6c6", "#c6d8f5", "#c6f5d0"], image: homeImage },
  { id: 2,  name: "Linen Co-ord Set",       price: "4,299", oldPrice: "5,500", badge: "Sale", colors: ["#e8d5b0", "#c6c6c6"],             image: homeImage },
  { id: 3,  name: "Satin Blouse",           price: "2,199", oldPrice: null,    badge: "New",  colors: ["#fff", "#0a1628", "#c9a84c"],     image: homeImage },
  { id: 4,  name: "Wide Leg Trousers",      price: "3,899", oldPrice: null,    badge: "New",  colors: ["#1a1a1a", "#c6d8f5"],             image: homeImage },
  { id: 5,  name: "Knit Cardigan",          price: "3,199", oldPrice: "3,999", badge: "Sale", colors: ["#f5c6c6", "#e8d5b0", "#c6c6c6"], image: homeImage },
  { id: 6,  name: "Pleated Mini Skirt",     price: "2,799", oldPrice: null,    badge: "New",  colors: ["#0a1628", "#f5c6c6"],             image: homeImage },
  { id: 7,  name: "Oversized Blazer",       price: "5,999", oldPrice: null,    badge: "New",  colors: ["#1a1a1a", "#c6c6c6", "#e8d5b0"], image: homeImage },
  { id: 8,  name: "Ruched Bodycon Dress",   price: "3,299", oldPrice: "4,200", badge: "Sale", colors: ["#c9a84c", "#0a1628"],             image: homeImage },
];

export default function NewIn() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sort, setSort] = useState("newest");
  const [wished, setWished] = useState([]);

  const toggleWish = (id) => {
    setWished((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  return (
    <div className="newin">

      {/* ── Hero Banner ── */}
      <div className="newin__hero">
        <p className="newin__hero-label">Just Landed</p>
        <h1 className="newin__hero-title">New In</h1>
        <p className="newin__hero-desc">Fresh styles added every week — be the first to shop</p>
      </div>

      {/* ── Body ── */}
      <div className="newin__body">

        {/* Top Bar */}
        <div className="newin__topbar">

          {/* Filter Tabs */}
          <div className="newin__filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`newin__filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Right side: count + sort */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p className="newin__count">
              <span>{PRODUCTS.length}</span> items
            </p>
            <select
              className="newin__sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="newin__grid">
          {PRODUCTS.map((item) => (
            <div key={item.id} className="newin__card">

              {/* Image */}
              <div className="newin__card__img-wrap">
                <img src={item.image} alt={item.name} />

                {/* Badge */}
                <span className={`newin__card__badge ${item.badge === "Sale" ? "newin__card__badge--sale" : ""}`}>
                  {item.badge}
                </span>

                {/* Wishlist */}
                <button
                  className="newin__card__wish"
                  onClick={() => toggleWish(item.id)}
                >
                  {wished.includes(item.id) ? "❤️" : "🤍"}
                </button>

                {/* Quick Add */}
                <button className="newin__card__quick">+ Quick Add</button>
              </div>

              {/* Info */}
              <div className="newin__card__info">
                <p className="newin__card__name">{item.name}</p>

                <div className="newin__card__price-row">
                  <p className="newin__card__price">{item.price} LKR</p>
                  {item.oldPrice && (
                    <p className="newin__card__old-price">{item.oldPrice} LKR</p>
                  )}
                </div>

                {/* Color swatches */}
                <div className="newin__card__colors">
                  {item.colors.map((color, i) => (
                    <span
                      key={i}
                      className="newin__card__color"
                      style={{ background: color }}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="newin__loadmore">
          <button className="newin__loadmore-btn">Load More</button>
        </div>

      </div>
    </div>
  );
}