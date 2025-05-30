const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");
const submenuLinks = document.querySelectorAll(".has-submenu > a");

hamburger.addEventListener("click", () => {
  menuList.classList.toggle("show");
});

submenuLinks.forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();

      // Fecha todos os outros submenus
      document.querySelectorAll(".submenu").forEach(sub => {
        if (sub !== link.nextElementSibling) {
          sub.style.display = "none";
        }
      });

      // Alterna submenu clicado
      const submenu = link.nextElementSibling;
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    }
  });
});

// Adiciona classe de item ativo ao clicar
const menuItems = document.querySelectorAll(".menu-list a");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  });
});
