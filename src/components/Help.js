import React from "react";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Help = ({ className }) => {
  return (
    <section className={`shop-help ptb72 ${className}`}>
      <div className="shop-help-container wrapper df fww ptb40 fc2">
        <div className="help-section flx33">
          <h2 className="heading ff2">Help?</h2>
        </div>
        <div className="help-section flx33 plr24">
          <h2 className="help-box-heading ff2 fs32 mb24">Locate Us</h2>
          <div className="locate-map lh30 fs18 ls0 mb24">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.567863689621!2d77.14403167456717!3d28.492557990425002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fe56da45af3%3A0x80aa5bf9c99da196!2sBOB%20%26%20SCOTT%20HOME%20FURNITURE%3A%20Premier%20Furniture%20%26%20Sofa%20Store!5e0!3m2!1sen!2sin!4v1713179775578!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Link
            href="https://maps.app.goo.gl/s7ihq9VyHkUtprrr9"
            target="_blank"
            className="help-box-place df"
          >
            Go To Map
            <MdOutlineArrowRightAlt className="arrow-icon ml4 transit2" />
          </Link>
        </div>
        <div className="help-section flx33 plr24">
          <h2 className="help-box-heading ff2 fs32 mb24">Questions</h2>
          <p className="help-box-text lh30 fs18 ls0 mb24">
            Find answers to all your questions about our premium furnishings,
            customization options, and more here!
          </p>
          <Link href="/faq" className="help-box-place df">
            READ THE FAQ
            <MdOutlineArrowRightAlt className="arrow-icon ml4 transit2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Help;
