import React from "react";
// import Shirt from "./assets/Shirt.jpg";  
// import glass from "./assets/glass.jpg";
// import headphone from "./assets/headphone.jpg";
// import liverpool from "./assets/liverpool.jpg";
// import mouse from "./assets/mouse.jpg";
// import iphone from "./assets/iphone.jpg";
// import laptop from "./assets/laptop.jpg";
// import mousepad from "./assets/mousepad.jpg";
// import guitar from "./assets/guitar.jpg";
// import zing from "./assets/zing.jpg";

function ShoppingCart({ cart, removeFromCart, updateQuantity, applyCoupon, }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 100;
  const discount = applyCoupon ? total * 0.1 : 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">ตะกร้าของคุณไม่มีสินค้า</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">ราคาสินค้า: {item.price} บาท</p>
              <div className="flex items-center mt-2">
                <button 
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                > - </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                > + </button>
              </div>
            </div>
            <button 
              className="text-red-500 hover:text-red-600"
              onClick={() => removeFromCart(item.id)}
            >
              ยกเลิก
            </button>
          </div>
        ))
      )}
      <div className="border-t pt-4">
        <h3 className="text-lg">ราคาสินค้า: {total} บาท</h3>
        <h3 className="text-lg">ลดราคา: {discount} บาท</h3>
        <h3 className="text-lg">ค่าส่ง: {shipping} บาท</h3>
        <h3 className="text-lg font-bold">ยอดสุทธิ: {total - discount + shipping} บาท</h3>
        <button 
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
          onClick={applyCoupon}
        >
          ใช้คูปองส่วนลด
        </button>
        <br />
        <br />
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
          ชำระเงิน
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
