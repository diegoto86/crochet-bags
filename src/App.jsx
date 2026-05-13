import { useEffect, useRef, useState } from "react";
import { siteContent } from "./contentLoader";
import { validateLandingData } from "./landingData";

const products = [
  {
    id: "noir",
    name: "Noir",
    color: { es: "Negra", en: "Black" },
    price: "Desde S/ 160",
    images: [
      "/images/products/cartera-negra-1.png",
      "/images/products/cartera-negra-2.png",
    ],
  },
  {
    id: "mar",
    name: "Mar",
    color: { es: "Azul", en: "Blue" },
    price: "Desde S/ 160",
    images: [
      "/images/products/cartera-azul-1.png",
      "/images/products/cartera-azul-2.png",
    ],
  },
  {
    id: "tierra",
    name: "Tierra",
    color: { es: "Marron", en: "Brown" },
    price: "Desde S/ 160",
    images: [
      "/images/products/cartera-marron-1.png",
      "/images/products/cartera-marron-2.png",
    ],
  },
  {
    id: "arena",
    name: "Arena",
    color: { es: "Natural", en: "Natural" },
    price: "Desde S/ 160",
    images: [
      "/images/products/cartera-marron-2.png",
      "/images/products/cartera-marron-1.png",
    ],
  },
  {
    id: "bruna",
    name: "Bruna",
    color: { es: "Oscura", en: "Dark" },
    price: "Desde S/ 160",
    images: [
      "/images/products/cartera-negra-2.png",
      "/images/products/cartera-negra-1.png",
    ],
  },
  {
    id: "cala",
    name: "Cala",
    color: { es: "Azul suave", en: "Soft blue" },
    price: "Desde S/ 160",
    images: [
      "/images/products/cartera-azul-2.png",
      "/images/products/cartera-azul-1.png",
    ],
  },
];

const copy = {
  es: {
    nav: {
      collection: "Coleccion",
      occasion: "Eventos",
      story: "Historia",
      contact: "Contacto",
    },
    collectionCta: "Descubrir best sellers",
    whatsappMessage: "Hola Lola Faletti, quiero consultar por una cartera de crochet.",
    productAlt: {
      main: "cartera de crochet vista principal",
      detail: "detalle de cartera de crochet",
    },
    features: [
      {
        title: "Hechas en Lima",
        body: "Produccion local en pequenas cantidades.",
      },
      {
        title: "Bajo pedido",
        body: "Confirmamos color, acabado y tiempo por WhatsApp.",
      },
      {
        title: "Para elevar looks simples",
        body: "Textura para lino, vestidos, denim y noches de verano.",
      },
      {
        title: "Edicion limitada",
        body: "Piezas en rotacion para coleccion y eventos.",
      },
    ],
  },
  en: {
    nav: {
      collection: "Collection",
      occasion: "Events",
      story: "Story",
      contact: "Contact",
    },
    collectionCta: "Discover the bestsellers",
    whatsappMessage: "Hello Lola Faletti, I would like to ask about a crochet bag.",
    productAlt: {
      main: "crochet bag main view",
      detail: "crochet bag detail",
    },
    features: [
      {
        title: "Made in Lima",
        body: "Local production in small quantities.",
      },
      {
        title: "Made to order",
        body: "We confirm color, finish, and timing on WhatsApp.",
      },
      {
        title: "For simple looks",
        body: "Texture for linen, dresses, denim, and summer nights.",
      },
      {
        title: "Limited edition",
        body: "Rotating pieces for collection and events.",
      },
    ],
  },
};

const occasionProducts = [
  {
    id: "noche",
    name: { es: "Noche", en: "Night" },
    category: { es: "Evento", en: "Event" },
    note: {
      es: "Una pieza pensada para elevar looks de invitada con textura y presencia.",
      en: "A piece designed to elevate occasion looks with texture and presence.",
    },
    image: "/images/products/cartera-negra-2.png",
  },
  {
    id: "brisa",
    name: { es: "Brisa", en: "Breeze" },
    category: { es: "Boda de dia", en: "Day wedding" },
    note: {
      es: "Ideal para celebraciones calidas, vestidos ligeros y un detalle especial.",
      en: "Ideal for warm-weather celebrations, light dresses, and a special detail.",
    },
    image: "/images/products/cartera-azul-1.png",
  },
  {
    id: "luz",
    name: { es: "Luz", en: "Light" },
    category: { es: "Brunch", en: "Brunch" },
    note: {
      es: "Una opcion mas luminosa para bodas de dia, brunches y ocasiones de verano.",
      en: "A brighter option for daytime weddings, brunches, and summer occasions.",
    },
    image: "/images/products/cartera-marron-2.png",
  },
  {
    id: "invitada",
    name: { es: "Invitada", en: "Guest" },
    category: { es: "Celebracion", en: "Celebration" },
    note: {
      es: "Textura y calma visual para acompanar una comida importante o una salida especial.",
      en: "Texture and visual calm for an important lunch or a special evening out.",
    },
    image: "/images/products/cartera-negra-1.png",
  },
  {
    id: "celebracion",
    name: { es: "Celebracion", en: "Celebration" },
    category: { es: "Fiesta intima", en: "Intimate party" },
    note: {
      es: "Un detalle distinto para looks simples que necesitan un punto de intencion.",
      en: "A distinctive detail for simple looks that need a point of intention.",
    },
    image: "/images/products/cartera-azul-2.png",
  },
  {
    id: "atardecer",
    name: { es: "Atardecer", en: "Sunset" },
    category: { es: "Verano", en: "Summer" },
    note: {
      es: "Calida, suave y facil de llevar para planes de tarde, terraza y viaje.",
      en: "Warm, soft, and easy to wear for afternoon plans, terraces, and travel.",
    },
    image: "/images/products/cartera-marron-1.png",
  },
];

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
  const productRailRef = useRef(null);
  const t = copy[language];
  const content = siteContent[language];
  const whatsappUrl = `https://wa.me/${landing.whatsappNumber}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;
  const orderSteps = [
    content.order.meta.step1,
    content.order.meta.step2,
    content.order.meta.step3,
  ];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function scrollProductRail(direction) {
    const rail = productRailRef.current;

    if (!rail) {
      return;
    }

    const scrollAmount = rail.clientWidth * 0.92;
    rail.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <main>
      <a
        className="top-announcement-bar"
        href={content.topbar.meta.href || "#occasion-edit"}
      >
        <span>{content.topbar.meta.label}</span>
      </a>

      <header className="site-header">
        <div className="brand-lockup">
          <a className="brand" href="#top" aria-label={landing.brand}>
            {landing.brand}
          </a>
          <span aria-hidden="true" className="brand-divider" />
          <span className="brand-origin">Lima-Barcelona</span>
        </div>
        <div className="header-actions">
          <nav aria-label="Primary">
            <a href="#collection">{t.nav.collection}</a>
            <a href="#occasion-edit">{t.nav.occasion}</a>
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
          <p className="kicker">{content.hero.meta.kicker}</p>
          <h1>{content.hero.meta.title}</h1>
          <p>{content.hero.meta.description}</p>
          <div className="hero-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {content.hero.meta.primaryCta}
            </a>
            <a href="#collection">{content.hero.meta.secondaryCta}</a>
          </div>
        </div>
      </section>

      <section id="collection" className="section collection reveal">
        <div className="collection-rail-heading">
          <h2>{content.collection.meta.kicker}</h2>
          <a href={content.topbar.meta.href || "#occasion-edit"}>
            <span>{t.collectionCta}</span>
            <span aria-hidden="true">›</span>
          </a>
        </div>

        <div className="product-rail-shell">
          <button
            className="rail-control prev"
            type="button"
            aria-label={language === "es" ? "Ver productos anteriores" : "View previous products"}
            onClick={() => scrollProductRail(-1)}
          >
            ‹
          </button>
          <div
            className="product-rail"
            aria-label={content.collection.meta.kicker}
            ref={productRailRef}
          >
            {landing.products.map((item) => (
              <article key={item.id} className="product-card">
                <a className="product-media" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <img
                    src={item.images[0]}
                    alt={`${item.name} ${item.color[language]} ${t.productAlt.main}`}
                  />
                  <img
                    src={item.images[1]}
                    alt={`${item.name} ${item.color[language]} ${t.productAlt.detail}`}
                  />
                </a>
                <div className="product-info">
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.color[language]}</span>
                  </div>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
          <button
            className="rail-control next"
            type="button"
            aria-label={language === "es" ? "Ver mas productos" : "View more products"}
            onClick={() => scrollProductRail(1)}
          >
            ›
          </button>
        </div>
      </section>

      <section className="feature-strip reveal" aria-label="Brand benefits">
        {t.features.map((feature) => (
          <article key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>

      <section className="editorial-manifesto reveal">
        <p>{content.manifesto.body.trim()}</p>
      </section>

      <section className="craft-section reveal">
        <div className="craft-image">
          <img src="/images/products/cartera-marron-1.png" alt="Close view of a brown crochet bag" />
        </div>
        <div className="craft-copy">
          <p className="kicker">{content.craft.meta.kicker}</p>
          <h2>{content.craft.meta.title}</h2>
          <p>{content.craft.body.trim()}</p>
        </div>
      </section>

      <section id="story" className="story-section reveal">
        <p className="kicker">{language === "es" ? "La historia" : "The story"}</p>
        <h2>{language === "es" ? "Nacida entre Lima y Barcelona" : "Born between Lima and Barcelona"}</h2>
        <p>{content.story.body.trim()}</p>
      </section>

      <section className="gallery-section reveal" aria-label="Instagram gallery">
        {galleryImages.map((image, index) => (
          <img key={image} src={image} alt={`Lola Faletti gallery image ${index + 1}`} />
        ))}
      </section>

      <section id="occasion-edit" className="occasion-section reveal">
        <div className="section-heading">
          <div>
            <p className="kicker">{content.occasion.meta.kicker}</p>
            <h2>{content.occasion.meta.title}</h2>
          </div>
          <p className="section-description">{content.occasion.meta.description}</p>
        </div>

        <div className="occasion-intro">
          <p>{content.occasion.body.trim()}</p>
        </div>

        <div className="occasion-grid">
          {occasionProducts.map((item) => (
            <article className="occasion-card" key={item.id}>
              <img src={item.image} alt={`${item.name[language]} ${item.category[language]}`} />
              <div className="occasion-card-info">
                <p className="occasion-category">{item.category[language]}</p>
                <h3>{item.name[language]}</h3>
                <p>{item.note[language]}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="occasion-cta">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            {content.occasion.meta.cta}
          </a>
        </div>
      </section>

      <section className="order-section reveal">
        <div className="section-heading">
          <div>
            <p className="kicker">{content.order.meta.kicker}</p>
            <h2>{content.order.meta.title}</h2>
          </div>
          {content.order.meta.note && (
            <p className="section-description">{content.order.meta.note}</p>
          )}
        </div>

        <div className="order-grid">
          {orderSteps.map((step, index) => (
            <article className="order-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="brand-footer reveal">
        <div className="footer-cta">
          <div>
            <p className="kicker">{content.footer.meta.kicker}</p>
            <h2>{content.footer.meta.title}</h2>
          </div>
          <p>{content.footer.meta.description}</p>
          <div className="cta-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {content.footer.meta.whatsapp}
            </a>
            <a href={landing.instagramUrl} target="_blank" rel="noreferrer">
              {content.footer.meta.instagram}
            </a>
          </div>
        </div>

        <div className="footer-info">
          <div className="footer-brand">
            <a href="#top">{landing.brand}</a>
          </div>
          <div>
            <h3>{content.footer.meta.atelierTitle}</h3>
            <p>{content.footer.meta.atelierBody}</p>
          </div>
          <div>
            <h3>{content.footer.meta.contactTitle}</h3>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp +51 985 104 920
            </a>
            <a href={landing.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
          <div>
            <h3>{content.footer.meta.navTitle}</h3>
            <a href="#collection">{t.nav.collection}</a>
            <a href="#occasion-edit">{t.nav.occasion}</a>
            <a href="#story">{t.nav.story}</a>
            <a href="#top">Top</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{content.footer.meta.rights}</span>
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
