(function () {
  var S = window.SITE;
  if (!S) return;

  function h(tag, props, kids) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      if (k === "text") node.textContent = props[k];
      else node.setAttribute(k, props[k]);
    });
    (kids || []).forEach(function (kid) {
      node.appendChild(typeof kid === "string" ? document.createTextNode(kid) : kid);
    });
    return node;
  }

  function ext(a) {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
    return a;
  }

  function cvButton(cls) {
    return h("a", { class: "btn " + cls, href: S.cv.href, download: S.cv.filename, text: S.cv.label });
  }

  document.title = S.name;

  /* bilah atas */
  var nav = h("nav", { class: "nav", id: "nav", "aria-label": S.ui.navLabel });
  S.nav.forEach(function (n) {
    nav.appendChild(h("a", { class: "nav-link", href: "#" + n.id, text: n.label }));
  });
  var toggle = h("button", { type: "button", class: "theme-toggle" });
  nav.appendChild(toggle);
  nav.appendChild(cvButton("btn-ghost btn-sm"));
  var menuBtn = h("button", { type: "button", class: "menu-btn", "aria-expanded": "false", "aria-controls": "nav", "aria-label": S.ui.menuOpen }, [
    h("span", { class: "menu-bar" }), h("span", { class: "menu-bar" }), h("span", { class: "menu-bar" })
  ]);
  var top = document.getElementById("top");
  top.appendChild(h("a", { class: "brand", href: "#hero", text: S.name }));
  top.appendChild(menuBtn);
  top.appendChild(nav);

  function paintToggle() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    toggle.textContent = dark ? S.ui.themeToLight : S.ui.themeToDark;
  }
  toggle.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    paintToggle();
  });
  paintToggle();

  /* menu hamburger di layar kecil */
  var bar = document.getElementById("bar");
  function setMenu(open) {
    bar.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? S.ui.menuClose : S.ui.menuOpen);
  }
  menuBtn.addEventListener("click", function () { setMenu(!bar.classList.contains("is-open")); });
  nav.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  if (window.matchMedia) {
    var wide = window.matchMedia("(min-width: 68.01rem)");
    var onWide = function () { if (wide.matches) setMenu(false); };
    if (wide.addEventListener) wide.addEventListener("change", onWide); else wide.addListener(onWide);
  }

  /* bilah atas: garis tipis saat digulir, dan penanda bagian yang sedang dilihat */
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll(".nav-link"));
  function onScroll() {
    bar.classList.toggle("is-stuck", window.scrollY > 8);
    var secs = Array.prototype.slice.call(document.querySelectorAll("#content > section"));
    var line = bar.offsetHeight + 24;
    var current = null;
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s.id; });
    var atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atEnd && secs.length) current = secs[secs.length - 1].id;
    navLinks.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + current;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* hero */
  var hero = document.getElementById("hero");
  var h1 = h("h1", { "data-reveal": "" });
  S.hero.title.forEach(function (seg) {
    h1.appendChild(seg.em ? h("em", { text: seg.text }) : document.createTextNode(seg.text));
  });
  var copy = h("div", {}, [h1]);
  S.hero.lead.forEach(function (p) { copy.appendChild(h("p", { class: "lead", "data-reveal": "", text: p })); });
  copy.appendChild(h("div", { class: "cta", "data-reveal": "" }, [
    cvButton("btn-primary"),
    h("a", { class: "btn btn-ghost", href: "mailto:" + S.email, text: S.ui.emailCta })
  ]));
  hero.appendChild(copy);
  if (S.photo && S.photo.show) {
    var img = h("img", { src: S.photo.src, alt: S.photo.alt, width: "472", height: "472" });
    var fig = h("figure", { class: "portrait", "data-reveal": "" }, [img]);
    img.addEventListener("error", function () { fig.hidden = true; });
    hero.appendChild(fig);
  }

  /* bagian */
  var main = document.getElementById("content");
  var counter = 0;
  function section(id, title, children) {
    counter += 1;
    var num = (counter < 10 ? "0" : "") + counter;
    var label = h("div", { class: "sec-label" }, [h("span", { class: "sec-num", text: num }), h("h2", { text: title })]);
    var body = h("div", { class: "sec-body" }, children);
    main.appendChild(h("section", { class: "sec", id: id, "data-reveal": "" }, [label, body]));
  }
  function lede(text) { return h("p", { class: "lede", text: text }); }

  function jobBlock(j) {
    var body = h("div", {}, [h("h3", { text: j.role }), h("p", { class: "job-org", text: j.org })]);
    if (j.points) body.appendChild(h("ul", { class: "points" }, j.points.map(function (p) { return h("li", { text: p }); })));
    return h("div", { class: "job" }, [h("div", { class: "job-period", text: j.period }), body]);
  }

  section("pengalaman", S.sections.pengalaman, S.experience.map(jobBlock));

  var rows = h("div", { class: "rows" });
  S.clientWork.forEach(function (c) {
    rows.appendChild(h("div", { class: "row" }, [h("div", { class: "row-title", text: c.title }), h("div", { class: "row-text", text: c.text })]));
  });
  section("klien", S.sections.klien, [lede(S.clientIntro), rows]);

  var prods = [lede(S.productsIntro)];
  S.products.forEach(function (p) {
    var links = h("div", { class: "links" });
    p.links.forEach(function (l) { links.appendChild(ext(h("a", { class: "arrow", href: l.href, text: l.label }))); });
    prods.push(h("article", { class: "product" }, [
      h("h3", { text: p.name }),
      h("p", { text: p.text }),
      h("p", { class: "tech", text: "Dibuat dengan " + p.tech }),
      p.links.length ? links : ""
    ].filter(Boolean)));
  });
  section("buatan-sendiri", S.sections.buatanSendiri, prods);

  var folio = h("ul", { class: "folio" });
  S.portfolio.forEach(function (p) {
    var inner = [h("span", { class: "folio-name", text: p.name }), h("span", { class: "folio-note", text: p.note })];
    var el = p.href ? ext(h("a", { href: p.href }, inner)) : h("div", { class: "plain" }, inner);
    folio.appendChild(h("li", {}, [el]));
  });
  section("portofolio", S.sections.portofolio, [lede(S.portfolioIntro), folio]);

  var dl = h("dl", { class: "facts" });
  S.skills.forEach(function (k) {
    dl.appendChild(h("div", { class: "facts-row" }, [h("dt", { text: k.label }), h("dd", { text: k.value })]));
  });
  var skillBody = [dl];
  section("keahlian", S.sections.keahlian, skillBody);

  section("pendidikan", S.sections.pendidikan, S.education.map(function (e) {
    return jobBlock({ role: e.title, org: e.detail, period: e.period });
  }));

  var links = h("div", { class: "contact-links" }, [cvButton("btn-primary")]);
  S.contact.links.forEach(function (l) { links.appendChild(ext(h("a", { class: "btn btn-ghost", href: l.href, text: l.label }))); });
  section("kontak", S.sections.kontak, [
    h("p", { class: "lede", text: S.contact.text }),
    h("a", { class: "mail", href: "mailto:" + S.email, text: S.email }),
    links
  ]);

  /* penutup */
  document.getElementById("footer").appendChild(h("p", { text: S.footer.quote }));

  onScroll();

  /* gerak: muncul pelan saat terlihat */
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  items.forEach(function (el) {
    var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.setProperty("--i", String(Math.min(idx, 4)));
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
