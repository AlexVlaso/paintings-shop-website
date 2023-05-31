const acordion = (triggerSelector, contentSelector) => {
  const btns = document.querySelectorAll(triggerSelector);
  const contents = document.querySelectorAll(contentSelector);

  const setActiveCategory = (btn) => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });
    btn.classList.add("active");
  };
  const setActiveContent = (content) => {
    contents.forEach((item) => {
      item.style.display = "none";
      content.classList.remove("animated", "fadeIn");
    });
    content.classList.add("animated", "fadeIn");
    content.style.display = "block";
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      if (!btn.classList.contains("active")) {
        setActiveCategory(btn);
        setActiveContent(content);
      } else {
        btn.classList.remove("active");
        content.style.display = "none";
      }
    });
  });
};
export default acordion;
