import React from "react";
import "./index.css";

const Cards = (props) => {
  const { dressData } = props;
  const { img, price, button, id, quantity } = dressData?.data;

  const handleClick = () => {
    const cartItem = {
      img,
      price,
      button,
      id,
    };
    // Add item to the localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (!cartItems) {
      // If there is no items in local storage then create an empty array and push our new object into it
      //       console.log('no data');
      //      return false;
      cartItems = [];
      //    else{
      //        console.log('yes')
      cartItems.push(cartItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      //     }
    } else {
      // Find out if this product already exists in the localstorage
      let exist = cartItems.find((x) => x.id === id);
      console.log({ exist });
      if (!exist) {
        console.log("not found", exist);
        cartItems.push(cartItem);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      } else {
        alert("Product already added!");
      }
    }
  };

  return (
    <div className="inline-block mx-2 py-10  font-raleway">
      <div className="w-[300px]">
        <img
          src={img}
          alt="suit1"
          className=" w-[300px]  mix-blend-multiply "
          loading="lazy"
        />
      </div>

      <div className=" pt-4 px-3 flex justify-between items-center">
        <p className="text-md">{price}</p>
        <button
          onClick={handleClick}
          className="bg-red-400 p-[6px] rounded-md hover:bg-red-500 text-white"
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default Cards;
