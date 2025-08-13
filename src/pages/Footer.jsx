import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----------left section------- */}

        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* ----------Center Section ------------ */}

        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
           <NavLink to = "/"> <li> Home</li> </NavLink>
           <NavLink to = "/contact"> <li>Contact us</li> </NavLink>
           <NavLink to = "/about"> <li>About us</li> </NavLink>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* -------------right section---------- */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-000-000-0000</li>
            <li>somammahi@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* --------Copyright text------ */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
