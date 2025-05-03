(function () {
  // url foto profil
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

  // Inject style
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // WhatsApp button
  const waBtn = document.createElement("div");
  waBtn.id = "wa-button";
  waBtn.innerHTML = `
    <svg viewBox="0 0 32 32">
      <path d="M16.002 3C9.376 3 4 8.377 4 15c0 2.531.82 4.872 2.219 6.803L4 29l7.361-2.193A12.897 12.897 0 0 0 16.002 27C22.625 27 28 21.623 28 15S22.625 3 16.002 3zm0 2c5.513 0 10 4.486 10 10 0 5.513-4.487 10-10 10a10.89 10.89 0 0 1-5.457-1.459l-.387-.229-4.113 1.227 1.219-3.551-.25-.404A9.95 9.95 0 0 1 6 15c0-5.514 4.486-10 10.002-10zm-2.91 5a.977.977 0 0 0-.48.109c-.293.153-.627.527-.699.866-.073.338-.233 1.037.51 2.28.744 1.243 2.18 2.635 4.834 3.539.893.278 1.595.444 2.191.444.597 0 1.036-.178 1.327-.437.291-.26.438-.592.49-.825.052-.233.057-.452.042-.621-.016-.17-.066-.32-.12-.433-.055-.113-.826-1.055-1.135-1.27-.31-.215-.495-.276-.695-.183-.2.093-.776.377-.937.442-.16.065-.31.099-.57-.05-.26-.148-1.096-.46-2.09-1.464-.771-.773-1.295-1.722-1.45-1.98-.155-.259-.015-.397.05-.46.064-.063.134-.075.22-.126.086-.052.293-.148.453-.296.16-.149.215-.248.314-.43.098-.181.053-.343.004-.473-.049-.131-.457-1.108-.626-1.45-.17-.342-.357-.37-.488-.377a1.128 1.128 0 0 0-.167-.013z"/>
    </svg>
  `;
  document.body.appendChild(waBtn);

  // Popup box
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

  // Toggle
  waBtn.addEventListener("click", () => {
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  });

  document.getElementById("close-chat").addEventListener("click", () => {
    popup.style.display = "none";
  });
})();
