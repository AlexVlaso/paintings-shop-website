const calculator = (
  sizeSelector,
  materialSelector,
  optionSelector,
  promoSelector,
  resultSelector,
  state
) => {
  const size = document.querySelector(sizeSelector);
  const material = document.querySelector(materialSelector);
  const option = document.querySelector(optionSelector);
  const promo = document.querySelector(promoSelector);
  const result = document.querySelector(resultSelector);
  let sum = 0;
  const calcSum = () => {
    sum = Math.round(+size.value * +material.value + +option.value);
    console.log("Test");
    if (!size.value || !material.value) {
      result.textContent =
        "Для расчета нужно выбрать размер картины и материал картины";
    } else if (promo.value === "IWANTPOPART") {
      sum = Math.round(sum * 0.7);
      result.textContent = sum;
    } else {
      result.textContent = sum;
    }
    state.size = size.options[size.selectedIndex].text;
    state.material = material.options[material.selectedIndex].text;
    state.option = option.options[option.selectedIndex].text;
    state.promo = promo.value;
    state.totalPrice = sum;
  };
  size.addEventListener("change", calcSum);
  material.addEventListener("change", calcSum);
  option.addEventListener("change", calcSum);
  promo.addEventListener("input", calcSum);
};
export default calculator;
