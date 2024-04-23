import React, { useEffect, useRef } from "react";
import { LuChevronRight } from "react-icons/lu";

const Faq = () => {
  useEffect(() => {
    const headings = document.querySelectorAll(".block-heading");
    const contents = document.querySelectorAll(".about-content");

    headings[0].classList.add("active");
    contents[0].classList.add("active");

    headings.forEach((heading, index) => {
      heading.addEventListener("click", () => {
        headings.forEach((heading) => {
          heading.classList.remove("active");
        });
        heading.classList.add("active");
        contents.forEach((content) => {
          if (content.previousElementSibling === heading) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });
  }, []);
  return (
    <div className="Faq-section ptb72 bg5">
      <div className="faq-container wrapper pr zi2 df jcc">
        <div className="faq-sec-content plr32">
          <div class="industry-blocks ">
            <div class="industry-block df fdc w100 ptb24">
              <div class="block-heading v-center jcsb w100 cp">
                <p class="fs28 fw5 transit2 lh30">
                  How do I choose the right furniture for my space?
                </p>
                <LuChevronRight class="about-coleps fs28 transit2" />
              </div>
              <div class="about-content fs18">
                <p class="lh30 ptb16">
                  Consider the dimensions of your room, functionality needs,
                  style preferences, and the overall theme of your space. Opt
                  for pieces that complement each other and fit well within the
                  available space.
                </p>
              </div>
            </div>
            <div class="industry-block df fdc w100 ptb24">
              <div class="block-heading v-center jcsb w100 cp">
                <p class="fs28 fw5 transit2 lh30">
                  What are the different types of wood used in furniture?
                </p>
                <LuChevronRight class="about-coleps fs28 transit2" />
              </div>
              <div class="about-content fs18">
                <p class="lh30 ptb16">
                  Common types of wood used in furniture include oak, mahogany,
                  pine, walnut, and teak. Each type has unique characteristics
                  in terms of durability, grain patterns, and color variations.
                </p>
              </div>
            </div>
            <div class="industry-block df fdc w100 ptb24">
              <div class="block-heading v-center jcsb w100 cp">
                <p class="fs28 fw5 transit2 lh30">
                  How can I maintain and care for my wooden furniture?
                </p>
                <LuChevronRight class="about-coleps fs28 transit2" />
              </div>
              <div class="about-content fs18">
                <p class="lh30 ptb16">
                  Regular dusting with a soft cloth, avoiding direct sunlight
                  exposure, using coasters and placemats to protect surfaces
                  from spills, and applying furniture polish or wax periodically
                  can help maintain the beauty and longevity of wooden
                  furniture.
                </p>
              </div>
            </div>
            <div class="industry-block df fdc w100 ptb24">
              <div class="block-heading v-center jcsb w100 cp">
                <p class="fs28 fw5 transit2 lh30">
                  What are the benefits of purchasing sustainable or
                  eco-friendly furniture?
                </p>
                <LuChevronRight class="about-coleps fs28 transit2" />
              </div>
              <div class="about-content fs18">
                <p class="lh30 ptb16">
                  Sustainable furniture is made from environmentally friendly
                  materials, reduces waste, and often supports fair labor
                  practices. It promotes a healthier indoor environment and
                  contributes to the conservation of natural resources.
                </p>
              </div>
            </div>
            <div class="industry-block df fdc w100 ptb24">
              <div class="block-heading v-center jcsb w100 cp">
                <p class="fs28 fw5 transit2 lh30">
                  Can I customize furniture to suit my specific needs and style
                  preferences?
                </p>
                <LuChevronRight class="about-coleps fs28 transit2" />
              </div>
              <div class="about-content fs18">
                <p class="lh30 ptb16">
                  Many furniture stores offer customization options where you
                  can choose the fabric, color, size, and design details to
                  create furniture that aligns perfectly with your vision and
                  requirements.
                </p>
              </div>
            </div>
            <div class="industry-block df fdc w100 ptb24">
              <div class="block-heading v-center jcsb w100 cp">
                <p class="fs28 fw5 transit2 lh30">
                  What should I consider when buying a sofa or couch?
                </p>
                <LuChevronRight class="about-coleps fs28 transit2" />
              </div>
              <div class="about-content fs18">
                <p class="lh30 ptb16">
                  Factors to consider include seating capacity, comfort level,
                  fabric durability, dimensions relative to your room, style
                  compatibility with existing decor, and features like reclining
                  or sleeper options if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
