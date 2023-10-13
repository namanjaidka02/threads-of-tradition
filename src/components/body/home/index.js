import React from "react";
import Cards from "../cards/index";
import Navbar from "../../navbar/index";
import dressList from "../../mockData";
import { useState } from "react";
import Footer from "../footer";
import "./index.css";

const Home = (props) => {
  const [listOfDress, setListOfDress] = useState(dressList);
  return (
    <div className="bg-pink-gradient h-[100%]">
      <Navbar name="threads of tradition" />
      <div className="flex justify-center flex-col pt-7 items-center">
        <img
          src={props.bgimg}
          alt="bg img"
          className="xxs:pt-7 mix-blend-multiply w-[60%]"
        />
        <div className="flex xxs:flex-col md:flex-row items-center bg-white xl:w-[40%] font-raleway xxs:mt-7 xxs:py-5 xxs:px-7 justify-around text-center">
          <h2>FREE SHIPPING</h2>
          <p className=" xxs:border-b-2 md:border-r-2 md:border-b-0 border-gray-400 ">
            For international order above AUD $225.
          </p>
          <div>
            <p className="xxs:pt-3">Across india for orders above Rs. 1000.</p>
          </div>
        </div>
      </div>
      <div className="  mt-[5rem] pl-[15rem]">
        <p className="font-caveat text-3xl">New Arrivals</p>
      </div>

      <div className=" flex overflow- scroll-container   mx-[25rem]">
        {listOfDress.map((dress) => {
          return <Cards key={dress.data.id} dressData={dress} />;
        })}
      </div>
      <div className="flex justify-center items-center my-[5rem] ">
        <div>______________________</div>
        <div>
          <p className="mt-3 mx-2 font-caveat text-3xl">shop now</p>
        </div>
        <div>______________________</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
