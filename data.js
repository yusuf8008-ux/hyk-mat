// data.js
// Buraya kendi YouTube video/playlist linklerini ekleyeceksin.
// embed için: https://www.youtube.com/watch?v=VIDEO_ID
// playlist için: https://www.youtube.com/playlist?list=LIST_ID

export const SITE = {
  name: "HYK_MAT",
  accent: "mavi",
  youtubeChannelUrl: "https://www.youtube.com/@KANALIN", // değiştir
};

export const GRADES = [5,6,7,8,9,10,11,12];

// MEB uyumlu konu başlıkları (özet düzey)
export const CURRICULUM = {
  5: {
    title: "5. Sınıf Matematik",
    sections: [
      { name: "Sayılar ve İşlemler", topics: ["Doğal Sayılar", "Doğal Sayılarda Dört İşlem", "Kesirler", "Ondalık Gösterim"] },
      { name: "Geometri", topics: ["Açılar", "Üçgenler", "Dörtgenler", "Dikdörtgen ve Kare"] },
      { name: "Ölçme", topics: ["Uzunluk", "Alan", "Zaman", "Para Problemleri"] },
      { name: "Veri Analizi", topics: ["Tablo", "Sütun Grafiği", "Grafik Yorumlama"] },
    ],
    playlists: {
      "Konu Anlatımı": "https://www.youtube.com/playlist?list=LIST_ID",
      "Soru Çözümü": "https://www.youtube.com/playlist?list=LIST_ID",
      "Yeni Nesil": "https://www.youtube.com/playlist?list=LIST_ID",
    },
    videos: [
      // örnek placeholder
      { title:"Doğal Sayılar (Giriş)", topic:"Doğal Sayılar", url:"https://www.youtube.com/watch?v=VIDEO_ID", note:"Temel kavramlar" },
    ],
  },

  6: { title:"6. Sınıf Matematik", sections:[
      { name:"Sayılar ve İşlemler", topics:["Çarpanlar ve Katlar", "Kesirlerle İşlemler", "Ondalık Gösterim", "Oran"] },
      { name:"Cebir", topics:["Cebirsel İfadeler", "Basit Denklemler"] },
      { name:"Geometri", topics:["Açılar", "Üçgenler", "Dörtgenler", "Çember"] },
      { name:"Ölçme", topics:["Alan", "Hacim"] },
      { name:"Veri Analizi", topics:["Aritmetik Ortalama", "Açıklık"] },
    ],
    playlists:{ "Konu Anlatımı":"https://www.youtube.com/playlist?list=LIST_ID" },
    videos:[]
  },

  7: { title:"7. Sınıf Matematik", sections:[
      { name:"Sayılar", topics:["Tam Sayılar", "Rasyonel Sayılar", "Rasyonel Sayılarla İşlemler"] },
      { name:"Cebir", topics:["Cebirsel İfadeler", "Denklemler", "Oran ve Orantı"] },
      { name:"Geometri", topics:["Doğrular ve Açılar", "Çokgenler", "Çember ve Daire"] },
      { name:"Veri ve Olasılık", topics:["Veri Analizi", "Basit Olasılık"] },
    ],
    playlists:{}, videos:[]
  },

  8: { title:"8. Sınıf Matematik (LGS)", sections:[
      { name:"Çarpanlar ve Katlar", topics:["Asal Sayılar", "EBOB–EKOK"] },
      { name:"Üslü ve Köklü İfadeler", topics:["Üslü Sayılar", "Köklü Sayılar"] },
      { name:"Cebir", topics:["Özdeşlikler", "Denklemler", "Eşitsizlikler"] },
      { name:"Geometri", topics:["Üçgenler", "Eşlik–Benzerlik", "Dönüşüm Geometrisi", "Cisimler"] },
      { name:"Veri ve Olasılık", topics:["Veri Analizi", "Olasılık"] },
      { name:"Yeni Nesil", topics:["LGS Tarzı Problem Çözümleri"] },
    ],
    playlists:{}, videos:[]
  },

  9:  { title:"9. Sınıf Matematik",  sections:[
      { name:"Sayılar", topics:["Gerçek Sayılar", "Sayı Kümeleri", "Bölünebilme"] },
      { name:"Cebir", topics:["Üslü–Köklü", "Denklem–Eşitsizlik"] },
      { name:"Fonksiyonlar", topics:["Fonksiyon Kavramı", "Fonksiyon Türleri"] },
      { name:"Geometri", topics:["Üçgenler", "Dörtgenler", "Çokgenler"] },
      { name:"Veri", topics:["İstatistik (Ortalama/Medyan/Mod)"] },
    ],
    playlists:{}, videos:[]
  },

  10: { title:"10. Sınıf Matematik", sections:[
      { name:"Cebir", topics:["Polinomlar", "2. Dereceden Denklemler"] },
      { name:"Fonksiyonlar", topics:["Fonksiyonlarda İşlemler", "Grafikler"] },
      { name:"Geometri", topics:["Çember ve Daire", "Çokgenler", "Dörtgenler"] },
      { name:"Analitik", topics:["Doğrunun Analitiği"] },
      { name:"Olasılık", topics:["Olasılık Hesapları"] },
    ],
    playlists:{}, videos:[]
  },

  11: { title:"11. Sınıf Matematik", sections:[
      { name:"Trigonometri", topics:["Trigonometrik Oranlar", "Trigonometrik Fonksiyonlar", "Problemler"] },
      { name:"Analitik Geometri", topics:["Doğrunun Analitiği", "Çemberin Analitiği"] },
      { name:"Fonksiyonlar", topics:["Bileşke", "Ters Fonksiyon"] },
      { name:"Diziler", topics:["Aritmetik Dizi", "Geometrik Dizi"] },
    ],
    playlists:{}, videos:[]
  },

  12: { title:"12. Sınıf Matematik (AYT)", sections:[
      { name:"Limit ve Süreklilik", topics:["Limit", "Süreklilik"] },
      { name:"Türev", topics:["Türev Kuralları", "Uygulamalar"] },
      { name:"İntegral", topics:["Belirsiz", "Belirli", "Alan"] },
      { name:"Analitik Geometri", topics:["Parabol", "Elips/Hiperbol (temel)"] },
      { name:"AYT Yeni Nesil", topics:["AYT Tarzı Soru Çözümleri"] },
    ],
    playlists:{}, videos:[]
  },
};
