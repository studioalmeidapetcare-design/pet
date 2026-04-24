import { useState, useEffect, useRef, ReactElement } from "react";
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
    src: "/images/pet_maltese.webp",
    alt: "Transformação Maltês",
    title: "Transformação Maltês",
    breed: "Maltês",
  },
  {
    id: 2,
    src: "/images/pet_chihuahua.webp",
    alt: "Maltês — Studio Almeida Pet Care",
    title: "Maltês — Studio Almeida Pet Care",
    breed: "Maltês",
  },
  {
    id: 3,
    src: "/images/pet_shih_tzu_marrom.webp",
    alt: "Shih Tzu Glamourosa",
    title: "Shih Tzu Glamourosa",
    breed: "Shih Tzu",
  },
  {
    id: 4,
    src: "/images/pet_shih_tzu_new.webp",
    alt: "Shih Tzu feliz — Studio Almeida Pet Care",
    title: "Shih Tzu Glamourosa",
    breed: "Shih Tzu",
  },
  {
    id: 5,
    src: "/images/pet_maltese.webp",
    alt: "Maltês após transformação completa",
    title: "Transformação Maltês",
    breed: "Maltês",
  },
  {
    id: 6,
    src: "/images/pet_yorkshire_new.jpg",
    alt: "Yorkshire elegante após banho e tosa",
    title: "Yorkshire Elegante",
    breed: "Yorkshire",
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
    name: "Viviane Monteiro",
    role: "Local Guide",
    text: "Super indico e recomendo o Almeida! Profissional mega caprichoso, dedicado e detalhista. Meu Shih tzu Luke já se sente em casa!",
    stars: 5,
    date: "2 anos atrás"
  },
  {
    name: "wanessa garcia vital",
    role: "Cliente Fiel",
    text: "Tenho muito confiança em deixar minhas Pets no estúdio Almeida, é nítido o carinho que eles tem com os bichinhos! Atendimento VIP.",
    stars: 5,
    date: "2 anos atrás"
  },
  {
    name: "Rodolfo Oliveira",
    role: "Cliente",
    text: "Deixamos nossa pequena nos cuidados do Robson, simplesmente um profissional fantástico e querido. Confiamos plenamente!",
    stars: 5,
    date: "8 meses atrás"
  },
  {
    name: "Ana Paula",
    role: "Cliente",
    text: "Dia de banho no tio Roberson é um evento que tem como resultado muita fofurice! Minha pet sempre sai linda.",
    stars: 5,
    date: "1 ano atrás"
  }
];

interface SelectedImage {
  src: string;
  alt: string;
  title: string;
  breed: string;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
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
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0B7C82 0%, #0a6870 40%, #085a60 70%, #064a50 100%)",
          }}
        />

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

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          style={{ opacity: 0.35 }}
        >
          <style>{`
            @keyframes logoTracing {
              0%, 100% { 
                filter: drop-shadow(0 0 5px rgba(237, 192, 136, 0.3)) brightness(1.2); 
                transform: scale(1) rotate(0deg);
              }
              50% { 
                filter: drop-shadow(0 0 40px rgba(237, 192, 136, 0.9)) brightness(1.8); 
                transform: scale(1.05) rotate(2deg);
              }
            }
            @keyframes shimmerBorder {
              0% { transform: translate(-150%, -150%) rotate(45deg); }
              100% { transform: translate(150%, 150%) rotate(45deg); }
            }
            @keyframes floatLogo {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              25% { transform: translateY(-15px) translateX(10px); }
              50% { transform: translateY(-5px) translateX(-10px); }
              75% { transform: translateY(-20px) translateX(5px); }
            }
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.4; filter: blur(20px); }
              50% { opacity: 0.8; filter: blur(40px); }
            }
            .logo-container-animated {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: logoTracing 6s ease-in-out infinite, floatLogo 12s ease-in-out infinite;
            }
            .logo-outline-glow {
              position: absolute;
              width: 200%;
              height: 200%;
              background: linear-gradient(45deg, transparent, rgba(237, 192, 136, 0.8), rgba(255, 255, 255, 0.4), rgba(237, 192, 136, 0.8), transparent);
              animation: shimmerBorder 4s linear infinite;
            }
            .logo-pulse-bg {
              position: absolute;
              width: 120%;
              height: 120%;
              background: radial-gradient(circle, rgba(237, 192, 136, 0.4) 0%, transparent 70%);
              animation: pulseGlow 4s ease-in-out infinite;
              z-index: -1;
            }
          `}</style>
          <div className="logo-container-animated">
            <div className="logo-pulse-bg" />
            <img
              src="/images/logo_transparent.png"
              alt="Almeida Studio Pet Care - Marca d'água"
              style={{
                width: "min(100vw, 100vh)",
                height: "min(100vw, 100vh)",
                objectFit: "contain",
                maskImage: "url('/images/logo_transparent.png')",
                WebkitMaskImage: "url('/images/logo_transparent.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
            <div 
              className="absolute inset-0"
              style={{
                width: "min(100vw, 100vh)",
                height: "min(100vw, 100vh)",
                maskImage: "url('/images/logo_transparent.png')",
                WebkitMaskImage: "url('/images/logo_transparent.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              <div className="logo-outline-glow" />
            </div>
          </div>
        </div>
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(11, 124, 130, 0.75)" : "rgba(11, 124, 130, 0.4)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
          borderBottom: "1px solid rgba(237, 192, 136, 0.2)",
          animation: "slideDown 0.6s ease-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div
              className="rounded-full overflow-hidden border-2 border-[#EDC088]/60 shadow-lg transition-transform duration-300 group-hover:scale-110"
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

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/554199223305"
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

        {mobileMenuOpen && (
          <div
            className="md:hidden border-t border-[#EDC088]/20 py-4 px-4"
            style={{ backgroundColor: "rgba(11, 124, 130, 0.85)", backdropFilter: "blur(12px)" }}
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
              href="https://wa.me/554199223305"
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

      <section
        className="relative z-10 max-w-7xl mx-auto px-4 pt-28 md:pt-36 pb-20 md:pb-28"
        style={{ animation: "fadeInUp 0.8s ease-out" }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                href="https://wa.me/554199223305"
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

            <div className="flex flex-wrap gap-6" style={{ color: "#b8d8db" }}>
              <a 
                href="https://www.google.com/maps/place/Almeida+Studio+Pet+Care+-+Jardim+das+Am%C3%A9ricas/data=!4m7!3m6!1s0x94dce546214dbf77:0xedda7d3baa50ba4e!8m2!3d-25.4719619!4d-49.2280487!16s%2Fg%2F11ffw7grrz!19sChIJd79NIUbl3JQRTrpQqjt92u0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#EDC088] transition-colors group"
              >
                <MapPin size={18} className="text-[#EDC088] group-hover:scale-125 transition-transform" />
                <span className="text-sm">Jd. das Américas, Curitiba</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone size={18} style={{ color: "#EDC088" }} />
                <span className="text-sm">(41) 9922-3305</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} style={{ color: "#EDC088" }} />
                <span className="text-sm">Ter–Sex: 9h–17h | Sáb: 9h–15h</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center h-[450px] w-full max-w-[500px] mx-auto">
            <div
              className="absolute inset-0 rounded-[40px] blur-2xl opacity-30"
              style={{
                background: "linear-gradient(135deg, #EDC088, #F5E6D3)",
                transform: "scale(0.95)",
              }}
            />
            <div
              className="relative w-full h-full rounded-[40px] overflow-hidden border-4 border-[#EDC088]/30 shadow-2xl"
            >
              {[
                "/images/pet_yorkshire_new.jpg",
                "/images/pet_shih_tzu_new.webp",
                "/images/pet_maltese.jpg"
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Pet feliz no Studio Almeida ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    activeHeroImage === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {[0, 1, 2].map((i) => (
                  <div 
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeHeroImage === i ? "w-6 bg-[#EDC088]" : "w-1.5 bg-white/50"}`}
                  />
                ))}
              </div>

              <div
                className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 flex items-center gap-3 z-10"
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

      <section
        id="sobre"
        className="relative z-10 py-16 md:py-24"
        style={{ 
          backgroundColor: "rgba(245, 230, 211, 0.65)",
          backdropFilter: "blur(8px)",
          borderTop: "1px solid rgba(237, 192, 136, 0.3)",
          borderBottom: "1px solid rgba(237, 192, 136, 0.3)"
        }}
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
                href="https://wa.me/554199223305"
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
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(5px)" }}
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

      <section
        id="galeria"
        className="relative z-10 py-16 md:py-24"
        style={{ backgroundColor: "rgba(245, 230, 211, 0.7)", backdropFilter: "blur(10px)" }}
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
            <button
              onClick={() => handleGalleryScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
              style={{ backgroundColor: "#0B7C82", color: "white" }}
            >
              <ChevronLeft size={22} />
            </button>

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

            <button
              onClick={() => handleGalleryScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
              style={{ backgroundColor: "#0B7C82", color: "white" }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/almeidastudiopetcarejdamericas/"
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

      <section
        id="depoimentos"
        className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 overflow-hidden"
      >
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#EDC088" }}
          >
            O que Dizem no Google
          </p>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Avaliações dos Tutores
          </h3>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: "#EDC088" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex transition-transform duration-700 ease-in-out" 
               style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div
                  className="rounded-3xl p-8 md:p-12 transition-all duration-300 shadow-2xl relative"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(237, 192, 136, 0.2)",
                  }}
                >
                  <div className="absolute top-8 right-8 opacity-20">
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={20} fill="#EDC088" style={{ color: "#EDC088" }} />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl leading-relaxed mb-8 italic font-medium" style={{ color: "#d4e8ea" }}>
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: "#EDC088", color: "#0B7C82" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t.name}</h4>
                      <p className="text-sm" style={{ color: "#EDC088" }}>{t.role} • {t.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === i ? "w-8" : "w-2"
                }`}
                style={{ backgroundColor: activeTestimonial === i ? "#EDC088" : "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>

          <button 
            onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full text-white/50 hover:text-[#EDC088] transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          <button 
            onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full text-white/50 hover:text-[#EDC088] transition-colors"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </section>

      <section
        id="contato"
        className="relative z-10 py-16 md:py-24"
        style={{ 
          backgroundColor: "rgba(245, 230, 211, 0.65)",
          backdropFilter: "blur(8px)",
          borderTop: "1px solid rgba(237, 192, 136, 0.3)"
        }}
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
            <a
              href="https://wa.me/554199223305"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: "transparent" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(37, 211, 102, 0.1)" }}
              >
                <MessageCircle size={32} fill="#25D366" style={{ color: "#25D366", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))" }} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "#128C7E", textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
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

            <a
              href="https://www.google.com/maps/place/Almeida+Studio+Pet+Care+-+Jardim+das+Am%C3%A9ricas/data=!4m7!3m6!1s0x94dce546214dbf77:0xedda7d3baa50ba4e!8m2!3d-25.4719619!4d-49.2280487!16s%2Fg%2F11ffw7grrz!19sChIJd79NIUbl3JQRTrpQqjt92u0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 group"
              style={{ backgroundColor: "transparent" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: "rgba(11, 124, 130, 0.1)" }}
              >
                <MapPin size={32} style={{ color: "#0B7C82", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))" }} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "#085a60", textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                  Localização
                </h4>
                <p className="text-sm" style={{ color: "#555" }}>
                  Jd. das Américas
                </p>
                <p className="text-xs mt-1" style={{ color: "#888" }}>
                  Curitiba – PR
                </p>
              </div>
            </a>

            <div
              className="p-8 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/almeidastudiopetcarejdamericas/"
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
                <h4 className="font-bold text-lg mb-1" style={{ color: "#085a60", textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
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

          <div className="mb-12 rounded-3xl overflow-hidden shadow-lg border-2" style={{ borderColor: "rgba(237, 192, 136, 0.3)" }}>
            <MapView
              initialCenter={{ lat: -25.4719619, lng: -49.2280487 }}
              initialZoom={16}
              onMapReady={(map) => {
                if (window.google && window.google.maps && window.google.maps.marker) {
                  new window.google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: -25.4719619, lng: -49.2280487 },
                    title: "Studio Almeida Pet Care",
                  });
                }
              }}
              className="rounded-3xl"
            />
          </div>

          <div
            className="rounded-3xl p-8 text-center"
            style={{ backgroundColor: "#0B7C82" }}
          >
            <h4 className="text-2xl font-bold text-white mb-6">Horário de Funcionamento</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { day: "Terça – Sexta", hours: "9h às 17h" },
                { day: "Sábado", hours: "9h às 15h" },
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

          <div className="text-center">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              © {new Date().getFullYear()} Almeida Studio Pet Care. Todos os direitos reservados.
              <br />
              CNPJ: 53.190.485/0001-90 | Jardim das Américas, Curitiba – PR
            </p>
            <p className="text-[10px] mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
              Design by <a href="https://jbrasillabs.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#EDC088] transition-colors">jbrasillabs.com.br</a>
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/almeidastudiopetcarejdamericas/"
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
              href="https://wa.me/554199223305"
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

      <a
        href="https://wa.me/554199223305"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#25D366",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3), 0 0 30px rgba(37, 211, 102, 0.4)",
          animation: "float 3s ease-in-out infinite",
        }}
        title="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={28} fill="white" color="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
      </a>

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
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
