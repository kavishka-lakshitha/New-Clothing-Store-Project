import { useState, useEffect } from "react";
import axios from "axios";
import accessoriesImage from "../../Images/home2.jpg";

export default function AccessoriesWatches() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wished, setWished] = useState([]);
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/accessories?sub=Watches")
      .then((res) => { setProducts(res.data); setLoading(false); })
      .catch((err) => { console.error(err); setError("Failed to load products."); setLoading(false); });
  }, []);

  const toggleWish = (id) =>
    setWished((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);

  const badgeClass = (badge) => {
    if (badge === "Sale") return "men__card__badge men__card__badge--sale";
    if (badge === "Hot")  return "men__card__badge men__card__badge--hot";
    return "men__card__badge";
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price-low")  return Number(a.price) - Number(b.price);
    if (sort === "price-high") return Number(b.price) - Number(a.price);
    if (sort === "newest")     return b.id - a.id;
    return 0;
  });

  if (loading) return <p style={{ textAlign: "center", padding: "3rem" }}>Loading products...</p>;
  if (error)   return <p style={{ textAlign: "center", color: "red", padding: "3rem" }}>{error}</p>;

  return (
    <div className="men">
      <div className="men__hero" style={{ backgroundImage: `url(${accessoriesImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <p className="men__hero-label">Amandi Fashion</p>
        <h1 className="men__hero-title">Watches</h1>
        <p className="men__hero-desc">Timeless watches for every wrist</p>
      </div>
      <div className="men__body">
        <div className="men__topbar">
          <p className="men__count"><span>{sortedProducts.length}</span> products</p>
          <div className="men__topbar-right">
            <select className="men__sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="men__grid">
          {sortedProducts.length === 0 ? (
            <p style={{ padding: "2rem", color: "#888" }}>No products found.</p>
          ) : (
            sortedProducts.map((item) => {
              const colors = item.colors ? item.colors.split(",").map((c) => c.trim()) : [];
              return (
                <div key={item.id} className="men__card">
                  <div className="men__card__img-wrap">
                    <img src={item.imageUrl ? `http://localhost:8080/images/${item.imageUrl}` : accessoriesImage} alt={item.name} onError={(e) => (e.target.src = accessoriesImage)} />
                    {item.badge && <span className={badgeClass(item.badge)}>{item.badge}</span>}
                    <button className="men__card__wish" onClick={() => toggleWish(item.id)}>{wished.includes(item.id) ? "❤️" : "🤍"}</button>
                    <button className="men__card__quick">+ Quick Add</button>
                  </div>
                  <p className="men__card__name">{item.name}</p>
                  <div className="men__card__price-row">
                    <p className="men__card__price">{Number(item.price).toLocaleString()} LKR</p>
                    {item.oldPrice && <p className="men__card__old-price">{Number(item.oldPrice).toLocaleString()} LKR</p>}
                  </div>
                  <div className="men__card__colors">
                    {colors.map((color, i) => <span key={i} className="men__card__color" style={{ background: color }} title={color} />)}
                  </div>
                  <div className="men__card__sizes">
                    <span className="men__card__size-tag">{item.sizes}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="men__loadmore"><button className="men__loadmore-btn">Load More</button></div>
      </div>
    </div>
  );
}