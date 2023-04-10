import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/"><span className="ml-3 text-xl lg:font-extrabold md:font-bold sm:font-semibold text-white tracking-wider">CarrerZone</span></Link>
          <p className="mt-2 text-sm text-gray-500">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
          <div className='pt-5 md:w-20 w-16 lg:m-0 mx-auto'><img src="./assets/Icons/socialimg.png" alt="socail icon image"/></div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="footer-head-text">Company</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-text">About Us</a>
              </li>
              <li>
                <a className="footer-text">Work</a>
              </li>
              <li>
                <a className="footer-text">Latest News</a>
              </li>
              <li>
                <a className="footer-text">Careers</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="footer-head-text">Product</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-text">Prototype</a>
              </li>
              <li>
                <a className="footer-text">Plans & Pricing</a>
              </li>
              <li>
                <a className="footer-text">Customers</a>
              </li>
              <li>
                <a className="footer-text">Integrations</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="footer-head-text">Support</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-text">Help Desk</a>
              </li>
              <li>
                <a className="footer-text">Sales</a>
              </li>
              <li>
                <a className="footer-text">Become a Partner</a>
              </li>
              <li>
                <a className="footer-text">Developers</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="footer-head-text">Contact</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="footer-text">524 Broadway , NYC</a>
              </li>
              <li>
                <a className="footer-text">+1 777 - 978 - 5570</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <hr className='w-full mx-auto border-gray-700'></hr>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap justify-between items-center  sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left mb-2">@2023 CarrerZone. All Rights Reserved</p>
          <p className="text-gray-500 text-sm text-center sm:text-left">Powered by CarrerZone</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;