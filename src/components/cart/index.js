import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleRemoveClick = (id) => {
    const filterCart = cartItems.filter((item) => item.id !== id);

    setCartItems(filterCart);
    localStorage.setItem("cartItems", JSON.stringify(filterCart));
  };

  return (
    <div className="bg-pink-gradient font-raleway  h-[100vh]">
      <h2 className="text-6xl font-caveat text-center py-[2rem] ">Cart</h2>
      <div className="flex justify-center overflow-hidden ">
        {cartItems.map((cart) => {
          const imgSrc = cart.img;
          return (
            <div key={cart.id} className="px-5 max-w-[20rem] py-[7rem]">
              <img src={imgSrc} alt="cartimg" className="max-w-[18rem] " />
              <div>
                <p className="py-3">{cart.price}</p>
                <div className="flex justify-between px-4">
                  <button
                    className="bg-red-400 rounded-md hover:bg-red-500 text-white p-[6px]"
                    onClick={() => {
                      handleRemoveClick(cart.id);
                    }}
                  >
                    Remove
                  </button>
                  <button className="bg-red-400 rounded-md hover:bg-red-500 text-white p-[6px]">
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
