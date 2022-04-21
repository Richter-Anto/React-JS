// const Menu = () => {
//   return (
//     <div className="menuBlock">
//       <ul>
//         <li>
//           <a href="" className="active">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="">About</a>
//         </li>
//         <li>
//           <a href="">Login</a>
//         </li>
//         <li>
//           <a href="">Sign up</a>
//         </li>
//         <li>
//           <a href="">Contact</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Menu;

//second task
import { useRef, useState } from "react";

const Menu = props => {
  let dropdownRef = useRef();
  let [toggle, setToggle] = useState(true);

  let handleToggle = e => {
    // e.preventDefault();
    setToggle(!toggle);
    if (toggle === true) {
      dropdownRef.current.classList.add("open");
      console.log(true);
    } else {
        dropdownRef.current.classList.remove("open");
        console.log(false);
    }
  };
  return (
    <div className="menuBlock">
      <ul className="ul1">
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="#" onMouseEnter={handleToggle} onMouseOut={handleToggle}>
            profile
          </a>
          <ul className="dropdown" ref={dropdownRef}>
            <li>
              <a href="#">update password</a>
            </li>
            <li>
              <a href="#">update account</a>
            </li>
            <li>
              <a href="#">upload profile photo</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
