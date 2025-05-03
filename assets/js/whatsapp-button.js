(function () {
  const phoneNumber = '628158117748'; // Nomor WA Bima Care
  const message = 'Hello Bima Care. I am interested in your products. Please send me a quotation.'; // Pesan otomatis

  const style = document.createElement('style');
  style.textContent = `
    .wa-float-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25D366;
      color: white;
      border-radius: 50px;
      padding: 12px 20px;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .wa-float-btn img {
      width: 20px;
      height: 20px;
    }
  `;
  document.head.appendChild(style);

  const waBtn = document.createElement('a');
  waBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  waBtn.className = 'wa-float-btn';
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" />
    Chat via WhatsApp
  `;

  document.body.appendChild(waBtn);
})();
