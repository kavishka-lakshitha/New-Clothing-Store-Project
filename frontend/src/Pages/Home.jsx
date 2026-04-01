import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import homeImage from "../Images/home1.jpg";
import aboutus1Img from "../Images/aboutus1.jpg";
import aboutusImg from "../Images/aboutus.jpg";
import home1 from "../Images/home1.jpg";
import home2 from "../Images/home2.jpg";
import home3 from "../Images/home3.jpg";
import home4 from "../Images/home4.jpg";
import home5 from "../Images/home5.jpg";
import menImg from "../Images/M.jpg";
import womenImg from "../Images/W.jpg";
import kidsImg from "../Images/k.jpg";
import accessoriesImg from "../Images/A.jpg";
import massImg from "../Images/mass.png";
import fisherImg from "../Images/fisher.png";
import tescoImage from "../Images/tesco.png"; 
import gapImage from "../Images/gap.png"; 
import colombiaImage from "../Images/colombia.png"; 

import { useCart } from "../context/CartContext";

const slides = [
  { image: home1, subtitle: "New Collection 2025", title: "Elegance\nRedefined",  description: "Discover the latest arrivals crafted for the modern woman.", btn: "Shop Now" },
  { image: home2, subtitle: "Summer Edition",      title: "Bold &\nBeautiful",    description: "Step into summer with styles that speak for themselves.",  btn: "Explore" },
  { image: home3, subtitle: "Limited Edition",     title: "Timeless\nLuxury",     description: "Exclusive pieces for those who appreciate fine fashion.",  btn: "View Collection" },
  { image: home4, subtitle: "Trending Now",        title: "Style\nUnleashed",     description: "Wear what the world is talking about right now.",           btn: "Shop Trends" },
  { image: home5, subtitle: "Special Picks",       title: "Curated\nFor You",     description: "Hand-picked styles just for your wardrobe.",               btn: "Discover" },
];

const categories = [
  { id: 1, name: "Men",         link: "/men",         image: menImg },
  { id: 2, name: "Women",       link: "/women",       image: womenImg },
  { id: 3, name: "Kids",        link: "/kids",        image: kidsImg },
  { id: 4, name: "Accessories", link: "/accessories", image: accessoriesImg },
];

const brands = [
  { id: 1, image: massImg, name: "Brand One" },
  { id: 2, image: fisherImg, name: "Brand Two" },
  { id: 3, image: tescoImage, name: "Brand Three" },
  { id: 4, image: gapImage, name: "Brand Four" },
  { id: 5, image: colombiaImage, name: "Brand Five" },
];

export default function Home() {
  const [current, setCurrent]         = useState(0);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [addedId, setAddedId]         = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/home/new-arrivals")
      .then((res) => setNewArrivals(res.data))
      .catch((err) => console.error("New arrivals error:", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/home/best-sellers")
      .then((res) => setBestSellers(res.data))
      .catch((err) => console.error("Best sellers error:", err));
  }, []);

  const handleAddToCart = (item, prefix) => {
    addToCart({
      id:    item.id,
      name:  item.name,
      price: Number(item.price),
      image: item.imageUrl ? `http://localhost:8080/images/${item.imageUrl}` : homeImage,
    });
    setAddedId(`${prefix}-${item.id}`);
    setTimeout(() => setAddedId(null), 1500);
  };

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <main>

      {/* ── Hero Slider ── */}
      <section className="hero">
        <div
          className="hero__track"
          style={{ transform: `translateX(-${current * 20}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="hero__slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero__content">
                <a href="#" className="hero__btn">{slide.btn}</a>
              </div>
            </div>
          ))}
        </div>
        <button className="hero__arrow hero__arrow--prev" onClick={prev}>&#8592;</button>
        <button className="hero__arrow hero__arrow--next" onClick={next}>&#8594;</button>
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button key={i} className={`hero__dot ${i === current ? "active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <div className="hero__counter">
          <span>{String(current + 1).padStart(2, "0")}</span>{" / "}{String(slides.length).padStart(2, "0")}
        </div>
      </section>

      {/* ── New Arrivals ── */}
      <section className="section">
        <div className="section__header">
          <div>
            <h2 className="section__title">New Arrivals</h2>
            <p className="section__desc">
              Explore the latest trends and must-haves. Shop now and stay stylish!
            </p>
          </div>
          <a href="#" className="section__link">View All →</a>
        </div>
        <div className="product-grid">
          {newArrivals.length === 0 ? (
            <p style={{ color: "#999" }}>No new arrivals yet.</p>
          ) : (
            newArrivals.map((item) => {
              const isAdded = addedId === `na-${item.id}`;
              return (
                <div key={item.id} className="product-card">
                  <div className="product-card__img-wrap">
                    <img
                      src={item.imageUrl ? `http://localhost:8080/images/${item.imageUrl}` : homeImage}
                      alt={item.name}
                      onError={(e) => (e.target.src = homeImage)}
                    />
                    {item.badge && (
                      <span className="product-card__tag">{item.badge}</span>
                    )}
                    <button
                      className={`product-card__quick ${isAdded ? "product-card__quick--added" : ""}`}
                      onClick={() => handleAddToCart(item, "na")}
                    >
                      {isAdded ? "✓ Added!" : "Quick Add"}
                    </button>
                  </div>
                  {item.category && (
                    <p className="product-card__category">{item.category}</p>
                  )}
                  <p className="product-card__name">{item.name}</p>
                  <div className="product-card__prices">
                    <span className="product-card__price">
                      {Number(item.price).toLocaleString()} LKR
                    </span>
                    {item.oldPrice && (
                      <span className="product-card__old-price">
                        {Number(item.oldPrice).toLocaleString()} LKR
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="section--gray">
        <div className="section">
          <div className="section__header">
            <div>
              <h2 className="section__title">Best Sellers</h2>
              <p className="section__desc">
                Discover our most popular items. Shop the favorites everyone loves!
              </p>
            </div>
            <a href="#" className="section__link">View All →</a>
          </div>
          <div className="product-grid">
            {bestSellers.length === 0 ? (
              <p style={{ color: "#999" }}>No best sellers yet.</p>
            ) : (
              bestSellers.map((item) => {
                const isAdded = addedId === `bs-${item.id}`;
                const sizes = item.sizes ? item.sizes.split(",").map((s) => s.trim()) : [];
                return (
                  <div key={item.id} className="product-card">
                    <div className="product-card__img-wrap">
                      <img
                        src={item.imageUrl ? `http://localhost:8080/images/${item.imageUrl}` : homeImage}
                        alt={item.name}
                        onError={(e) => (e.target.src = homeImage)}
                      />
                      {item.badge && (
                        <span className="product-card__tag product-card__tag--hot">
                          🔥 {item.badge}
                        </span>
                      )}
                      <button
                        className={`product-card__quick ${isAdded ? "product-card__quick--added" : ""}`}
                        onClick={() => handleAddToCart(item, "bs")}
                      >
                        {isAdded ? "✓ Added!" : "Quick Add"}
                      </button>
                    </div>
                    {item.category && (
                      <p className="product-card__category">{item.category}</p>
                    )}
                    <p className="product-card__name">{item.name}</p>
                    <div className="product-card__prices">
                      <span className="product-card__price">
                        {Number(item.price).toLocaleString()} LKR
                      </span>
                      {item.oldPrice && (
                        <span className="product-card__old-price">
                          {Number(item.oldPrice).toLocaleString()} LKR
                        </span>
                      )}
                    </div>
                    {sizes.length > 0 && (
                      <div className="product-card__sizes">
                        {sizes.map((size, i) => (
                          <span key={i} className="men__card__size-tag">{size}</span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* ── Shop By Category ── */}
      <section className="section">
        <div className="section__header">
          <div>
            <h2 className="section__title">Shop By Category</h2>
            <p className="section__desc">Best price in market — Starting from 799 LKR</p>
          </div>
        </div>
        <div className="category-grid">
          {categories.map((cat) => (
            <a href={cat.link} key={cat.id} className="category-card">
              <img src={cat.image} alt={cat.name} />
              <div className="category-card__overlay">
                <span>{cat.name}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── About Us ── */}
      <section className="about">
        <div className="about__tag">Our Story</div>
        <div className="about__body">
          <div className="about__text">
            <h2 className="about__title">
              Fashion That<br />
              <span className="about__title--accent">Speaks For You</span>
            </h2>
            <p className="about__para">
              Born out of a love for style and a desire to make quality fashion
              accessible to every Sri Lankan, we've been curating collections
              that blend global trends with local sensibility since 2018.
            </p>
            <p className="about__para">
              Every piece we carry is handpicked for its craft, comfort, and
              character — because we believe what you wear is a conversation
              before you even say a word.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">6+</span>
                <span className="about__stat-label">Years in Fashion</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">50K+</span>
                <span className="about__stat-label">Happy Customers</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">200+</span>
                <span className="about__stat-label">Brands Curated</span>
              </div>
            </div>
            <a href="#" className="about__btn">Discover Our Story →</a>
          </div>
          <div className="about__visual">
            <div className="about__img-main">
              <img src={aboutusImg} alt="Our brand" />
            </div>
            <div className="about__img-accent">
              <img src={aboutus1Img} alt="Our team" />
              <div className="about__badge">
                <span className="about__badge-num">2018</span>
                <span className="about__badge-label">Est.</span>
              </div>
            </div>
          </div>
        </div>
       
      </section>

      {/* ── Our Brands ── */}
      <section className="section--dark">
        <div className="section">
          <div className="section__header section__header--center">
            <h2 className="section__title section__title--white">Our Brands</h2>
            <p className="section__desc section__desc--white">
              Our signature collection of brands comes with comfort, style, trendy looks. All for a good price.
            </p>
          </div>
          <div className="brand-grid">
            {brands.map((brand) => (
              <a href="#" key={brand.id} className="brand-card">
                <img src={brand.image} alt={brand.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}