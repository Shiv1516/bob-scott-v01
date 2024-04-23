import React from "react";
import Link from "next/link";

const Solved = () => {
  return (
    <section className="solved df pr ptb40">
      <div className="solved df aic jcc fww">
        <div className="contact-heading flx60 plr48 zi99">
          <h3 className="fs80 fc5 ff2 ">Feel free to drop us a message</h3>
        </div>
        {/* <div className="solved-imagees ofh">
          <img
            src="images/chair-1x1-01.webp"
            alt="chair-1x1"
            className="image-circle pa t0 l0 mt16 ml32"
          />
          <img
            src="images/1x1-05.webp"
            alt="1x1-img"
            className="image-circle pa b0 l0 mb16 ml32"
          />
          <img
            src="images/1x1-06.webp"
            alt="1x1-img"
            className="image-circle pa t0 r0 mt32 mr40"
          />
          <img
            src="images/1x1-04.webp"
            alt="1x1-img"
            className="image-circle pa b0 r0 mb32 mr48"
          />
          <img
            src="images/1x1-03.webp"
            alt="1x1-img"
            className="image-circle pa t0 mt48 image-circle-position2"
          />
          <img
            src="images/1x1-02.webp"
            alt="1x1-img"
            className="image-circle pa b0 mb48 image-circle-position2"
          />
          <img
            src="images/sofa-1x1-01.webp"
            alt="1x1-img"
            className="image-circle pa image-circle-position"
          />
        </div> */}
        <div className="form-section flx40 zi99 plr48">
          <form action="#" className="form plr32 ptb40 br8">
            <div className="input-fild mb16">
              <input
                type="text"
                className="h48 plr12 br4 w100"
                placeholder="Name..."
              />
            </div>
            <div className="input-fild mb16">
              <input
                type="number"
                className="h48 plr12 br4 w100"
                placeholder="Number..."
              />
            </div>
            <div className="input-fild mb16">
              <input
                type="email"
                className="h48 plr12 br4 w100"
                placeholder="Email..."
              />
            </div>
            <div className="input-fild mb24">
              <textarea
                className="plr12 pt8 br4 w100"
                rows="5"
                placeholder="Message..."
              ></textarea>
            </div>
            <Link
              href="/about"
              className="homeintro-button fc2 brd2 br50 transit2 fc-h1 zi2 ofh aft pr ls1 ptb16 plr32"
            >
              Submit
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Solved;
 