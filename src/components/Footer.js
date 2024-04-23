import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="top-footer ptb72 bg1">
        <div className="footer-container wrapper df fww pt40">
          <div className="footer-box flx25 tac fc2">
            <img src="images/logo.png" alt="logo" className="mb24" />
            <p className="footer-logo-content lh30 fs18 mb24">
              Crafting superior furniture with timeless elegance, comfort, and
              sustainability. Elevate your space with our thoughtfully designed
              pieces. Experience excellence today.
            </p>
            <ul className="footer-social-list h-center">
              <li className="footer-social mlr12">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="social-link p8 bg5 br50"
                >
                  <FaFacebookF className="fs22" />
                </Link>
              </li>
              <li className="footer-social mlr12">
                <Link
                  href="https://api.whatsapp.com/send?phone=917838353484"
                  target="_blank"
                  className="social-link p8 bg5 br50"
                >
                  <IoLogoWhatsapp className="fs22" />
                </Link>
              </li>
              <li className="footer-social mlr12">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="social-link p8 bg5 br50"
                >
                  <FaInstagram className="fs22" />
                </Link>
              </li>
              <li className="footer-social mlr12">
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className="social-link p8 bg5 br50"
                >
                  <FaXTwitter className="fs22" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-box flx25 tac fc2">
            <h2 className="footer-list-title mb32 fs32">Imp. Links</h2>
            <ul className="footer-list fs18">
              <li className="footer-item mb24">
                <Link href="/about" className="footer-menu-link">
                  <div className="footer-menu-text ttu">about us</div>
                  <div className="footer-menu-text-hover ttu">about us</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/collections" className="footer-menu-link">
                  <div className="footer-menu-text ttu">Collections</div>
                  <div className="footer-menu-text-hover ttu">Collections</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/gallery" className="footer-menu-link">
                  <div className="footer-menu-text ttu">Lookbook</div>
                  <div className="footer-menu-text-hover ttu">Lookbook</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/blog" className="footer-menu-link">
                  <div className="footer-menu-text ttu">Blog</div>
                  <div className="footer-menu-text-hover ttu">Blog</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/faq" className="footer-menu-link">
                  <div className="footer-menu-text ttu">Faq</div>
                  <div className="footer-menu-text-hover ttu">faq</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/contact" className="footer-menu-link">
                  <div className="footer-menu-text ttu">contact us</div>
                  <div className="footer-menu-text-hover ttu">contact us</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-box flx25 tac fc2">
            <h2 className="footer-list-title mb32 fs32 ttu">collaction</h2>
            <ul className="footer-list fs18">
              <li className="footer-item mb24">
                <Link href="/sofa" className="footer-menu-link">
                  <div className="footer-menu-text ttu">Sofa</div>
                  <div className="footer-menu-text-hover ttu">Sofa</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/chair" className="footer-menu-link">
                  <div className="footer-menu-text ttu">chair</div>
                  <div className="footer-menu-text-hover ttu">chair</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/bed" className="footer-menu-link">
                  <div className="footer-menu-text ttu">bed</div>
                  <div className="footer-menu-text-hover ttu">bed</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/bedTable" className="footer-menu-link">
                  <div className="footer-menu-text ttu">bed table</div>
                  <div className="footer-menu-text-hover ttu">bed table</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/wardrobe" className="footer-menu-link">
                  <div className="footer-menu-text ttu">Wardrobe</div>
                  <div className="footer-menu-text-hover ttu">Wardrobe</div>
                </Link>
              </li>
              <li className="footer-item mb24">
                <Link href="/cabinet" className="footer-menu-link">
                  <div className="footer-menu-text ttu">cabinet</div>
                  <div className="footer-menu-text-hover ttu">cabinet</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-box flx25 tac fc2">
            <h2 className="footer-list-title mb32 fs32 ttu">Address</h2>
            <ul className="addres-item fs18">
              <li className="address-list v-center mb24 jcc">
                <IoMdCall className="mr8 fs22" />
                <Link href="tel:/78383 53484">+91 78383 53484</Link>
              </li>
              <li className="address-list v-center mb24 jcc">
                <MdMail className="mr8 fs22" />
                <Link href="mailto: bobscott@gmail.com">
                  bobscott@gmail.com
                </Link>
              </li>
              <li className="address-list df mb24 jcc">
                <FaLocationDot className="mr8 fs22" />
                <p className="location-address lh24">
                  D-81 D Block Sector-56 || Noida, <br /> Uttar Pradesh, India
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="bottom-footer ptb32 bg4">
        <div className="bottom-footer-content fc2 h-center plr24">
          BOB & SCOTT ©2024 - All Rights Reserved - Powerd by
          <Link href="https://aajux.com/" target="_blank" className="tdhu ml4">
            AAJUX
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
