import React from "react";
import Image from "next/image";
import {  FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Quicklinks = () => {
  return (
    <footer>
      <div className="h-fit bg-gradient-to-b from-violet-400 to-fuchsia-500">
        <div className=" grid mx-auto grid-cols-1 md:grid-cols-3 gap-36">
          <div>
            <div className="bg-white w-fit mx-auto mt-2 flex justify-center items-center ">
              <Image
                src={"/logo.png"}
                alt={"Logo"}
                width={150}
                height={100}
                className=""
              />{" "}
            </div>

            <h2 className="text-md font-normal mx-auto w-56 mt-2">
              {" "}
              <strong>ATME Solutions Pvt Ltd </strong> offers comprehensive IT
              training, CAD, medical coding, and visa-related services,
              specializing in cloud computing, cybersecurity, data science, and
              full stack development for career advancement
            </h2>

            <p className="mt-2  mx-auto w-56  font-bold">Working Hours</p>
            <p className="mt-2  mx-auto w-56  font-semibold">
              Mon - Sun: 6.00 am - 10.00 pm
            </p>
          </div>
          <div className="mt-14 flex flex-col gap-4 ">
            <h3 className="font-bold mb-4 ">Useful Links</h3>
            <ul className=" flex flex-col gap-3 font-semibold text-white">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#test-papers" className="hover:underline">
                  Test Papers
                </a>
              </li>
              <li>
                <a href="#team" className="hover:underline">
                  Our Team
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 mr-10 -ml-20">
         
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="font-medium">
          Prashanth Nagar, Vanasthalipuram, Hyderabad
            </p>
            <p className="mt-1">
              Email:{" "}
              <a
                href="mailto: info@atmesolutions.com"
                className="hover:underline font-medium "
              >
            info@atmesolutions.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:8466993320" className="hover:underline">
                +91 8466993320
              </a>
            </p>
            <p className="mt-1">
             Director :{" "}
<strong className="">K.SHIVA REDDY</strong>
 
              
            </p>
            <div className="mt-4 flex space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png"
                  alt="Facebook"
                  className="w-14 h-14"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="w-14 h-14 text-3xl"><FaSquareXTwitter /></button>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="w-14 h-14 text-3xl text-blue-600"><FaLinkedin /></button>
              
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                              <button className="w-14 h-14 text-3xl text-red-600"><IoLogoYoutube /></button>

      
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6 mt-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-red-400  flex justify-center items-center">
                <p className="mx-auto">&copy; {new Date().getFullYear()} Atme Solutions.Private.ltd All rights reserved.</p>
             
            </div>
    </footer>
  );
};

export default Quicklinks;
