// app.js
import { SITE, GRADES } from "./data.js";

const $ = (s, r=document) => r.querySelector(s);

function setBrand() {
  const brand = $("#brandName");
  const sub = $("#brandSub");
  if (brand) brand.textContent = SITE.name;
  if (sub) sub.textContent = "5–12. Sınıflar";
}

function buildSidebarNav(activePath) {
  const nav = $("#nav");
  const subnav = $("#subnav");
  if (!nav || !subnav) return;

  const isClassPage = activePath.includes("class.html");

  // Top links
  nav.innerHTML = `
    <a href="index.html" class="${activePath.includes("index.html") ? "active" : ""}">🏠 Ana Sayfa</a>
    <button id="toggleGrades" aria-expanded="${isClassPage ? "true" : "false"}">
      📚 Sınıflar <span>▾</span>
    </button>
    <a href="about.html" class="${activePath.includes("about.html") ? "active" : ""}">👤 Hakkımda</a>
    <a href="contact.html" class="${activePath.includes("contact.html") ? "active" : ""}">✉️ İletişim</a>
  `;

  // Grade links
  subnav.innerHTML = GRADES.map(g => {
    const isActive = isClassPage && new URLSearchParams(location.search).get("grade") === String(g);
    return `<a href="class.html?grade=${g}" class="${isActive ? "active" : ""}">${g}. Sınıf</a>`;
  }).join("");

  if (isClassPage) subnav.classList.add("open");

  $("#toggleGrades")?.addEventListener("click", () => {
    subnav.classList.toggle("open");
    const expanded = subnav.classList.contains("open");
    $("#toggleGrades")?.setAttribute("aria-expanded", String(expanded));
  });
}

function setupMobileDrawer() {
  const openBtn = $("#openDrawer");
  const backdrop = $("#drawerBackdrop");
  const drawer = $("#drawer");

  if (!openBtn || !backdrop || !drawer) return;

  const open = () => { drawer.classList.add("open"); backdrop.classList.add("open"); };
  const close = () => { drawer.classList.remove("open"); backdrop.classList.remove("open"); };

  openBtn.addEventListener("click", open);
  backdrop.addEventListener("click", close);

  // Drawer içindeki linke basınca kapat
  drawer.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A") close();
  });
}

function setupSearch() {
  const input = $("#globalSearch");
  if (!input) return;

  // Basit: sayfada data-search alanına göre filtre
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll("[data-search]").forEach(el => {
      const hay = (el.getAttribute("data-search") || "").toLowerCase();
      el.style.display = hay.includes(q) ? "" : "none";
    });
  });
}

// INIT (all pages)
setBrand();
buildSidebarNav(location.pathname);
setupMobileDrawer();
setupSearch();
