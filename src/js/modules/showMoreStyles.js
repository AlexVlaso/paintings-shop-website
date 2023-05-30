const showMoreStyles = (triggerSelector, card) => {
  const btn = document.querySelector(triggerSelector);
  const cards = document.querySelectorAll(card);

  cards.forEach((item) => {
    item.classList.add("animated", "fadeInDown");
  });
  btn.addEventListener("click", () => {
    cards.forEach((item) => {
      item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
      item.classList.add(
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );
    });
    btn.remove();
  });
};
export default showMoreStyles;
