import { getResponse } from "../services/requsts";
const showMoreStyles = (triggerSelector, wrapperSelector) => {
  const btn = document.querySelector(triggerSelector);
  const wrapper = document.querySelector(wrapperSelector);

  const createElement = (item) => {
    const card = document.createElement("div");
    card.classList.add(
      "animated",
      "fadeInDown",
      "col-sm-3",
      "col-sm-offset-0",
      "col-xs-10",
      "col-xs-offset-1"
    );
    card.innerHTML = `<div class=styles-block>
    						<img src= ${item.src} alt>
    						<h4>${item.title}</h4>
    						<a href=${item.link}>Подробнее</a>
    					</div>`;
    wrapper.append(card);
  };

  btn.addEventListener("click", () => {
    getResponse("http://localhost:3000/styles").then((data) =>
      data.forEach((item) => createElement(item))
    );
    btn.remove();
  });
};
export default showMoreStyles;
