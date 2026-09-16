export type VideoProvider = 'youtube' | 'file';

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IdentityConfig {
  siteName: string;
  legalName: string;
  professionalName: string;
  professionalRole: string;
  professionalDescription: string;
  professionalImage: string;
  logo?: ImageAsset;
  registration: string;
}

export interface ContactConfig {
  whatsappUrl: string;
  primaryCtaLabel: string;
}

export interface HeaderConfig {
  brandHref: string;
  brandLabel: string;
  primaryNavigationLabel: string;
  mobileNavigationLabel: string;
  menuOpenLabel: string;
  links: NavigationLink[];
}

export interface HeroConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  trust: {
    text: string;
    avatars: string[];
  };
  title: Array<{ text: string; highlighted?: boolean }>;
  description: string;
  primaryCtaLabel: string;
  secondaryCta: NavigationLink;
  scrollTarget: string;
  scrollLabel: string;
}

export interface StatsConfig {
  id: string;
  label: string;
  items: Array<{ value: string; label: string }>;
}

export interface AboutConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  cardName: string;
  cardDetail: string;
  eyebrow: string;
  credentials: Array<{ icon: string; text: string }>;
}

export interface PracticeSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  items: Array<{ icon: string; title: string; description: string }>;
}

export interface UrgencySectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  closingText: string;
  ctaLabel: string;
  listLabel: string;
  items: Array<{ title: string; description: string }>;
}

export interface ProcessSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  stepsLabel: string;
  stepLabel: string;
  items: Array<{ title: string; description: string; detail: string }>;
}

export interface DifferentialsSectionConfig {
  id: string;
  titlePrefix: string;
  highlightedTitle: string;
  titleSuffix: string;
  tabsLabel: string;
  ctaLabel: string;
  items: Array<{ icon: string; title: string; description: string }>;
}

export type ReviewsSource = 'google' | 'manual';

export interface ReviewItem {
  quote: string;
  name: string;
  details: string;
  rating: number | null;
  avatar: string;
  avatarPosition: string;
  publishedAt: string | null;
  publishedAtLabel: string;
  googleMapsUrl: string;
  authorProfileUrl: string;
  source: 'google' | 'manual';
}

export type ManualReviewItem = Pick<
  ReviewItem,
  'quote' | 'name' | 'details' | 'rating' | 'avatar' | 'avatarPosition'
> & Partial<Pick<ReviewItem, 'publishedAt' | 'publishedAtLabel' | 'googleMapsUrl' | 'authorProfileUrl'>>;

export interface ReviewsSectionConfig {
  enabled: boolean;
  id: string;
  title: string;
  highlightedTitle: string;
  platformLogo: ImageAsset;
  source: ReviewsSource;
  maxRating: number;
  ratingUnavailableLabel: string;
  orderingNotice: string;
  google: {
    placeId: string;
    limit: number;
    reviewsUrl: string;
  };
  fallbacks: {
    quote: string;
    name: string;
    details: string;
    avatar: string;
    avatarPosition: string;
    publishedAtLabel: string;
  };
  manualItems: ManualReviewItem[];
}

export interface FaqSectionConfig {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  ctaLabel: string;
  items: FaqItem[];
}

export interface FooterConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  links: NavigationLink[];
  copyrightSuffix: string;
  backToTopLabel: string;
  backToTopHref: string;
  whatsapp: {
    regionLabel: string;
    closeLabel: string;
    image: ImageAsset;
    senderName: string;
    message: string;
    actionLabel: string;
    buttonLabel: string;
  };
}

export interface VideoSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  provider: VideoProvider;
  videoId: string;
  videoUrl: string;
  poster: string;
  posterAlt: string;
  playLabel: string;
  caption: string;
}

export interface LocationSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  address: string;
  mapQuery: string;
  mapTitle: string;
  directionsLabel: string;
}

export interface AiDiscoveryConfig {
  enabled: boolean;
  llmsPath: string;
  markdownPath: string;
  summary: string;
  usageNote: string;
}

export interface SeoConfig {
  siteUrl: string;
  locale: string;
  language: string;
  homePageTitle: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultImage: string;
  defaultImageAlt: string;
  defaultImageWidth: number;
  defaultImageHeight: number;
  themeColor: string;
  favicon: string;
  keywords: string[];
  areaServed: string;
  knowsAbout: string[];
  sitemap: Array<{
    path: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
  }>;
}

export interface DeploymentConfig {
  projectName: string;
  subdomain: string;
  baseDomain: string;
  cnameTarget: string;
}

export interface SiteConfig {
  identity: IdentityConfig;
  contact: ContactConfig;
  header: HeaderConfig;
  hero: HeroConfig;
  stats: StatsConfig;
  about: AboutConfig;
  practiceSection: PracticeSectionConfig;
  urgencySection: UrgencySectionConfig;
  differentialsSection: DifferentialsSectionConfig;
  processSection: ProcessSectionConfig;
  reviewsSection: ReviewsSectionConfig;
  faqSection: FaqSectionConfig;
  footer: FooterConfig;
  seo: SeoConfig;
  videoSection: VideoSectionConfig;
  locationSection: LocationSectionConfig;
  aiDiscovery: AiDiscoveryConfig;
  deployment: DeploymentConfig;
}

export const siteConfig = {
  identity: {
    siteName: 'Carla Teles Advocacia',
    legalName: 'Carla Teles Advocacia Previdenciária e Trabalhista',
    professionalName: 'Carla Teles',
    professionalRole: 'Advogada Previdenciarista e Trabalhista',
    professionalDescription: 'Carla Teles atua em Direito Previdenciário e Trabalhista, com atenção às necessidades de segurados do INSS e trabalhadores. O escritório orienta sobre aposentadorias, benefícios por incapacidade, pensão por morte, BPC/LOAS e questões decorrentes das relações de trabalho. Atendimento presencial na Vila Mazzei, região do Tucuruvi, em São Paulo, e online para todo o Brasil, com análise individual de cada situação.',
    professionalImage: '/images/carla-teles-560.webp',
    logo: { src: '/images/carla-teles-logo.svg', width: 460, height: 68, alt: 'Carla Teles Advocacia' },
    registration: 'OAB/SP 404.353',
  },
  contact: {
    whatsappUrl: 'https://wa.me/5511988134645',
    primaryCtaLabel: 'Falar com a advogada',
  },
  header: {
    brandHref: '#inicio',
    brandLabel: 'Carla Teles Advocacia — início',
    primaryNavigationLabel: 'Navegação principal',
    mobileNavigationLabel: 'Navegação mobile',
    menuOpenLabel: 'Abrir menu',
    links: [
      { href: '#sobre', label: 'Sobre a advogada' },
      { href: '#especialidades', label: 'Áreas de atuação' },
      { href: '#diferenciais', label: 'Atendimento' },
      { href: '#faq', label: 'Dúvidas' },
    ],
  },
  hero: {
    id: 'inicio',
    image: {
      src: '/images/carla-teles-hero-1672.webp', width: 1672, height: 942,
      alt: 'Carla Teles, advogada previdenciarista e trabalhista em São Paulo',
      srcset: [
        { src: '/images/carla-teles-hero-960.webp', width: 960 },
        { src: '/images/carla-teles-hero-1672.webp', width: 1672 },
      ],
      sizes: '100vw',
    },
    trust: {
      text: '5,0 no Google · 54 avaliações¹',
      avatars: [],
    },
    title: [
      { text: 'Cuidado com seus ' },
      { text: 'Direitos Previdenciários', highlighted: true },
      { text: ' e ' },
      { text: 'Trabalhistas', highlighted: true },
    ],
    description: 'Orientação para aposentadorias, benefícios do INSS e questões trabalhistas. Atendimento presencial no Tucuruvi, em São Paulo, e online para todo o Brasil.',
    primaryCtaLabel: 'Conversar pelo WhatsApp',
    secondaryCta: { href: '#sobre', label: 'Conheça Carla Teles' },
    scrollTarget: '#numeros',
    scrollLabel: 'Conhecer o escritório',
  },
  stats: {
    id: 'numeros',
    label: 'Informações do escritório. ¹ Nota e quantidade de avaliações conforme levantamento fornecido em 16/09/2026.',
    items: [
      { value: '5,0', label: 'nota no Google¹' },
      { value: '54', label: 'avaliações no Google¹' },
      { value: 'São Paulo', label: 'atendimento presencial' },
      { value: 'Brasil', label: 'atendimento online' },
    ],
  },
  about: {
    id: 'sobre',
    image: {
      src: '/images/carla-teles-560.webp', width: 560, height: 700,
      alt: 'Carla Teles, OAB/SP 404.353, advogada responsável pelo escritório',
      srcset: [
        { src: '/images/carla-teles-560.webp', width: 560 },
        { src: '/images/carla-teles-1080.webp', width: 1080 },
      ],
      sizes: '(max-width: 780px) calc(100vw - 34px), 392px',
    },
    cardName: 'Carla Teles',
    cardDetail: 'Advogada | OAB/SP 404.353',
    eyebrow: 'Conheça Carla Teles',
    credentials: [
      { icon: 'lucide:circle-check', text: 'Inscrição profissional: OAB/SP 404.353' },
      { icon: 'lucide:circle-check', text: 'Atuação em Direito Previdenciário e Trabalhista' },
      { icon: 'lucide:circle-check', text: 'Atendimento presencial em São Paulo e online para todo o Brasil' },
    ],
  },
  practiceSection: {
    id: 'especialidades',
    title: 'Orientação para proteger seus direitos',
    highlightedTitle: 'atenção',
    description: 'Atuação em benefícios do INSS e relações de trabalho. A orientação considera seus documentos, sua trajetória e as particularidades do caso.',
    items: [
      { icon: 'lucide:award', title: 'Aposentadorias e planejamento', description: 'Análise do histórico de contribuições e das possibilidades de aposentadoria, incluindo períodos de atividade especial.' },
      { icon: 'lucide:heart-pulse', title: 'Benefícios por incapacidade', description: 'Orientação sobre auxílio por incapacidade temporária e aposentadoria por incapacidade permanente, inclusive em pedidos negados ou cessados.' },
      { icon: 'lucide:calculator', title: 'Revisões de benefícios do INSS', description: 'Análise de cálculos, contribuições e períodos reconhecidos para avaliar se existe fundamento para uma revisão do benefício.' },
      { icon: 'lucide:users', title: 'BPC/LOAS e pensão por morte', description: 'Orientação sobre benefício assistencial e proteção aos dependentes, com avaliação dos requisitos e da documentação de cada pedido.' },
      { icon: 'lucide:briefcase-business', title: 'Direito Trabalhista e acidentes', description: 'Análise de questões relativas à rescisão contratual, acidentes de trabalho, doenças ocupacionais e possíveis indenizações.' },
    ],
  },
  urgencySection: {
    id: 'quando-buscar-ajuda',
    title: 'Quando buscar',
    highlightedTitle: 'orientação jurídica?',
    description: 'Uma negativa do INSS, dúvidas sobre a aposentadoria ou um problema no trabalho merecem atenção. Compreender a situação ajuda a organizar os próximos passos.',
    closingText: 'Se você vive uma dessas situações, entre em contato para apresentar seu caso e saber quais documentos precisam ser analisados.',
    ctaLabel: 'Buscar orientação',
    listLabel: 'Situações em que buscar orientação previdenciária ou trabalhista',
    items: [
      { title: 'Seu benefício foi negado ou cessado', description: 'A decisão do INSS e os documentos do pedido ajudam a compreender o motivo e as medidas que podem ser avaliadas.' },
      { title: 'Você quer planejar a aposentadoria', description: 'Seu histórico de contribuições e de trabalho permite avaliar as possibilidades e identificar informações que precisam ser corrigidas.' },
      { title: 'Uma incapacidade dificulta seu trabalho', description: 'Documentos médicos e previdenciários são importantes para analisar a situação e os benefícios que podem ser cabíveis.' },
      { title: 'Houve um acidente ou doença ocupacional', description: 'Registros do ocorrido, documentos médicos e informações do vínculo de emprego ajudam na análise previdenciária e trabalhista.' },
      { title: 'Você tem dúvidas sobre a rescisão', description: 'Carteira de trabalho, termo de rescisão e comprovantes de pagamento ajudam a esclarecer as questões do encerramento do contrato.' },
    ],
  },
  differentialsSection: {
    id: 'diferenciais',
    titlePrefix: 'Conheça o atendimento de',
    highlightedTitle: 'Carla Teles',
    titleSuffix: 'Advocacia',
    tabsLabel: 'Características do atendimento de Carla Teles Advocacia',
    ctaLabel: 'Conversar sobre meu caso',
    items: [
      { icon: 'lucide:messages-square', title: 'Atendimento presencial e online', description: 'Recebemos clientes na Vila Mazzei, região do Tucuruvi, em São Paulo. O atendimento online permite apresentar seu caso de qualquer região do Brasil.' },
      { icon: 'lucide:scale', title: 'Foco previdenciário e trabalhista', description: 'Atuação dedicada às necessidades de segurados do INSS e trabalhadores, com atenção à relação entre benefícios previdenciários e direitos no trabalho.' },
      { icon: 'lucide:user-round-check', title: 'Escuta e análise individual', description: 'Cada trajetória de trabalho é diferente. A análise parte do seu relato e dos documentos, respeitando o contexto e as necessidades apresentados.' },
      { icon: 'lucide:lock-keyhole', title: 'Sigilo e responsabilidade profissional', description: 'Informações e documentos são tratados com o cuidado e o sigilo próprios da advocacia em todas as etapas do atendimento.' },
      { icon: 'lucide:book-open-check', title: 'Atenção às atividades especiais', description: 'Análise da documentação de exposição a agentes nocivos e dos períodos de trabalho relevantes para avaliar possibilidades previdenciárias.' },
      { icon: 'lucide:badge-check', title: 'Informações claras para decidir', description: 'Orientação sobre documentos, alternativas e próximos passos, com linguagem acessível e sem promessas de resultado.' },
    ],
  },
  processSection: {
    id: 'como-funciona',
    title: 'Um atendimento que traz',
    highlightedTitle: 'clareza aos próximos passos.',
    description: 'Da primeira conversa à condução do caso, o atendimento é organizado conforme suas necessidades e a documentação disponível.',
    stepsLabel: 'Etapas do atendimento previdenciário e trabalhista',
    stepLabel: 'Etapa',
    items: [
      { title: 'Primeira conversa', description: 'Você apresenta sua dúvida sobre o INSS ou a relação de trabalho pelo WhatsApp e informa se existe algum prazo em andamento.', detail: 'O contato inicial ajuda a organizar as informações e a definir a forma de atendimento.' },
      { title: 'Análise dos documentos', description: 'São avaliados os documentos previdenciários, médicos ou trabalhistas pertinentes à situação apresentada.', detail: 'A advogada pode solicitar informações complementares antes de indicar as alternativas.' },
      { title: 'Orientação sobre as possibilidades', description: 'Você recebe explicações sobre as medidas que podem ser consideradas e os próximos passos do atendimento.', detail: 'A contratação e os honorários são esclarecidos conforme o serviço necessário.' },
      { title: 'Condução e acompanhamento', description: 'Após a contratação, o trabalho segue conforme a estratégia definida para o caso, com comunicação sobre os acontecimentos relevantes.', detail: 'A análise pode ser atualizada à medida que surgem novos documentos ou decisões.' },
    ],
  },
  reviewsSection: {
    // Avaliações completas cadastradas manualmente. Mary e Carla: textos fornecidos pelo cliente.
    // Cláudio: avaliação do Google reproduzida em
    // https://viatapida.com/advogados-previdenciarios/sao-paulo/carla-teles-advogada-especialista-em-beneficios-do-inss-e-causas-trabalhistas-atendimento-em-todo-brasil/
    // Fotos originais dos perfis baixadas do googleusercontent.com.
    enabled: true,
    id: 'avaliacoes',
    title: 'O que nossos clientes',
    highlightedTitle: 'dizem',
    platformLogo: { src: '/images/google-icon.png', width: 41, height: 41, alt: 'Google' },
    source: 'manual',
    maxRating: 5,
    ratingUnavailableLabel: 'Avaliação não disponível',
    orderingNotice: 'Avaliações selecionadas por relevância pelo Google.',
    google: {
      placeId: 'ChIJ739TtEv3zpQRuzbr_7wxWkY',
      limit: 3,
      reviewsUrl: 'https://maps.google.com/?cid=5069419018376132283',
    },
    fallbacks: {
      quote: 'Comentário não disponível', name: 'Usuário do Google', details: 'Não disponível',
      avatar: '/images/google-icon.png', avatarPosition: 'center', publishedAtLabel: 'Data não disponível',
    },
    manualItems: [
      {
        quote: 'Advogada experiente, competente, honesta e transparente! Honorários justos e acessíveis, muito educada e prestativa . Recomendo para as causas específicas....',
        name: 'Cláudio De oliveira santos',
        details: 'Avaliação no Google Maps',
        rating: 5,
        avatar: '/images/reviewer-claudio.webp',
        avatarPosition: 'center',
        googleMapsUrl: 'https://maps.app.goo.gl/ANnySc8E9jVp6zoz6',
      },
      {
        quote: 'Eu indico sem medo esses advogados maravilhosos e atenciosos...tive problema com minha aposentadoria e a Dra Carla se empenhou em me ajudar no meu processo com toda uma dedicação....teve momentos que tive três negativas achei que não fosse conseguir....mas graças a Deus em primeiro lugar e a Dra. Carla e Dr Gleidson consegui minha aposentadoria .... Pode contratar esses advogados ... são excelentes profissionais',
        name: 'Mary e Nego',
        details: 'Avaliação no Google Maps',
        rating: 5,
        avatar: '/images/reviewer-mary-e-nego.webp',
        avatarPosition: 'center',
        googleMapsUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURfNUllNm5RRRAB!2m1!1s0x0:0x465a31bcffeb36bb!3m1!1s2@1:CIHM0ogKEICAgID_5Ie6nQE%7C%7C?hl=pt-BR',
        authorProfileUrl: 'https://www.google.com/maps/contrib/117194384745189355557?hl=pt-BR',
      },
      {
        quote: 'Eu coloquei um processo pelo escritório pois conheço a Dr Carla e consegui resolver minha filha está com o processo na mão dela e estamos bem confiante pois não só depende dele e sim do judiciário mas o que ela pode fazer tirar sua dúvida não tenho de que reclamar!',
        name: 'carla marli',
        details: 'Avaliação no Google Maps',
        rating: 5,
        avatar: '/images/reviewer-carla-marli.webp',
        avatarPosition: 'center',
        googleMapsUrl: 'https://maps.app.goo.gl/ANnySc8E9jVp6zoz6',
      },
    ],
  },
  faqSection: {
    id: 'faq',
    eyebrow: 'Dúvidas frequentes',
    title: 'Informação clara desde o',
    highlightedTitle: 'primeiro contato',
    description: 'Respostas iniciais sobre o atendimento e a organização dos documentos. Cada situação depende de análise individual.',
    ctaLabel: 'Falar sobre minha dúvida',
    items: [
      { question: 'Como funciona o atendimento online?', answer: 'O primeiro contato é feito pelo WhatsApp. A partir do seu relato, são combinados a forma de atendimento e o envio dos documentos necessários à análise. O escritório atende online clientes de todo o Brasil.' },
      { question: 'Quais documentos devo separar para analisar minha aposentadoria?', answer: 'Em geral, documento de identificação, CNIS e carteira de trabalho ajudam na análise inicial. Comprovantes de contribuições e documentos de atividades especiais também podem ser necessários. A lista é ajustada ao seu histórico.' },
      { question: 'Meu benefício do INSS foi negado. Posso buscar orientação?', answer: 'Sim. Separe a decisão do INSS, os documentos apresentados e eventuais comunicações recebidas. A análise permite compreender a negativa e avaliar as alternativas e os prazos aplicáveis ao seu caso, sem garantia de concessão.' },
      { question: 'O escritório atende casos de BPC/LOAS?', answer: 'Sim. O escritório analisa pedidos de BPC/LOAS, considerando a situação pessoal, familiar e os documentos disponíveis. Os requisitos aplicáveis devem ser avaliados individualmente antes de qualquer orientação sobre o pedido.' },
      { question: 'Sofri um acidente de trabalho. Quais documentos ajudam na análise?', answer: 'Documentos médicos, registros do acidente, CAT quando disponível, carteira de trabalho e comunicações do empregador ou do INSS podem ajudar. As possibilidades previdenciárias e trabalhistas dependem das circunstâncias e da documentação.' },
      { question: 'Onde fica o escritório e como agendar?', answer: 'O escritório fica na Rua Claudino Inácio Joaquim, 34, Vila Mazzei, região do Tucuruvi, São Paulo/SP, CEP 02308-130. Agende previamente pelo WhatsApp (11) 98813-4645 ou pelo telefone (11) 2305-7889. E-mail: carlateles.adv@hotmail.com.' },
    ],
  },
  footer: {
    eyebrow: 'Atendimento em São Paulo e online',
    title: 'Seus direitos merecem',
    highlightedTitle: 'atenção.',
    description: 'Carla Teles — OAB/SP 404.353. Advocacia Previdenciária e Trabalhista. WhatsApp: (11) 98813-4645 · Telefone: (11) 2305-7889 · E-mail: carlateles.adv@hotmail.com. ¹ Nota 5,0 e 54 avaliações no Google conforme levantamento fornecido em 16/09/2026.',
    links: [
      { href: '#sobre', label: 'Sobre a advogada' },
      { href: '#especialidades', label: 'Áreas de atuação' },
      { href: '#diferenciais', label: 'Atendimento' },
      { href: '#faq', label: 'Dúvidas' },
      { href: 'https://www.instagram.com/carlateless/', label: 'Instagram' },
      { href: 'https://maps.google.com/?cid=5069419018376132283', label: 'Avaliações no Google' },
      { href: 'https://viatapida.com/advogados-previdenciarios/sao-paulo/carla-teles-advogada-especialista-em-beneficios-do-inss-e-causas-trabalhistas-atendimento-em-todo-brasil/', label: 'Fonte dos depoimentos' },
    ],
    copyrightSuffix: 'Todos os direitos reservados. Conteúdo informativo; não substitui orientação jurídica individual.',
    backToTopLabel: 'Voltar ao topo',
    backToTopHref: '#inicio',
    whatsapp: {
      regionLabel: 'Atendimento pelo WhatsApp', closeLabel: 'Fechar convite',
      image: { src: '/images/carla-teles-avatar.webp', width: 48, height: 48, alt: 'Carla Teles' },
      senderName: 'Carla Teles',
      message: 'Olá! Tem dúvidas sobre o INSS ou seus direitos no trabalho? Entre em contato pelo WhatsApp.',
      actionLabel: 'Iniciar conversa', buttonLabel: 'Abrir atendimento pelo WhatsApp',
    },
  },
  seo: {
    siteUrl: 'https://carlatelesadvocacia.feito.website',
    locale: 'pt_BR', language: 'pt-BR',
    homePageTitle: 'Advogada Previdenciária e Trabalhista em SP',
    defaultTitle: 'Advogada Previdenciária e Trabalhista em SP | Carla Teles',
    titleTemplate: '%s | Carla Teles',
    defaultDescription: 'Carla Teles: aposentadorias, benefícios do INSS e Direito Trabalhista. Atendimento presencial no Tucuruvi, São Paulo, e online para todo o Brasil.',
    defaultImage: '/images/carla-teles-og.webp',
    defaultImageAlt: 'Carla Teles Advocacia — Direito Previdenciário e Trabalhista, com foto da advogada',
    defaultImageWidth: 1200, defaultImageHeight: 630,
    themeColor: '#1c1917', favicon: '/images/carla-teles-favicon.svg',
    keywords: ['advogada previdenciária São Paulo', 'advogada INSS Tucuruvi', 'Carla Teles Advocacia', 'aposentadoria especial', 'benefícios por incapacidade INSS', 'advogada trabalhista Vila Mazzei', 'BPC LOAS São Paulo', 'advogada previdenciária online'],
    areaServed: 'São Paulo, SP, e todo o Brasil por atendimento online',
    knowsAbout: ['Direito Previdenciário', 'Benefícios do INSS', 'Planejamento Previdenciário', 'Aposentadorias', 'Aposentadoria Especial', 'Benefícios por Incapacidade', 'Revisões de Benefícios', 'BPC LOAS', 'Pensão por Morte', 'Direito Trabalhista', 'Acidentes de Trabalho'],
    sitemap: [{ path: '/', changeFrequency: 'monthly', priority: 1 }],
  },
  videoSection: {
    enabled: false,
    eyebrow: 'Apresentação institucional', title: 'Conheça Carla Teles', highlightedTitle: 'de perto.',
    description: 'Apresentação do escritório de advocacia previdenciária e trabalhista.',
    provider: 'youtube', videoId: '', videoUrl: '', poster: '',
    posterAlt: '', playLabel: 'Assistir apresentação', caption: 'Vídeo institucional',
  },
  locationSection: {
    enabled: true,
    eyebrow: 'Localização', title: 'Atendimento presencial no', highlightedTitle: 'Tucuruvi.',
    description: 'Escritório na Vila Mazzei, Zona Norte de São Paulo. Para atendimento presencial, agende previamente pelo WhatsApp. Também atendemos online em todo o Brasil.',
    address: 'Rua Claudino Inácio Joaquim, 34 — Vila Mazzei (Tucuruvi), São Paulo/SP — CEP 02308-130',
    mapQuery: 'Rua Claudino Inácio Joaquim 34 Vila Mazzei São Paulo SP 02308-130',
    mapTitle: 'Localização de Carla Teles Advocacia na Vila Mazzei, Tucuruvi, São Paulo',
    directionsLabel: 'Abrir no Google Maps',
  },
  aiDiscovery: {
    enabled: true, llmsPath: '/llms.txt', markdownPath: '/index.md',
    summary: 'Carla Teles Advocacia Previdenciária e Trabalhista, OAB/SP 404.353. Atuação em aposentadorias, benefícios do INSS, BPC/LOAS, pensão por morte e questões trabalhistas. Endereço: Rua Claudino Inácio Joaquim, 34, Vila Mazzei (Tucuruvi), São Paulo/SP, CEP 02308-130. Atendimento presencial com agendamento e online para todo o Brasil. WhatsApp: +55 11 98813-4645. Telefone: +55 11 2305-7889. E-mail: carlateles.adv@hotmail.com. Instagram: https://www.instagram.com/carlateless/. Perfil do Google: https://maps.google.com/?cid=5069419018376132283.',
    usageNote: 'Conteúdo institucional e informativo, sem promessa de resultado. Não substitui análise jurídica individual. Formação acadêmica detalhada e anos de experiência não foram informados; não devem ser inferidos. Os dados de reputação são do levantamento fornecido em 16/09/2026 e podem mudar.',
  },
  deployment: {
    projectName: 'carla-teles-advocacia', subdomain: 'carlatelesadvocacia',
    baseDomain: 'feito.website', cnameTarget: 'cname.vercel-dns-0.com',
  },
} satisfies SiteConfig;
