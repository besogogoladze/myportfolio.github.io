document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language-selector");

  if (!languageSelector) {
    console.error("Language selector not found!");
    return;
  }

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
  };

  languageSelector.addEventListener("change", function () {
    const selectedLang = this.value;

    fetch("translations.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!data[selectedLang]) {
          console.warn(`No translations found for language: ${selectedLang}`);
          return;
        }

        for (let key in elementsToTranslate) {
          if (elementsToTranslate[key]) {
            elementsToTranslate[key].textContent =
              data[selectedLang][key] || "Translation missing";
          } else {
            console.warn(`Element with ID "${key}" not found.`);
          }
        }

        localStorage.setItem("lang", selectedLang);
      })
      .catch((error) => {
        console.error("Error loading translations:", error);
      });
  });

  // Load the previously selected language
  const savedLang = localStorage.getItem("lang") || "en";
  languageSelector.value = savedLang;
  languageSelector.dispatchEvent(new Event("change"));
});

// Function to download the correct CV based on language
const downloadCv = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  const cvFiles = {
    en: "./download/CV_Gogoladze_Besiki_EN.pdf",
    fr: "./download/CV_GOGOLADZEBesiki_FR.pdf",
    ge: "./download/Developpeur_CV.pdf",
  };

  const cvUrl = cvFiles[savedLang] || cvFiles.en;
  window.open(cvUrl, "_blank");
};
function changeFlag() {
  const selector = document.getElementById("language-selector");
  const flagIcon = document.getElementById("flag-icon");
  const selectedOption = selector.options[selector.selectedIndex];
  flagIcon.src = selectedOption.getAttribute("data-flag");
}
