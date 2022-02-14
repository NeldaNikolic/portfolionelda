import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const NavLink = (props) => {
  let animate = { opacity: 0, y: -40 };
  let animating = { opacity: 1, y: 0 };

  return (
    <nav>
      <ul>
        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
          <a href="/">Home</a>
        </motion.li>

        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
          <Link to="/About">About</Link>
        </motion.li>

        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
          <Link to="/Contact">Contact</Link>
        </motion.li>

        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
        <Link to="/Portfolio">Portfolio</Link>
          
        </motion.li>

        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
         <Link to="/">Resume</Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default NavLink;
