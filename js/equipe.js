function changeLanguage() {
    var languageSelect = document.getElementById("language-select");
    var selectedValue = languageSelect.options[languageSelect.selectedIndex].value;
    if (selectedValue === "en") {
      window.location.href = "equipe_en.html";
    }
    else if(selectedValue === "fr"){
      window.location.href = "equipe.html";
    }
  }