document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language-selector");
  const elementsToTranslate = {
    Hello: document.getElementById("Hello"),
    MyName: document.getElementById("My-name"),
    portfolio: document.getElementById("portfolio"),
    mySkills: document.getElementById("mySkills"),
    recent: document.getElementById("recent"),
    recentProjects: document.getElementById("recentProjects"),
    project1: document.getElementById("project1"),
    project2: document.getElementById("project2"),
    project3: document.getElementById("project3"),
    project4: document.getElementById("project4"),
    project5: document.getElementById("project5"),
    sectionTitle: document.getElementById("section-title"),
    contactMe: document.getElementById("contactMe"),
    aboutMe: document.getElementById("about-me"),
    downloadResume: document.getElementById("download-resume"),
    contactInfoTitle: document.getElementById("contact-info-title"),
    contactInfo: document.getElementById("contact-info"),
  };

  languageSelector.addEventListener("change", function () {
    const selectedLang = this.value;
    fetch("translations.json")
      .then((response) => response.json())
      .then((data) => {
        for (let key in elementsToTranslate) {
          elementsToTranslate[key].textContent = data[selectedLang][key];
        }
        localStorage.setItem("lang", selectedLang);
      });
  });

  // Load the previously selected language
  const savedLang = localStorage.getItem("lang") || "en";
  languageSelector.value = savedLang;
  languageSelector.dispatchEvent(new Event("change"));
});

const downloadCv = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  if (savedLang === "en") {
    window.open("./download/CV_Gogoladze_Besiki_EN.pdf");
  } else if (savedLang === "fr") {
    window.open("./download/CV_GOGOLADZEBesiki_FR.pdf");
  } else {
    window.open("./download/Developpeur_CV.pdf");
  }
};
