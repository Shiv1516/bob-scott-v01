import React from "react";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Storage = () => {
  return (
    <section className="storage ptb72 bg5">
      <div className="storage-container wrapper fc2 fw5 ptb40">
        <h2 className="storage-heading heading mb32 ff2">
          Our <span className="fc5">Stores</span>
        </h2>
        <div className="storage-box-container df fww">
          <div className="storage-box flx50 v-center mtb40">
            <Link href="/" className="storage-box-image mr24">
              <img
                src="images/storage-img-01.jpeg"
                alt="modern-lamp"
                className="w100"
              />
            </Link>
            <div className="storage-box-content fs20 pl32">
              <h2 className="storage-box-content-heading fs32 mb24 ff2">
                Hamburg
              </h2>
              <p className="storage-box-content-subtext mb24 lh24">
                Sølve Store,
                <br /> 22765 Hamburg
              </p>
              <span className="direction df">
                {" "}
                Get Directions{" "}
                <MdOutlineArrowRightAlt className="arrow-icon ml4 transit2" />
              </span>
            </div>
          </div>
          <div className="storage-box flx50 v-center mtb40">
            <Link href="/" className="storage-box-image mr24">
              <img
                src="images/storage-img-02.jpg"
                alt="modern-lamp"
                className="w100"
              />
            </Link>
            <div className="storage-box-content fs20 pl32">
              <h2 className="storage-box-content-heading fs32 mb24 ff2">
                Lisbon
              </h2>
              <p className="storage-box-content-subtext mb24 lh24">
                Sølve Store,
                <br />
                1049 Lisbon
              </p>
              <span className="direction v-center">
                {" "}
                Get Directions{" "}
                <MdOutlineArrowRightAlt className="arrow-icon ml4 transit2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storage;
