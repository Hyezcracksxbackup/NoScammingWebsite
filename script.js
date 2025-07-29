function reveal() {
  document.getElementById('secret').style.display = 'block';

  // Optional: CTF-style webhook logger (disabled for now)
  /*
  fetch("https://discord.com/api/webhooks/1399653248675352647/2XautAIUjebA0C2inCs_FhRiCijX-PA8kmWlZeA3IzjzaT-TEBKAcoXGD-puPRJG4bND", {
    method: "POST",
    body: JSON.stringify({
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  */
}
