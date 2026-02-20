const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const form = document.getElementById("reviewForm");
const statusNode = document.getElementById("formStatus");

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
    const master = String(data.get("master") || "").trim();
    const date = String(data.get("date") || "").trim();

    if (!name || !phone || !service || !master || !date) {
      statusNode.textContent = "Проверьте форму и заполните обязательные поля.";
      return;
    }

    if (phone.length < 10) {
      statusNode.textContent = "Проверьте форму и заполните обязательные поля.";
      return;
    }

    statusNode.textContent = "Заявка принята. Администратор свяжется с вами в течение 15 минут.";
    form.reset();
  });
}
