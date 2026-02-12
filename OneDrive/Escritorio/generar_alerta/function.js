window.onload = () => {
  const alerta = document.getElementById("alerta");

  alerta.classList.add("show");

  setTimeout(() => {
    alerta.classList.remove("show");
  }, 3000);
};
