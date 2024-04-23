import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero df">
      <div className="hero-box wrapper df aic jcc fdc fc1 mt32">
        <h2 className="hero-heading ff2 fw5 tac">DESIGN FURNITURE</h2>
        <Link
          href="/about"
          className="button br50 transit2 fc-h2 zi2 aft pr fw5 tac ls1 ptb16 plr32 brd1"
        >
          Best Quote
        </Link>
      </div>
    </div>
  );
};

export default Hero;
