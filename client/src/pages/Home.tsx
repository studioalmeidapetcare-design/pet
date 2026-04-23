import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Studio Almeida Pet Care - Homepage
 * 
 * Design Philosophy: Warm & Playful Pet Care
 * - Caloroso e acolhedor: transmite confiança e carinho
 * - Lúdico mas profissional: celebra a alegria dos pets
 * - Orgânico e natural: formas arredondadas, transições suaves
 * - Tipografia: Poppins Bold para títulos, Inter para corpo, Playfair Display para destaques
 * - Paleta: Laranja/Coral (#FF6B4A), Creme (#F5E6D3), Verde Menta (#A8D5BA), Roxo Claro (#D4A5D4)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "4199223305";
  const whatsappMessage = "Olá! Gostaria de agendar um banho e tosa para meu pet no Studio Almeida Pet Care.";
  const whatsappLink = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-green-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
              🐾
            </div>
            <span className="font-bold text-xl text-gray-800">Studio Almeida</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-orange-500 transition">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-orange-500 transition">Serviços</a>
            <a href="#galeria" className="text-gray-700 hover:text-orange-500 transition">Galeria</a>
            <a href="#contato" className="text-gray-700 hover:text-orange-500 transition">Contato</a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="display-medium text-gray-900">
                Seu Pet Merece <span className="text-orange-500">Cuidado de Verdade</span>
              </h1>
              <p className="body-large text-gray-700">
                Há mais de 8 anos transformando pets em urshinhos felizes com banho, tosa e muito amor. Ambiente quentinho, seguro e produtos de qualidade.
              </p>
              <div className="flex gap-4 pt-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-primary">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agendar Agora
                  </Button>
                </a>
                <a href="#sobre">
                  <Button variant="outline" className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50">
                    Saiba Mais
                  </Button>
                </a>
              </div>
              <div className="flex gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-700">Jd. das Américas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-700">(41) 99223-305</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663561824623/SPhYGz8CcxhVjwHBF5eAWn/hero-banner-gdEWtt4XN6XLcMxNcmPhLV.webp"
                alt="Hero Banner"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-300 to-green-500 rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gradient-to-r from-orange-50 via-white to-purple-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-gray-900 mb-4">Quem Somos</h2>
            <p className="body-large text-gray-700 max-w-2xl mx-auto">
              Somos apaixonados por pets e dedicados a oferecer o melhor cuidado possível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-warm">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="heading-2 text-gray-900 mb-3">Trajetória</h3>
              <p className="text-gray-700">
                Com mais de 8 anos de confiança e experiência, o Studio Almeida Pet Care se consolidou como referência em cuidado profissional e afetuoso para pets no Jardim das Américas.
              </p>
            </div>

            <div className="card-warm">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="heading-2 text-gray-900 mb-3">Nossa Missão</h3>
              <p className="text-gray-700">
                Transformar a experiência de banho e tosa em um momento de bem-estar, conforto e alegria para cada pet que chega até nós.
              </p>
            </div>

            <div className="card-warm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="heading-2 text-gray-900 mb-3">Compromisso</h3>
              <p className="text-gray-700">
                Ambiente quentinho e seguro, produtos de qualidade, atenção individual e respeito em cada detalhe do cuidado com seu bichinho.
              </p>
            </div>
          </div>

          {/* Equipe */}
          <div className="mt-16 pt-16 border-t-2 border-orange-200">
            <h3 className="heading-2 text-gray-900 mb-8 text-center">Conheça Nossa Equipe</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-2xl">
                  👨‍💼
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Roberson</h4>
                  <p className="text-gray-600">Apaixonado por pets e especialista em banho e tosa</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl">
                  👩‍💼
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Equipe Dedicada</h4>
                  <p className="text-gray-600">Profissionais com amor e respeito por cada animal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="body-large text-gray-700 max-w-2xl mx-auto">
              Oferecemos serviços completos de banho e tosa com muito carinho e cuidado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-warm">
              <div className="text-5xl mb-4">🛁</div>
              <h3 className="heading-2 text-gray-900 mb-3">Banho Higienizador</h3>
              <p className="text-gray-700 mb-4">
                Banho quentinho com produtos de qualidade que garantem limpeza e saúde para a pele e pelos do seu pet.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Produtos pet-safe</li>
                <li>✓ Ambiente aquecido</li>
                <li>✓ Secagem profissional</li>
              </ul>
            </div>

            <div className="card-warm">
              <div className="text-5xl mb-4">✂️</div>
              <h3 className="heading-2 text-gray-900 mb-3">Tosa Personalizada</h3>
              <p className="text-gray-700 mb-4">
                Transformamos seu pet em um ursinho fofo com tosa personalizada de acordo com a raça e preferência.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Tosa higiênica</li>
                <li>✓ Tosa estética</li>
                <li>✓ Estilos personalizados</li>
              </ul>
            </div>

            <div className="card-warm">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="heading-2 text-gray-900 mb-3">Cronograma Capilar</h3>
              <p className="text-gray-700 mb-4">
                Acompanhamento regular para manter a saúde e beleza dos pelos do seu pet em dia.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Plano mensal</li>
                <li>✓ Cuidados específicos</li>
                <li>✓ Acompanhamento contínuo</li>
              </ul>
            </div>

            <div className="card-warm">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="heading-2 text-gray-900 mb-3">Cuidado Especial</h3>
              <p className="text-gray-700 mb-4">
                Atenção individual para cada animalzinho, com amor e respeito em cada detalhe.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Ambiente seguro</li>
                <li>✓ Manejo gentil</li>
                <li>✓ Produtos hipoalergênicos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20 bg-gradient-to-r from-green-50 via-white to-orange-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-gray-900 mb-4">Galeria de Resultados</h2>
            <p className="body-large text-gray-700 max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos e como transformamos pets em urshinhos felizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663561824623/SPhYGz8CcxhVjwHBF5eAWn/gallery-pet-1-RyJuETzGZGpJzsVsbt2G7a.webp"
                alt="Pet grooming result 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-semibold">Poodle Branco - Tosa Redonda</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663561824623/SPhYGz8CcxhVjwHBF5eAWn/gallery-pet-2-278qM8bDejWn4SdAjKSvak.webp"
                alt="Pet grooming result 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-semibold">Shih Tzu - Tosa Personalizada</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663561824623/SPhYGz8CcxhVjwHBF5eAWn/gallery-pet-3-XdUYDbi3gG98UXUPoX37uhB.webp"
                alt="Pet grooming result 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-semibold">Pomerânio - Tosa Estética</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-1 text-gray-900 mb-4">Entre em Contato</h2>
              <p className="body-large text-gray-700">
                Agende agora mesmo o banho e tosa do seu pet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="card-warm text-center">
                <MessageCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="heading-2 text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-700">(41) 99223-305</p>
              </a>

              <div className="card-warm text-center">
                <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="heading-2 text-gray-900 mb-2">Localização</h3>
                <p className="text-gray-700">Rua Dr. Joaquim do Amaral, 1174<br />Jd. das Américas - Curitiba</p>
              </div>

              <div className="card-warm text-center">
                <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="heading-2 text-gray-900 mb-2">Horário</h3>
                <p className="text-gray-700">Terça a Sexta: 9h às 15h<br />Sábado: 9h às 15h</p>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-gradient-to-r from-orange-100 to-purple-100 rounded-3xl p-8 text-center">
              <h3 className="heading-2 text-gray-900 mb-6">Siga Nossas Redes Sociais</h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/almeidastudiopetcarejdamericas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/almeidapets.bnhtsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  🐾
                </div>
                <span className="font-bold text-lg">Studio Almeida</span>
              </div>
              <p className="text-gray-400">
                Cuidando de pets com amor desde 2016
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#sobre" className="hover:text-orange-500 transition">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-orange-500 transition">Serviços</a></li>
                <li><a href="#galeria" className="hover:text-orange-500 transition">Galeria</a></li>
                <li><a href="#contato" className="hover:text-orange-500 transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (41) 99223-305
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Jd. das Américas - Curitiba
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Studio Almeida Pet Care. Todos os direitos reservados. 🐾</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Clock icon component
function Clock({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}
