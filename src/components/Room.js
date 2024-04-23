import React from "react";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Room = ({ className }) => {
  return (
    <section className={`room ptb72 ${className}`}>
      <div className="room-section ptb40 wrapper tac fc2 fw5">
        <h2 className="room-box-heading ls1 mt40 mb24 heading">Category</h2>
        <p className="room-box-subtext ttu df jcc mb24">
          <span className="df">
            See All
            <MdOutlineArrowRightAlt className="arrow-icon ml4 transit2" />
          </span>
        </p>
        <div className="room-box-images df fww mt40 fc1">
          <div className="rooms-images flx33 tac mtb24 pr">
            <Link href="/sofa" className="room-box-image aft pr mlr32 mb32">
              <img
                src="images/sofa-1x1-01.webp"
                alt="sofa-1x1"
                className="w100 df transit2"
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu">Sofa</h2>
              </div>
            </Link>
          </div>
          <div className="rooms-images flx33 tac mtb24 pr">
            <Link href="/chair" className="room-box-image aft pr mlr32 mb32">
              <img
                src="images/chair-1x1-01.webp"
                alt="chair-1x1"
                className="w100 df transit2"
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu">Chair</h2>
              </div>
            </Link>
          </div>
          <div className="rooms-images flx33 tac mtb24 pr df">
            <Link href="/bed" className="room-box-image aft pr mlr32 mb32 df">
              <img
                src="images/bed-1x1-01.webp"
                alt="bed-1x1"
                className="w100 df transit2 ofc"
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu">Bed</h2>
              </div>
            </Link>
          </div>
          <div className="rooms-images flx33 tac mtb24 pr df">
            <Link
              href="/bedTable"
              className="room-box-image aft pr mlr32 mb32 df"
            >
              <img
                src="images/bedTable-1x1-01.webp"
                alt="bedTable-1x1"
                className="w100 df transit2 ofc"
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu">Bed-Table</h2>
              </div>
            </Link>
          </div>
          <div className="rooms-images flx33 tac mtb24 pr df">
            <Link
              href="/wardrobe"
              className="room-box-image aft pr mlr32 mb32 df"
            >
              <img
                src="images/wardrobe-1x1-01.webp"
                alt="wardrobe-1x1"
                className="w100 df transit2"
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu">wardrobe</h2>
              </div>
            </Link>
          </div>
          <div className="rooms-images flx33 tac mtb24 pr df">
            <Link
              href="/cabinet"
              className="room-box-image aft pr mlr32 mb32 df"
            >
              <img
                src="images/cabinet-1x1-01.webp"
                alt="cabinet-1x1"
                className="w100 df transit2"
              />
              <div className="room-iamge-description pa zi3">
                <h2 className="room-image-name fw6 ttu">cabinet</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
