import { Link } from "react-router";
import { GrLanguage } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import categories from "../utils/navcategories";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaAngleLeft } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, seCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between  fixed top-0 left-0 w-full z-50 px-5  bg-white border border-b-gray-200">
        <div className="relative lg:hidden">
          <RxHamburgerMenu
            onClick={() => setOpen(true)}
            className="text-xl lg:hidden cursor-pointer"
          />
          {open && (
            <div className="fixed top-0 left-0 w-64 bg-white h-screen p-5 border-r border-gray-200">
              <button
                onClick={() => setOpen(null)}
                className="left-67 bg-white absolute border border-gray-200 p-2 rounded-full shadow-sm hover:text-violet-700 cursor-pointer"
              >
                <RxCross2 />
              </button>

              <ul className="space-y-3 text-violet-700 text-sm border-b pb-3 border-b-gray-200">
                <li>
                  <Link to="">Login</Link>
                </li>
                <li>
                  <Link to="">Sign up</Link>
                </li>
                <li>
                  <Link to="">Plans & Price</Link>
                </li>
              </ul>
              {/* hello */}

              <ul className="text-sm space-y-1 my-5">
                {categories.map((category, idx) => (
                  <li key={idx} className="text-gray-600">
                    <div
                      onClick={() => setOpenSubMenu(category)}
                      className="flex justify-between items-center p-2 hover:text-violet-700 hover:bg-violet-100 cursor-pointer duration-200 transition-all"
                    >
                      {category.name}
                      <MdKeyboardArrowRight className="text-sm mr-2 text-violet-700" />
                    </div>

                    {openSubMenu?.name === category.name && (
                      <div className="absolute top-0 left-0 w-64 h-full bg-white border border-gray-200 p-2">
                        <div
                          onClick={() => setOpenSubMenu(null)}
                          className="flex items-center gap-2 bg-gray-100 p-2 font-bold text-sm cursor-pointer"
                        >
                          <FaAngleLeft />
                          <span>Menu</span>
                        </div>

                        <ul className="mt-2 space-y-1">
                          {category.subCategories.map((sub, i) => (
                            <li
                              key={i}
                              className="text-gray-600 hover:text-violet-700 hover:bg-violet-100 p-1.5 pl-3 cursor-pointer duration-200 transition-all"
                            >
                              <Link to={sub.link}>{sub.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* hello */}
              <button className="border text-sm font-bold border-violet-700 px-3 py-2 rounded-md text-violet-700 mt-5 flex items-center gap-2">
                <GrLanguage className="text-lg" />
                <span>English</span>
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 ">
          <img src="/eduzeno.png" alt="" className="md:w-52 w-40 " />
          <div className="relative hidden lg:block">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-600 text-sm"
            >
              Explore
            </button>

            {openMenu && (
              <div className="bg-white   absolute top-11.5 left-0 border border-gray-200 w-64">
                <p className="text-sm font-semibold  text-gray-600 p-3">
                  Exploring your targeted course
                </p>
                <ul className="text-sm  space-y-1">
                  {categories.map((category, idx) => (
                    <li
                      onMouseEnter={() => setOpenSubMenu(category)}
                      onMouseLeave={() => setOpenSubMenu(null)}
                      key={idx}
                      className="text-gray-600 hover:text-violet-700 hover:bg-violet-100 p-1.5 pl-3  duration-200 transition-all cursor-pointer"
                    >
                      <Link
                        to={category.link}
                        className="flex justify-between items-center"
                      >
                        {category.name}

                        <MdKeyboardArrowRight className="text-sm mr-2 text-violet-700" />
                      </Link>
                      {openSubMenu?.name === category.name && (
                        <div className="bg-white  absolute top-0 left-62 border border-gray-200 w-64 h-full">
                          <ul className="text-sm  space-y-1">
                            {category.subCategories.map((category, idx) => (
                              <li
                                key={idx}
                                className="text-gray-600 hover:text-violet-700 hover:bg-violet-100 p-1.5 pl-3  duration-200 transition-all cursor-pointer"
                              >
                                <Link to={category.link}>{category.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="border rounded-full border-gray-300 py-1 lg:flex hidden items-center px-3 relative ">
            <CiSearch />
            <input
              type="search"
              className="outline-none px-2 py-1  w-[400px]"
              placeholder="Search your course"
            />
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <Link to="/" className="text-sm text-gray-600 hidden lg:block">
            Plans & Price{" "}
          </Link>
          <Link to="/" className="text-sm text-gray-600 hidden lg:block">
            Eduzeno Business{" "}
          </Link>

          <div className="lg:hidden mt-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="cursor-pointer">
              <CiSearch className="text-xl " />
            </button>
             {searchOpen && (
    <div className="fixed top-0 pt-5 left-0 w-full h-full bg-white border border-gray-300  z-50">
      <div className="flex items-center px-3 py-1">
        <CiSearch className="text-lg mr-2" />
        <input
          type="search"
          className="outline-none w-full"
          placeholder="Search your course"
        />
        <button className="text-lg mr-2 hover:text-violet-700  rounded-full border border-gray-200 p-1 cursor-pointer ">

        <RxCross2 onClick={()=>setSearchOpen(false)}  />
        </button>
        
      </div>
    </div>
  )}
          </div>
<div className="relative">

          <button 
          onMouseEnter={()=>seCartOpen(true)}
          onMouseLeave={()=>seCartOpen(false)}
            >
            <BsCart3 className="text-xl" />
          </button>
          {
            cartOpen&& <div className="bg-white p-5 absolute lg:-right-20 right-0 top-12 w-52 border border-gray-300 flex justify-center items-center h-32 text-sm">
              <p>Your cart is empty</p>
            </div>
          }
          </div>
          <button className="border text-sm font-bold border-violet-700 px-4 py-2 rounded-md text-violet-700 hidden lg:block">
            Log in
          </button>
          <button className=" text-sm font-bold bg-violet-700 px-4 py-2 rounded-md text-white hidden lg:block">
            Sign up
          </button>
          <button className="border text-sm font-bold border-violet-700 px-3 py-2 rounded-md text-violet-700 hidden lg:block">
            <GrLanguage className="text-lg" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
