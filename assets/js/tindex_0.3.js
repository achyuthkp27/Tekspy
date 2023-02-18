!(function () {
  "use strict";
  let i = (i, e = !1) => (
      (i = i.trim()),
      e ? [...document.querySelectorAll(i)] : document.querySelector(i)
    ),
    e = (e, s, a, t = !1) => {
      let l = i(s, t);
      l &&
        (t
          ? l.forEach((i) => i.addEventListener(e, a))
          : l.addEventListener(e, a));
    },
    s = (i, e) => {
      i.addEventListener("scroll", e);
    },
    a = i("#header");
  if (a) {
    let t = a.offsetTop,
      l = a.nextElementSibling,
      c = () => {
        t - window.scrollY <= 0
          ? (a.classList.add("fixed-top"), l.classList.add("scrolled-offset"))
          : (a.classList.remove("fixed-top"),
            l.classList.remove("scrolled-offset"));
      };
    window.addEventListener("load", c), s(document, c);
  }
  let r = i(".back-to-top");
  if (r) {
    let n = () => {
      window.scrollY > 100
        ? r.classList.add("active")
        : r.classList.remove("active");
    };
    window.addEventListener("load", n), s(document, n);
  }
  e("click", ".mobile-nav-toggle", function (e) {
    i("#navbar").classList.toggle("navbar-mobile"),
      this.classList.toggle("bi-list"),
      this.classList.toggle("bi-x");
  }),
    e(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        i("#navbar").classList.contains("navbar-mobile") &&
          (e.preventDefault(),
          this.nextElementSibling.classList.toggle("dropdown-active"));
      },
      !0
    );
  let o = i("#preloader");
  (document.getElementById("quick-links").innerHTML +=
    '<ul> <li><i class="bi bi-chevron-right"></i> <a href="Resume">Resume Validation</a></li> <li><i class="bi bi-chevron-right"></i> <a href="index">Home</a></li> <li><i class="bi bi-chevron-right"></i> <a href="About">About us</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Why-Us">Why us</a></li> <li><i class="bi bi-chevron-right"></i> <a href="CaseStudy">Case Study</a></li> <li><i class="bi bi-chevron-right"></i> <a href="contact">Contact</a></li> </ul>'),
    (document.getElementById("service-links").innerHTML +=
      '<ul> <li><i class="bi bi-chevron-right"></i> <a href="Education">Education Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Reference">Reference Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Employment">Employment Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Address">Address Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="Criminal">Criminal Check</a></li> <li><i class="bi bi-chevron-right"></i> <a href="SocialMedia">Social Media Check</a></li> </ul>'),
    o &&
      window.addEventListener("load", () => {
        setTimeout(() => {
          o.remove();
        }, 100);
      }),
    window.addEventListener("load", () => {
      AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 });
    });
})();
