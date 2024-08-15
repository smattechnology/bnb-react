import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav class="hidden sm:hidden md:block lg:block xl:block 2xl:block">
        <div class="flex bg-gray-900 text-white">
          <div class="flex-1 ps-10 py-1 flex items-center justify-start gap-3">
            <span class="text-custom-small">Email: example@example.com</span>
            <span class="text-custom-small">Hotline: +88 01711122233</span>
          </div>
          <div class="flex-1 pe-10 py-1 flex items-center justify-end gap-3">
            <span class="text-custom-small">Contact Us</span>
            <span class="fa-brands fa-facebook-f"></span>
            <span class="fa-brands fa-instagram"></span>
          </div>
        </div>

        <div class="flex justify-between items-center w-full px-5 py-5 bg-gray-800">
          <div class="flex-shrink-0 flex flex-col justify-center items-center gap-2">
            <span class="text-white text-2xl font-bold ml-1 lobster-regular">
              BRAND & BEAUTY
            </span>
            <span class="farsan-regular text-white">
              100% authentic beauty cosmetic
            </span>
          </div>

          <div class="flex-grow text-center px-5">
            <div class="w-full rounded flex justify-center items-center">
              <input
                class="w-full p-2 focus:outline-none focus:border-transparent"
                type="search"
                placeholder="Search....."
              />
              <span
                class="py-2 px-4 text-white material-symbols-outlined"
                style={{ backgroundColor: "#f05454" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
              </span>
            </div>
          </div>

          <div class="flex-shrink-0 flex justify-center items-center text-center text-white gap-4 px-4">
            <div class="flex flex-col justify-center items-center gap-2">
              <div class="w-auto">
                <i class="fa-solid fa-cart-shopping fa-xl"></i>
              </div>
              <div class="w-auto flex flex-col justify-center items-center gap-1">
                <div class="w-full">
                  <span>My Cart</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center gap-2">
              <div class="w-auto">
                <i class="fa-solid fa-user fa-xl"></i>
              </div>
              <div class="w-auto flex flex-col justify-center items-center gap-1">
                <div class="w-full flex justify-center items-center gap-1">
                  <a href="">Login</a>
                  <span>/</span>
                  <a href="">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full flex justify-center items-center gap-2 border-b-2 p-2"
          style={{ borderColor: "#f05454" }}
        >
          <div class="">Category</div>
          <div class="">Category</div>
          <div class="">Category</div>
          <div class="">Category</div>
        </div>
      </nav>
      {/* <div class="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden py-2 px-3">
        <div class="flex justify-between items-center w-full">
          <div class="flex justify-center items-center w-auto">
            <img
              class="h-10 w-autos object-cover"
              src="./asset/img/bnb_logo.jpg"
              alt="BNB LOGO"
            />
            <span>Brand & Beauty</span>
          </div>

          <span class="toggleAction" onclick="toggleOffcanvas()">
            <i class="fa-solid fa-bars"></i>
          </span>
        </div>

        <div
          id="offCanvasMenu"
          onclick="closeMenu(event)"
          class="toggleAction fixed top-0 right-0 h-full w-0 overflow-hidden bg-gray-800 bg-opacity-25 backdrop-blur-lg shadow-lg transition-all duration-300"
        >
          <div class="h-full w-60 sm:w-96 top-0 right-0 fixed bg-gray-800">
            <span
              onclick="toggleOffcanvas()"
              class="toggleAction p-3 border-2 border-red-800 text-red-500 absolute top-6 right-6"
            >
              <i class="fa-solid fa-xmark"></i>
            </span>

            <div class="w-full h-full px-8 py-16 relative">
              <div class="w-full h-auto flex flex-col gap-y-1 mt-6">
                <div class="w-full p-2">Hello world</div>
                <div class="w-full p-2">Hello world</div>
                <div class="w-full p-2">Hello world</div>
                <div class="w-full p-2">Hello world</div>
                <div class="w-full p-2">Hello world</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
