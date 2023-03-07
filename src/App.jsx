import React from "react";
import Navbar from "./Components/UI/Navbar";
import { useState } from "react";
import imagedata from "./Data/Data";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-red-500 h-[80vh] ">
        <div className="bg-yellow-400 h-[70vh] w-[80%] max-sm:w-full mx-auto mt-4">
          {/* {imagedata.map((image) => (
            <img src={image.mainImage} />
          ))} */}
        </div>
      </main>
    </>
  );
}

export default App;
