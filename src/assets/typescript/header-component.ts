const menuIcon = document.querySelector('.menu-icon') as HTMLElement | null;
const navbar = document.querySelector('.navbar') as HTMLElement | null;

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    console.log("Berk");
    navbar.classList.toggle("active");
  };
}
