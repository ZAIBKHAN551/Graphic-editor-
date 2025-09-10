const translations = {
  en: "Hello, welcome to my app!",
  ur: "السلام علیکم، میری ایپ میں خوش آمدید!",
  fr: "Bonjour, bienvenue dans mon application!"
};

const select = document.getElementById("langSelect");
const output = document.getElementById("output");

// Jab dropdown change ho, text update ho jaye
select.addEventListener("change", () => {
  const lang = select.value;
  output.innerText = translations[lang];
});

// Default language
output.innerText = translations["en"];
