import { validateLandingData } from "./landingData";

const landing = {
  brand: "Crochet Bags",
  headline: "Bolsos tejidos a mano con estilo único",
  description:
    "Diseños artesanales, materiales resistentes y acabados premium para acompañarte en cada momento.",
  products: [
    { name: "Luna Mini", price: "$49", note: "Ideal para salidas casuales" },
    { name: "Sol Tote", price: "$69", note: "Espacioso para uso diario" },
    { name: "Mar Boho", price: "$79", note: "Toque bohemio elegante" },
  ],
  steps: [
    "Elige tu modelo favorito.",
    "Escríbenos por WhatsApp para confirmar colores y stock.",
    "Recibe tu bolso listo para estrenar.",
  ],
  whatsappNumber: "51987654321",
  instagramUrl: "https://www.instagram.com/crochet.bags",
};

const errors = validateLandingData(landing);

function App() {
  return (
    <main className="page">
      <section className="hero card">
        <p className="badge">Hecho a mano</p>
        <h1>{landing.headline}</h1>
        <p>{landing.description}</p>
        <div className="actions">
          <a
            className="btn primary"
            href={`https://wa.me/${landing.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            Pedir por WhatsApp
          </a>
          <a className="btn" href={landing.instagramUrl} target="_blank" rel="noreferrer">
            Ver Instagram
          </a>
        </div>
      </section>

      <section className="card">
        <h2>Colección destacada</h2>
        <div className="grid">
          {landing.products.map((item) => (
            <article key={item.name} className="product">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>¿Cómo hacer tu pedido?</h2>
        <ol>
          {landing.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      {errors.length > 0 && (
        <section className="card warning">
          <h2>Revisar configuración</h2>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default App;
