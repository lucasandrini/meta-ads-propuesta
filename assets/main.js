const landingConfig = {
  // Para WhatsApp usar formato internacional, por ejemplo:
  // https://wa.me/5491112345678
  whatsappUrl: "https://wa.me/5491123492031",
  email: "lucasandrini01@gmail.com",
  prices: {
    tope_inversion_1: "$500.000",
    fee_mensual_1: "$150.000",
    tope_inversion_2: "$1.200.000",
    fee_mensual_2: "$250.000",
    tope_inversion_3: "$2.500.000",
    fee_mensual_3: "$400.000"
  }
};

document.querySelectorAll("[data-price]").forEach((node) => {
  const key = node.dataset.price;
  if (landingConfig.prices[key]) {
    node.textContent = landingConfig.prices[key];
  }
});

document.querySelectorAll(".js-email").forEach((link) => {
  link.href = "mailto:" + landingConfig.email;
});

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  if (landingConfig.whatsappUrl) {
    link.href = landingConfig.whatsappUrl;
    return;
  }

  link.href = "mailto:" + landingConfig.email + "?subject=Consulta%20por%20gestion%20Meta%20Ads";
  link.textContent = "Enviar email";
  link.setAttribute("aria-label", "Enviar email. Falta configurar el numero de WhatsApp.");
});
