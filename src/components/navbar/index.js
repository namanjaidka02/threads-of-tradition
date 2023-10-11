import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <div className="flex md:flex-col justify-evenly ">
        <nav>
          <h1 className="text-red-300 font-caveat font-semibold xxs:text-3xl sm:text-4xl xl:text-6xl text-center xxs:pt-10">
            {props.name}
            <span className="items-center text-1xl">&reg;</span>
          </h1>
        </nav>
        <nav className=" flex justify-center ml-[80rem] ">
          <Link to="/cart">
            {" "}
            <i
              className="fa-solid fa-cart-shopping cursor-pointer"
              style={{ color: "#FF5733" }}
            ></i>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
