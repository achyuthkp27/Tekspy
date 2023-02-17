!(function () {
  "use strict";

  const modal = document.querySelector("#myModal");
  const btn = document.querySelectorAll(".btn-client");
  const closeModal = document.getElementsByClassName("close")[0];
  for (let i = 0; i < btn.length; i++)
    btn[i].addEventListener("click", function () {
      modal.style.display = "block";
    });
  (btn.onclick = function () {
    modal.style.display = "block";
  }),
    (closeModal.onclick = function () {
      modal.style.display = "none";
    }),
    (window.onclick = function (event) {
      event.target == modal && (modal.style.display = "none");
    });
  const typed = document.querySelector(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    (typed_strings = typed_strings.split(",")),
      new Typed(".typed", {
        strings: typed_strings,
        loop: !0,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2e3,
      });
  }
})();
