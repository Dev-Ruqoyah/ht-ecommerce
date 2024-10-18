"use client";

import { Button, Navbar } from "flowbite-react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaAmazon, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar fluid rounded className="py-5">
      <Navbar.Brand>
        <Link to={"/"}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <FaAmazon/>
          </span>
        </Link>
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
            <FaSearch/>
            Search
            </span>
            <FaUser/>
            <FaCartShopping/>
            
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
            <Link to={"/"}>All</Link>
        </Navbar.Link>
        <Navbar.Link href="#">Todays' deal</Navbar.Link>
        <Navbar.Link href="#">Gift Cards</Navbar.Link>
        <Navbar.Link href="#">Registry & Gifting</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
