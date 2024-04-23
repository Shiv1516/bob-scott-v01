import React from "react";
import Link from "next/link";

const HomeIntro = () => {
  return (
    <section className="homeintro ptb72 bg5">
      <div className="homeintro-container wrapper df fww fc2 fw5 ptb40">
        <div className="homeintro-box flx50">
          <h2 className="homeintro ff2 heading plr16">
            About
            <br />
            <span className="fc5">
              Bob <span className="small-text db">And</span> Scott
            </span>
          </h2>
        </div>
        <div className="homeintro-content flx50 plr16">
          <p className="content-pairagraph lh30 fs20 fc6 mb32">
            At our furniture store, we pride ourselves on offering only the
            finest quality furniture to elevate your living spaces. Our
            commitment to excellence begins with the careful selection of
            materials, ensuring each piece is crafted with precision and
            durability in mind. From solid hardwoods to premium upholstery
            fabrics, every detail is chosen with your comfort and satisfaction
            in mind.
          </p>
          <p className="content-pairagraph lh30 fs20 fc6 mb32">
            Discover the difference that quality furniture can make in your
            home. With timeless designs and meticulous craftsmanship, our
            collection embodies both elegance and functionality. Whether you're
            furnishing a cozy bedroom retreat or creating a welcoming dining
            area for family gatherings, our curated selection of high-quality
            furniture pieces is designed to enhance your lifestyle and withstand
            the test of time.
          </p>
          <Link
            href="/about"
            className="homeintro-button brd2 br50 transit2 fc-h1 zi2 ofh aft pr ls1 ptb16 plr32"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
