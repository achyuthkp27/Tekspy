!(function () {
  "use strict";
  const select = (el, all = !1) => (
      (el = el.trim()),
      all ? [...document.querySelectorAll(el)] : document.querySelector(el)
    ),
    on = (type, el, listener, all = !1) => {
      let selectEl = select(el, all);
      selectEl &&
        (all
          ? selectEl.forEach((e) => e.addEventListener(type, listener))
          : selectEl.addEventListener(type, listener));
    },
    onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };
  let selectHeader = select("#header");
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop,
      nextElement = selectHeader.nextElementSibling;
    const headerFixed = () => {
      headerOffset - window.scrollY <= 0
        ? (selectHeader.classList.add("fixed-top"),
          nextElement.classList.add("scrolled-offset"))
        : (selectHeader.classList.remove("fixed-top"),
          nextElement.classList.remove("scrolled-offset"));
    };
    window.addEventListener("load", headerFixed),
      onscroll(document, headerFixed);
  }

  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      window.scrollY > 100
        ? backtotop.classList.add("active")
        : backtotop.classList.remove("active");
    };
    window.addEventListener("load", toggleBacktotop),
      onscroll(document, toggleBacktotop);
  }
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile"),
      this.classList.toggle("bi-list"),
      this.classList.toggle("bi-x");
  }),
    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        select("#navbar").classList.contains("navbar-mobile") &&
          (e.preventDefault(),
          this.nextElementSibling.classList.toggle("dropdown-active"));
      },
      !0
    );
  let preloader = select("#preloader");
  document.getElementById("contact-us").innerHTML +=
    '<section id="subscribe"> <div class="container" data-aos="fade-up"> <div class="row"> <div class="col-md-5"> <img src="assets/img/Services/contact-us.png" alt="" class="img-fluid"> </div> <div class="col-md-7 subscribe-btn-container"> <h3 class="subscribe-title">Contact Us For Updates</h3> <p class="subscribe-text">Contact Tekspy for more information on our background check services.</p> <a class="subscribe-btn" href="contact">Contact Us</a> </div> </div> </div> </section>';
  document.getElementById("quick-links").innerHTML +=
    '<ul> <li><i class="bi bi-chevron-right"></i> <a href="Resume">Resume Validation</a></li> <li><i class="bi bi-chevron-right"></i> <a href="index">Home</a></li> <li><i class="bi bi-chevron-right"></i> <a href="About">About us</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Why-Us">Why us</a></li> <li><i class="bi bi-chevron-right"></i> <a href="CaseStudy">Case Study</a></li> <li><i class="bi bi-chevron-right"></i> <a href="contact">Contact</a></li> </ul>';
  document.getElementById("service-links").innerHTML +=
    '<ul> <li><i class="bi bi-chevron-right"></i> <a href="Education">Education Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Reference">Reference Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Employment">Employment Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Address">Address Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Criminal">Criminal Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="SocialMedia">Social Media Check</a></li> </ul>';
  function aos_init() {
    AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 });
  }
  preloader &&
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.remove();
      }, 100);
    }),
    window.addEventListener("load", () => {
      aos_init();
    });
})();
