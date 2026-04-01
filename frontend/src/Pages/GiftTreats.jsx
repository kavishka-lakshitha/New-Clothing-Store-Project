import { useState } from "react";
import "./GiftTreats.css";
import giftTreatsImage from "../Images/gift.jpg";
import giftHome1 from "../Images/Gift/giftHome1.jpg";
import giftHome2 from "../Images/Gift/giftHome2.jpg";
import giftHome3 from "../Images/Gift/giftHome3.jpg";
import giftHome4 from "../Images/Gift/giftHome4.jpg";
import giftHome5 from "../Images/Gift/giftHome5.jpg";
import giftHome6 from "../Images/Gift/giftHome6.jpg";
import giftHome7 from "../Images/Gift/giftHome5.jpg";
import giftHome8 from "../Images/Gift/giftHome6.jpg";

import { useCart } from "../context/CartContext";

const CATEGORIES = ["All", "Beauty", "Home", "Stationery", "Travel", "Tech"];

const PRODUCTS = [
  // ── Beauty (8) ──
  { id: 1,  name: "Scented Candle Set",    price: 2499, oldPrice: 3000, badge: "Sale", colors: '{"#c6d8f5","#fff"}',     subCategory: "Beauty",     imageUrl: giftHome8  },
  { id: 2,  name: "Spa Gift Set",          price: 3499, oldPrice: 4000, badge: "Sale", colors: '{"#f8c8d4","#fff"}',     subCategory: "Beauty",     imageUrl: giftHome8 },
  { id: 3,  name: "Rose Face Serum",       price: 1899, oldPrice: null, badge: "New",  colors: '{"#f8c8d4","#c6d8f5"}', subCategory: "Beauty",     imageUrl: giftHome6},
  { id: 4,  name: "Luxury Bath Bombs",     price: 1299, oldPrice: null, badge: "Hot",  colors: '{"#ffb347","#fff"}',     subCategory: "Beauty",     imageUrl: giftHome5},
  { id: 5,  name: "Perfume Gift Box",      price: 4299, oldPrice: 5000, badge: "Sale", colors: '{"#c9a84c","#fff"}',     subCategory: "Beauty",     imageUrl: giftHome4},
  { id: 6,  name: "Lip Care Set",          price: 999,  oldPrice: null, badge: null,   colors: '{"#f8c8d4","#ffb347"}', subCategory: "Beauty",     imageUrl: giftHome3},
  { id: 7,  name: "Glow Skin Kit",         price: 2799, oldPrice: 3200, badge: "Sale", colors: '{"#fff","#c6d8f5"}',     subCategory: "Beauty",     imageUrl: giftHome2  },
  { id: 8,  name: "Aromatherapy Set",      price: 1599, oldPrice: null, badge: "New",  colors: '{"#c6d8f5","#f8c8d4"}', subCategory: "Beauty",     imageUrl: giftHome1 },

  // ── Home (8) ──
  { id: 9,  name: "Smart Home Kit",        price: 7999, oldPrice: 9500, badge: "Sale", colors: '{"#1a1a1a","#c9a84c"}', subCategory: "Home",       imageUrl: giftHome1 },
  { id: 10, name: "Cosy Throw Blanket",    price: 2999, oldPrice: null, badge: "Hot",  colors: '{"#8b7355","#e8e8e8"}', subCategory: "Home",       imageUrl: giftHome2 },
  { id: 11, name: "Ceramic Mug Set",       price: 1499, oldPrice: 1800, badge: "Sale", colors: '{"#fff","#c6d8f5"}',     subCategory: "Home",       imageUrl: giftHome3 },
  { id: 12, name: "Linen Cushion Pack",    price: 2199, oldPrice: null, badge: null,   colors: '{"#e8e8e8","#8b7355"}', subCategory: "Home",       imageUrl: giftHome4},
  { id: 13, name: "Scented Reed Diffuser", price: 1799, oldPrice: null, badge: "New",  colors: '{"#c6d8f5","#fff"}',     subCategory: "Home",       imageUrl: giftHome5 },
  { id: 14, name: "Picture Frame Set",     price: 1299, oldPrice: null, badge: null,   colors: '{"#1a1a1a","#e8e8e8"}', subCategory: "Home",       imageUrl: giftHome6 },
  { id: 15, name: "Bamboo Tray Set",       price: 2499, oldPrice: 2800, badge: "Sale", colors: '{"#8b7355","#fff"}',     subCategory: "Home",       imageUrl: giftHome7 },
  { id: 16, name: "LED Fairy Lights",      price: 999,  oldPrice: null, badge: "Hot",  colors: '{"#c9a84c","#fff"}',     subCategory: "Home",       imageUrl: giftHome8 },

  // ── Stationery (8) ──
  { id: 17, name: "Desk Organiser",        price: 1999, oldPrice: null, badge: null,   colors: '{"#8b7355","#e8e8e8"}', subCategory: "Stationery", imageUrl: giftHome8 },
  { id: 18, name: "Luxury Notebook Set",   price: 1499, oldPrice: 1800, badge: "Sale", colors: '{"#1a1a1a","#c9a84c"}', subCategory: "Stationery", imageUrl: giftHome7 },
  { id: 19, name: "Calligraphy Kit",       price: 2299, oldPrice: null, badge: "New",  colors: '{"#0a1628","#c9a84c"}', subCategory: "Stationery", imageUrl: giftHome6 },
  { id: 20, name: "Washi Tape Bundle",     price: 799,  oldPrice: null, badge: "Hot",  colors: '{"#f8c8d4","#c6d8f5"}', subCategory: "Stationery", imageUrl: giftHome5 },
  { id: 21, name: "Pen Gift Set",          price: 1699, oldPrice: 2000, badge: "Sale", colors: '{"#1a1a1a","#e8e8e8"}', subCategory: "Stationery", imageUrl: giftHome4  },
  { id: 22, name: "Sticky Notes Pack",     price: 599,  oldPrice: null, badge: null,   colors: '{"#ffb347","#f8c8d4"}', subCategory: "Stationery", imageUrl: giftHome3 },
  { id: 23, name: "Planner & Journal",     price: 2499, oldPrice: null, badge: "New",  colors: '{"#c6d8f5","#fff"}',     subCategory: "Stationery", imageUrl: giftHome2 },
  { id: 24, name: "Stamp & Ink Set",       price: 1299, oldPrice: 1500, badge: "Sale", colors: '{"#c9a84c","#1a1a1a"}', subCategory: "Stationery", imageUrl: giftHome1},

  // ── Travel (8) ──
  { id: 25, name: "Travel Kit",            price: 1799, oldPrice: null, badge: "Hot",  colors: '{"#1a1a1a","#c6d8f5"}', subCategory: "Travel",     imageUrl: giftHome1 },
  { id: 26, name: "Passport Wallet",       price: 1299, oldPrice: null, badge: "New",  colors: '{"#8b7355","#c9a84c"}', subCategory: "Travel",     imageUrl: giftHome2 },
  { id: 27, name: "Luggage Tag Set",       price: 799,  oldPrice: null, badge: null,   colors: '{"#1a1a1a","#ffb347"}', subCategory: "Travel",     imageUrl: giftHome3 },
  { id: 28, name: "Travel Pillow & Mask",  price: 1599, oldPrice: 1900, badge: "Sale", colors: '{"#c6d8f5","#fff"}',     subCategory: "Travel",     imageUrl:giftHome4 },
  { id: 29, name: "Packing Cube Set",      price: 2199, oldPrice: null, badge: "Hot",  colors: '{"#0a1628","#e8e8e8"}', subCategory: "Travel",     imageUrl: giftHome5 },
  { id: 30, name: "Mini Toiletry Bag",     price: 999,  oldPrice: null, badge: null,   colors: '{"#f8c8d4","#fff"}',     subCategory: "Travel",     imageUrl: giftHome6 },
  { id: 31, name: "Travel Adapter Kit",    price: 2499, oldPrice: 2800, badge: "Sale", colors: '{"#1a1a1a","#c9a84c"}', subCategory: "Travel",     imageUrl: giftHome7},
  { id: 32, name: "Reusable Water Bottle", price: 1399, oldPrice: null, badge: "New",  colors: '{"#c6d8f5","#8b7355"}', subCategory: "Travel",     imageUrl: giftHome8 },

  // ── Tech (8) ──
  { id: 33, name: "Wireless Earbuds",      price: 5999, oldPrice: 7000, badge: "Sale", colors: '{"#1a1a1a","#fff"}',     subCategory: "Tech",       imageUrl: giftHome8 },
  { id: 34, name: "Phone Stand & Charger", price: 3499, oldPrice: null, badge: "Hot",  colors: '{"#1a1a1a","#c9a84c"}', subCategory: "Tech",       imageUrl: giftHome7 },
  { id: 35, name: "Portable Power Bank",   price: 4299, oldPrice: 5000, badge: "Sale", colors: '{"#0a1628","#e8e8e8"}', subCategory: "Tech",       imageUrl: giftHome6 },
  { id: 36, name: "Smart Watch Band Set",  price: 1799, oldPrice: null, badge: "New",  colors: '{"#1a1a1a","#ffb347"}', subCategory: "Tech",       imageUrl: giftHome5},
  { id: 37, name: "Bluetooth Speaker",     price: 6499, oldPrice: 7500, badge: "Sale", colors: '{"#1a1a1a","#c6d8f5"}', subCategory: "Tech",       imageUrl: giftHome4 },
  { id: 38, name: "LED Desk Lamp",         price: 2999, oldPrice: null, badge: null,   colors: '{"#fff","#c9a84c"}',     subCategory: "Tech",       imageUrl: giftHome3 },
  { id: 39, name: "Webcam Cover Pack",     price: 799,  oldPrice: null, badge: "Hot",  colors: '{"#1a1a1a","#e8e8e8"}', subCategory: "Tech",       imageUrl: giftHome2 },
  { id: 40, name: "Cable Organiser Kit",   price: 1299, oldPrice: 1500, badge: "Sale", colors: '{"#8b7355","#1a1a1a"}', subCategory: "Tech",       imageUrl: giftHome1 },
];

export default function GiftTreats() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [wished, setWished] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const { addToCart } = useCart();

  const toggleWish = (id) =>
    setWished((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      image: item.imageUrl || giftTreatsImage,
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const badgeClass = (badge) => {
    if (badge === "Sale") return "men__card__badge men__card__badge--sale";
    if (badge === "Hot")  return "men__card__badge men__card__badge--hot";
    return "men__card__badge";
  };

  const filteredProducts = PRODUCTS
    .filter((item) =>
      activeCategory === "All" || item.subCategory === activeCategory
    )
    .sort((a, b) => {
      if (sort === "price-low")  return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "newest")     return b.id - a.id;
      return 0;
    });

  return (
    <div className="men">

      {/* Hero */}
      <div
        className="men__hero"
        style={{
          backgroundImage: `url(${giftTreatsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="men__hero-label">Amandi Fashion</p>
        <h1 className="men__hero-title">Gift Treats</h1>
        <p className="men__hero-desc">
          Gifts for every moment — thoughtful, curated, and memorable
        </p>
      </div>

      {/* Categories */}
      <div className="men__categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`men__cat-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="men__body">

        {/* Top Bar */}
        <div className="men__topbar">
          <p className="men__count"><span>{filteredProducts.length}</span> products</p>
          <div className="men__topbar-right">
            <button className="men__filter-toggle">⊞ Filter</button>
            <select
              className="men__sort"
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
        <div className="men__grid">
          {filteredProducts.length === 0 ? (
            <p style={{ padding: "2rem", color: "#888" }}>No products found.</p>
          ) : (
            filteredProducts.map((item) => {
              const colors = item.colors
                ? item.colors.replace(/[{}"]/g, "").split(",").map((c) => c.trim())
                : [];
              const isAdded = addedId === item.id;

              return (
                <div key={item.id} className="men__card">
                  <div className="men__card__img-wrap">

                    <img
                      src={item.imageUrl || giftTreatsImage}
                      alt={item.name}
                      onError={(e) => (e.target.src = giftTreatsImage)}
                    />

                    {item.badge && (
                      <span className={badgeClass(item.badge)}>{item.badge}</span>
                    )}

                    <button
                      className="men__card__wish"
                      onClick={() => toggleWish(item.id)}
                    >
                      {wished.includes(item.id) ? "❤️" : "🤍"}
                    </button>

                    <button
                      className={`men__card__quick ${isAdded ? "men__card__quick--added" : ""}`}
                      onClick={() => handleAddToCart(item)}
                    >
                      {isAdded ? "✓ Added!" : "+ Add to Cart"}
                    </button>

                  </div>

                  <p className="men__card__name">{item.name}</p>

                  <div className="men__card__price-row">
                    <p className="men__card__price">{Number(item.price).toLocaleString()} LKR</p>
                    {item.oldPrice && (
                      <p className="men__card__old-price">{Number(item.oldPrice).toLocaleString()} LKR</p>
                    )}
                  </div>

                  <div className="men__card__colors">
                    {colors.map((color, i) => (
                      <span
                        key={i}
                        className="men__card__color"
                        style={{ background: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Load More */}
        <div className="men__loadmore">
          <button className="men__loadmore-btn">Load More</button>
        </div>

      </div>
    </div>
  );
}