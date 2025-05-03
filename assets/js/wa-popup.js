(function () {
  const phoneNumber = '628158117748';
  const message = 'Hi there! 👋 Looking for the best offers from Bima Bioenergy? Let’s chat!';

  const style = document.createElement('style');
  style.textContent = `
    .wa-popup-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
      font-family: Arial, sans-serif;
    }

    .wa-popup-button {
      background-color: #25D366;
      border: none;
      border-radius: 50%;
      width: 56px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .wa-popup-button img {
      width: 28px;
      height: 28px;
    }

    .wa-popup-box {
      display: none;
      position: absolute;
      bottom: 70px;
      right: 0;
      width: 300px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      padding: 15px;
    }

    .wa-popup-box.open {
      display: block;
    }

    .wa-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .wa-header img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .wa-header .wa-info {
      line-height: 1.2;
    }

    .wa-info .name {
      font-weight: bold;
    }

    .wa-info .caption {
      font-size: 0.9em;
      color: gray;
    }

    .wa-message {
      font-size: 0.95em;
      margin-bottom: 10px;
    }

    .wa-chat-button {
      background-color: #25D366;
      color: white;
      text-align: center;
      padding: 10px;
      border-radius: 6px;
      text-decoration: none;
      display: block;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    .wa-chat-button:hover {
      background-color: #1ebd5a;
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.className = 'wa-popup-container';

  container.innerHTML = `
    <div class="wa-popup-box" id="waPopupBox">
      <div class="wa-header">
        <img src="https://assets.zyrosite.com/AQExWVyreVSDg6Ek/foto-admin-Awv43GJl45uPkgga.png" alt="Admin">
        <div class="wa-info">
          <div class="name">Zulfikar</div>
          <div class="caption">Bima Care Office</div>
        </div>
      </div>
      <div class="wa-message">
        Hi there! 👋<br>
        Looking for the best offers from Bima Bioenergy? Let’s chat!
      </div>
      <a class="wa-chat-button" href="https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener noreferrer">Chat via WhatsApp</a>
    </div>
    <button class="wa-popup-button" id="waPopupButton">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA">
    </button>
  `;

  document.body.appendChild(container);

  const btn = document.getElementById('waPopupButton');
  const popup = document.getElementById('waPopupBox');

  btn.addEventListener('click', () => {
    popup.classList.toggle('open');
  });
})();
