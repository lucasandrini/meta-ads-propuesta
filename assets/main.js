const landingConfig = {
  whatsappUrl: "",
  email: "lucasandrini01@gmail.com",
  pdfUrl: "assets/propuesta-meta-ads.pdf",
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

document.querySelectorAll(".js-pdf-link").forEach((link) => {
  link.href = landingConfig.pdfUrl;
});

document.querySelectorAll(".js-email").forEach((link) => {
  link.href = `mailto:${landingConfig.email}`;
});

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  if (landingConfig.whatsappUrl) {
    link.href = landingConfig.whatsappUrl;
    return;
  }

  link.href = `mailto:${landingConfig.email}?subject=Consulta%20por%20gesti%C3%B3n%20Meta%20Ads`;
  link.setAttribute("aria-label", "Hablar por WhatsApp. Falta configurar el número, por ahora abre email.");
});
