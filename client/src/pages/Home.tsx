import { useState, useRef, useEffect, ReactElement } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Phone, Instagram, Facebook } from "lucide-react";

/**
 * Design Philosophy: Luxury Pet Care - Elegant Teal & Gold
 * Color Palette: Teal (#0B7C82), Gold (#EDC088), Cream (#F5E6D3)
 * Typography: Monterey BT (script), Shadowdown BT (body)
 * Style: Sophisticated, premium, professional
 */

const petGalleryImages = [
  {
    id: 1,
    src: "https://raw.githubusercontent.com/studioalmeidapetcare-design/pet/main/public/images/pet_maltese.webp",
    alt: "Transformação Maltês",
    title: "Transformação Maltês",
  },
  {
    id: 2,
    src: "https://raw.githubusercontent.com/studioalmeidapetcare-design/pet/main/public/images/pet_chihuahua.webp",
    alt: "Maltês — Studio Almeida Pet Care",
    title: "Maltês — Studio Almeida Pet Care",
  },
  {
    id: 3,
    src: "https://raw.githubusercontent.com/studioalmeidapetcare-design/pet/main/public/images/pet_shih_tzu_marrom.webp",
    alt: "Shih Tzu Glamourosa",
    title: "Shih Tzu Glamourosa",
  },
  {
    id: 4,
    src: "https://raw.githubusercontent.com/studioalmeidapetcare-design/pet/main/public/images/pet_shih_tzu_cinza.webp",
    alt: "Shih Tzu — Studio Almeida Pet Care",
    title: "Shih Tzu — Studio Almeida Pet Care",
  },
];

interface SelectedImage {
  src: string;
  alt: string;
  title: string;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll da galeria
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (galleryRef.current) {
          const scrollAmount = 320; // width + gap
          galleryRef.current.scrollLeft += scrollAmount;
        }
      }, 3000);
    };

    startAutoScroll();
    return () => {
      if (autoScrollRef.current !== null) clearInterval(autoScrollRef.current);
    };
  }, []);

  const handleGalleryScroll = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 320;
      if (direction === "left") {
        galleryRef.current.scrollLeft -= scrollAmount;
      } else {
        galleryRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B7C82] to-[#0a5f65]">
      {/* Animated Background with Giant Logo Watermark */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B7C82] via-[#0a5f65] to-[#073d42]" />
        
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EDC088] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#F5E6D3] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#EDC088] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Giant Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full max-w-4xl" xmlns="http://www.w3.org/2000/svg">
            {/* Circle border */}
            <circle cx="100" cy="100" r="95" fill="none" stroke="#EDC088" strokeWidth="2"/>
            {/* Shih Tzu silhouette */}
            <g fill="#EDC088" opacity="0.9">
              <ellipse cx="100" cy="70" rx="12" ry="14"/>
              <path d="M 95 65 Q 90 60 85 62 Q 88 55 95 55 Q 102 55 105 62 Q 100 60 95 65" fill="#EDC088"/>
              <ellipse cx="100" cy="95" rx="20" ry="25"/>
              <ellipse cx="85" cy="105" rx="8" ry="12"/>
              <ellipse cx="115" cy="105" rx="8" ry="12"/>
            </g>
            {/* Text */}
            <text x="100" y="145" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#EDC088" fontFamily="serif">Almeida</text>
            <text x="100" y="160" fontSize="10" textAnchor="middle" fill="#EDC088" fontFamily="serif">STUDIO PET CARE</text>
          </svg>
        </div>
      </div>

      {/* Header/Navigation - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B7C82]/95 backdrop-blur-md shadow-lg border-b border-[#EDC088]/20" style={{
        animation: 'slideDown 0.6s ease-out'
      }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Circle border */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="#EDC088" strokeWidth="3"/>
                {/* Shih Tzu silhouette */}
                <g fill="#EDC088" opacity="0.9">
                  <ellipse cx="100" cy="70" rx="12" ry="14"/>
                  <path d="M 95 65 Q 90 60 85 62 Q 88 55 95 55 Q 102 55 105 62 Q 100 60 95 65" fill="#EDC088"/>
                  <ellipse cx="100" cy="95" rx="20" ry="25"/>
                  <ellipse cx="85" cy="105" rx="8" ry="12"/>
                  <ellipse cx="115" cy="105" rx="8" ry="12"/>
                </g>
                {/* Text */}
                <text x="100" y="145" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#EDC088" fontFamily="serif">Almeida</text>
                <text x="100" y="160" fontSize="10" textAnchor="middle" fill="#EDC088" fontFamily="serif">STUDIO PET CARE</text>
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Almeida</h1>
              <p className="text-[#EDC088] text-xs">Studio Pet Care</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-white">
            <a href="#sobre" className="hover:text-[#EDC088] transition">Sobre</a>
            <a href="#servicos" className="hover:text-[#EDC088] transition">Serviços</a>
            <a href="#galeria" className="hover:text-[#EDC088] transition">Galeria</a>
            <a href="#contato" className="hover:text-[#EDC088] transition">Contato</a>
          </nav>

            <a
              href="https://wa.me/5541999223305"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#20ba58] transition flex items-center gap-2 animate-pulse"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "Monterey BT, cursive" }}>
              Seu Pet Merece Cuidado de Verdade
            </h2>
            <p className="text-lg text-[#F5E6D3] mb-8">
              Há mais de 8 anos transformando pets em urshinhos felizes com banho, tosa e muito amor. Ambiente quentinho, seguro e produtos de qualidade.
            </p>
            <div className="flex gap-4">
            <a
              href="https://wa.me/5541999223305"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-[#20ba58] transition animate-pulse"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            >
              Agendar Agora
            </a>
              <button className="border-2 border-[#EDC088] text-[#EDC088] px-8 py-3 rounded-full font-bold hover:bg-[#EDC088] hover:text-[#0B7C82] transition">
                Saiba Mais
              </button>
            </div>
            <div className="flex gap-8 mt-8 text-[#F5E6D3]">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Jd. das Américas</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>(41) 9922-3305</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#EDC088] to-[#F5E6D3] rounded-[40px] opacity-20 blur-xl" />
            <img
              src="https://raw.githubusercontent.com/studioalmeidapetcare-design/pet/main/public/images/pet_maltese.webp"
              alt="Studio Almeida Pet Care"
              className="relative rounded-[40px] shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative z-10 bg-[#F5E6D3] py-16 md:py-24" style={{
        animation: 'fadeInUp 0.8s ease-out'
      }}>
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-[#0B7C82] mb-12 text-center">Quem Somos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#EDC088] to-[#0B7C82] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#0B7C82] mb-4">8+ Anos de Experiência</h4>
              <p className="text-gray-600">Transformando pets em urshinhos felizes com dedicação e carinho desde 2016.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#EDC088] to-[#0B7C82] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#0B7C82] mb-4">Amor pelos Pets</h4>
              <p className="text-gray-600">Cada pet é tratado como família. Ambiente seguro, quentinho e com produtos de qualidade.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#EDC088] to-[#0B7C82] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#0B7C82] mb-4">Profissionalismo</h4>
              <p className="text-gray-600">Equipe treinada e dedicada ao bem-estar e beleza do seu companheiro peludo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24" style={{
        animation: 'fadeInUp 0.8s ease-out 0.2s both'
      }}>
        <h3 className="text-4xl font-bold text-white mb-12 text-center">Nossos Serviços</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "water", title: "Banho", desc: "Banho completo com produtos premium" },
            { icon: "scissors", title: "Tosa", desc: "Tosa estética e personalizada" },
            { icon: "calendar", title: "Cronograma", desc: "Cronograma capilar especializado" },
            { icon: "spa", title: "Cuidado Especial", desc: "Tratamentos especiais e hidratação" },
          ].map((service, idx) => {
            const iconMap: Record<string, ReactElement> = {
              water: <svg className="w-12 h-12 text-[#EDC088]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z"/></svg>,
              scissors: <svg className="w-12 h-12 text-[#EDC088]" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.66 0-3 1.34-3 3 0 1.31.84 2.41 2 2.85V21h2v-4.15c1.16-.44 2-1.54 2-2.85 0-1.66-1.34-3-3-3zm12-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.66 0-3 1.34-3 3 0 1.31.84 2.41 2 2.85V21h2v-4.15c1.16-.44 2-1.54 2-2.85 0-1.66-1.34-3-3-3z"/></svg>,
              calendar: <svg className="w-12 h-12 text-[#EDC088]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v5h7v-5z"/></svg>,
              spa: <svg className="w-12 h-12 text-[#EDC088]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>,
            };
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-[#EDC088]/30 hover:border-[#EDC088] transition text-center transform hover:scale-105 duration-300"
              >
                <div className="flex justify-center mb-4">{iconMap[service.icon]}</div>
                <h4 className="text-xl font-bold text-[#EDC088] mb-2">{service.title}</h4>
                <p className="text-[#F5E6D3]">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="relative z-10 bg-[#F5E6D3] py-16 md:py-24" style={{
        animation: 'fadeInUp 0.8s ease-out 0.4s both'
      }}>
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-[#0B7C82] mb-4 text-center">Nossos Resultados</h3>
          <p className="text-center text-gray-600 mb-12">Veja alguns dos nossos trabalhos e como transformamos pets em urshinhos felizes</p>

          <div className="relative">
            {/* Gallery Container */}
            <div
              ref={galleryRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {/* Duplicate images for infinite scroll effect */}
              {[...petGalleryImages, ...petGalleryImages, ...petGalleryImages].map((image, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80 h-80 snap-center cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <p className="text-white font-bold text-lg">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => handleGalleryScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-[#0B7C82] text-white p-3 rounded-full hover:bg-[#EDC088] hover:text-[#0B7C82] transition z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleGalleryScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-[#0B7C82] text-white p-3 rounded-full hover:bg-[#EDC088] hover:text-[#0B7C82] transition z-20"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24" style={{
        animation: 'fadeInUp 0.8s ease-out 0.6s both'
      }}>
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-[#EDC088]/30">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Entre em Contato</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a
              href="https://wa.me/5541999223305"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white/10 transition"
            >
              <MessageCircle size={40} className="text-[#25D366] animate-pulse" style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }} />
              <div>
                <h4 className="text-[#25D366] font-bold mb-2">WhatsApp</h4>
                <p className="text-[#F5E6D3]">(41) 9922-3305</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white/10 transition">
              <MapPin size={40} className="text-[#EDC088]" />
              <div>
                <h4 className="text-[#EDC088] font-bold mb-2">Localização</h4>
                <p className="text-[#F5E6D3]">Jd. das Américas, Curitiba</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white/10 transition">
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/almeidastudiopetcarejdamericas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDC088] hover:text-[#F5E6D3] transition"
                >
                  <Instagram size={32} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDC088] hover:text-[#F5E6D3] transition"
                >
                  <Facebook size={32} />
                </a>
              </div>
              <div>
                <h4 className="text-[#EDC088] font-bold mb-2">Redes Sociais</h4>
                <p className="text-[#F5E6D3]">Nos siga!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5541999223305"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba58] transition z-50 flex items-center justify-center animate-pulse"
        style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, float 3s ease-in-out infinite'
        }}
      >
        <MessageCircle size={28} />
      </a>

      {/* Modal for Gallery Images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#EDC088] transition"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <h4 className="text-center text-white text-2xl font-bold mt-6">{selectedImage.title}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
