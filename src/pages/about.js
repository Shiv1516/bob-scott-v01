import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const about = () => {
  return (
    <>
      <Head>
        <title>Bob & Scott - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header className="pa fc2" />
      <section className="about-hero df bg5">
        <div className="about-hero-box wrapper df aie jcc fc1 mt32">
          <h2 className="about-he inner-page-heading fc5 ff2 fw5 tac mb24">
            <span className="fc2">
              About <br />
            </span>
            Bob And Scott
          </h2>
        </div>
      </section>
      <div className="breadcrum ptb24 h-center">
        <ul className="breadcrum-list fc2 df fs18">
          <li className="bredcrum-item">
            <Link href="/home" className="category-item ttu plr16 v-center">
              Home <MdKeyboardArrowRight className="ml8" />
            </Link>
          </li>
          <li className="bredcrum-item">About-Us</li>
        </ul>
      </div>
      <section className="abouts-about ptb72 bg5">
        <div className="abouts-about-section df">
          <div className="abouts-about-left flx50">
            <div className="about-left-content mtb32 br2 bg1 ptb24 plr48 fs14">
              <h2 className=" about-left-heading fs22 fw6 mb24 fc2">
                About Company
              </h2>
              <p className="content-pairagraph lh30 fs16 fc6 mb16 taj">
                At our furniture store, we pride ourselves on offering only the
                finest quality furniture to elevate your living spaces. Our
                commitment to excellence begins with the careful selection of
                materials, ensuring each piece is crafted with precision and
                durability in mind. From solid hardwoods to premium upholstery
                fabrics, every detail is chosen with your comfort and
                satisfaction in mind.
              </p>
              <p className="content-pairagraph lh30 fs16 fc6 mb16 taj">
                Discover the difference that quality furniture can make in your
                home. With timeless designs and meticulous craftsmanship, our
                collection embodies both elegance and functionality. Whether
                you're furnishing a cozy bedroom retreat or creating a welcoming
                dining area for family gatherings, our curated selection of
                high-quality furniture pieces is designed to enhance your
                lifestyle and withstand the test of time.
              </p>
              <p className="content-pairagraph lh30 fs16 fc6 mb16 taj">
                Investing in quality furniture isn't just about aesthetics; it's
                about investing in the comfort and well-being of your family.
                Experience the difference of furniture that's built to last,
                providing both style and support for years to come. From classic
                pieces that exude sophistication to modern designs that embrace
                versatility, our range offers something to suit every taste and
                space, ensuring your home reflects your unique personality and
                lifestyle.
              </p>
            </div>
          </div>
          <div className="abouts-about-right flx1"></div>
        </div>
      </section>
      <section className="vision ptb72 brd-b1">
        <div className="vision-container ptb40 df fww aic">
          <div className="vision-box flx60 pr ptb16 pr16 brd3">
            <div className="vision-image df aft pr">
              <img src="images/1x1-03.webp" alt="1x1-05" className="w100 df" />
            </div>
            <h className="vision-heading heading pa t0 fc1 zi3 ttu w100 tac">
              our Vision
            </h>
          </div>
          <div className="vision-card flx40 fc2 plr32">
            <div className="vision-text-section df mb32">
              <div className="vision-cards">
                <img
                  src="images/svg-icon/vision.svg"
                  alt=""
                  className="p16 bg4 br50"
                />
              </div>
              <div className="vision-card-content mb24 plr32">
                <h2 className="vision-card-heading fs22 fw6 mb16">Vision</h2>
                <p className="vision-card-subheading lh24 fs18">
                  Sparking urban luxury with bold, trendsetting designs that
                  elevate the art of living.
                </p>
              </div>
            </div>
            <div className="vision-text-section df mb32">
              <div className="vision-cards">
                <img
                  src="images/svg-icon/mission.svg"
                  alt=""
                  className="p16 bg4 br50"
                />
              </div>
              <div className="vision-card-content mb24 plr32">
                <h2 className="vision-card-heading fs22 fw6 mb16">Mission</h2>
                <p className="vision-card-subheading lh24 fs18">
                  Curating exceptional furnishings that fuse style and function,
                  transforming homes into chic masterpieces.
                </p>
              </div>
            </div>
            <div className="vision-text-section df mb32">
              <div className="vision-cards">
                <img
                  src="images/svg-icon/goal.svg"
                  alt=""
                  className="p16 bg4 br50"
                />
              </div>
              <div className="vision-card-content mb24 plr32">
                <h2 className="vision-card-heading fs22 fw6 mb16">Goal</h2>
                <p className="vision-card-subheading lh24 fs18">
                  Create iconic living spaces by providing top-tier furnishings
                  that inspire, uplift, and redefine luxury living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default about;
