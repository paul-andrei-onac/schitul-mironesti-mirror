//---------------------------------------------
// Vendor
//---------------------------------------------

import './vendors/bootstrap';

//---------------------------------------------
// Slick
//---------------------------------------------


//---------------------------------------------
// Fancybox
//---------------------------------------------

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});

//---------------------------------------------
// Custom
//---------------------------------------------
