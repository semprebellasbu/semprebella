import React, { useEffect, useState } from 'react';
import { 
  Star, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  BookOpen, 
  Users, 
  MessageCircle,
  ChevronDown,
  Sparkles,
  Timer,
  Medal,
  FileText,
  Headphones,
  Package,
  Scissors
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappLink = "https://wa.me/5581991587863?text=Olá!%20Tenho%20interesse%20no%20curso%20de%20extensão%20de%20cílios.%20Poderia%20me%20passar%20mais%20informações%3F";

  const faqData = [
    {
      question: "Preciso ter experiência prévia para fazer o curso?",
      answer: "Não! O curso é voltado especificamente para iniciantes. Começamos do zero, ensinando desde os conceitos básicos até as técnicas mais avançadas."
    },
    {
      question: "O certificado é reconhecido nacionalmente?",
      answer: "Sim! Nosso certificado tem validade nacional e você pode atuar profissionalmente em todo o território brasileiro."
    },
    {
      question: "Qual é a duração total do curso?",
      answer: "O curso tem duração de 3 semanas, com 1 aula por semana de 4 a 5 horas cada. Total de aproximadamente 15 horas de conteúdo."
    },
    {
      question: "O kit de materiais está incluso no valor?",
      answer: "Sim! O kit básico para prática está incluso no valor do curso, assim você pode começar a praticar imediatamente."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim! Aceitamos pagamento via PIX, cartão de crédito (com parcelamento) ou em espécie. Entre em contato para mais detalhes sobre as condições."
    }
  ];

  const learningTopics = [
    "Tipos de cílios e técnicas",
    "Volume brasileiro, clássico e russo",
    "Capping e mapeamento dos olhos",
    "Tipos de pinças e funções",
    "Funcionamento da cola",
    "Alergias e possíveis complicações",
    "Manutenção, remoção e cuidados pré/pós",
    "Anamnese completa",
    "Aula teórica e prática"
  ];

  const included = [
    { item: "Apostila didática (PDF)", icon: FileText },
    { item: "Kit simples para prática", icon: Package },
    { item: "Certificado nacional", icon: GraduationCap },
    { item: "Suporte após o curso", icon: Headphones }
  ];

  // Ícone de cílios usando imagem realista fornecida pelo usuário
  const EyelashIcon = ({ className = "", ...props }) => (
    <img
      src="/cilios.png"
      alt="Ícone de extensão de cílios"
      className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 ${className}`}
      {...props}
    />
  );

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Fundo premium com múltiplas camadas - responsivo */}
      <div className="fixed inset-0 z-0">
        {/* Camada base preta */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Gradiente radial central */}
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/80 via-black to-black"></div>
        
        {/* Gradiente diagonal premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black/90 to-gray-800/60"></div>
        
        {/* Overlay com textura sutil */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0l15 30-15 30L15 30z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Efeitos de luz ambiente - responsivos */}
        <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 bg-yellow-600/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-yellow-500/4 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Partículas flutuantes premium */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-[15%] w-0.5 h-0.5 bg-yellow-400/40 rounded-full animate-bounce"></div>
          <div className="absolute top-60 left-[25%] w-1 h-1 bg-yellow-400/25 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-[30%] w-1 h-1 bg-yellow-400/35 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-[30%] left-[80%] w-0.5 h-0.5 bg-yellow-400/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-[60%] left-[5%] w-1 h-1 bg-yellow-400/30 rounded-full animate-bounce delay-1500"></div>
        </div>
      </div>

      {/* Conteúdo da página */}
      <div className="relative z-10 text-white">
        {/* Hero Section - Mobile First */}
        <section id="hero" className={`relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8 sm:py-12 md:py-16 lg:py-20 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto relative z-10 max-w-7xl">
            <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              {/* Logo com destaque animado - responsivo e MAIOR */}
              <div className="relative mx-auto w-fit group">
                {/* Fundo com blur e brilho animado - SEM INTENSIFICAR */}
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-yellow-400/20 via-yellow-500/30 to-yellow-600/20 blur-2xl sm:blur-3xl opacity-60 group-hover:scale-105 transition-transform duration-700 animate-pulse"></div>

                {/* Logo responsivo - CONSIDERAVELMENTE MAIOR */}
                <img 
                  src="/LOGO ATUALIZADA.png" 
                  alt="Sempre Bella" 
                  className="relative h-80 sm:h-[28rem] md:h-[36rem] lg:h-[44rem] xl:h-[52rem] 2xl:h-[60rem] mx-auto transition-transform duration-700 ease-in-out hover:scale-110 drop-shadow-xl"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.3)) drop-shadow(0 0 30px rgba(212, 175, 55, 0.2))'
                  }}
                />
              </div>
              
              {/* Badge Sempre Bella - responsivo */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-bold">
                  Sempre Bella
                </span>
                <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
              </div>
              <div className="mb-6 sm:mb-8 md:mb-10"></div>
            </div>
            
            {/* Título Principal - Mobile First */}
            <div className="relative mb-4 sm:mb-6 md:mb-8 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                  Curso de Extensão
                </span>
                <br />
                <span className="text-white drop-shadow-lg">de Cílios</span>
                <br />
                <span className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl text-gray-300 font-normal">(Para Iniciantes)</span>
              </h1>
            </div>
            
            {/* Subtítulo - Mobile First */}
            <div className="relative mb-6 sm:mb-8 md:mb-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light px-2 sm:px-4 max-w-4xl mx-auto">
                Aprenda tudo do zero e comece a atuar com técnica e segurança no ramo da beleza.
              </p>
            </div>

            {/* Layout responsivo para imagem e conteúdo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-8 sm:mb-10 md:mb-12">
              {/* Imagem da Professora - Mobile First - SEM BORDAS */}
              <div className="relative order-1 lg:order-1">
                <div className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl animate-pulse"></div>
                  <div className="relative group">
                    <img 
                      src="/IMG1.jpeg" 
                      alt="Professora do curso" 
                      className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-2 sm:p-3 rounded-full shadow-xl border border-yellow-300/30 animate-bounce">
                      <EyelashIcon />
                    </div>
                    <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm text-white p-2 sm:p-3 rounded-xl border border-yellow-400/30 shadow-xl">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                        <span className="font-semibold text-xs sm:text-sm">Profissional Especialista</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteúdo lateral - Desktop */}
              <div className="order-2 lg:order-2 space-y-6 sm:space-y-8">
                {/* CTA Principal - Mobile First */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <a 
                    href={whatsappLink}
                    className="group relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 flex items-center justify-center gap-2 sm:gap-3 border border-yellow-300/20 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce relative z-10" />
                    <span className="relative z-10">Quero garantir minha vaga!</span>
                  </a>
                </div>
                
                {/* Badges Informativos - Mobile First */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                  <div className="group flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                    <Timer className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">3 semanas</span>
                  </div>
                  <div className="group flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                    <Medal className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">Certificado</span>
                  </div>
                  <div className="group flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">Iniciantes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divisor decorativo - responsivo */}
        <div className="flex justify-center py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
              <Sparkles className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Sobre o Curso - Mobile First */}
        <section id="about" className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-800/20 to-gray-900/30 backdrop-blur-sm transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="relative inline-block mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Sobre o Curso
                  </span>
                </h2>
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                Um programa completo e estruturado para você dominar a arte da extensão de cílios
              </p>
            </div>

            {/* Grid responsivo com imagem da professora - SEM BORDAS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-lg animate-pulse"></div>
                <img 
                  src="/IMG2.jpeg" 
                  alt="Professora em ação" 
                  className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm text-white p-2 sm:p-3 rounded-xl border border-yellow-400/30 shadow-xl">
                  <span className="flex items-center gap-1 text-xs sm:text-sm font-semibold">
                    <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    Profissional Certificada
                  </span>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-6 order-1 lg:order-2">
                <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-yellow-400/20 hover:border-yellow-400/40 backdrop-blur-sm transform hover:scale-105">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 border border-yellow-300/30 shadow-lg">
                    <Timer className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">3 Dias de Curso</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    1 aula por semana, de 4 a 5 horas cada sessão. Cronograma flexível para seu aprendizado completo.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-yellow-400/20 hover:border-yellow-400/40 backdrop-blur-sm transform hover:scale-105">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 border border-yellow-300/30 shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Teoria + Prática</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    1ª sessão teórica completa, seguida de 2 sessões práticas intensivas com supervisão especializada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divisor decorativo - responsivo */}
        <div className="flex justify-center py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
              <Sparkles className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Você vai aprender - Mobile First */}
        <section id="learning" className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-900/20 to-gray-800/30 backdrop-blur-sm transition-all duration-1000 ${isVisible.learning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="relative inline-block mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Você vai aprender
                  </span>
                </h2>
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                Conteúdo completo e atualizado para você se tornar uma profissional qualificada
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {learningTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/30 to-gray-900/50 p-4 sm:p-5 md:p-6 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-2xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-yellow-300/30 shadow-lg">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                    <p className="text-gray-200 font-semibold text-sm sm:text-base">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divisor decorativo - responsivo */}
        <div className="flex justify-center py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
              <Sparkles className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* O que está incluso - Mobile First */}
        <section id="included" className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-800/20 to-gray-900/30 backdrop-blur-sm transition-all duration-1000 ${isVisible.included ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="relative inline-block mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    O que está incluso
                  </span>
                </h2>
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {included.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-4 sm:p-5 md:p-6 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-yellow-400/20 hover:border-yellow-400/40 backdrop-blur-sm transform hover:scale-105"
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 border border-yellow-300/30 shadow-lg">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-gray-200">{item.item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divisor decorativo - responsivo */}
        <div className="flex justify-center py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
              <Sparkles className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Valor e Pagamento - Mobile First */}
        <section id="pricing" className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-900/20 to-gray-800/30 backdrop-blur-sm transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-yellow-400/30 backdrop-blur-sm">
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-yellow-400/50 animate-pulse"></div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-yellow-400/50 animate-pulse delay-500"></div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-yellow-400/50 animate-pulse delay-1000"></div>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-yellow-400/50 animate-pulse delay-1500"></div>
                
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <div className="relative inline-block mb-4 sm:mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                      <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                        Investimento
                      </span>
                    </h2>
                    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white mb-3 sm:mb-4 relative">
                    R$ 1.000<span className="text-lg sm:text-xl md:text-2xl text-gray-400">,00</span>
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4">
                      <Medal className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-bounce" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300">
                    Valor completo do curso com tudo incluso
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
                  <div className="group text-center p-3 sm:p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105">
                    <h4 className="font-bold text-yellow-400 mb-1 sm:mb-2 flex items-center justify-center gap-1 text-sm sm:text-base">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-spin" />
                      PIX
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm">À vista</p>
                  </div>
                  <div className="group text-center p-3 sm:p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105">
                    <h4 className="font-bold text-yellow-400 mb-1 sm:mb-2 flex items-center justify-center gap-1 text-sm sm:text-base">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-spin" />
                      Cartão
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Parcelado</p>
                  </div>
                  <div className="group text-center p-3 sm:p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105">
                    <h4 className="font-bold text-yellow-400 mb-1 sm:mb-2 flex items-center justify-center gap-1 text-sm sm:text-base">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-spin" />
                      Espécie
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Presencial</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href={whatsappLink}
                    className="group relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 inline-flex items-center gap-2 sm:gap-3 border border-yellow-300/30 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce relative z-10" />
                    <span className="relative z-10">Garantir minha vaga!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divisor decorativo - responsivo */}
        <div className="flex justify-center py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
              <Sparkles className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* FAQ - Mobile First */}
        <section id="faq" className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-800/20 to-gray-900/30 backdrop-blur-sm transition-all duration-1000 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="relative inline-block mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Perguntas Frequentes
                  </span>
                </h2>
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                Tire suas dúvidas sobre o curso
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl mb-3 sm:mb-4 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-2xl"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-4 sm:p-5 md:p-6 text-left flex justify-between items-center hover:bg-gray-800/20 rounded-xl transition-colors duration-200 group"
                  >
                    <h3 className="font-bold text-base sm:text-lg text-white pr-3 sm:pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 transition-transform duration-300 flex-shrink-0 group-hover:scale-110 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-yellow-400/20 to-transparent mb-3 sm:mb-4"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divisor decorativo - responsivo */}
        <div className="flex justify-center py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
              <Sparkles className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* CTA Final - Mobile First */}
        <section id="final-cta" className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-900/30 to-gray-800/40 backdrop-blur-sm transition-all duration-1000 ${isVisible['final-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 border-yellow-400/30 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 border-yellow-400/30 animate-pulse delay-1000"></div>
              
              <div className="relative mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Pronta para transformar
                  </span>
                  <br />
                  <span className="text-white">sua carreira?</span>
                </h2>
                <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
                Não perca a oportunidade de aprender uma profissão que está em alta no mercado. 
                <br className="hidden sm:block" />Comece hoje mesmo sua jornada no mundo da beleza!
              </p>
              
              <div className="flex flex-col items-center gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
                <div className="relative">
                  <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-xl animate-pulse"></div>
                  <img 
                    src="/IMG2.jpeg" 
                    alt="Resultado do curso" 
                    className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-1 sm:p-2 rounded-full shadow-xl border border-yellow-300/30">
                    <EyelashIcon />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg sm:text-xl text-gray-300 mb-2 sm:mb-3 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                    <strong className="text-yellow-400">Vagas limitadas!</strong>
                  </p>
                  <p className="text-gray-400 text-base sm:text-lg">
                    Entre em contato agora e garanta sua vaga
                  </p>
                </div>
              </div>
              
              <a 
                href={whatsappLink}
                className="group relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 inline-flex items-center gap-2 sm:gap-3 border border-yellow-300/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Falar com a especialista!</span>
              </a>
              
              <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 flex items-center justify-center gap-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-pulse" />
                Clique no botão acima e será direcionado para o WhatsApp
              </p>
            </div>
          </div>
        </section>

        {/* Footer - Mobile First */}
        <footer className="bg-gradient-to-br from-black/90 to-gray-900/90 py-8 sm:py-10 md:py-12 border-t border-yellow-400/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <div className="relative inline-block mb-4 sm:mb-6">
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-lg animate-pulse"></div>
              <img 
                src="/LOGO ATUALIZADA.png" 
                alt="Sempre Bella" 
                className="relative h-28 sm:h-32 md:h-36 mx-auto rounded-lg border border-yellow-400/20 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                <div className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
              </div>
            </div>
            <p className="text-gray-400 mb-2 sm:mb-3 text-sm sm:text-base">
              © 2025 Sempre Bella. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Transformando vidas através da beleza e educação profissional.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;