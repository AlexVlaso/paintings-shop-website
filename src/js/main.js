import filters from "./modules/filters";
import calculator from "./modules/calculator";
import forms from "./modules/forms";
import modals from "./modules/modal";
import showMoreStyles from "./modules/showMoreStyles";
import sliders from "./modules/sliders";
import pictureSize from "./modules/pictureSize";
import acordion from "./modules/acordion";
import burger from "./modules/burger";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const state = {};
  modals();
  sliders(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  sliders(".main-slider-item", "vertical");
  forms(state);
  showMoreStyles(".button-styles", "#styles .row");
  calculator(
    "#size",
    "#material",
    "#options",
    ".promocode",
    ".calc-price",
    state
  );
  filters(".portfolio-menu", ".portfolio-block", ".portfolio-no");
  pictureSize(".sizes-block");
  acordion(".accordion-heading", ".accordion-block");
  burger(".burger", ".burger-menu");
});
