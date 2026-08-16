import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 mt-2 text-xl border border-blue-500 ">
      <h1 className="font-semibold">Jhola Bazaar</h1>
      <div className="flex gap-3">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "text-blue-400 " : "";
        }}
        to={"Home"}
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "text-blue-400" : "";
        }}
        to={"shop"}
        end
      >
        shop
      </NavLink>
      <NavLink
      className={({isActive})=>{
        return isActive? "text-blue-400":"";
      }
    }

    to={"About"}
    end
      >About</NavLink>
      </div>
      <div>
        yaha cart hai
      </div>
    </div>
  );
};

export default Navbar;
