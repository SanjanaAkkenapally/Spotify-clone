import React , { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Displaynavbar = () => {
  const navigate = useNavigate();
  const getLinkClass = (isActive) =>`text-[15px] px-4 py-1 rounded-2xl ${isActive ? 'bg-white text-black' : 'bg-black text-white'}`;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-[#242424] my-2 mx-2 py-3 flex items-center justify-between">
      <div className="flex gap-2 px-4">
        <i onClick={() => navigate(-1)} className="bi bi-arrow-bar-left text-xl cursor-pointer rounded-full bg-black px-2 py-2"></i>
        <i onClick={() => navigate(1)} className="bi bi-arrow-bar-right text-xl cursor-pointer rounded-full bg-black px-2 py-2"></i>
      </div>
      <div className=" hidden md:flex gap-3 mx-3  ">
        <NavLink  to="/albums" className={({ isActive }) => getLinkClass(isActive)}>  Albums </NavLink>
       <NavLink  to="/explore" className={({ isActive }) => getLinkClass(isActive)}>  Explore Premium </NavLink>
        <NavLink to="/install" className={({ isActive }) => getLinkClass(isActive)}> Install App </NavLink>
        <NavLink to="/acount"  className={({ isActive }) => `px-2 flex items-center w-7 h-7 justify-center rounded-full ${isActive ? 'bg-white text-black' : 'bg-indigo-700 text-black' }` }> S</NavLink>
      </div>

      <div className="md:hidden flex items-center relative  ">
        <button   onClick={() => setIsDropdownOpen(!isDropdownOpen)}  className="text-white px-4 py-2 bg-black rounded-md  mr-2 font-bold" > Menu </button>
 
        {isDropdownOpen && (
          <div className="absolute top-full right-0 bg-[#242424] shadow-lg rounded-md mt-2 py-2 w-48">
            <NavLink to="/albums"  className={({ isActive }) =>  `block px-4 py-2 ${isActive ? 'bg-white text-black' : 'text-white'}`  }  onClick={() => setIsDropdownOpen(false)}>  Albums </NavLink>
            <NavLink to="/explore"  className={({ isActive }) =>  `block px-4 py-2 ${isActive ? 'bg-white text-black' : 'text-white'}`  }  onClick={() => setIsDropdownOpen(false)}>  Explore Premium </NavLink>

            <NavLink to="/install" className={({ isActive }) =>`block px-4 py-2 ${isActive ? 'bg-white text-black' : 'text-white'}`} onClick={() => setIsDropdownOpen(false)}> Install App  </NavLink>
            <NavLink  to="/acount"  className={({ isActive }) =>  `block px-4 py-2 ${isActive ? 'bg-white text-black' : 'text-white'}`}  onClick={() => setIsDropdownOpen(false)}>  Account</NavLink>
          </div>
        )}
      </div>
    </div>


  );
};

export default Displaynavbar;


// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Displaynavbar = () => {
//   const navigate = useNavigate();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const getLinkClass = (isActive) =>
//     `text-[15px] px-4 py-1 rounded-2xl ${
//       isActive ? 'bg-white text-black' : 'bg-black text-white'
//     }`;

//   return (
//     <div className="bg-[#242424] my-2 mx-2 py-3 flex items-center justify-between">
//       {/* Navigation Arrows */}
//       <div className="flex gap-2 px-4">
//         <i
//           onClick={() => navigate(-1)}
//           className="bi bi-arrow-bar-left text-xl cursor-pointer rounded-full bg-black px-2 py-2"
//         ></i>
//         <i
//           onClick={() => navigate(1)}
//           className="bi bi-arrow-bar-right text-xl cursor-pointer rounded-full bg-black px-2 py-2"
//         ></i>
//       </div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex gap-3 mx-3">
//         <NavLink to="/albums" className={({ isActive }) => getLinkClass(isActive)}>
//           Albums
//         </NavLink>
//         <NavLink to="/explore" className={({ isActive }) => getLinkClass(isActive)}>
//           Explore Premium
//         </NavLink>
//         <NavLink to="/install" className={({ isActive }) => getLinkClass(isActive)}>
//           Install App
//         </NavLink>
//         <NavLink
//           to="/account"
//           className={({ isActive }) =>
//             `px-2 flex items-center w-7 h-7 justify-center rounded-full ${
//               isActive ? 'bg-white text-black' : 'bg-indigo-700 text-black'
//             }`
//           }
//         >
//           S
//         </NavLink>
//       </div>

//       {/* Mobile Dropdown */}
//       <div className="md:hidden flex items-center relative">
//         <button
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="text-white px-4 py-2 bg-black rounded-md"
//         >
//           Menu
//         </button>
//         {isDropdownOpen && (
//           <div className="absolute top-full right-0 bg-[#242424] shadow-lg rounded-md mt-2 py-2 w-48">
//             <NavLink
//               to="/albums"
//               className={({ isActive }) =>
//                 `block px-4 py-2 ${isActive ? 'bg-white text-black' : 'text-white'}`
//               }
//               onClick={() => setIsDropdownOpen(false)}
//             >
//               Albums
//             </NavLink>
//             <NavLink
//               to="/explore"
//               className={({ isActive }) =>
//                 `block px-4 py-2 ${isActive ? 'bg-white text-black' : 'text-white'}`
//               }
//               onClick={() => setIsDropdownOpen(false)}
//             >
//               Explore Premium
//             </NavLink>
//             <NavLink
//               to="/install"
//               className={({ isActive }) =>
//                 `block px-4 py-2 ${isActive ? 'bg-white text-black' : 'text-white'}`
//               }
//               onClick={() => setIsDropdownOpen(false)}
//             >
//               Install App
//             </NavLink>
//             <NavLink
//               to="/account"
//               className={({ isActive }) =>
//                 `block px-4 py-2 ${isActive ? 'bg-white text-black' : 'text-white'}`
//               }
//               onClick={() => setIsDropdownOpen(false)}
//             >
//               Account
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Displaynavbar;

