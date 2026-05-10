const INSTAGRAM_URL_PATTERN = /^https:\/\/(www\.)?instagram\.com\/[A-Za-z0-9._-]+\/?$/;
const WHATSAPP_NUMBER_PATTERN = /^\d{8,15}$/;

export function validateLandingData(input = {}) {
  const {
    products = [],
    steps = [],
    whatsappNumber = "",
    instagramUrl = "",
  } = input;

  const errors = [];

  if (!Array.isArray(products) || products.length < 3) {
    errors.push("La colección debe tener al menos 3 productos.");
  }

  if (!Array.isArray(steps) || steps.length !== 3) {
    errors.push("La sección de pedido debe tener exactamente 3 pasos.");
  }

  if (!WHATSAPP_NUMBER_PATTERN.test(String(whatsappNumber).trim())) {
    errors.push("El número de WhatsApp debe incluir solo dígitos y código de país.");
  }

  if (!INSTAGRAM_URL_PATTERN.test(String(instagramUrl).trim())) {
    errors.push("La URL de Instagram debe ser un perfil válido de Instagram.");
  }

  return errors;
}
