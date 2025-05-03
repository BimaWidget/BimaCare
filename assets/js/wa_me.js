(function () {
  const profileImageURL = "https://assets.zyrosite.com/AQExWVyreVSDg6Ek/foto-admin-Awv43GJl45uPkgga.png";

  const styles = `
    #wa-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25D366;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1001;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    #wa-button svg {
      width: 30px;
      height: 30px;
      fill: white;
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
  <svg viewBox="0 0 32 32">
    <path d="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"/>
  </svg>
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
const targetNumber = "628158117748";

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

  document.body.appendChild(popup);

  waBtn.addEventListener("click", () => {
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  });

  document.getElementById("close-chat").addEventListener("click", () => {
    popup.style.display = "none";
  });
})();
