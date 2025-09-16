document.addEventListener("DOMContentLoaded", () => {
    console.log("🌟 Benvenuto nel portfolio di Aurora Cappai! 🌟");

    // ✂️ Scroll fluido tra le sezioni del menu
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 🎯 Evidenziazione del link attivo durante lo scroll
    const sezioni = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let sezioneAttiva = "";
        sezioni.forEach(sez => {
            if (scrollY >= sez.offsetTop - 60) {
                sezioneAttiva = sez.id;
            }
        });

        menuLinks.forEach(link => {
            link.classList.toggle("attivo", link.getAttribute("href") === `#${sezioneAttiva}`);
        });

        // ⬆️ Mostra/Nascondi bottone “Torna su”
        const btnTornaSu = document.getElementById("back-to-top");
        if (btnTornaSu) {
            btnTornaSu.style.display = scrollY > 300 ? "block" : "none";
        }
    });

    // 💫 Effetto fade-in per immagini e progetti
    const osservati = document.querySelectorAll("img, .progetto");
    const osservatore = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                osservatore.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    osservati.forEach(el => osservatore.observe(el));

    // 🔝 Bottone “Torna su” generato dinamicamente
    const tornaSu = document.createElement("button");
    tornaSu.id = "back-to-top";
    tornaSu.textContent = "↑";
    tornaSu.style.display = "none";
    document.body.appendChild(tornaSu);
    tornaSu.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ⌨️ Effetto macchina da scrivere sul titolo della homepage
    const titolo = document.querySelector("#home h1");
    const testo = "Benvenuto nel mio portfolio";
    let i = 0;
    function scriviTesto() {
        if (i < testo.length) {
            titolo.textContent += testo.charAt(i);
            i++;
            setTimeout(scriviTesto, 80);
        }
    }
    if (titolo) {
        titolo.textContent = "";
        scriviTesto();
    }

    // 🖼️ Lightbox per immagini del portfolio
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.style.display = "none";
    const imgZoom = document.createElement("img");
    overlay.appendChild(imgZoom);
    document.body.appendChild(overlay);

    document.querySelectorAll("#portfolio img").forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            imgZoom.src = img.src;
            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    // Carousel per progetti (visione con bottoni)
    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelector('.carousel-images');
        const imgs = images.querySelectorAll('img');
        let index = 0;

        carousel.querySelector('.next')?.addEventListener('click', () => {
            index = (index + 1) % imgs.length;
            images.style.transform = `translateX(-${index * 100}%)`;
        });

        carousel.querySelector('.prev')?.addEventListener('click', () => {
            index = (index - 1 + imgs.length) % imgs.length;
            images.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});
// Caroselli multipli
document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelector('.carousel-images');
  const imgs = images.querySelectorAll('img');
  let index = 0;

  // Funzione aggiorna slide
  function showSlide() {
    images.style.transform = `translateX(-${index * 100}%)`;
  }

  // Avanti
  carousel.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % imgs.length;
    showSlide();
  });

  // Indietro
  carousel.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + imgs.length) % imgs.length;
    showSlide();
  });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("✨ Portfolio di Aurora Cappai caricato!");

    // 1. Scroll fluido per i link del menu
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // 2. Evidenziazione link attivo durante lo scroll
    const sezioni = document.querySelectorAll("section");
    const menu = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let attuale = "";
        sezioni.forEach(sezione => {
            if (scrollY >= sezione.offsetTop - 60) {
                attuale = sezione.id;
            }
        });
        menu.forEach(link => {
            link.classList.toggle("attivo", link.getAttribute("href") === `#${attuale}`);
        });
    });

    // 3. Bottone Torna su
    const su = document.createElement("button");
    su.id = "back-to-top";
    su.textContent = "↑";
    su.style.display = "none";
    document.body.appendChild(su);

    su.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    window.addEventListener("scroll", () => {
        su.style.display = scrollY > 300 ? "block" : "none";
    });

    // 4. Effetto fade-in (immagini + box progetto)
    const elementi = document.querySelectorAll("img, .progetto");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elementi.forEach(e => observer.observe(e));

    // 5. Gestione caroselli (sia Progetti che Portfolio)
    document.querySelectorAll(".carousel").forEach(carousel => {
        const images = carousel.querySelector(".carousel-images");
        const imgs = images.querySelectorAll("img");
        let index = 0;

        const updateCarousel = () => {
            images.style.transform = `translateX(-${index * 100}%)`;
        };

        carousel.querySelector(".next")?.addEventListener("click", () => {
            index = (index + 1) % imgs.length;
            updateCarousel();
        });

        carousel.querySelector(".prev")?.addEventListener("click", () => {
            index = (index - 1 + imgs.length) % imgs.length;
            updateCarousel();
        });
    });

    // 6. Lightbox per ingrandire immagini
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.style.display = "none";
    const imgZoom = document.createElement("img");
    overlay.appendChild(imgZoom);
    document.body.appendChild(overlay);

    document.querySelectorAll("#carousel-images img, #progetto img").forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            imgZoom.src = img.src;
            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});