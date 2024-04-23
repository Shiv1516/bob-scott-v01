import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Storage from "@/components/Storage";
import Help from "@/components/Help";

const chair = () => {
  return (
    <>
      <Head>
        <title>Bob & Scott - Chair</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Englebert&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header className="pa fc2" />
      <section className="shop-hero df bg5">
        <div className="shop-hero-container wrapper df aie jcc mb24">
          <h2 className="shop-hero-container-heading inner-page-heading fc2 ttu">
            chair
          </h2>
        </div>
      </section>

      <div className="category ptb24 h-center">
        <ul className="category-list fc2 df fs18">
          <li>
            <Link href="/sofa" className="category-item ttu plr16">
              Sofa
            </Link>
          </li>
          <li>
            <Link href="/bed" className="category-item ttu plr16">
              Bed
            </Link>
          </li>
          <li>
            <Link href="/chair" className="category-item ttu plr16 tdhu">
              chair
            </Link>
          </li>
          <li>
            <Link href="/cabinet" className="category-item ttu plr16">
              Cabinet
            </Link>
          </li>
          <li>
            <Link href="/bedTable" className="category-item ttu plr16">
              Bed table
            </Link>
          </li>
          <li>
            <Link href="/wardrobe" className="category-item ttu plr16">
              Wardrobe
            </Link>
          </li>
        </ul>
      </div>
      <section className="shop-items ptb72 bg5">
        <div className="feature-box-images wrapper df fww mt40">
          <div className="features-images flx33 tac mtb24">
            <Link href="/elegant" className="box-image mlr32 mb32">
              <img
                src="images/chair-img-01.webp"
                alt="feature-img"
                className="w100 df transit2"
              />
            </Link>
            <div className="feature-image-description">
              <h2 className="box-image-name fs18 fw6 mb8 ttu">MODERN CHAIR</h2>
              <p className="box-image-prive mb8">$ 249.00 USD</p>
              <p className="box-image-prive tdlh">$ 299.00 USD</p>
            </div>
          </div>
          <div className="features-images flx33 tac mtb24">
            <Link href="/elegant" className="box-image mlr32 mb32">
              <img
                src="images/chair-img-02.webp"
                alt="modern-lamp"
                className="w100 df transit2"
              />
            </Link>
            <div className="feature-image-description">
              <h2 className="box-image-name fs18 fw6 mb8 ttu">fancy CHAIR</h2>
              <p className="box-image-prive mb8">$ 199.00 USD</p>
            </div>
          </div>
          <div className="features-images flx33 tac mtb24">
            <Link href="/elegant" className="box-image mlr32 mb32">
              <img
                src="images/chair-img-03.webp"
                alt="modern-lamp"
                className="w100 df transit2"
              />
            </Link>
            <div className="feature-image-description">
              <h2 className="box-image-name fs18 fw6 mb8 ttu">RETRO CHAIR</h2>
              <p className="box-image-prive mb8">$ 399.00 USD</p>
            </div>
          </div>
        </div>
      </section>

      <Help className="bg4" />
      <Storage />
      <Footer />
    </>
  );
};

export default chair;
