(function () {
  var S = window.SITE || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  function el(tag, props, children) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      if (k === "text") node.textContent = props[k];
      else node.setAttribute(k, props[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  // Hanya izinkan http(s) dan mailto agar link dari config aman.
  function safeUrl(url) {
    try {
      var u = new URL(url, location.href);
      return /^(https?:|mailto:)$/.test(u.protocol) ? u.href : "#";
    } catch (e) { return "#"; }
  }

  // Tema & meta
  if (S.accent) document.documentElement.style.setProperty("--accent", S.accent);
  var isDash = document.body.hasAttribute("data-dashboard");
  document.title = isDash ? (S.dashboardTitle || "Dashboard") + " - " + S.name : S.name + " - " + S.tagline;
  var meta = $('meta[name="description"]');
  if (meta) meta.setAttribute("content", S.description || "");

  // Teks sederhana: <x data-text="name">
  document.querySelectorAll("[data-text]").forEach(function (n) {
    var v = S[n.getAttribute("data-text")];
    if (v) n.textContent = v;
  });
  document.querySelectorAll("[data-initial]").forEach(function (n) {
    n.textContent = (S.name || "A").trim().charAt(0).toUpperCase();
  });

  // Link ke aplikasi
  document.querySelectorAll("[data-app-link]").forEach(function (a) {
    a.href = safeUrl(S.appUrl);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });

  // Kontak
  var contact = $("#contact");
  if (contact) {
    if (S.contactUrl) {
      contact.href = safeUrl(S.contactUrl);
      contact.textContent = S.contactLabel || "Hubungi kami";
    } else contact.remove();
  }
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Screenshot menggantikan mockup
  var mock = $("#mockup");
  if (mock && S.screenshot) {
    var img = el("img", { src: S.screenshot, alt: "Tampilan " + S.name, class: "shot", width: "960", height: "640" });
    mock.replaceWith(img);
  }

  // ---------- Landing page ----------
  var stats = $("#stats");
  if (stats) {
    if (!S.stats || !S.stats.length) {
      var band = stats.closest(".stats");
      if (band) band.remove();
    } else {
      S.stats.forEach(function (s) {
        stats.appendChild(el("div", { class: "stat" }, [
          el("dt", { text: s.value }),
          el("dd", { text: s.label })
        ]));
      });
    }
  }

  var features = $("#features");
  if (features) {
    (S.features || []).forEach(function (f) {
      features.appendChild(el("div", { class: "feature" }, [
        el("h3", { text: f.title }),
        el("p", { text: f.text })
      ]));
    });
  }

  var steps = $("#steps");
  if (steps) {
    (S.steps || []).forEach(function (s) {
      steps.appendChild(el("li", {}, [
        el("h3", { text: s.title }),
        el("p", { text: s.text })
      ]));
    });
  }

  // ---------- Dashboard ----------
  var grid = $("#apps");
  if (grid) {
    var apps = S.apps || [];
    var query = "";
    var cat = "Semua";

    var cats = ["Semua"];
    apps.forEach(function (a) { if (a.category && cats.indexOf(a.category) < 0) cats.push(a.category); });

    var chips = $("#chips");
    function drawChips() {
      chips.textContent = "";
      cats.forEach(function (c) {
        var b = el("button", { type: "button", class: "chip", "aria-pressed": String(c === cat), text: c });
        b.addEventListener("click", function () { cat = c; drawChips(); drawApps(); });
        chips.appendChild(b);
      });
    }

    function drawApps() {
      grid.textContent = "";
      var list = apps.filter(function (a) {
        var hay = (a.name + " " + (a.description || "") + " " + (a.category || "")).toLowerCase();
        return (cat === "Semua" || a.category === cat) && hay.indexOf(query) >= 0;
      });
      if (!list.length) {
        grid.appendChild(el("p", { class: "empty", text: "Tidak ada hasil. Coba kata kunci lain atau pilih kategori Semua." }));
        return;
      }
      list.forEach(function (a) {
        grid.appendChild(el("a", { class: "app", href: safeUrl(a.url), target: "_blank", rel: "noopener noreferrer" }, [
          el("div", { class: "app-top" }, [
            el("div", { class: "app-icon", text: a.name.trim().charAt(0).toUpperCase() }),
            el("div", {}, [el("h3", { text: a.name }), el("small", { text: a.category || "" })])
          ]),
          el("p", { text: a.description || "" })
        ]));
      });
    }

    $("#search").addEventListener("input", function (e) {
      query = e.target.value.trim().toLowerCase();
      drawApps();
    });
    drawChips();
    drawApps();
  }
})();
