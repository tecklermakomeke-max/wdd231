// set up current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// join.js - timestamp + modals
document.addEventListener('DOMContentLoaded', () => {
  // Set timestamp hidden field
  const timestamp = document.getElementById('timestamp');
  if (timestamp) {
    timestamp.value = new Date().toISOString();
  }

  // Open modals
  document.querySelectorAll('.open-modal').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = e.target.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) modal.showModal();
    });
  });

  // Close modals
  document.querySelectorAll('dialog button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('dialog').close();
    });
  });
});