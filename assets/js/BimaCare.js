(function () {
  const profileImageURL = "https://assets.zyrosite.com/AQExWVyreVSDg6Ek/foto-admin-Awv43GJl45uPkgga.png";
  const targetNumber = "628158117748";

  const styles = `
    #wa-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
      z-index: 1001;
    }

    #wa-button img {
      width: 50px;
      height: 50px;
    }

    #chat-popup {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 300px;
      background: #fff;
      border-radius: 15px;
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
      background: #f9f9f9;
    }

    .chat-input {
      width: calc(100% - 60px);
      border: none;
      padding: 10px;
      font-size: 14px;
      outline: none;
      border-top: 1px solid #ddd;
    }

    .send-btn {
      width: 40px;
      height: 40px;
      margin: 10px;
      border: none;
      background: #25D366;
      color: white;
      font-size: 18px;
      cursor: pointer;
      border-radius: 50%;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const waBtn = document.createElement("div");
  waBtn.id = "wa-button";
  waBtn.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
  `;
  document.body.appendChild(waBtn);

  const popup = document.createElement("div");
  popup.id = "chat-popup";
  popup.innerHTML = `
    <div class="chat-header">
      <img src="${profileImageURL}" alt="Zulfikar">
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
    <div style="display: flex; align-items: center;">
      <input type="text" class="chat-input" placeholder="Enter Your Message..." />
      <button class="send-btn">➤</button>
    </div>
  `;
  document.body.appendChild(popup);

  waBtn.addEventListener("click", () => {
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  });

  document.getElementById("close-chat").addEventListener("click", () => {
    popup.style.display = "none";
  });

  const sendBtn = popup.querySelector(".send-btn");
  const inputField = popup.querySelector(".chat-input");

  sendBtn.addEventListener("click", () => {
    const message = inputField.value.trim();
    if (message) {
      const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  });
})();
