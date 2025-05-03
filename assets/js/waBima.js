(function () {
  // CSS Styles
  const styles = `
    #wa-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25D366;
      color: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      cursor: pointer;
      z-index: 1001;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    #chat-popup {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 280px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-family: Arial, sans-serif;
      z-index: 1000;
      overflow: hidden;
      display: none;
    }

    .chat-header {
      display: flex;
      align-items: center;
      background: #25D366;
      color: #fff;
      padding: 10px;
    }

    .chat-header img {
      border-radius: 50%;
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }

    .chat-header .name {
      font-weight: bold;
    }

    .chat-header .role {
      font-size: 12px;
      opacity: 0.9;
    }

    .chat-header .close-btn {
      margin-left: auto;
      cursor: pointer;
      font-size: 20px;
    }

    .chat-message {
      padding: 10px;
      font-size: 14px;
      background: #f0f0f0;
    }

    .chat-input {
      width: calc(100% - 50px);
      border: none;
      padding: 10px;
      font-size: 14px;
      outline: none;
    }

    .send-btn {
      width: 40px;
      border: none;
      background: #25D366;
      color: white;
      font-size: 18px;
      cursor: pointer;
    }
  `;

  // Inject styles
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // WhatsApp button
  const waBtn = document.createElement("div");
  waBtn.id = "wa-button";
  waBtn.innerHTML = "📱";
  document.body.appendChild(waBtn);

  // Chat popup
  const popup = document.createElement("div");
  popup.id = "chat-popup";
  popup.innerHTML = `
    <div class="chat-header">
      <img src="https://assets.zyrosite.com/AQExWVyreVSDg6Ek/foto-admin-Awv43GJl45uPkgga.png" alt="Zulfikar">
      <div>
        <div class="name">Zulfikar</div>
        <div class="role">Bima Care Officer</div>
      </div>
      <span class="close-btn" id="close-chat">×</span>
    </div>
    <div class="chat-message">
      <p>Hi there! 👋</p>
      <p>Looking for the best offers from Bima Bioenergy? Let’s chat!</p>
    </div>
    <input type="text" class="chat-input" placeholder="Enter Your Message..." />
    <button class="send-btn">➤</button>
  `;
  document.body.appendChild(popup);

  // Toggle logic
  waBtn.addEventListener("click", () => {
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  });

  document.getElementById("close-chat").addEventListener("click", () => {
    popup.style.display = "none";
  });
})();
