const modals = () => {
  const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    isOverlayClose = true
  ) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closeBtn = modal.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const scroll = calcScroll();

    const closeAnotherModals = () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });
    };

    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        closeAnotherModals();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scroll}px`;
      });
      closeBtn.addEventListener("click", () => {
        closeAnotherModals();
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal && isOverlayClose) {
          closeAnotherModals();
          modal.style.display = "none";
          document.body.style.overflow = "";
          document.body.style.paddingRight = `0px`;
        }
      });
    });
  };
  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      let isOpen = false;
      document.querySelectorAll("[data-modal]").forEach((item) => {
        if (getComputedStyle(item).display !== "none") {
          isOpen = true;
        }
      });
      if (!isOpen) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
      }
    }, time);
  };
  function calcScroll() {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.overflowY = "scroll";
    box.style.visibility = "hidden";
    document.body.append(box);
    const width = box.offsetWidth - box.clientWidth;
    return width;
  }
  bindModal(".button-design", ".popup-design", ".popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-close");

  showModalByTime(".popup-consultation", 5000);
};
export default modals;
