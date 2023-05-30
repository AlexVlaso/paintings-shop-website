import { postData } from "../services/requsts";
const forms = (state) => {
  const form = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const uploads = document.querySelectorAll("[name=upload]");

  const messages = {
    load: "Загрузка...",
    ok: "Спасибо, мы с вами свяжемся",
    error: "Что-то пошло не так...",
    spinner: "./assets/img/spinner.gif",
    success: "./assets/img/ok.png",
    fail: "./assets/img/fail.png",
  };
  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  uploads.forEach((item) => {
    item.addEventListener("input", () => {
      const status = item.previousElementSibling;
      const arr = item.files[0].name.split(".");
      const name =
        arr[0].length > 6 ? arr[0].substring(0, 7) + "..." : arr[0] + ".";
      status.textContent = name + arr[1];
    });
  });

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let message = document.createElement("div");
      message.classList.add("status");

      item.classList.add("animated", "fadeOut");
      setTimeout(() => {
        item.style.display = "none";
      }, 100);

      let infoImg = document.createElement("img");
      infoImg.setAttribute("src", messages.spinner);

      let infoText = document.createElement("div");
      infoText.textContent = messages.load;

      message.append(infoImg);
      message.append(infoText);
      item.parentNode.append(message);

      const formdata = new FormData(item);
      if (item.classList.contains("form_calc")) {
        for (let key in state) {
          formdata.append(key, state[key]);
        }
      }

      let api = item.classList.contains("form_calc")
        ? "assets/server.php"
        : "assets/server2.php";

      postData("assets/server.php", formdata).then((data) => {
        console.log(data);
        infoImg.setAttribute("src", messages.success);
        infoText.textContent = messages.ok;
        setTimeout(() => {
          message.remove();
          item.style.display = "block";
          item.classList.remove("fadeOut");
          item.classList.add("fadeInDown");
        }, 5000);
      });
      clearInputs();
    });
  });
};
export default forms;
