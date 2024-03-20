import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-700 text-2xl font-bold">
            <span>&lt;</span> <span className="text-white">Pass</span>Wordrobe
            <span>/&gt;</span>
          </span>
        </div>
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/depeqmsz.json"
            trigger="hover"
            colors="primary:#15803D"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold text-green-700" href="#">
              Home
            </a>
            <a className="hover:font-bold text-green-700" href="#">
              About
            </a>
            <a className="hover:font-bold text-green-700" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// in this code I am not getting any output in the wqebpage maybe because of lordicon html tag, make it correct and show in the navbar

export default Navbar;
