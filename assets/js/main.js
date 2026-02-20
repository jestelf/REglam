const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

const form = document.getElementById("bookingForm");
const statusNode = document.getElementById("formStatus");

const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("galleryModalImage");
const modalCaption = document.getElementById("galleryModalCaption");
const galleryClose = document.getElementById("galleryClose");
const galleryTriggers = Array.from(document.querySelectorAll("[id^='galleryOpen']"));

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open");
  });
}

if (form && statusNode) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const specialist = String(data.get("specialist") || "").trim();
    const date = String(data.get("date") || "").trim();
    const time = String(data.get("time") || "").trim();

    if (!name || !phone || !service || !specialist || !date || !time) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      statusNode.textContent = "Проверьте форму целиком и заполните обязательные поля.";
      return;
    }

    if (phone.length < 10) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      statusNode.textContent = "Проверьте форму целиком и заполните обязательные поля.";
      return;
    }

    statusNode.textContent = "Запрос принят. Администратор свяжется с вами в ближайшее время.";
    form.reset();
  });
}

if (modal && modalImage && modalCaption && galleryClose) {
  const openModal = (src, caption) => {
    modalImage.src = src;
    modalCaption.textContent = caption;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    modalCaption.textContent = "";
  };

  galleryTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openModal(trigger.dataset.image || "", trigger.dataset.caption || "");
    });
  });

  galleryClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}
