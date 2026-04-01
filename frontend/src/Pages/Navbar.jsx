import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ FIX 1: import useCart
import "./Navbar.css";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="17" y1="17" x2="22" y2="22" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const WishlistIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const NotificationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);

const NAV_LINKS = [
  { label: "New In",        href: "/" },
  { label: "Women",         href: "/women" },
  { label: "Men",           href: "/men" },
  { label: "Kids",          href: "/kids" },
  { label: "Accessories",   href: "/accessories" },
  { label: "Gift & Treats", href: "/gift-treats" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount }               = useCart(); // ✅ FIX 2: live count from context (replaces hardcoded useState(3))
  const navigate                    = useNavigate();

  const toggleMenu   = () => { setMenuOpen(p => !p); setSearchOpen(false); };
  const toggleSearch = () => setSearchOpen(p => !p);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">

          {/* Brand */}
          <a href="/" className="navbar__brand">
            <span className="navbar__brand-name">Amandi</span>
            <span className="navbar__brand-tagline">Fashion &amp; Style</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">

            {/* Search */}
            <div className="navbar__search-wrapper">
              <button className="navbar__icon-btn" aria-label="Search" onClick={toggleSearch}>
                <SearchIcon />
              </button>
              <div className={`navbar__search-dropdown ${searchOpen ? "open" : ""}`}>
                <input type="text" placeholder="Search styles, brands…" autoFocus={searchOpen} />
                <button>Go</button>
              </div>
            </div>

            {/* Wishlist */}
            <button className="navbar__icon-btn" aria-label="Wishlist">
              <WishlistIcon />
            </button>

            {/* Notifications */}
            <button className="navbar__icon-btn" aria-label="Notifications">
              <NotificationIcon />
            </button>

            {/* Cart */}
            <button className="navbar__icon-btn" aria-label="Cart" onClick={() => navigate("/cart")}>
              <CartIcon />
              {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
            </button>

            <div className="navbar__divider" />

            {/* Profile */}
            <button className="navbar__profile-btn" aria-label="Profile">AM</button>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span /><span /><span />
          </button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(link => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a onClick={() => { navigate("/cart"); setMenuOpen(false); }}>Cart</a>
      </div>
    </>
  );
}