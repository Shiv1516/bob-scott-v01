import Link from "next/link";
import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";

const Header = ({ className }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setNavbarOpen(!isNavbarOpen);

    const navbar = document.querySelector(".menu-inner");
    navbar.classList.toggle("open-nav", !isNavbarOpen);
  };
  return (
    <>
      <header className={`header-content w100 ${className}`}>
        <div className="header-box wrapper v-center jcsb ptb32 fs18 fw5">
          <div className="nav-left flx1 mb12">
            <Link href="/collections" className="nav-menu-link">
              <div className="navbar-menu-text ">Collection</div>
              <div className="navbar-menu-text-hover ">Collection</div>
            </Link>
          </div>
          <div className="web-logo flx1 h-center">
            <Link href="/home" className="logo">
              <img src="images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="nav-right v-center flx1 jce mb12">
            <Link href="tel://+91 7838353484" className="nav-menu-links mlr8">
              <div className="navbar-menu-texts v-center">
                <IoMdCall className="mr8 fs22" />
                {/* call */}
              </div>
            </Link>
            <Link
              href="mailto:bobscott@gmail.com"
              className="nav-menu-links mlr8"
            >
              <div className="navbar-menu-texts v-center">
                <MdMail className="mr8 fs22" />
                {/* Mail */}
              </div>
            </Link>
            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>
      <div className="menu-inner bg5 ptb40">
        <div className="menu-inner-section wrapper df fww fc2">
          <div className="inner-section flx40 df">
            <div className="inner-menu-list flx50">
              <h2 className="inner-menu-heading fs32 mb24">Imp. Links</h2>
              <ul className="menu-list">
                <li className="menu-item mb16">
                  <Link href="/about" className="inner-menu-link">
                    <div className="inner-menu-text ttu">About Us</div>
                    <div className="inner-menu-text-hover ttu">About Us</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/collections" className="inner-menu-link">
                    <div className="inner-menu-text ttu">COLLECTIONS</div>
                    <div className="inner-menu-text-hover ttu">COLLECTIONS</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/gallery" className="inner-menu-link">
                    <div className="inner-menu-text ttu">Lookbook</div>
                    <div className="inner-menu-text-hover ttu">Lookbook</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/blog" className="inner-menu-link">
                    <div className="inner-menu-text ttu">Blog</div>
                    <div className="inner-menu-text-hover ttu">Blog</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/faq" className="inner-menu-link">
                    <div className="inner-menu-text ttu">Faq</div>
                    <div className="inner-menu-text-hover ttu">Faq</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/contact" className="inner-menu-link">
                    <div className="inner-menu-text ">Contact us</div>
                    <div className="inner-menu-text-hover ">Contact us</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="inner-menu-list flx50">
              <h2 className="inner-menu-heading fs32 mb24 ttu">COLLACTION</h2>
              <ul className="menu-list">
                <li className="menu-item mb16">
                  <Link href="/sofa" className="inner-menu-link">
                    <div className="inner-menu-text ttu">Sofa</div>
                    <div className="inner-menu-text-hover ttu">Sofa</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/chair" className="inner-menu-link">
                    <div className="inner-menu-text ttu">Chair</div>
                    <div className="inner-menu-text-hover ttu">Chair</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/bed" className="inner-menu-link">
                    <div className="inner-menu-text ttu">bed</div>
                    <div className="inner-menu-text-hover ttu">bed</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="bedTable" className="inner-menu-link">
                    <div className="inner-menu-text ttu">bed table</div>
                    <div className="inner-menu-text-hover ttu">bed table</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/wardrobe" className="inner-menu-link">
                    <div className="inner-menu-text ttu">wardrobe</div>
                    <div className="inner-menu-text-hover ttu">wardrobe</div>
                  </Link>
                </li>
                <li className="menu-item mb16">
                  <Link href="/cabinet" className="inner-menu-link">
                    <div className="inner-menu-text ttu">Cabinet</div>
                    <div className="inner-menu-text-hover ttu">Cabinet</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="inner-section2 flx1 df">
            <div className="inner-menu-list">
              <h2 className="inner-menu-heading fs32 mb24 ttu">FEATURED</h2>
              <ul className="menu-list df fw5">
                <li className="menu-item1 mb16 df aic">
                  <Link href="/chair" className="inner-menu-img">
                    <img
                      src="images/chair-1x1-01.webp"
                      alt="chair-1x1"
                      className="w100 transit2 df"
                    />
                  </Link>
                  <div className="inner-menu-content pl32">
                    <h2 className="menu-content-heading ttu mb12 fs18 lh24">
                      Modern Chair
                    </h2>
                    <p className="menu-content-subtext">$ 249.00 USD</p>
                  </div>
                </li>
                <li className="menu-item2 mb16 df aic">
                  <Link href="/sofa" className="inner-menu-img">
                    <img
                      src="images/sofa-1x1-01.webp"
                      alt="sofa-1x1"
                      className="w100 transit2 df"
                    />
                  </Link>
                  <div className="inner-menu-content pl32">
                    <h2 className="menu-content-heading ttu mb12 fs18 lh24">
                      Latest sofa
                    </h2>
                    <p className="menu-content-subtext">$ 129.00 USD</p>
                  </div>
                </li>
                <li className="menu-item3 mb16 df aic">
                  <Link href="/bed" className="inner-menu-img">
                    <img
                      src="images/bed-1x1-01.webp"
                      alt="bed-1x1"
                      className="w100 transit2 df"
                    />
                  </Link>
                  <div className="inner-menu-content pl32">
                    <h2 className="menu-content-heading ttu mb12 fs18 lh24">
                      styles bed
                    </h2>
                    <p className="menu-content-subtext">$ 199.00 USD</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
