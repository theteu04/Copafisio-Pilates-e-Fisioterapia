import { useState, type ReactNode } from "react";
import { clinic, generalMessage, whatsappLink } from "./clinic-config";

const navigation = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Avaliações", "#avaliacoes"],
  ["Contato", "#contato"],
] as const;

const reasons = [
  {
    number: "01",
    title: "Cuidado individualizado",
    text: "Um atendimento atento às necessidades de cada pessoa.",
  },
  {
    number: "02",
    title: "Movimento com propósito",
    text: "Fisioterapia e Pilates clínico em um só lugar.",
  },
  {
    number: "03",
    title: "Acompanhamento profissional",
    text: "Orientação cuidadosa em cada etapa do atendimento.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.2 10h11.6m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L3 20l1.2-4.9a8.1 8.1 0 1 1 15.9-3.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 8.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1 1.3 1.7 1.7.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.7.5-1-.2-2.2-.8-3.4-1.9-1.2-1.1-2-2.5-2.2-3.4-.2-.9.1-1.5.6-2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.6" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function ServiceIcon({ number }: { number: string }) {
  const paths: Record<string, ReactNode> = {
    "01": (
      <>
        <rect x="5" y="5" width="14" height="15" rx="2" />
        <path d="M9 5V3.5h6V5M9 10h6M9 14h6" />
      </>
    ),
    "02": (
      <>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5m0-3-4 2m4-2 4 2m-4 1-3 6m3-6 3 6" />
      </>
    ),
    "03": (
      <>
        <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9Z" />
        <path d="M8.5 12h2l1-2 1.5 4 1-2h1.5" />
      </>
    ),
    "04": (
      <>
        <circle cx="12" cy="5" r="2" />
        <path d="m10.5 9 2.5 2 3.5-2m-3.5 2-2 3-4 2m6-5 2 4 3 2" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        {paths[number]}
      </g>
    </svg>
  );
}

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand${footer ? " brand--footer" : ""}`}
      href="#inicio"
      aria-label={`${clinic.name} — início`}
    >
      <img src="/images/copafisio-logo.jpg" alt="" />
      <span className="brand__name">
        COPA<span>FISIO</span>
        <small>PILATES &amp; FISIOTERAPIA</small>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`navigation${menuOpen ? " navigation--open" : ""}`}
          id="primary-navigation"
          aria-label="Navegação principal"
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button button--small navigation__cta"
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Agendar avaliação <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-anchor" id="inicio">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__line" />
            Fisioterapia &amp; Pilates clínico
          </p>
          <h1>
            Recupere seus movimentos.
            <span> Redescubra seu bem-estar.</span>
          </h1>
          <p className="hero__description">
            Cuidado especializado e acompanhamento atencioso para você se
            movimentar com mais confiança, no seu tempo.
          </p>
          <p className="hero__location">
            <span aria-hidden="true">⌖</span> {clinic.locationLabel}
          </p>
          <div className="hero__actions">
            <a
              className="button"
              href={whatsappLink(generalMessage)}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon /> Agendar minha avaliação
            </a>
            <a className="button button--outline" href="#contato">
              Conheça nossa clínica <ArrowIcon />
            </a>
          </div>
          <p className="hero__note">
            Um primeiro passo para cuidar do seu movimento.
          </p>
        </div>
        <div className="hero-art" aria-label="Espaço de Pilates da Copafisio">
          <div className="hero-art__ring hero-art__ring--outer" />
          <div className="hero-art__ring hero-art__ring--inner" />
          <div className="hero-art__card">
            <img
              src={clinic.gallery[0].src}
              alt={clinic.gallery[0].alt}
              fetchPriority="high"
            />
          </div>
          <div className="hero-art__logo" aria-hidden="true">
            <img src="/images/copafisio-logo.jpg" alt="" />
          </div>
          <div className="hero-art__caption">
            <span className="hero-art__dot" />
            {clinic.gallery[0].title} da Copafisio
          </div>
        </div>
      </div>
      <div className="hero__bottom-rule" />
    </section>
  );
}

function Differentials() {
  return (
    <section className="differentials" id="sobre">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Nosso jeito de cuidar</p>
          <h2>Cuidado que acompanha você</h2>
        </div>
        <div className="reasons">
          {reasons.map((reason) => (
            <article className="reason" key={reason.number}>
              <span className="reason__number">{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services section-anchor" id="servicos">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Como podemos ajudar</p>
            <h2>Nossos serviços</h2>
          </div>
          <p>
            Conheça nossas especialidades e encontre o cuidado ideal para suas
            necessidades.
          </p>
        </div>
        <div className="services__grid">
          {clinic.services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top">
                <span className="service-card__number">{service.number}</span>
                <span className="service-card__mark" aria-hidden="true">
                  <ServiceIcon number={service.number} />
                </span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a
                className="text-link"
                href={whatsappLink(service.message)}
                target="_blank"
                rel="noreferrer"
              >
                Agendar pelo WhatsApp <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spaces() {
  return (
    <section className="spaces">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Um espaço para o seu cuidado</p>
            <h2>Conheça nossa clínica</h2>
          </div>
          <p>
            Ambientes da Copafisio em Copacabana, preparados para os atendimentos
            de fisioterapia e Pilates.
          </p>
        </div>
        <div className="spaces__grid">
          {clinic.gallery.map((photo) => (
            <figure className="space-card" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>{photo.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Professional() {
  const profile = clinic.professional;
  const details = [
    ["Formação", profile.education],
    ["Áreas de atuação", profile.specialties],
  ].filter(([, value]) => value);

  return (
    <section className="professional">
      <div className="container professional__grid">
        <div className="professional__visual">
          {profile.photoUrl ? (
            <img src={profile.photoUrl} alt={profile.name} loading="lazy" />
          ) : null}
          <span className="professional__visual-caption">
            Cuidado próximo, em cada etapa.
          </span>
        </div>
        <div className="professional__content">
          <p className="eyebrow">Quem cuida de você</p>
          <h2>
            Conheça quem
            <br /> cuida de você
          </h2>
          {profile.name ? (
            <>
              <h3 className="professional__name">{profile.name}</h3>
              <p className="professional__credentials">
                Fisioterapeuta <span aria-hidden="true">·</span> CREFITO:{" "}
                {profile.crefito}
              </p>
              {profile.bio && (
                <p className="professional__bio">{profile.bio}</p>
              )}
              {details.length > 0 && (
                <dl className="professional__details">
                  {details.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </>
          ) : (
            <div className="placeholder-note">
              <span className="placeholder-note__tag">Perfil profissional</span>
              <p>
                Nome, formação, registro profissional e apresentação serão
                incluídos após confirmação dos dados oficiais.
              </p>
            </div>
          )}
          {profile.instagramUrl && (
            <a
              className="professional__instagram"
              href={profile.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
              Instagram do profissional
              <ArrowIcon />
            </a>
          )}
          <a
            className="button button--dark"
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Agendar uma avaliação <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const hasGoogleReviews =
    clinic.googleRating !== null && clinic.reviewCount !== null;

  return (
    <section className="section reviews section-anchor" id="avaliacoes">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Experiências reais</p>
          <h2>A confiança de quem já conhece nosso trabalho</h2>
        </div>
        {hasGoogleReviews ? (
          <>
            <div className="reviews__summary">
              <span
                className="reviews__stars"
                aria-label={`Avaliação ${clinic.googleRating?.toFixed(1).replace(".", ",")} de 5 no Google`}
              >
                ★★★★★
              </span>
              <strong>{clinic.googleRating?.toFixed(1).replace(".", ",")}</strong>
              <span>no Google</span>
              <span className="reviews__divider" />
              <span>{clinic.reviewCount} avaliações</span>
              {clinic.reviewsUrl && (
                <a href={clinic.reviewsUrl} target="_blank" rel="noreferrer">
                  Ver avaliações <ArrowIcon />
                </a>
              )}
            </div>
            <div className="testimonials-grid">
              {clinic.reviews.map((review, index) => (
                <article className="testimonial-card" key={`${review.category}-${index}`}>
                  <span className="testimonial-card__category">
                    {review.category}
                  </span>
                  <blockquote>{review.quote}</blockquote>
                  <span className="testimonial-card__source">
                    Avaliação de paciente
                  </span>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="reviews__placeholder">
            <span className="reviews__placeholder-mark" aria-hidden="true">
              “
            </span>
            <div>
              <h3>Avaliações verificadas</h3>
              <p>
                A nota, a quantidade de avaliações e os depoimentos não foram
                informados. Consulte o perfil da Copafisio no Google.
              </p>
            </div>
            {clinic.reviewsUrl && (
              <a href={clinic.reviewsUrl} target="_blank" rel="noreferrer">
                Ver no Google <ArrowIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-anchor" id="contato">
      <div className="container">
        <div className="section-heading section-heading--split contact__heading">
          <div>
            <p className="eyebrow">Venha nos conhecer</p>
            <h2>Estamos aqui para cuidar de você</h2>
          </div>
          <a
            className="button"
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon /> Fale com a Copafisio
          </a>
        </div>
        <div className="contact__grid">
          <div className="map-frame">
            <iframe
              title="Mapa da Copafisio Pilates & Fisioterapia em Copacabana"
              src={clinic.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="contact-card">
            <p className="eyebrow">Localização e contato</p>
            <h3>Copafisio Pilates &amp; Fisioterapia</h3>
            <div className="contact-card__item">
              <span className="contact-card__label">Endereço</span>
              <p>
                {clinic.address}
                <br />
                {clinic.locationLabel}
              </p>
            </div>
            <div className="contact-card__item">
              <span className="contact-card__label">WhatsApp</span>
              <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
                {clinic.whatsappDisplay}
              </a>
            </div>
            {clinic.phone && (
              <div className="contact-card__item">
                <span className="contact-card__label">Telefone</span>
                <a href={`tel:${clinic.phone.replace(/[^\d+]/g, "")}`}>
                  {clinic.phone}
                </a>
              </div>
            )}
            {clinic.openingHours && (
              <div className="contact-card__item">
                <span className="contact-card__label">Horários</span>
                <p>{clinic.openingHours}</p>
              </div>
            )}
            <a
              className="text-link contact-card__directions"
              href={clinic.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Como chegar <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__main">
        <div className="footer__about">
          <Logo footer />
          <p>
            Fisioterapia e Pilates clínico com cuidado, movimento e atenção
            individual.
          </p>
        </div>
        <div className="footer__nav">
          <h2>Navegue</h2>
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="footer__contact">
          <h2>Contato</h2>
          <span>{clinic.address}</span>
          <span>{clinic.locationLabel}</span>
          <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
            {clinic.whatsappDisplay}
          </a>
          {clinic.instagramUrl && (
            <a href={clinic.instagramUrl} target="_blank" rel="noreferrer">
              Instagram <ArrowIcon />
            </a>
          )}
          {clinic.privacyPolicyUrl ? (
            <a href={clinic.privacyPolicyUrl}>Política de privacidade</a>
          ) : (
            <span>Política de privacidade: link a cadastrar</span>
          )}
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {clinic.name}. Todos os direitos
          reservados.
        </span>
        <span>Copacabana · Rio de Janeiro</span>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      className="whatsapp-fixed"
      href={whatsappLink(generalMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
    >
      <WhatsAppIcon />
      <span>Agendar avaliação pelo WhatsApp</span>
      <ArrowIcon />
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Services />
        <Spaces />
        <Professional />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
