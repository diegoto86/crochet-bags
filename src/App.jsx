import { useEffect, useState } from "react";
import { validateLandingData } from "./landingData";
import manifestoEn from "./content/manifesto.en.md?raw";
import manifestoEs from "./content/manifesto.es.md?raw";
import storyEn from "./content/story.en.md?raw";
import storyEs from "./content/story.es.md?raw";

const products = [
  {
    id: "noir",
    name: "Noir",
    color: { es: "Negra", en: "Black" },
    price: "S/ 80",
    note: {
      es: "Una cartera negra de crochet con silueta limpia para la noche y el dia a dia.",
      en: "A compact black crochet bag with a clean silhouette for evening and everyday wear.",
    },
    images: [
      "/images/products/cartera-negra-1.png",
      "/images/products/cartera-negra-2.png",
    ],
  },
  {
    id: "mar",
    name: "Mar",
    color: { es: "Azul", en: "Blue" },
    price: "S/ 80",
    note: {
      es: "Una pieza azul serena, con textura tejida y espiritu de verano.",
      en: "A calm blue piece with a resort mood and handwoven texture.",
    },
    images: [
      "/images/products/cartera-azul-1.png",
      "/images/products/cartera-azul-2.png",
    ],
  },
  {
    id: "tierra",
    name: "Tierra",
    color: { es: "Marron", en: "Brown" },
    price: "S/ 80",
    note: {
      es: "Un tono calido y versatil pensado para acompanar varias temporadas.",
      en: "A warm neutral crochet bag designed to move through seasons.",
    },
    images: [
      "/images/products/cartera-marron-1.png",
      "/images/products/cartera-marron-2.png",
    ],
  },
];

const copy = {
  es: {
    nav: {
      collection: "Coleccion",
      story: "Historia",
      contact: "Contacto",
    },
    hero: {
      kicker: "Lima / Barcelona",
      headline: "Crochet silencioso para un verano moderno",
      description:
        "Una linea contemporanea de accesorios nacida entre Lima y Barcelona, hecha a mano para climas calidos y elegancia contenida.",
    },
    collection: {
      kicker: "Coleccion destacada",
      title: "Tres tonos esenciales",
    },
    craft: {
      kicker: "Oficio",
      title: "Textura hecha a mano, proporciones refinadas",
      body:
        "La coleccion parte del punto visible, una estructura suave y una paleta sobria. El resultado es artesanal sin sentirse rustico, elevado sin perder calidez.",
    },
    story: {
      kicker: "La historia",
      title: "Nacida entre Lima y Barcelona",
    },
    footer: {
      kicker: "Pedidos privados",
      title: "Disponible por WhatsApp e Instagram",
      body:
        "Escribenos para confirmar color, disponibilidad y tiempos de entrega. Atendemos cada pedido de forma directa y personal.",
      whatsapp: "Pedir por WhatsApp",
      instagram: "Ver Instagram",
      atelierTitle: "Atelier",
      atelierBody: "Lima / Barcelona. Carteras de crochet en pequenas cantidades.",
      contactTitle: "Contacto",
      navTitle: "Navegacion",
      rights: "Lola Faletti. Crochet bags made in small quantities.",
    },
    whatsappMessage: "Hola Lola Faletti, quiero consultar por una cartera de crochet.",
    productAlt: {
      main: "cartera de crochet vista principal",
      detail: "detalle de cartera de crochet",
    },
  },
  en: {
    nav: {
      collection: "Collection",
      story: "Story",
      contact: "Contact",
    },
    hero: {
      kicker: "Lima / Barcelona",
      headline: "Quiet crochet for modern summer",
      description:
        "A contemporary accessories line born between Lima and Barcelona, shaped by hand, warm climates, and restrained elegance.",
    },
    collection: {
      kicker: "Featured collection",
      title: "Three essential tones",
    },
    craft: {
      kicker: "Craftsmanship",
      title: "Hand texture, refined proportions",
      body:
        "The collection is built around visible stitch work, soft structure, and a restrained palette. The result is artisanal without feeling rustic, elevated without losing warmth.",
    },
    story: {
      kicker: "The story",
      title: "Born between Lima and Barcelona",
    },
    footer: {
      kicker: "Private orders",
      title: "Available by WhatsApp and Instagram",
      body:
        "Write to confirm color, availability, and delivery timing. Every order is handled directly and personally.",
      whatsapp: "Order on WhatsApp",
      instagram: "View Instagram",
      atelierTitle: "Atelier",
      atelierBody: "Lima / Barcelona. Crochet bags made in small quantities.",
      contactTitle: "Contact",
      navTitle: "Navigation",
      rights: "Lola Faletti. Crochet bags made in small quantities.",
    },
    whatsappMessage: "Hello Lola Faletti, I would like to ask about a crochet bag.",
    productAlt: {
      main: "crochet bag main view",
      detail: "crochet bag detail",
    },
  },
};

const landing = {
  brand: "Lola Faletti",
  heroMedia: {
    type: "image",
    src: "/media/hero-editorial-draft.png",
    poster: "/media/hero-editorial-draft.png",
  },
  products,
  steps: [
    "Elige el color y revisa las fotos del modelo.",
    "Escribenos por WhatsApp para confirmar disponibilidad.",
    "Recibe tu cartera lista para estrenar.",
  ],
  whatsappNumber: "51985104920",
  instagramUrl: "https://www.instagram.com/crochet.bags",
};

const errors = validateLandingData(landing);
const galleryImages = [
  "/images/products/cartera-marron-2.png",
  "/images/products/cartera-negra-1.png",
  "/images/products/cartera-azul-2.png",
  "/images/products/cartera-marron-1.png",
];

function App() {
  const [language, setLanguage] = useState("es");
  const t = copy[language];
  const manifesto = language === "es" ? manifestoEs : manifestoEn;
  const story = language === "es" ? storyEs : storyEn;
  const whatsappUrl = `https://wa.me/${landing.whatsappNumber}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={landing.brand}>
          <span>{landing.brand}</span>
          <span aria-hidden="true" className="brand-divider" />
          <span className="brand-origin">Lima-Barcelona</span>
        </a>
        <div className="header-actions">
          <nav aria-label="Primary">
            <a href="#collection">{t.nav.collection}</a>
            <a href="#story">{t.nav.story}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="language-switch" aria-label="Language switch">
            <button
              type="button"
              className={language === "es" ? "active" : ""}
              onClick={() => setLanguage("es")}
              aria-pressed={language === "es"}
            >
              ES
            </button>
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section id="top" className="hero" aria-label="Lola Faletti editorial hero">
        {landing.heroMedia.type === "video" ? (
          <video
            src={landing.heroMedia.src}
            poster={landing.heroMedia.poster}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Lola Faletti editorial campaign video"
          />
        ) : (
          <img
            src={landing.heroMedia.src}
            alt="Lola Faletti crochet bag styled in an editorial setting"
          />
        )}
        <div className="hero-copy">
          <h1>{t.hero.headline}</h1>
          <p>{t.hero.description}</p>
        </div>
      </section>

      <section className="editorial-statement reveal">
        <p>{manifesto.trim()}</p>
      </section>

      <section id="collection" className="section collection reveal">
        <div className="section-heading">
          <p className="kicker">{t.collection.kicker}</p>
          <h2>{t.collection.title}</h2>
        </div>

        <div className="product-grid">
          {landing.products.map((item) => (
            <article key={item.id} className="product-card">
              <a className="product-media" href={whatsappUrl} target="_blank" rel="noreferrer">
                <img src={item.images[0]} alt={`${item.name} ${item.color[language]} ${t.productAlt.main}`} />
                <img src={item.images[1]} alt={`${item.name} ${item.color[language]} ${t.productAlt.detail}`} />
              </a>
              <div className="product-info">
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.color[language]}</span>
                </div>
                <strong>{item.price}</strong>
              </div>
              <p>{item.note[language]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="craft-section reveal">
        <div className="craft-image">
          <img src="/images/products/cartera-marron-1.png" alt="Close view of a brown crochet bag" />
        </div>
        <div className="craft-copy">
          <p className="kicker">{t.craft.kicker}</p>
          <h2>{t.craft.title}</h2>
          <p>{t.craft.body}</p>
        </div>
      </section>

      <section id="story" className="story-section reveal">
        <p className="kicker">{t.story.kicker}</p>
        <h2>{t.story.title}</h2>
        <p>{story.trim()}</p>
      </section>

      <section className="gallery-section reveal" aria-label="Instagram gallery">
        {galleryImages.map((image, index) => (
          <img key={image} src={image} alt={`Lola Faletti gallery image ${index + 1}`} />
        ))}
      </section>

      <footer id="contact" className="brand-footer reveal">
        <div className="footer-cta">
          <div>
            <p className="kicker">{t.footer.kicker}</p>
            <h2>{t.footer.title}</h2>
          </div>
          <p>{t.footer.body}</p>
          <div className="cta-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {t.footer.whatsapp}
            </a>
            <a href={landing.instagramUrl} target="_blank" rel="noreferrer">
              {t.footer.instagram}
            </a>
          </div>
        </div>

        <div className="footer-info">
          <div className="footer-brand">
            <a href="#top">{landing.brand}</a>
          </div>
          <div>
            <h3>{t.footer.atelierTitle}</h3>
            <p>{t.footer.atelierBody}</p>
          </div>
          <div>
            <h3>{t.footer.contactTitle}</h3>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp +51 985 104 920
            </a>
            <a href={landing.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
          <div>
            <h3>{t.footer.navTitle}</h3>
            <a href="#collection">{t.nav.collection}</a>
            <a href="#story">{t.nav.story}</a>
            <a href="#top">Top</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <span>Lima / Barcelona</span>
        </div>
      </footer>

      {errors.length > 0 && (
        <section className="warning">
          <h2>Revisar configuracion</h2>
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
