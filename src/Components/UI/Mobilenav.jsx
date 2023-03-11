import React from "react";
import iconclose from "../../assets/icon-close.svg";
import { motion } from "framer-motion";
const Mobilenav = (props) => {
  const { setModalstate } = props;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black/60 h-[150%] w-full z-30 fixed top-0 left-0 cursor-pointer "
        onClick={() => {
          setModalstate(false);
        }}
      />
      <motion.nav
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        className="absolute w-[75%] h-[150%] md:hidden lg:hidden bg-white left-0 top-0 z-[80] bottom-0"
      >
        <ul className="lg:hidden flex flex-col items-start mt-4 h-full gap-5 capitalize ml-8 font-bold">
          <img
            src={iconclose}
            alt="closeicon"
            className="h-8 w-8 cursor-pointer p-2 mb-16"
            onClick={() => {
              setModalstate(false);
            }}
          />

          <li>
            <a href="#">collection</a>
          </li>
          <li>
            <a href="#">men</a>
          </li>
          <li>
            <a href="#">women</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Mobilenav;
