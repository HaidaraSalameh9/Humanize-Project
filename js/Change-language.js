// =================== Choosing language===================
const languageItems = document.querySelectorAll(".language-item");
const selectedFlag = document.getElementById("selectedFlag");
const selectedLang = document.getElementById("selectedLang");

languageItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // نمنع التنقل مؤقتًا

    const href = item.getAttribute("href");
    const lang = item.getAttribute("data-lang");
    const flag = item.getAttribute("data-flag");
    const text = item.textContent.trim();

    // تغيير العلم حسب الدولة
    if (flag === "kw") {
      selectedFlag.src = "./img/kuwait.svg";
    } else {
      selectedFlag.src = `https://flagcdn.com/h20/${flag}.png`;
    }

    // تغيير نص اللغة الظاهرة
    selectedLang.textContent = text;

    // حفظ البيانات في التخزين المحلي
    localStorage.setItem("selectedLang", lang);
    localStorage.setItem("selectedFlag", flag);
    localStorage.setItem("selectedText", text);

    // إذا كان الرابط فعليًا، انتقل للصفحة
    if (href && href !== "#") {
      window.location.href = href;
    }
  });
});

// عند تحميل الصفحة، استرجاع البيانات من التخزين المحلي
window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("selectedLang");
  const flag = localStorage.getItem("selectedFlag");
  const text = localStorage.getItem("selectedText");

  if (lang && flag && text) {
    if (flag === "kw") {
      selectedFlag.src = "./img/kuwait.svg";
    } else {
      selectedFlag.src = `https://flagcdn.com/h20/${flag}.png`;
    }
    selectedLang.textContent = text;
  }
});
