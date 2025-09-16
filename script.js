document.addEventListener("DOMContentLoaded", function () {
  console.log("🌟 Portfolio Aurora Cappai caricato 🌟");

  // 1. Scroll fluido tra le sezioni
  var linkMenu = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < linkMenu.length; i++) {
    linkMenu[i].addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 2. Evidenziazione sezione attiva nel menu + mostra bottone "torna su"
  var sezioni = document.querySelectorAll("section");
  var menuLinks = document.querySelectorAll("nav a");
  var bottoneSu = document.createElement("button");
  bottoneSu.id = "back-to-top";
  bottoneSu.textContent = "↑";
  bottoneSu.style.display = "none";
  document.body.appendChild(bottoneSu);

  bottoneSu.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    var sezioneAttiva = "";
    for (var i = 0; i < sezioni.length; i++) {
      if (scrollY >= sezioni[i].offsetTop - 60) {
        sezioneAttiva = sezioni[i].id;
      }
    }

    for (var j = 0; j < menuLinks.length; j++) {
      var href = menuLinks[j].getAttribute("href");
      if (href === "#" + sezioneAttiva) {
        menuLinks[j].classList.add("attivo");
      } else {
        menuLinks[j].classList.remove("attivo");
      }
    }

    bottoneSu.style.display = scrollY > 300 ? "block" : "none";
  });

  // 3. Effetto fade-in su immagini e progetti
  var osservati = document.querySelectorAll("img, .progetto");
  var osservatore = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("fade-in");
        osservatore.unobserve(entries[i].target);
      }
    }
  }, { threshold: 0.2 });

  for (var i = 0; i < osservati.length; i++) {
    osservatore.observe(osservati[i]);
  }

  // 4. Caroselli
  var tuttiCaroselli = document.querySelectorAll(".carousel");

  for (var c = 0; c < tuttiCaroselli.length; c++) {
    var carosello = tuttiCaroselli[c];
    var imagesContainer = carosello.querySelector(".carousel-images");
    var immagini = imagesContainer.querySelectorAll("img");
    var index = 0;

    function aggiorna(index, container, imgs) {
      container.style.transform = "translateX(-" + (index * 100) + "%)";
    }

    (function (carosello, imagesContainer, immagini) {
      var index = 0;
      aggiorna(index, imagesContainer, immagini);

      var next = carosello.querySelector(".next");
      var prev = carosello.querySelector(".prev");

      if (next) {
        next.addEventListener("click", function () {
          index = (index + 1) % immagini.length;
          aggiorna(index, imagesContainer, immagini);
        });
      }

      if (prev) {
        prev.addEventListener("click", function () {
          index = (index - 1 + immagini.length) % immagini.length;
          aggiorna(index, imagesContainer, immagini);
        });
      }
    })(carosello, imagesContainer, immagini);
  }

  // 5. Overlay per immagini cliccate (portfolio + caroselli)
  var overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.style.display = "none";

  var imgZoom = document.createElement("img");
  overlay.appendChild(imgZoom);
  document.body.appendChild(overlay);

  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  var immaginiZoomabili = document.querySelectorAll("#portfolio img, .carousel .carousel-images img");

  for (var i = 0; i < immaginiZoomabili.length; i++) {
    immaginiZoomabili[i].style.cursor = "zoom-in";
    immaginiZoomabili[i].addEventListener("click", function () {
      imgZoom.src = this.src;
      overlay.style.display = "block";
    });
  }
});
