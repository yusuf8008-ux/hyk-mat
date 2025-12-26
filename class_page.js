// class_page.js
import { CURRICULUM } from "./data.js";

const $ = (s, r=document) => r.querySelector(s);

function toEmbedUrl(youtubeUrl) {
  // watch?v=ID  -> embed/ID
  // youtu.be/ID -> embed/ID
  // playlist?list=LIST -> embed/videoseries?list=LIST (playlistler için ayrı kullanacağız)
  try{
    const u = new URL(youtubeUrl);
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    if (u.pathname.includes("/watch")) {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
    return youtubeUrl;
  }catch{
    return "";
  }
}

function playlistEmbedUrl(playlistUrl){
  try{
    const u = new URL(playlistUrl);
    const list = u.searchParams.get("list");
    return list ? `https://www.youtube.com/embed/videoseries?list=${list}` : "";
  }catch{
    return "";
  }
}

const grade = Number(new URLSearchParams(location.search).get("grade") || "0");
const data = CURRICULUM[grade];

if (!data) {
  $("#classTitle").textContent = "Sınıf bulunamadı";
  $("#classDesc").textContent = "URL örneği: class.html?grade=8";
} else {
  $("#classTitle").textContent = data.title;
  $("#gradeBadge").textContent = `${grade}. Sınıf • MEB Uyumlu`;

  // Playlists
  const playlistRow = $("#playlistRow");
  const pls = data.playlists || {};
  playlistRow.innerHTML = Object.keys(pls).length
    ? Object.entries(pls).map(([name, url]) => `<a class="btn primary" href="${url}" target="_blank" rel="noreferrer">${name}</a>`).join("")
    : `<span class="muted">Playlist linkleri eklenmedi (data.js).</span>`;

  // Sections (accordion)
  $("#sections").innerHTML = (data.sections || []).map(sec => {
    const topics = sec.topics.map(t => `<li>${t}</li>`).join("");
    return `
      <details class="accordion" open>
        <summary>${sec.name}</summary>
        <div class="inner">
          <ul style="margin:0; padding-left:18px;">${topics}</ul>
        </div>
      </details>
    `;
  }).join("");

  // Videos
  const vids = data.videos || [];
  $("#videos").innerHTML = vids.length
    ? vids.map(v => {
        const embed = toEmbedUrl(v.url);
        return `
          <div class="video-card" data-search="${(v.title + " " + (v.topic||"") + " " + (v.note||""))}">
            <iframe src="${embed}" allowfullscreen loading="lazy"></iframe>
            <div class="vc-body">
              <strong>${v.title}</strong>
              <span>${v.topic ? `Konu: ${v.topic}` : ""} ${v.note ? `• ${v.note}` : ""}</span>
            </div>
          </div>
        `;
      }).join("")
    : `<p class="muted">Henüz video eklenmedi. data.js → CURRICULUM[${grade}].videos içine ekle.</p>`;

  // (Opsiyonel) Playlist embed göstermek istersen:
  // İstersen buraya playlist iframe’i ekleyebilirim.
}
