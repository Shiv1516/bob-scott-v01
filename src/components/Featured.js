import React from "react";
import Link from "next/link";

const Featured = () => {
  return (
    <section className="feature ptb72 bg4">
      <div className="feature-section ptb40 wrapper fc2 fw5">
        <h2 className="feature-box-heading ff2 ls1 tac mtb40 heading">
          Collections
        </h2>
        <div className="feature-box-images df fww mt40">
          <div className="features-images flx33 tac mtb24 pr">
            <Link
              href="/chair"
              className="box-image mlr32 mb32 room-box-image aft pr"
            >
              <img
                src="images/chair-img-01.webp"
                alt="chair-img-01"
                className="w100 df transit2 "
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu fc1">MODERN CHAIR</h2>
              </div>
            </Link>

            {/* <div className="feature-image-description">
              <h2 className="box-image-name fs18 fw6 mb8">MODERN CHAIR</h2>
            </div> */}
          </div>
          <div className="features-images flx33 tac mtb24 pr">
            <Link
              href="/sofa"
              className="box-image mlr32 mb32 room-box-image aft pr"
            >
              <img
                src="images/sofa-img-01.webp"
                alt="sofa-img-01"
                className="w100 df transit2"
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu fc1">latest Sofa</h2>
              </div>
            </Link>
          </div>
          <div className="features-images flx33 tac mtb24 pr">
            <Link
              href="/bed"
              className="box-image mlr32 mb32 room-box-image aft pr"
            >
              <img
                src="images/bed-img-03.webp"
                alt="bed-img-03"
                className="w100 df transit2"
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu fc1">styles Bed</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
