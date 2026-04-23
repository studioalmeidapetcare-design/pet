import { useState, useRef, useEffect, ReactElement } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Star,
  Clock,
  Shield,
  Heart,
  Scissors,
  Droplets,
  Sparkles,
  Calendar,
  Menu,
} from "lucide-react";
import { MapView } from "@/components/Map";

/**
 * Design Philosophy: Luxury Pet Care - Elegant Teal & Gold
 * Color Palette: Teal (#0B7C82), Gold (#EDC088), Cream (#F5E6D3)
 * Logo: Real Almeida Studio Pet Care logo as giant watermark
 */

const petGalleryImages = [
  {
    id: 1,
    src: "/images/pet_shih_tzu.jpg",
    alt: "Shih Tzu Glamourosa após tosa",
    title: "Shih Tzu Glamourosa",
    breed: "Shih Tzu",
  },
  {
    id: 2,
    src: "/images/pet_poodle.jpg",
    alt: "Poodle após banho e tosa profissional",
    title: "Poodle Estiloso",
    breed: "Poodle",
  },
  {
    id: 3,
    src: "/images/pet_maltese.jpg",
    alt: "Maltês branco após grooming",
    title: "Maltês Elegante",
    breed: "Maltês",
  },
  {
    id: 4,
    src: "/images/pet_yorkshire.jpg",
    alt: "Yorkshire Terrier após tosa",
    title: "Yorkshire Terrier",
    breed: "Yorkshire",
  },
  {
    id: 5,
    src: "/images/pet_maltese2.webp",
    alt: "Maltês após transformação completa",
    title: "Transformação Maltês",
    breed: "Maltês",
  },
  {
    id: 6,
    src: "/images/pet_poodle2.jpg",
    alt: "Poodle antes e depois da tosa",
    title: "Antes & Depois",
    breed: "Poodle",
  },
  {
    id: 7,
    src: "/images/pet_border_collie.jpg",
    alt: "Border Collie com olhos azuis",
    title: "Border Collie Elegante",
    breed: "Border Collie",
  },
  {
    id: 8,
    src: "/images/pet_shih_tzu_pink.jpg",
    alt: "Shih Tzu com laço rosa após grooming",
    title: "Shih Tzu Glamourosa",
    breed: "Shih Tzu",
  },
  {
    id: 9,
    src: "/images/pet_pugs.jpg",
    alt: "Dois Pugs felizes após banho e tosa",
    title: "Pugs Fofos",
    breed: "Pug",
  },

];

const services = [
  {
    icon: "droplets",
    title: "Banho Premium",
    desc: "Banho completo com produtos de alta qualidade, secagem e perfumação especial para o seu pet.",

  },
  {
    icon: "scissors",
    title: "Tosa Estética",
    desc: "Tosa personalizada de acordo com a raça e preferência do tutor. Resultado impecável.",

  },
  {
    icon: "sparkles",
    title: "Cronograma Capilar",
    desc: "Tratamento especializado para pelagem, hidratação profunda e reconstrução capilar.",

  },
  {
    icon: "heart",
    title: "Cuidado Especial",
    desc: "Tratamentos especiais, limpeza de ouvidos, corte de unhas e cuidados completos.",

  },
];

const testimonials = [
  {
    name: "Ana Paula",
    pet: "Shih Tzu - Bella",
    text: "Minha Bella sempre sai linda! A equipe é super carinhosa e profissional. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Carlos Eduardo",
    pet: "Poodle - Thor",
    text: "Melhor pet shop de Curitiba! O Thor ama ir lá, fica todo animado quando chega perto.",
    stars: 5,
  },
  {
    name: "Mariana Costa",
    pet: "Maltês - Mel",
    text: "Atendimento excelente, ambiente limpo e organizado. Minha Mel sempre volta linda!",
    stars: 5,
  },
];

interface SelectedImage {
  src: string;
  alt: string;
  title: string;
  breed: string;
}

export default function Home() {
  // Authentication state (if needed in the future)
  // To implement login/logout functionality, use the useAuth hook from @/hooks/useAuth

  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Detectar scroll para efeito no header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll da galeria com loop infinito
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (gallery) {
          const maxScroll = gallery.scrollWidth - gallery.clientWidth;
          if (gallery.scrollLeft >= maxScroll - 10) {
            gallery.scrollLeft = 0;
          } else {
            gallery.scrollLeft += 300;
          }
        }
      }, 3500);
    };

    startAutoScroll();
    return () => {
      if (autoScrollRef.current !== null) clearInterval(autoScrollRef.current);
    };
  }, []);

  const handleGalleryScroll = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        galleryRef.current.scrollLeft -= scrollAmount;
      } else {
        galleryRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const iconMap: Record<string, ReactElement> = {
    droplets: <Droplets className="w-10 h-10 text-[#EDC088]" />,
    scissors: <Scissors className="w-10 h-10 text-[#EDC088]" />,
    sparkles: <Sparkles className="w-10 h-10 text-[#EDC088]" />,
    heart: <Heart className="w-10 h-10 text-[#EDC088]" />,
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0B7C82" }}>
      {/* ========== FUNDO FIXO COM MARCA D'ÁGUA ========== */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Gradiente de fundo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0B7C82 0%, #0a6870 40%, #085a60 70%, #064a50 100%)",
          }}
        />

        {/* Círculos decorativos animados */}
        <div
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #EDC088 0%, transparent 70%)",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #F5E6D3 0%, transparent 70%)",
            animation: "pulse 10s ease-in-out infinite 3s",
          }}
        />
        <div
          className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #EDC088 0%, transparent 70%)",
            animation: "pulse 6s ease-in-out infinite 1.5s",
          }}
        />

        {/* ===== LOGO REAL COMO MARCA D'ÁGUA GIGANTE ===== */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.15 }}
        >
          <img
            src="/images/logo.png"
            alt="Almeida Studio Pet Care - Marca d'água"
            style={{
              width: "min(100vw, 100vh)",
              height: "min(100vw, 100vh)",
              objectFit: "contain",
              filter: "brightness(1.2) contrast(1.1)",
            }}
          />
        </div>
      </div>

      {/* ========== HEADER FIXO ========== */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(11, 124, 130, 0.97)" : "rgba(11, 124, 130, 0.85)",
          backdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
          borderBottom: "1px solid rgba(237, 192, 136, 0.2)",
          animation: "slideDown 0.6s ease-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo no header */}
          <div className="flex items-center gap-3">
            <div
              className="rounded-full overflow-hidden border-2 border-[#EDC088]/60 shadow-lg"
              style={{ width: 56, height: 56 }}
            >
              <img
                src="/images/logo.png"
                alt="Almeida Studio Pet Care"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <h1
                className="font-bold text-white leading-tight"
                style={{ fontSize: "1.1rem", fontFamily: "serif" }}
              >
                Almeida
              </h1>
              <p className="text-[#EDC088] text-xs font-medium tracking-wider uppercase">
                Studio Pet Care
              </p>
            </div>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex gap-8">
            {["Sobre", "Serviços", "Galeria", "Depoimentos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("ç", "c").replace("õ", "o")}`}
                className="text-white hover:text-[#EDC088] transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA + Menu mobile */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/554192233305"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#25D366",
                boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)",
              }}
            >
              <MessageCircle size={16} />
              <span className="text-sm">WhatsApp</span>
            </a>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t border-[#EDC088]/20 py-4 px-4"
            style={{ backgroundColor: "rgba(11, 124, 130, 0.98)" }}
          >
            {["Sobre", "Serviços", "Galeria", "Depoimentos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("ç", "c").replace("õ", "o")}`}
                className="block text-white hover:text-[#EDC088] py-3 text-base font-medium border-b border-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/554192233305"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-semibold mt-4 px-5 py-3 rounded-full justify-center"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ========== HERO SECTION ========== */}
      <section
        className="relative z-10 max-w-7xl mx-auto px-4 pt-28 md:pt-36 pb-20 md:pb-28"
        style={{ animation: "fadeInUp 0.8s ease-out" }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto hero */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(237, 192, 136, 0.15)",
                border: "1px solid rgba(237, 192, 136, 0.4)",
                color: "#EDC088",
              }}
            >
              <Star size={14} fill="#EDC088" />
              Centro de Estética Animal — Curitiba
            </div>

            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Seu Pet Merece o{" "}
              <span style={{ color: "#EDC088" }}>Melhor Cuidado</span>
            </h2>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#d4e8ea" }}>
              Há mais de 8 anos transformando pets em urshinhos felizes com banho,
              tosa e muito amor. Ambiente acolhedor, seguro e produtos de alta qualidade.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://wa.me/554192233305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: "#25D366",
                  boxShadow: "0 0 30px rgba(37, 211, 102, 0.5)",
                }}
              >
                <MessageCircle size={20} />
                Agendar Agora
              </a>
              <a
                href="#servicos"
                className="flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  border: "2px solid #EDC088",
                  color: "#EDC088",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#EDC088";
                  (e.currentTarget as HTMLElement).style.color = "#0B7C82";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#EDC088";
                }}
              >
                Ver Serviços
              </a>
            </div>

            {/* Info rápida */}
            <div className="flex flex-wrap gap-6" style={{ color: "#b8d8db" }}>
              <div className="flex items-center gap-2">
                <MapPin size={18} style={{ color: "#EDC088" }} />
                <span className="text-sm">Jd. das Américas, Curitiba</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} style={{ color: "#EDC088" }} />
                <span className="text-sm">(41) 9922-3305</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} style={{ color: "#EDC088" }} />
                <span className="text-sm">Seg–Sáb: 8h–18h</span>
              </div>
            </div>
          </div>

          {/* Imagem hero */}
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 rounded-[40px] blur-2xl opacity-30"
              style={{
                background: "linear-gradient(135deg, #EDC088, #F5E6D3)",
                transform: "scale(0.95)",
              }}
            />
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
              style={{
                border: "3px solid rgba(237, 192, 136, 0.4)",
                maxWidth: 480,
                width: "100%",
              }}
            >
              <img
                src="/images/pet_shih_tzu.jpg"
                alt="Shih Tzu no Studio Almeida Pet Care"
                className="w-full h-auto object-cover"
                style={{ maxHeight: 480 }}
              />
              {/* Badge sobre a imagem */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{
                  backgroundColor: "rgba(11, 124, 130, 0.92)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(237, 192, 136, 0.3)",
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                />
                <div>
                  <p className="text-white font-bold text-sm">Almeida Studio Pet Care</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={10} fill="#EDC088" style={{ color: "#EDC088" }} />
                    ))}
                    <span className="text-xs ml-1" style={{ color: "#EDC088" }}>
                      5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 rounded-3xl p-6"
          style={{
            backgroundColor: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(237, 192, 136, 0.2)",
          }}
        >
          {[
            { value: "8+", label: "Anos de Experiência" },
            { value: "2.000+", label: "Pets Atendidos" },
            { value: "5★", label: "Avaliação Google" },
            { value: "100%", label: "Satisfação Garantida" },
          ].map((stat, i) => (
            <div key={i} className="text-center py-2">
              <p className="text-3xl font-bold" style={{ color: "#EDC088" }}>
                {stat.value}
              </p>
              <p className="text-sm mt-1" style={{ color: "#b8d8db" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SOBRE SECTION ========== */}
      <section
        id="sobre"
        className="relative z-10 py-16 md:py-24"
        style={{ backgroundColor: "#F5E6D3" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#0B7C82" }}
            >
              Quem Somos
            </p>
            <h3 className="text-4xl md:text-5xl font-bold" style={{ color: "#0B7C82" }}>
              Cuidado com Amor e Profissionalismo
            </h3>
            <div
              className="w-20 h-1 mx-auto mt-4 rounded-full"
              style={{ backgroundColor: "#EDC088" }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#444" }}>
                O <strong style={{ color: "#0B7C82" }}>Studio Almeida Pet Care</strong> é um
                centro de estética animal localizado no Jardim das Américas, em Curitiba. Há mais
                de 8 anos, nos dedicamos a oferecer o melhor cuidado para o seu companheiro
                peludo.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#444" }}>
                Nossa equipe é treinada e apaixonada por animais, garantindo que cada pet saia
                ainda mais lindo, feliz e cheiroso. Utilizamos produtos de alta qualidade,
                seguros e adequados para cada tipo de pelagem.
              </p>
              <a
                href="https://wa.me/554192233305"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#0B7C82", color: "white" }}
              >
                <Calendar size={18} />
                Agendar Consulta
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Shield className="w-8 h-8" style={{ color: "#0B7C82" }} />,
                  title: "Segurança Total",
                  desc: "Ambiente seguro e controlado para o bem-estar do seu pet.",
                },
                {
                  icon: <Heart className="w-8 h-8" style={{ color: "#0B7C82" }} />,
                  title: "Amor pelos Pets",
                  desc: "Cada animal é tratado com carinho e atenção individual.",
                },
                {
                  icon: <Star className="w-8 h-8" style={{ color: "#0B7C82" }} />,
                  title: "Qualidade Premium",
                  desc: "Produtos de alta qualidade para cuidar da pelagem.",
                },
                {
                  icon: <Clock className="w-8 h-8" style={{ color: "#0B7C82" }} />,
                  title: "Pontualidade",
                  desc: "Respeitamos o seu tempo com horários agendados.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold mb-1 text-sm" style={{ color: "#0B7C82" }}>
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVIÇOS SECTION ========== */}
      <section
        id="servicos"
        className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24"
      >
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#EDC088" }}
          >
            O que Oferecemos
          </p>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Nossos Serviços</h3>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: "#EDC088" }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(237, 192, 136, 0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(237, 192, 136, 0.7)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.13)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(237, 192, 136, 0.25)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  background: "linear-gradient(135deg, rgba(237,192,136,0.2), rgba(11,124,130,0.3))",
                  border: "1px solid rgba(237,192,136,0.3)",
                }}
              >
                {iconMap[service.icon]}
              </div>
              <h4 className="text-lg font-bold mb-3" style={{ color: "#EDC088" }}>
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#c5dfe2" }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== GALERIA SECTION ========== */}
      <section
        id="galeria"
        className="relative z-10 py-16 md:py-24"
        style={{ backgroundColor: "#F5E6D3" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#0B7C82" }}
            >
              Nosso Trabalho
            </p>
            <h3 className="text-4xl md:text-5xl font-bold" style={{ color: "#0B7C82" }}>
              Transformações Incríveis
            </h3>
            <div
              className="w-20 h-1 mx-auto mt-4 rounded-full"
              style={{ backgroundColor: "#EDC088" }}
            />
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#555" }}>
              Veja alguns dos nossos resultados e como transformamos pets em urshinhos felizes
            </p>
          </div>

          <div className="relative">
            {/* Botão esquerdo */}
            <button
              onClick={() => handleGalleryScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
              style={{ backgroundColor: "#0B7C82", color: "white" }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Container da galeria */}
            <div
              ref={galleryRef}
              className="flex gap-5 overflow-x-auto pb-4"
              style={{
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {[...petGalleryImages, ...petGalleryImages].map((image, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 cursor-pointer group"
                  style={{ width: 280, height: 320 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div
                    className="relative w-full h-full rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    style={{ border: "2px solid transparent" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#EDC088";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6 px-4"
                      style={{
                        background: "linear-gradient(to top, rgba(11,124,130,0.9) 0%, transparent 60%)",
                      }}
                    >
                      <p className="text-white font-bold text-base">{image.title}</p>
                      <p className="text-xs mt-1" style={{ color: "#EDC088" }}>
                        {image.breed}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão direito */}
            <button
              onClick={() => handleGalleryScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
              style={{ backgroundColor: "#0B7C82", color: "white" }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* CTA galeria */}
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/studioalmeidapetcare/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                color: "white",
              }}
            >
              <Instagram size={18} />
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ========== DEPOIMENTOS SECTION ========== */}
      <section
        id="depoimentos"
        className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24"
      >
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#EDC088" }}
          >
            O que Dizem
          </p>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Tutores Satisfeitos
          </h3>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: "#EDC088" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(237, 192, 136, 0.2)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={16} fill="#EDC088" style={{ color: "#EDC088" }} />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6 italic" style={{ color: "#d4e8ea" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: "#EDC088", color: "#0B7C82" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-xs" style={{ color: "#EDC088" }}>
                    {t.pet}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CONTATO SECTION ========== */}
      <section
        id="contato"
        className="relative z-10 py-16 md:py-24"
        style={{ backgroundColor: "#F5E6D3" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#0B7C82" }}
            >
              Fale Conosco
            </p>
            <h3 className="text-4xl md:text-5xl font-bold" style={{ color: "#0B7C82" }}>
              Entre em Contato
            </h3>
            <div
              className="w-20 h-1 mx-auto mt-4 rounded-full"
              style={{ backgroundColor: "#EDC088" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/554192233305"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl p-8 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "white" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(37, 211, 102, 0.1)" }}
              >
                <MessageCircle size={32} style={{ color: "#25D366" }} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "#25D366" }}>
                  WhatsApp
                </h4>
                <p className="text-sm" style={{ color: "#555" }}>
                  (41) 9922-3305
                </p>
                <p className="text-xs mt-1" style={{ color: "#888" }}>
                  Resposta rápida!
                </p>
              </div>
            </a>

            {/* Localização */}
            <div
              className="rounded-3xl p-8 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "white" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(11, 124, 130, 0.1)" }}
              >
                <MapPin size={32} style={{ color: "#0B7C82" }} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "#0B7C82" }}>
                  Localização
                </h4>
                <p className="text-sm" style={{ color: "#555" }}>
                  Jd. das Américas
                </p>
                <p className="text-xs mt-1" style={{ color: "#888" }}>
                  Curitiba – PR
                </p>
              </div>
            </div>

            {/* Redes Sociais */}
            <div
              className="rounded-3xl p-8 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "white" }}
            >
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/studioalmeidapetcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                    color: "white",
                  }}
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "#1877F2", color: "white" }}
                >
                  <Facebook size={22} />
                </a>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "#0B7C82" }}>
                  Redes Sociais
                </h4>
                <p className="text-sm" style={{ color: "#555" }}>
                  @studioalmeidapetcare
                </p>
                <p className="text-xs mt-1" style={{ color: "#888" }}>
                  Siga-nos!
                </p>
              </div>
            </div>
          </div>

          {/* Mapa Google Maps */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-lg border-2" style={{ borderColor: "rgba(237, 192, 136, 0.3)" }}>
            <MapView
              initialCenter={{ lat: -25.4290, lng: -49.2671 }}
              initialZoom={16}
              onMapReady={(map) => {
                // Adicionar marcador com informações do estúdio
                if (window.google && window.google.maps && window.google.maps.marker) {
                  new window.google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: -25.4290, lng: -49.2671 },
                    title: "Studio Almeida Pet Care",
                  });
                }
              }}
              className="rounded-3xl"
            />
          </div>

          {/* Horário de funcionamento */}
          <div
            className="rounded-3xl p-8 text-center"
            style={{ backgroundColor: "#0B7C82" }}
          >
            <h4 className="text-2xl font-bold text-white mb-6">Horário de Funcionamento</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { day: "Segunda – Sexta", hours: "8h às 18h" },
                { day: "Sábado", hours: "8h às 16h" },
                { day: "Domingo", hours: "Fechado" },
              ].map((h, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <p className="text-sm font-medium" style={{ color: "#EDC088" }}>
                    {h.day}
                  </p>
                  <p className="text-white font-bold mt-1">{h.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer
        className="relative z-10 py-10 px-4"
        style={{
          backgroundColor: "#064a50",
          borderTop: "1px solid rgba(237, 192, 136, 0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="rounded-full overflow-hidden border-2"
              style={{ width: 48, height: 48, borderColor: "rgba(237,192,136,0.5)" }}
            >
              <img
                src="/images/logo.png"
                alt="Almeida Studio Pet Care"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Almeida Studio Pet Care</p>
              <p className="text-xs" style={{ color: "#EDC088" }}>
                Centro de Estética Animal
              </p>
            </div>
          </div>

          <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Almeida Studio Pet Care. Todos os direitos reservados.
            <br />
            Jardim das Américas, Curitiba – PR
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/studioalmeidapetcare/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                color: "white",
              }}
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/554192233305"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* ========== BOTÃO FLUTUANTE WHATSAPP ========== */}
      <a
        href="https://wa.me/554192233305"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#25D366",
          boxShadow: "0 0 30px rgba(37, 211, 102, 0.6)",
          animation: "float 3s ease-in-out infinite",
        }}
        title="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={28} color="white" />
      </a>

      {/* ========== MODAL GALERIA ========== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#EDC088] transition p-2 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <X size={28} />
            </button>
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "2px solid rgba(237, 192, 136, 0.4)" }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
                style={{ maxHeight: "70vh", objectFit: "cover" }}
              />
            </div>
            <div className="text-center mt-4">
              <h4 className="text-white text-xl font-bold">{selectedImage.title}</h4>
              <p style={{ color: "#EDC088" }} className="text-sm mt-1">
                {selectedImage.breed} — Studio Almeida Pet Care
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========== ESTILOS GLOBAIS ========== */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        /* Esconder scrollbar da galeria */
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
