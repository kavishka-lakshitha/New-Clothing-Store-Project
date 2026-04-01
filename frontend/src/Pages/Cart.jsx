import "./Cart.css";
import { useCart } from "../context/CartContext";
import accessoriesImage from "../Images/home1.jpg";
import BackButton from "../Pages/BackButton"; 

export default function Cart() {
  const { cartItems, updateQty, remove } = useCart();

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping  = subtotal > 5000 ? 0 : 350;
  const total     = subtotal + shipping;
  const fmt = (n) => `${n.toLocaleString()} LKR`;

  return (
    <main className="cart-page">
       <BackButton />          {/* ✅ correct — right here */}
  
      <div className="cart-page__header">
        <h1 className="cart-page__title">My Cart</h1>
        <span className="cart-page__count">{cartItems.length} items</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <a href="/" className="cart-empty__btn">Continue Shopping</a>
        </div>
      ) : (
        <div className="cart-layout">

          {/* Item List */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item__img"
                  onError={(e) => (e.target.src = accessoriesImage)}
                />
                <div className="cart-item__info">
                  <p className="cart-item__name">{item.name}</p>
                  <p className="cart-item__price">{fmt(item.price)}</p>
                </div>

                <div className="cart-item__qty">
                  <button onClick={() => updateQty(item.id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, +1)}>+</button>
                </div>

                <p className="cart-item__line">{fmt(item.price * item.qty)}</p>

                <button className="cart-item__remove" onClick={() => remove(item.id)}>✕</button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h2 className="cart-summary__title">Order Summary</h2>

            <div className="cart-summary__row">
              <span>Subtotal</span><span>{fmt(subtotal)}</span>
            </div>
            <div className="cart-summary__row">
              <span>Shipping</span>
              <span>{shipping === 0 ? <span className="cart-summary__free">Free</span> : fmt(shipping)}</span>
            </div>

            {shipping > 0 && (
              <p className="cart-summary__note">
                Add {fmt(5000 - subtotal)} more for free shipping
              </p>
            )}

            <div className="cart-summary__divider" />

            <div className="cart-summary__row cart-summary__row--total">
              <span>Total</span><span>{fmt(total)}</span>
            </div>

            <button className="cart-summary__btn">Proceed to Checkout</button>
            <a href="/" className="cart-summary__link">← Continue Shopping</a>
          </div>
          

        </div>
      )}
    </main>
  );
}

