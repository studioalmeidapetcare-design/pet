import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Droplets,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  PawPrint,
  Quote,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";
import { MapView } from "@/components/Map";

const WHATSAPP_URL = "https://wa.me/message/YIPZSQPDCCGRB1";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=-25.4719619,-49.2280487";
const INSTAGRAM_URL = "https://www.instagram.com/luppypetcarejardim/";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const heroImages = [
  "/images/pet_yorkshire_new.jpg",
  "/images/pet_shih_tzu_new.webp",
  "/images/pet_shih_tzu_butterfly.jpg",
];

const petGalleryImages = [
  {
    id: 1,
    src: "/images/pet_maltese.webp",
    alt: "Maltês após banho e tosa",
    title: "Maltês renovado",
    breed: "Maltês",
  },
  {
    id: 2,
    src: "/images/pet_chihuahua.webp",
    alt: "Chihuahua bem cuidado pela Luppy Pet Care Jardim",
    title: "Cuidado delicado",
    breed: "Chihuahua",
  },
  {
    id: 3,
    src: "/images/pet_shih_tzu_butterfly.jpg",
    alt: "Shih Tzu com laço após grooming",
    title: "Charme em cada detalhe",
    breed: "Shih Tzu",
  },
  {
    id: 4,
    src: "/images/pet_shih_tzu_new.webp",
    alt: "Shih Tzu feliz depois da transformação",
    title: "Shih Tzu feliz",
    breed: "Shih Tzu",
  },
  {
    id: 5,
    src: "/images/pet_yorkshire_new.jpg",
    alt: "Yorkshire elegante após banho e tosa",
    title: "Yorkshire elegante",
    breed: "Yorkshire",
  },
  {
    id: 6,
    src: "/images/pet_border_collie.jpg",
    alt: "Border Collie com olhos azuis",
    title: "Beleza natural",
    breed: "Border Collie",
  },
  {
    id: 7,
    src: "/images/pet_shih_tzu_pink.jpg",
    alt: "Shih Tzu com laço rosa",
    title: "Um toque de carinho",
    breed: "Shih Tzu",
  },
  {
    id: 8,
    src: "/images/pet_pugs.jpg",
    alt: "Dois Pugs felizes depois do banho",
    title: "Dupla de fofura",
    breed: "Pug",
  },
];

const services: { icon: LucideIcon; number: string; title: string; desc: string }[] = [
  {
    icon: Droplets,
    number: "01",
    title: "Banho premium",
    desc: "Higiene, secagem e perfumação com produtos escolhidos para o tipo de pelagem do seu pet.",
  },
  {
    icon: Scissors,
    number: "02",
    title: "Tosa estética",
    desc: "Um acabamento bonito e confortável, respeitando a raça, a rotina e a personalidade de cada animal.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Tratamento da pelagem",
    desc: "Hidratação e cuidados especiais para devolver maciez, brilho e leveza aos pelos.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Cuidado completo",
    desc: "Corte de unhas, limpeza de ouvidos e atenção individual em cada etapa do atendimento.",
  },
];

const testimonials = [
  {
    name: "Viviane Monteiro",
    role: "Local Guide",
    text: "Super indico e recomendo! Profissional mega caprichoso, dedicado e detalhista. Meu Shih Tzu já se sente em casa!",
    date: "2 anos atrás",
  },
  {
    name: "Wanessa Garcia Vital",
    role: "Cliente fiel",
    text: "Tenho muita confiança em deixar meus pets no estúdio. É nítido o carinho com os bichinhos e o atendimento VIP.",
    date: "2 anos atrás",
  },
  {
    name: "Rodolfo Oliveira",
    role: "Cliente",
    text: "Deixamos nossa pequena nos cuidados da equipe e foi simplesmente fantástico. Confiamos plenamente!",
    date: "8 meses atrás",
  },
  {
    name: "Ana Paula",
    role: "Cliente",
    text: "Dia de banho é um evento que tem como resultado muita fofurice! Minha pet sempre sai linda.",
    date: "1 ano atrás",
  },
];

interface SelectedImage {
  src: string;
  alt: string;
  title: string;
  breed: string;
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/luppy-logo.jpg"
      alt="Luppy Pet Care Jardim"
      className={className}
    />
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`mb-12 max-w-2xl ${light ? "text-white" : "text-[var(--luppy-forest)]"}`}>
      <p className="luppy-kicker mb-3">{eyebrow}</p>
      <h2 className="luppy-display text-4xl leading-[1.05] sm:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-base leading-relaxed opacity-75">{children}</div>}
    </div>
  );
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((previous) => (previous + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroImage((previous) => (previous + 1) % heroImages.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleGalleryScroll = (direction: "left" | "right") => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--luppy-forest)] text-[var(--luppy-ink)]">
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "luppy-header luppy-header--scrolled" : "luppy-header"}`}>
        <div className="luppy-header-shell luppy-shell flex h-[76px] items-center justify-between gap-4">
          <a href="#top" className="luppy-header-brand flex items-center gap-3" aria-label="Luppy Pet Care Jardim - início">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_8px_24px_rgba(24,94,86,0.12)]">
              <LogoMark className="h-11 w-11 object-contain" />
            </span>
            <span className="hidden sm:block">
              <strong className="block max-w-[190px] font-semibold leading-tight text-[var(--luppy-forest)]">Luppy Pet Care Jardim</strong>
              <small className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--luppy-gold-dark)]">Estética animal</small>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="luppy-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="luppy-header-actions flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="luppy-header-cta hidden lg:inline-flex">
              <MessageCircle size={16} />
              Agendar horário
            </a>
            <button
              type="button"
              className="rounded-full p-2 text-[var(--luppy-forest)] lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[var(--luppy-line)] bg-[var(--luppy-cream)] px-5 py-4 lg:hidden">
            <nav className="luppy-shell flex flex-col gap-1" aria-label="Navegação mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-b border-[var(--luppy-line)] py-3 text-sm font-semibold text-[var(--luppy-forest)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="luppy-gold-button mt-3 justify-center">
                <MessageCircle size={17} />
                Falar pelo WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="luppy-hero relative pt-32 sm:pt-40">
          <div className="luppy-welcome-backdrop" aria-hidden="true">
            {heroImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt=""
                className={`transition-opacity duration-1000 ${activeHeroImage === index ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="luppy-welcome-backdrop-shade" />
          </div>
          <div className="luppy-hero-leaf luppy-hero-leaf--one" />
          <div className="luppy-hero-leaf luppy-hero-leaf--two" />
          <div className="luppy-shell relative z-10">
            <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
              <div className="max-w-xl animate-[luppy-rise_0.7s_ease-out_both]">
                <div className="luppy-pill mb-6">
                  <Leaf size={15} />
                  Bem-vindo à Luppy Pet Care Jardim
                </div>
                <h1 className="luppy-display text-5xl leading-[0.98] text-white sm:text-7xl">
                  Um cuidado <em className="not-italic text-[var(--luppy-gold-dark)]">bonito</em> começa pelo bem-estar.
                </h1>
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/75">
                  Na Luppy Pet Care Jardim, banho, tosa e carinho caminham juntos para que cada pet se sinta seguro, leve e ainda mais feliz.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="luppy-gold-button">
                    <MessageCircle size={19} />
                    Agendar pelo WhatsApp
                  </a>
                  <a href="#servicos" className="luppy-outline-button">
                    Conhecer serviços
                    <ChevronRight size={18} />
                  </a>
                </div>
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/75">
                  <span className="inline-flex items-center gap-2"><Star size={16} fill="currentColor" className="text-[var(--luppy-gold)]" /> Avaliação 5.0</span>
                  <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-[var(--luppy-gold)]" /> Atendimento cuidadoso</span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[550px] animate-[luppy-rise_0.9s_0.1s_ease-out_both]">
                <div className="luppy-hero-ring" />
                <div className="relative z-10 mx-auto mb-5 flex w-fit items-center gap-3 rounded-[1.75rem] border border-[var(--luppy-line)] bg-white/85 px-4 py-3 shadow-[0_12px_28px_rgba(24,94,86,0.1)] backdrop-blur sm:mb-6">
                  <div className="luppy-hero-logo-frame h-24 w-24 sm:h-28 sm:w-28">
                    <LogoMark className="h-full w-full object-contain" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--luppy-gold-dark)]">Luppy Pet Care Jardim</p>
                    <p className="mt-1 text-sm font-semibold leading-tight text-[var(--luppy-forest)]">Estética animal em Curitiba</p>
                    <p className="mt-1 text-xs text-[var(--luppy-muted)]">Cuidado bonito, do começo ao fim.</p>
                  </div>
                </div>
                <div className="relative aspect-[0.94] overflow-hidden rounded-[38%_38%_26%_26%/28%_28%_18%_18%] border-[10px] border-white bg-[var(--luppy-sand)] shadow-[0_28px_60px_rgba(24,94,86,0.18)]">
                  {heroImages.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt="Pet cuidado pela Luppy Pet Care Jardim"
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeHeroImage === index ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 rounded-2xl bg-[rgba(255,255,255,0.9)] p-4 shadow-lg backdrop-blur-md">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luppy-gold-dark)]">Seu pet bem cuidado</p>
                      <p className="mt-1 font-semibold text-[var(--luppy-forest)]">Seu pet em boas mãos.</p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--luppy-forest)] text-white"><PawPrint size={21} /></span>
                  </div>
                </div>
                <div className="absolute -bottom-7 -left-6 flex h-28 w-28 items-center justify-center rounded-full border-8 border-[var(--luppy-cream)] bg-[var(--luppy-gold)] p-3 text-center text-xs font-bold uppercase leading-tight tracking-[0.08em] text-white shadow-xl sm:-left-10">
                  <span>Carinho<br />em cada<br />detalhe</span>
                </div>
                <div className="mt-8 flex justify-center gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setActiveHeroImage(index)}
                      aria-label={`Ver foto ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all ${activeHeroImage === index ? "w-8 bg-[var(--luppy-gold)]" : "w-2 bg-[var(--luppy-line-strong)]"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="luppy-proof-bar mt-20 grid grid-cols-2 divide-x divide-y divide-[var(--luppy-line)] sm:grid-cols-4 sm:divide-y-0">
              {[
                { value: "8+", label: "anos de experiência" },
                { value: "2 mil+", label: "pets atendidos" },
                { value: "5.0", label: "avaliação no Google" },
                { value: "100%", label: "cuidado individual" },
              ].map((stat) => (
                <div key={stat.label} className="px-5 py-5 text-center sm:px-4">
                  <strong className="luppy-display text-3xl text-[var(--luppy-forest)]">{stat.value}</strong>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--luppy-muted)]">{stat.label}</span>
                </div>
              ))}
            </div>
            <a href="#sobre" className="luppy-scroll-cue mt-8" aria-label="Descer para a seção Sobre">
              <span>Descubra mais</span>
              <ArrowDown size={16} />
            </a>
          </div>
        </section>

        <section id="sobre" className="luppy-section bg-white">
          <div className="luppy-shell">
            <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div className="luppy-about-brand-panel mx-auto w-full max-w-[470px]">
                <div className="luppy-about-orbit luppy-about-orbit--one" />
                <div className="luppy-about-orbit luppy-about-orbit--two" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-10 p-7 sm:p-9">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.7)]">
                    <span>Luppy Pet Care Jardim / 01</span>
                    <span>Care studio</span>
                  </div>
                  <div className="luppy-about-logo-lockup mx-auto">
                    <div className="luppy-hero-logo-frame h-56 w-56 sm:h-64 sm:w-64">
                      <LogoMark className="h-full w-full object-contain" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-4 border-t border-white/20 pt-5 text-white">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--luppy-gold)]">Carinho em cada atendimento</p>
                      <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-white/70">Técnica, atenção e carinho para o seu pet se sentir bem.</p>
                    </div>
                    <Sparkles size={24} className="shrink-0 text-[var(--luppy-gold)]" />
                  </div>
                </div>
              </div>

              <div>
                <SectionHeading eyebrow="O jeito Luppy de cuidar" title="Mais do que estética: confiança em cada visita.">
                  <p>Há mais de 8 anos, nossa rotina é cuidar de cada pet com calma, técnica e atenção aos pequenos sinais. O resultado aparece no pelo, mas começa no jeito como ele é recebido.</p>
                </SectionHeading>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: ShieldCheck, title: "Segurança total", desc: "Ambiente preparado para o bem-estar do seu pet." },
                    { icon: Heart, title: "Olhar individual", desc: "Cada animal tem um ritmo e uma necessidade." },
                    { icon: Sparkles, title: "Acabamento bonito", desc: "Produtos e técnica para uma transformação leve." },
                    { icon: Clock3, title: "Horário agendado", desc: "Mais tranquilidade para você e para ele." },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="luppy-mini-card">
                        <Icon size={22} className="text-[var(--luppy-gold-dark)]" />
                        <div>
                          <h3 className="font-bold text-[var(--luppy-forest)]">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-[var(--luppy-muted)]">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="luppy-text-link mt-8">
                  <CalendarDays size={18} />
                  Agende o cuidado do seu pet
                  <ChevronRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="luppy-section luppy-services-section">
          <div className="luppy-shell">
            <SectionHeading eyebrow="O que fazemos" title="Cuidado pensado para cada fase do banho e da tosa." light>
              <p className="text-white">Um atendimento completo, com produtos de qualidade e uma equipe que entende que cada pet merece ser tratado como único.</p>
            </SectionHeading>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.number} className="luppy-service-card group">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(210,156,70,0.15)] text-[var(--luppy-gold)]"><Icon size={24} /></span>
                      <span className="luppy-display text-3xl text-[rgba(255,255,255,0.18)]">{service.number}</span>
                    </div>
                    <h3 className="mt-8 text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.7)]">{service.desc}</p>
                    <span className="mt-6 block h-px w-10 bg-[var(--luppy-gold)] transition-all duration-300 group-hover:w-20" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="galeria" className="luppy-section bg-[var(--luppy-sand)]">
          <div className="luppy-shell">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <SectionHeading eyebrow="Nosso trabalho" title="Transformações que deixam o rabo abanando.">
                <p>Alguns dos nossos trabalhos favoritos — e o resultado de um atendimento feito com paciência.</p>
              </SectionHeading>
              <div className="mb-12 flex gap-2">
                <button type="button" onClick={() => handleGalleryScroll("left")} className="luppy-round-button" aria-label="Ver fotos anteriores"><ChevronLeft size={20} /></button>
                <button type="button" onClick={() => handleGalleryScroll("right")} className="luppy-round-button" aria-label="Ver próximas fotos"><ChevronRight size={20} /></button>
              </div>
            </div>
            <div ref={galleryRef} className="luppy-gallery-scroll">
              {petGalleryImages.map((image) => (
                <button key={image.id} type="button" className="luppy-gallery-card group" onClick={() => setSelectedImage(image)}>
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute inset-x-4 bottom-4 rounded-2xl bg-[rgba(255,255,255,0.92)] px-4 py-3 text-left opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                    <strong className="block text-sm text-[var(--luppy-forest)]">{image.title}</strong>
                    <small className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--luppy-gold-dark)]">{image.breed}</small>
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-[var(--luppy-muted)]">Clique em uma foto para ver o detalhe.</p>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="luppy-text-link">
                <Instagram size={18} />
                Ver novidades no Instagram
                <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="luppy-section bg-[var(--luppy-cream)]">
          <div className="luppy-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="luppy-kicker mb-3">Palavra de quem confia</p>
              <h2 className="luppy-display text-4xl text-[var(--luppy-forest)] sm:text-5xl">O carinho aparece nas avaliações.</h2>
              <div className="mt-5 flex justify-center gap-1 text-[var(--luppy-gold)]" aria-label="5 estrelas">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <div className="luppy-testimonial-card">
                <Quote size={50} className="absolute right-8 top-8 text-[var(--luppy-gold)] opacity-20" />
                <div className="relative z-10">
                  <p className="luppy-display max-w-3xl text-2xl leading-tight text-[var(--luppy-forest)] sm:text-4xl">“{testimonials[activeTestimonial].text}”</p>
                  <div className="mt-9 flex items-center justify-between gap-4">
                    <div>
                      <strong className="block text-sm font-bold text-[var(--luppy-forest)]">{testimonials[activeTestimonial].name}</strong>
                      <span className="mt-1 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--luppy-muted)]">{testimonials[activeTestimonial].role} · {testimonials[activeTestimonial].date}</span>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--luppy-forest)] text-lg font-bold text-white">{testimonials[activeTestimonial].name.charAt(0)}</div>
                  </div>
                </div>
              </div>
              <div className="mt-7 flex items-center justify-between">
                <button type="button" className="luppy-arrow-link" onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}><ChevronLeft size={18} /> Anterior</button>
                <div className="flex gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button type="button" key={testimonial.name} onClick={() => setActiveTestimonial(index)} className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-8 bg-[var(--luppy-gold)]" : "w-2 bg-[var(--luppy-line-strong)]"}`} aria-label={`Ver depoimento de ${testimonial.name}`} />
                  ))}
                </div>
                <button type="button" className="luppy-arrow-link" onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}>Próximo <ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="luppy-section bg-white">
          <div className="luppy-shell">
            <SectionHeading eyebrow="Vamos conversar" title="O próximo cuidado do seu pet pode começar agora.">
              <p>Escolha o melhor horário para o seu pet e fale com a Luppy Pet Care Jardim pelo WhatsApp. Estamos no Jardim das Américas, em Curitiba.</p>
            </SectionHeading>
            <div className="luppy-map-frame">
                <MapView initialCenter={{ lat: -25.4719619, lng: -49.2280487 }} initialZoom={16} className="rounded-[24px]" />
            </div>
            <div className="luppy-contact-actions mt-5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="luppy-contact-row group">
                <span className="luppy-contact-icon bg-[#25D366]/10 text-[#128C7E]"><MessageCircle size={21} /></span>
                <span><strong>WhatsApp</strong><small>Fale com a nossa equipe</small></span>
                <ChevronRight size={18} className="ml-auto transition-transform group-hover:translate-x-1" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="luppy-contact-row group">
                <span className="luppy-contact-icon bg-[var(--luppy-gold)]/15 text-[var(--luppy-gold-dark)]"><CalendarDays size={21} /></span>
                <span><strong>Quero agendar</strong><small>Escolha seu horário</small></span>
                <ChevronRight size={18} className="ml-auto transition-transform group-hover:translate-x-1" />
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="luppy-contact-row group">
                <span className="luppy-contact-icon bg-[var(--luppy-sand)] text-[var(--luppy-forest)]"><MapPin size={21} /></span>
                <span><strong>Jardim das Américas</strong><small>Curitiba · Paraná</small></span>
                <ChevronRight size={18} className="ml-auto transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="mt-14 rounded-[28px] bg-[var(--luppy-forest)] p-7 text-center text-white sm:p-10">
              <p className="luppy-kicker text-[var(--luppy-gold)]">Funcionamento</p>
              <div className="mx-auto mt-5 grid max-w-4xl gap-3 sm:grid-cols-4">
                {[
                  { day: "Terça – Sexta", hours: "9h às 18h" },
                  { day: "Sábado", hours: "9h às 17h" },
                  { day: "Domingo", hours: "Fechado" },
                  { day: "Segunda", hours: "Fechado" },
                ].map((item) => (
                  <div key={item.day} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--luppy-gold)]">{item.day}</p>
                    <p className="mt-2 font-bold">{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--luppy-forest-deep)] px-5 py-9 text-white">
        <div className="luppy-shell flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white"><LogoMark className="h-11 w-11 object-contain" /></span>
            <span><strong className="block font-semibold">Luppy Pet Care Jardim</strong><small className="mt-1 block text-xs text-[var(--luppy-gold)]">Centro de estética animal</small></span>
          </a>
          <div className="text-xs leading-relaxed text-white/55">© {new Date().getFullYear()} Luppy Pet Care Jardim LTDA. Todos os direitos reservados.<br />CNPJ: 68.826.391/0001-31 · Jardim das Américas, Curitiba – PR</div>
          <div className="flex gap-2">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="luppy-footer-social" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="luppy-footer-social" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>
        <p className="mt-6 text-center text-[10px] text-white/30">Design by <a href="https://jbrasillabs.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--luppy-gold)]">jbrasillabs.com.br</a></p>
      </footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="luppy-floating-whatsapp" title="Fale conosco pelo WhatsApp" aria-label="Fale conosco pelo WhatsApp"><MessageCircle size={27} fill="white" /></a>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,69,63,0.84)] p-4 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full max-w-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedImage(null)} className="absolute -right-2 -top-14 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20" aria-label="Fechar galeria"><X size={25} /></button>
            <div className="overflow-hidden rounded-[30px] border-4 border-white/20 bg-white shadow-2xl"><img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[72vh] w-full object-cover" /></div>
            <div className="mt-4 text-center text-white"><h2 className="luppy-display text-2xl">{selectedImage.title}</h2><p className="mt-1 text-sm text-[var(--luppy-gold)]">{selectedImage.breed} · Luppy Pet Care Jardim</p></div>
          </div>
        </div>
      )}
    </div>
  );
}
