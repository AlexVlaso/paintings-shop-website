const filters = (menuSelector, contentSelector, noElementSelector) => {
  const menu = document.querySelector(menuSelector);
  const categories = menu.querySelectorAll("li");
  const elements = document.querySelectorAll(contentSelector);
  const infoMessage = document.querySelector(noElementSelector);

  const filtersElements = (filter) => {
    let isNoResult = true;
    elements.forEach((item) => {
      if (item.classList.contains(filter)) {
        item.style.display = "block";
        item.classList.add("animated", "fadeIn");
        isNoResult = false;
      } else {
        item.style.display = "none";
        item.classList.remove("animated", "fadeIn");
      }
    });
    if (isNoResult) {
      infoMessage.style.display = "block";
    }
  };

  const setActiveCategory = (item) => {
    categories.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  };

  categories.forEach((item) => {
    item.addEventListener("click", () => {
      setActiveCategory(item);
      const filter = item.dataset.filter;
      filtersElements(filter);
    });
  });
};
export default filters;
