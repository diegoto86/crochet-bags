import { siteData } from "./siteData";

const toCurrency = (value) =>
  new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN", maximumFractionDigits: 0 }).format(
    value,
  );

const buildWhatsAppLink = (productName = "") => {
  const msg = encodeURIComponent(`Hola, quiero comprar el bolso ${productName}. ¿Me ayudas con stock y envío?`);
  return `https://wa.me/${siteData.brand.whatsappNumber}?text=${msg}`;
};

export default function App() {
  return (
    <main>
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{siteData.brand.tagline}</p>
          <h1>{siteData.hero.title}</h1>
          <p>{siteData.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="btn primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              Comprar por WhatsApp
            </a>
            <a className="btn secondary" href={siteData.brand.instagramUrl} target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
        </div>
        <img src={siteData.hero.imageUrl} alt="Bolso de crochet artesanal" />
      </header>

      <section className="products">
        <div className="section-title">
          <h2>Colección</h2>
          <p>
            Para agregar o editar productos solo cambia <code>src/siteData.js</code>.
          </p>
        </div>
        <div className="grid">
          {siteData.products.map((product) => (
            <article key={product.id} className="card">
              <img src={product.imageUrl} alt={product.name} />
              <div className="card-body">
                <h3>{product.name}</h3>
                <p className="price">{toCurrency(product.pricePen)}</p>
                <p>{product.description}</p>
                <div className="actions">
                  <a className="btn primary" href={buildWhatsAppLink(product.name)} target="_blank" rel="noreferrer">
                    Pedir ahora
                  </a>
                  {product.paymentLink ? (
                    <a className="btn secondary" href={product.paymentLink} target="_blank" rel="noreferrer">
                      Pagar online
                    </a>
                  ) : (
                    <span className="hint">Añade `paymentLink` para pasarela de pagos</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits">
        {siteData.benefits.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>
    </main>
  );
}
