
import React from 'react';
import { EXPERT_DATA, IMAGES, TRUST_CARDS, STEPS } from './constants';
import WhatsAppButton from './components/WhatsAppButton';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-green-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO (Primeira dobra) */}
      <section className="relative min-h-screen flex flex-col justify-end lg:justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-top lg:object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent lg:bg-gradient-to-r lg:from-zinc-950 lg:via-zinc-950/20 lg:to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pb-16 lg:pb-0">
          <div className="max-w-2xl">
            <img 
              src={IMAGES.logo} 
              alt="Logo Junior Leal" 
              className="h-16 w-auto mb-8 animate-pulse" 
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Eu sou <span className="gradient-text">{EXPERT_DATA.name}</span>, <br />
              Personal Trainer em Jundiaí.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-lg leading-relaxed font-light">
              Não é apenas sobre treinar, é sobre <span className="text-white font-semibold">estratégia</span>. 
              {EXPERT_DATA.bio}
            </p>
            <WhatsAppButton className="max-w-md" />
          </div>
        </div>
      </section>

      {/* 2. BLOCO – Quem sou eu */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-600/10 rounded-3xl blur-2xl"></div>
                <img 
                  src={IMAGES.expertAlt} 
                  alt="Bastidores" 
                  className="relative w-full rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Treino com Autoridade</h2>
              <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
                <p>
                  Olá, eu sou o Junior. Minha missão é transformar vidas através de um condicionamento físico inteligente.
                </p>
                <p>
                  Esqueça as fórmulas prontas de academia. Eu trabalho com métodos validados que priorizam a biomecânica correta e a intensidade necessária para o seu objetivo específico.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Especialista em hipertrofia e emagrecimento",
                    "Acompanhamento focado em cada detalhe",
                    "Metodologia sem firulas, focada em resultados reais"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </span>
                      <span className="font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOCO – Resultados Reais */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Resultados Reais</h2>
            <p className="text-zinc-400 text-lg">A estratégia aplicada em cada transformação.</p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* 4. BLOCO – Por que confiar em mim? */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que confiar em mim?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_CARDS.map((card, i) => (
              <div key={i} className="p-8 bg-zinc-950/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-green-950/20 border-y border-green-900/30">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Sua transformação começa com um papo honesto.</h2>
          <p className="text-zinc-300 mb-10 text-lg">
            Sem burocracia, sem letras miúdas. A primeira consulta é pra gente se conhecer e alinhar sua estratégia.
          </p>
          <WhatsAppButton label="Garantir minha consulta gratuita agora" className="max-w-md mx-auto" />
        </div>
      </section>

      {/* 6. BLOCO – Como funciona */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Em 3 Passos Simples</h2>
            <p className="text-zinc-400">O caminho para sua primeira consulta gratuita.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-5xl mx-auto">
            {STEPS.map((step, i) => (
              <div key={i} className="flex-1 relative">
                <span className="text-6xl font-black text-zinc-800 absolute -top-10 -left-4 z-0 opacity-40">{step.step}</span>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BLOCO – Mais provas (Bastidores) */}
      <section className="py-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Atendimento Personalizado</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Meu compromisso é com o seu progresso. Estarei presente em cada etapa, corrigindo movimentos e ajustando a carga de acordo com sua evolução.
              </p>
              <div className="inline-flex items-center space-x-2 text-zinc-300 px-4 py-2 bg-zinc-900 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Vagas limitadas para este mês</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img src={IMAGES.expertAlt} className="rounded-2xl w-full h-48 object-cover" alt="Bastidores 1" />
                <img src={IMAGES.hero} className="rounded-2xl w-full h-48 object-cover" alt="Bastidores 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Pronto para evoluir <br />
            <span className="gradient-text">de verdade?</span>
          </h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Não deixe sua meta para o próximo mês. Comece agora com uma estratégia profissional e personalizada.
          </p>
          <div className="max-w-xl mx-auto p-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-[24px]">
             <div className="bg-zinc-950 p-8 rounded-[22px]">
               <h3 className="text-xl font-bold text-white mb-6">Sua primeira consulta é GRÁTIS</h3>
               <WhatsAppButton label="AGENDAR MINHA VAGA AGORA" />
             </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-16 bg-zinc-950 border-t border-zinc-900 text-center">
        <div className="container mx-auto px-6">
          <img src={IMAGES.logo} alt="Logo" className="h-12 w-auto mx-auto mb-8 opacity-60 grayscale" />
          <h4 className="text-xl font-bold mb-2">{EXPERT_DATA.name}</h4>
          <p className="text-zinc-500 mb-8">{EXPERT_DATA.role} | {EXPERT_DATA.location}</p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href={EXPERT_DATA.instagramLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 hover:border-green-600 transition-all duration-300"
            >
              <svg className="w-6 h-6 fill-current text-zinc-400 group-hover:text-green-500" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.555-.788.306-1.457.715-2.122 1.38-.665.665-1.074 1.334-1.38 2.122-.297.763-.498 1.634-.555 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.555 2.911.306.788.715 1.457 1.38 2.122.665.665 1.334 1.074 2.122 1.38.763.297 1.634.498 2.911.555 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.555.788-.306 1.457-.715 2.122-1.38.665-.665 1.074-1.334 1.38-2.122.297-.763.498-1.634.555-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.555-2.911-.306-.788-.715-1.457-1.38-2.122-.665-.665-1.074-1.334-1.38-2.122-.297-.763-.498-1.634-.555-2.911-.058-1.28-.072-1.688-.072-4.947s.014-3.667.072-4.947c.057-1.277.258-2.148.555-2.911zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>

          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Bottom Sticky CTA (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <a
          href={EXPERT_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-4 bg-green-600 text-white font-bold rounded-2xl shadow-2xl animate-bounce-short"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          CONSULTA GRÁTIS
        </a>
      </div>
    </div>
  );
};

export default App;
