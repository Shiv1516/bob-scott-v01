import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";

const gallery = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    // Calculate transformation values based on mouse position
    const translateX = (-(mouseX - width / 2) / width) * 180;
    const translateY = (-(mouseY - height / 2) / height) * 180;

    // Apply transformation to the container or individual images
    container.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };

  return (
    <>
      <Head>
        <title>Bob & Scott - Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Englebert&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="ofh">
        <Header className="fc2 zi3 pf" />
        <section
          className="gallery-section pf "
          onMouseMove={handleMouseMove}
          ref={containerRef}
        >
          <div className="gallery-flex df aic jcc">
            <ul className="gallery-list flx1 tac fdc df">
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/chair-img-01.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bed-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/sofa-img-02.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/cabinet-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/wardrobe-img-02.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
            </ul>
            <ul className="gallery-list flx1 tac fdc df">
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/wardrobe-img-01.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/wardrobe-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bed-img-01.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/chair-img-02.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
            </ul>
            <ul className="gallery-list flx1 tac fdc df">
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bedTable-img-01.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/chair-img-01.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/chair-img-02.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/chair-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bed-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
            </ul>
            <ul className="gallery-list flx1 tac fdc df">
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/chair-img-02.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bedTable-img-02.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/cabinet-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/chair-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
            </ul>
            <ul className="gallery-list flx1 tac fdc df">
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/wardrobe-img-02.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bedTable-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bed-img-01.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bedTable-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/sofa-img-02.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
            </ul>
            <ul className="gallery-list flx1 tac fdc df">
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/cabinet-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/chair-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box ">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/wardrobe-img-03.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
              <li className="gallery-box">
                <Link href="/" className="gallery-box-img mlr32 mb32">
                  <img
                    src="images/bed-img-01.webp"
                    alt="feature-img"
                    className="w100 df transit2"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default gallery;
