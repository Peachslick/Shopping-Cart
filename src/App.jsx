import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import shirt from "./assets/Shirt.jpg";
import glass from "./assets/glass.jpg";
import headphone from "./assets/headphone.jpg";
import liverpool from "./assets/liverpool.jpg";
import mouse from "./assets/mouse.jpg";
import iphone from "./assets/iphone.jpg";
import laptop from "./assets/laptop.jpg";
import mousepad from "./assets/mousepad.jpg";
import guitar from "./assets/guitar.jpg";
import zing from "./assets/zing.jpg";


function App() {
  const products = [
    { id: 1, name: "เสื้อยืด", price: 259, image: shirt ,},
    { id: 2, name: "แก้วน้ำ", price: 189, image: glass},
    { id: 3, name: "หูฟัง", price: 599, image: headphone},
    { id: 4, name: "เสื้อลิเวอร์พูล", price: 2999, image: liverpool},
    { id: 5, name: "เมาส์", price: 379, image: mouse},
    { id: 6, name: "โทรศัพท์", price: 18889, image: iphone},
    { id: 7, name: "โน๊ตบุ๊ค", price: 28970, image: laptop},
    { id: 8, name: "แผ่นรองเมาส์", price: 89, image: mousepad},
    { id: 9, name: "กีตาร์", price: 1569, image: guitar},
    { id: 10, name: "อาหารเสริม", price: 219, image: zing},
  ];

  const [cart, setCart] = useState([]);
  const [couponApplied, setCouponApplied] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">รายการสินค้า</h1>
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        applyCoupon={couponApplied}     
      />
    </div>
  );
}



export default App;
