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

function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-500 mb-4">Price: {product.price} บาท</p>
          <img src={product.image} alt={product.name} className=""/>
          <br />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
            onClick={() => addToCart(product)}>
            เพิ่มเข้าในตะกร้า
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
