import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Men.css";
import menImage from "../Images/mens.jpg";
import { useCart } from "../context/CartContext";

const CATEGORIES = ["All", "Shirts", "T-Shirts", "Trousers", "Shorts", "Blazers", "Jeans"];

export default function Men() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [wished, setWished] = useState([]);
  const [selectedSize, setSelectedSize] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedId, setAddedId] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/men")
      .then((res) => { setProducts(res.data); setLoading(false); })
      .catch((err) => { console.error(err); setError("Failed to load products."); setLoading(false); });
  }, []);

  const toggleWish = (id) =>
    setWished((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );

  const handleAddToCart = (item) => {
    addToCart({
      id:    item.id,
      name:  item.name,
      price: Number(item.price),
      image: item.imageUrl ? `http://localhost:8080/images/${item.imageUrl}` : menImage,
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const badgeClass = (badge) => {
    if (badge === "Sale") return "men__card__badge men__card__badge--sale";
    if (badge === "Hot")  return "men__card__badge men__card__badge--hot";
    if (badge === "Best Seller") return "men__card__badge men__card__badge--hot";
    return "men__card__badge";
  };

  const handleCategory = (cat) => {
    if (cat === "All") { setActiveCategory("All"); return; }
    const routes = {
      "Shirts":   "/men/shirts",
      "T-Shirts": "/men/tshirts",
      "Trousers": "/men/trousers",
      "Shorts":   "/men/shorts",
      "Blazers":  "/men/blazers",
      "Jeans":    "/men/jeans",
    };
    navigate(routes[cat]);
  };

  const filteredProducts = products
    .filter((item) => {
      const sizes = item.sizes ? item.sizes.split(",").map((s) => s.trim()) : [];
      const matchSize = selectedSize === "All" || sizes.includes(selectedSize);
      const matchCategory = activeCategory === "All" || item.subCategory === activeCategory;
      return matchSize && matchCategory;
    })
    .sort((a, b) => {
      if (sort === "price-low")  return Number(a.price) - Number(b.price);
      if (sort === "price-high") return Number(b.price) - Number(a.price);
      if (sort === "newest")     return b.id - a.id;
      return 0;
    });

  if (loading)
    return <p style={{ textAlign: "center", padding: "3rem", fontSize: "1.2rem" }}>Loading products...</p>;
  if (error)
    return <p style={{ textAlign: "center", color: "red", padding: "3rem" }}>{error}</p>;

  return (
    <div className="men">

      {/* Hero */}
      <div
        className="men__hero"
        style={{
          backgroundImage: `url(${menImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="men__hero-label">Amandi Fashion</p>
        <h1 className="men__hero-title">Men</h1>
        <p className="men__hero-desc">Curated styles for the modern man — casual meets elegance</p>
      </div>

      {/* Category Strip */}
      <div className="men__categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`men__cat-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleCategory(cat)}
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
            <select className="men__sort" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="All">All Sizes</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <select className="men__sort" value={sort} onChange={(e) => setSort(e.target.value)}>
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
              const sizes  = item.sizes  ? item.sizes.split(",").map((s) => s.trim())  : [];
              const colors = item.colors ? item.colors.split(",").map((c) => c.trim()) : [];
              const isAdded = addedId === item.id;

              return (
                <div key={item.id} className="men__card">
                  <div className="men__card__img-wrap">
                    <img
                      src={item.imageUrl ? `http://localhost:8080/images/${item.imageUrl}` : menImage}
                      alt={item.name}
                      onError={(e) => (e.target.src = menImage)}
                    />
                    {item.badge && <span className={badgeClass(item.badge)}>{item.badge}</span>}
                    <button className="men__card__wish" onClick={() => toggleWish(item.id)}>
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
                      <span key={i} className="men__card__color" style={{ background: color.toLowerCase() }} title={color} />
                    ))}
                  </div>

                  <div className="men__card__sizes">
                    {sizes.map((size, i) => (
                      <span key={i} className="men__card__size-tag">{size}</span>
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