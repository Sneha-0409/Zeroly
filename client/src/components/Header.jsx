// import React, { useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import logo from "../assets/Zerolylogo.png";

// const Header = () => {
//   const { userInfo, logout } = useContext(AuthContext) || {};
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     if (typeof logout === "function") {
//       logout();
//       navigate("/login");
//     } else {
//       console.warn("Logout function not found in AuthContext.");
//       navigate("/login");
//     }
//   };

//   const baseLinkClasses =
//     "text-lg font-semibold transition duration-200 ease-in-out relative group";
//   const navLinkColors = "text-green-700 hover:text-green-900";
//   const navLinkActiveUnderline = "border-b-2 border-green-700 pb-1";

//   const baseButtonClasses =
//     "px-6 py-2 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105";
//   const primaryButtonClasses = `${baseButtonClasses} bg-green-600 text-white hover:bg-green-700 focus:ring-green-400 focus:ring-offset-white`;
//   const secondaryButtonClasses = `${baseButtonClasses} bg-green-700 text-white hover:bg-green-800 focus:ring-green-500 focus:ring-offset-white`;
//   const redButtonClasses = `${baseButtonClasses} bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 focus:ring-offset-white`;

//   return (
//     <header className="bg-white shadow-md py-4 px-4 md:px-8 lg:px-12 xl:px-16 sticky top-0 z-50 font-sans antialiased">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//           <img src={logo} alt="Zeroly Logo" className="h-10" />
//         </Link>

//         <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `${baseLinkClasses} ${navLinkColors} ${
//                 isActive ? navLinkActiveUnderline : ""
//               }`
//             }
//           >
//             Home
//             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//           </NavLink>
//         </nav>

//         <div className="flex items-center space-x-3 md:space-x-4">
//           {userInfo ? (
//             <>
//               <Link
//                 to="/profile"
//                 className="font-semibold text-green-700 hover:text-green-900 transition duration-200 ease-in-out text-lg hidden sm:inline"
//               >
//                 Hello, {userInfo.name || "User"}!
//               </Link>
//               <button onClick={handleLogout} className={redButtonClasses}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <div className="flex items-center space-x-3 md:space-x-4">
//               <Link to="/login" className={primaryButtonClasses}>
//                 Login
//               </Link>
//               <Link to="/register" className={secondaryButtonClasses}>
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>

//         <div className="md:hidden">
//           <button className="text-green-700 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2">
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// 1. Import your logo from the assets folder
import logo from "../assets/Zerolylogo.png";
import NotificationBtn from "./NotificationBtn"; // Import the notification button

const Header = () => {
  const { userInfo, logout } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof logout === "function") {
      logout();
      navigate("/login");
    } else {
      console.warn("Logout function not found in AuthContext.");
      navigate("/login");
    }
  };

  // --- Reusable Tailwind class strings from your friend's design ---
  const baseButtonClasses =
    "px-6 py-2 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105";
  // Corrected: Template literals (`) are now used correctly
  const primaryButtonClasses = `${baseButtonClasses} bg-green-600 text-white hover:bg-green-700 focus:ring-green-400`;
  const secondaryButtonClasses = `${baseButtonClasses} bg-green-700 text-white hover:bg-green-800 focus:ring-green-500`;
  const redButtonClasses = `${baseButtonClasses} bg-red-500 text-white hover:bg-red-600 focus:ring-red-400`;

  const baseLinkClasses =
    "text-lg font-semibold transition duration-200 ease-in-out relative group";
  const navLinkColors = "text-green-700 hover:text-green-900";
  const navLinkActiveUnderline = "border-b-2 border-green-700 pb-1";

  return (
    <header className="bg-white shadow-md py-4 px-4 md:px-8 sticky top-0 z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* 2. Your logo is now used here */}
        <Link to="/">
          <img src={logo} alt="Zeroly Logo" className="h-10" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            // Corrected: Template literal (`) is now used for the className
            className={({ isActive }) =>
              `${baseLinkClasses} ${navLinkColors} ${
                isActive ? navLinkActiveUnderline : ""
              }`
            }
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </NavLink>
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4">
          {userInfo ? (
            <>
              <NotificationBtn />
              <Link
                to="/requests"
                className="font-semibold text-gray-700 hover:text-blue-500"
              >
                My Requests
              </Link>
              <Link
                to="/profile"
                className="font-semibold text-green-700 hover:text-green-900 transition duration-200 text-lg hidden sm:inline"
              >
                Hello, {userInfo.name || "User"}!
              </Link>
              <button onClick={handleLogout} className={redButtonClasses}>
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link to="/login" className={primaryButtonClasses}>
                Login
              </Link>
              <Link to="/register" className={secondaryButtonClasses}>
                Register
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button className="text-green-700 hover:text-green-900 focus:outline-none p-2">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
