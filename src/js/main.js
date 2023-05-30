import forms from "./modules/forms";
import modals from "./modules/modal";
import showMoreStyles from "./modules/showMoreStyles";
import sliders from "./modules/sliders";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modals();
  sliders(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  sliders(".main-slider-item", "vertical");
  forms();
  showMoreStyles(".button-styles", "#styles .row");
});
