const droping = (inputSelector) => {
  const inputs = document.querySelectorAll(inputSelector);
  ["dragenter", "dragover"].forEach((event) => {
    inputs.forEach((input) => {
      input.addEventListener(event, (e) => {
        e.preventDefault();
        input.closest(".file_upload").style.border = "5px solid red";
      });
    });
  });
  ["drop", "dragleave"].forEach((event) => {
    inputs.forEach((input) => {
      input.addEventListener(event, (e) => {
        e.preventDefault();
        input.closest(".file_upload").style.border = "none";
      });
    });
  });
  inputs.forEach((input) => {
    input.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;
      const arr = input.files[0].name.split(".");
      const name =
        arr[0].length > 6 ? arr[0].substring(0, 7) + "..." : arr[0] + ".";
      input.previousElementSibling.textContent = name + arr[1];
    });
  });
};
export default droping;
