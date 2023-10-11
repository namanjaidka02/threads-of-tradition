import React from "react";
import Cards from "../cards/index";
import Navbar from "../../navbar/index";
import img1 from "../../../images/img1.jpeg";
import img2 from "../../../images/img2.jpeg";
import img3 from "../../../images/img3.jpeg";
import img4 from "../../../images/img4.jpeg";
import img5 from "../../../images/img5.jpeg";

const Home = (props) => {
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
      <div>
        {" "}
        <Cards img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} />
      </div>
    </div>
  );
};

export default Home;
