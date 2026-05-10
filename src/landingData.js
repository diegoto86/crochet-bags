export function validateLandingData({ products, steps, whatsappNumber, instagramUrl }) {
  const errors = [];

  if (!Array.isArray(products) || products.length < 3) {
    errors.push("La colección debe tener al menos 3 productos.");
  }

  if (!Array.isArray(steps) || steps.length !== 3) {
    errors.push("La sección de pedido debe tener exactamente 3 pasos.");
  }

  if (!/^\d{8,15}$/.test(whatsappNumber)) {
    errors.push("El número de WhatsApp debe incluir solo dígitos y código de país.");
  }

  if (!/^https:\/\/www\.instagram\.com\//.test(instagramUrl)) {
    errors.push("La URL de Instagram debe empezar por https://www.instagram.com/.");
  }

  return errors;
}
