(function () {
  const phoneNumber = '628158117748'; // Nomor WA Bima Care
  const message = 'Hello Bima Care. I am interested in your products. Please send me a quotation.'; // Pesan otomatis

  const style = document.createElement('style');
  style.textContent = `
    .wa-float-icon {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25D366;
      border-radius: 50%;
      width: 56px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      z-index: 10000;
      cursor: pointer;
    }
    .wa-float-icon img {
      width: 28px;
      height: 28px;
    }
  `;
  document.head.appendChild(style);

  const waIcon = document.createElement('a');
  waIcon.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  waIcon.className = 'wa-float-icon';
  waIcon.target = '_blank';
  waIcon.rel = 'noopener noreferrer';
  waIcon.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" />
  `;

  document.body.appendChild(waIcon);
})();
