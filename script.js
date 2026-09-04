// ================================
// Google Apps Script Web App URL এখানে বসান
// উদাহরণ: https://script.google.com/macros/s/XXXXXXXX/exec
// ================================
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

const form = document.getElementById("biodataForm");
const statusBox = document.getElementById("status");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  if (GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
    statusBox.style.color = "red";
    statusBox.textContent = "প্রথমে Google Apps Script Web App URL সেট করতে হবে। README ফাইল দেখুন।";
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  data.timestamp = new Date().toLocaleString("bn-BD");

  btn.disabled = true;
  statusBox.style.color = "#333";
  statusBox.textContent = "তথ্য জমা হচ্ছে...";

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });
    const result = await response.json();

    if (result.success) {
      statusBox.style.color = "green";
      statusBox.textContent = "✅ আপনার বায়োডাটা সফলভাবে জমা হয়েছে।";
      form.reset();
    } else {
      throw new Error(result.message || "Submit failed");
    }
  } catch (err) {
    statusBox.style.color = "red";
    statusBox.textContent = "❌ তথ্য জমা হয়নি। Google Apps Script URL এবং Deploy সেটিং পরীক্ষা করুন।";
  } finally {
    btn.disabled = false;
  }
});