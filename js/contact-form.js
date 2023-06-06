const scriptURL = "https://script.google.com/macros/s/AKfycbxwOB7ysZVLaSTDE0w2BzS5Gt9PU2MmC9-Bfuul5Mfi8D_Q9MxQrD2c0rIvqmUk_XJGsg/exec";
const form = document.forms["junna-contact-form"];
const btnSubmit = document.querySelector(".btn-submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Pesan berhasil terkirim.........!");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
