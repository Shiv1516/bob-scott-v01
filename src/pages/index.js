import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const images = [
  "images/1x1-03.webp",
  "images/1x1-04.webp",
  "images/1x1-05.webp",
  "images/1x1-06.webp",
  "images/bed-1x1-01.webp",
  "images/cabinet-1x1-01.webp",
  // Add more image URLs here
];

const containerVariants = {
  initial: { y: "130vh" },
  animate: {
    y: "-150vh",
    transition: {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: { opacity: 0, y: "100vh" },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.1, transition: { duration: 0.3 } }, // Hover effect
};

const getRandomIndex = () => {
  return Math.floor(Math.random() * images.length);
};

const getRandomPosition = (usedPositions) => {
  const newLeft = Math.random() * (window.innerWidth - 100); // Image width is 100px
  const newTop = Math.random() * (window.innerHeight - 100); // Image height is 100px

  for (const pos of usedPositions) {
    if (
      newLeft > pos.left - 100 &&
      newLeft < pos.left + 100 &&
      newTop > pos.top - 100 &&
      newTop < pos.top + 100
    ) {
      return getRandomPosition(usedPositions); // Recursively try a new position
    }
  }

  return { left: newLeft, top: newTop };
};

const Home = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageData.length < 15) {
        const index = getRandomIndex();
        const position = getRandomPosition(
          imageData.map((item) => item.position)
        );
        setImageData((prevData) => [...prevData, { index, position }]);
      }
    }, 500); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [imageData]);

  return (
    <section className="entrance-page bg5 df pr ofh">
      <div className="entrance-page-container df jcc aic w100 fdc">
        <div className="logo-img zi3">
          <img src="images/logo.png" alt="logo" />
        </div>
        <Link
          href="/home"
          className="button-circle br50 transit2 tac jcc df fs20 aft pr fw6 mt12 zi3"
        >
          Enter
        </Link>
        <div className="df jcsb ma w100 pa">
          {imageData.map((item, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit" // Add exit variant
              style={{
                width: "100px",
                height: "100px",
                position: "absolute",
                left: `${item.position.left}px`,
                top: `${item.position.top}px`,
              }}
              whileHover="whileHover" // Apply hover effect
            >
              <motion.img
                src={images[item.index]}
                alt={`Image ${item.index}`}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
