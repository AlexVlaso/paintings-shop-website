const modals = () => {
  let isPressed = false;
  const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    isDestroy = false
  ) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closeBtn = modal.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const scroll = calcScroll();

    const closeAnotherModals = () => {
      windows.forEach((item) => {
        item.style.display = "none";
        item.classList.add("animated", "fadeIn");
      });
    };

    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        isPressed = true;
        closeAnotherModals();

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scroll}px`;

        if (isDestroy) {
          item.remove();
        }
      });

      closeBtn.addEventListener("click", () => {
        closeAnotherModals();
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
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
  const showModalByScroll = (selector) => {
    window.addEventListener("scroll", () => {
      const endScroll = document.documentElement.scrollHeight;
      const currScroll = window.scrollY + document.documentElement.clientHeight;

      if (!isPressed && currScroll >= endScroll) {
        console.log("Test");
        document.querySelector(selector).click();
      }
    });
  };
  bindModal(".button-design", ".popup-design", ".popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-close", true);

  showModalByScroll(".fixed-gift");
  showModalByTime(".popup-consultation", 60000);
};
export default modals;
