export interface Phase {
  id: string;
  number: string;
  name: string;
  days: string;
  duration: string;
  badgeBg: string;
  objective: string;
  dietaryConcept: string;
  shotTeaser: string;
  result: string;
}

export interface Bonus {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  realValue: string;
  iconName: string;
  benefits: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  age: number;
  city: string;
  weightLost: string;
  timeframe: string;
  text: string;
  rating: number;
  badge: string;
}

export const GOLDEN_RULES = [
  {
    number: "01",
    title: "Água Calculada",
    subtitle: "A base de desinchaço e ativação renal",
    description: "Você vai aprender a fórmula exata individual para sua hidratação diária e a dosagem certa ao acordar para destravar a retenção e limpar o organismo.",
    benefit: "Elimina até 3kg de líquidos retidos e prepara o estômago para digestão acelerada.",
    icon: "Droplets",
  },
  {
    number: "02",
    title: "O Shot Matinal Estratégico",
    subtitle: "Ativação enzimática em jejum",
    description: "Cada fase possui uma combinação anti-inflamatória específica de ingredientes simples para tomar logo pela manhã, ativando as enzimas digestivas e a queima lipídica.",
    benefit: "Desinflama o trato intestinal e liga o 'modo queima' logo nas primeiras horas do dia.",
    icon: "Sparkles",
  },
  {
    number: "03",
    title: "Janela Noturna Otimizada",
    subtitle: "Autofagia e pico natural do hormônio GH",
    description: "O timing exato da sua última refeição antes de dormir. Sem sofrimento, você estimula a renovação celular e aproveita as horas de sono para continuar queimando gordura.",
    benefit: "Sono restaurador, diminuição da fome noturna e queima de gordura em repouso.",
    icon: "Moon",
  },
  {
    number: "04",
    title: "Movimento Metabólico Diário",
    subtitle: "Apenas 15 minutos em casa, sem aparelhos",
    description: "Circuitos curtos e cientificamente combinados para gerar o efeito queima-pós-treino (EPOC). Você não precisa pagar mensalidade cara de academia nem passar horas se matando na esteira.",
    benefit: "Acelera seu metabolismo pelas 24 horas seguintes e tonifica o corpo.",
    icon: "Activity",
  },
];

export const PHASES: Phase[] = [
  {
    id: "fase-1",
    number: "F1",
    name: "Desinchaço & Desintoxicação",
    days: "Dias 1 a 7",
    duration: "Semana 1",
    badgeBg: "bg-emerald-800 text-white",
    objective: "Eliminar a retenção severa de líquidos, desinflamar o intestino e destravar o fígado sobrecarregado.",
    dietaryConcept: "Combinações estratégicas para drenar o excesso de sódio e toxinas acumuladas através de comida de verdade.",
    shotTeaser: "Shot Anti-Inchaço: Fórmula matinal para acalmar o estômago e desinflamar o abdômen.",
    result: "Até 3 kg a menos na balança logo na primeira semana, reduzindo o volume da barriga."
  },
  {
    id: "fase-2",
    number: "F2",
    name: "Ativação Metabólica",
    days: "Dias 8 a 14",
    duration: "Semana 2",
    badgeBg: "bg-amber-600 text-white",
    objective: "Aumentar a termogênese e o gasto calórico espontâneo em repouso, acabando com a sensação de metabolismo lento.",
    dietaryConcept: "Sinergia de fibras e proteínas de alto valor biológico para manter a saciedade plena e glicemia estável sem picos de fome.",
    shotTeaser: "Shot Termogênico: Combinação termogênica que prepara o corpo para gastar mais energia.",
    result: "Mais disposição ao acordar, intestino regulado e eliminação do cansaço crônico."
  },
  {
    id: "fase-3",
    number: "F3",
    name: "Queima Acelerada",
    days: "Dias 15 a 22",
    duration: "Semana 3",
    badgeBg: "bg-orange-700 text-white",
    objective: "Atacar diretamente a gordura visceral profunda resistente — principalmente na região da pochete abdominal, culotes e braços.",
    dietaryConcept: "Jantares leves com carboidratos de baixo índice glicêmico e maior densidade nutricional que induzem o uso da gordura como combustível.",
    shotTeaser: "Shot Digestivo Potencializador: Regulação do pH gástrico para quebra profunda de lipídios.",
    result: "Roupas visivelmente mais folgadas e diminuição evidente de medidas de cintura."
  },
  {
    id: "fase-4",
    number: "F4",
    name: "Consolidação Anti-Sanfona",
    days: "Dias 23 a 30",
    duration: "Semana 4",
    badgeBg: "bg-slate-700 text-white",
    objective: "Blindar o novo peso conquistado e reprogramar os receptores metabólicos para você nunca mais sofrer com o efeito sanfona.",
    dietaryConcept: "Autonomia alimentar: regras claras para comer em eventos sociais, fins de semana e manter o corpo seco para sempre.",
    shotTeaser: "Shot de Manutenção Vitalícia: O hábito simples para preservar a imunidade e metabolismo rápido.",
    result: "Peso estabilizado, segurança com o espelho e paz na relação com a comida."
  },
];

export const WHAT_IS_INSIDE = [
  {
    title: "O Passo a Passo das 4 Fases Metabólicas",
    desc: "Um cronograma de 30 dias que pega você pela mão: do desinchaço imediato à queima de gordura e blindagem definitiva.",
    tag: "Estrutura do Guia"
  },
  {
    title: "Cardápios Prontos Refeição por Refeição",
    desc: "O que comer no café da manhã, almoço, lanche da tarde e jantar para as 4 semanas inteiras, com ingredientes baratos e fáceis de achar.",
    tag: "Nutrição Sem Frescura"
  },
  {
    title: "O Guia dos 4 Shots Matinais Ativadores",
    desc: "As receitas exatas dos shots em jejum para cada fase (desinchaço, termogênese, digestão acelerada e manutenção).",
    tag: "Acelerador Diário"
  },
  {
    title: "Protocolo de Treinos de 15 Minutos em Casa",
    desc: "Dois circuitos inteligentes (Despertar Metabólico & Seca Barriga) para queimar calorias sem sair de casa e sem gastar com academia.",
    tag: "Treino Eficiente"
  },
  {
    title: "As 4 Regras de Ouro Inegociáveis",
    desc: "A base diária de hidratação calculada, janela noturna restauradora e hábitos simples para nunca mais recuperar a gordura perdida.",
    tag: "Hábito Definitivo"
  },
  {
    title: "Tabela Oficial de Registro de Progresso",
    desc: "Planilha de acompanhamento semanal de peso, medidas e sintomas para acompanhar a sua transformação dia após dia.",
    tag: "Controle & Motivação"
  }
];

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: "Guia Prático de Receitas na Airfryer",
    subtitle: "BÔNUS #01 · Valor real: R$ 47,00",
    description: "Receitas práticas, suculentas e super crocantes para fazer em minutos sem usar óleo, sem sujar panela e sem sair da dieta.",
    realValue: "R$ 47,00",
    iconName: "Flame",
    benefits: [
      "Opções práticas para almoço e jantar rápido",
      "Petiscos crocantes anti-inchaço para matar a vontade de beliscar",
      "Sobremesas saudáveis para quando bater vontade de doce",
      "Preparo em menos de 15 minutos"
    ]
  },
  {
    id: 2,
    title: "Manual do Fim de Semana Sem Engordar",
    subtitle: "BÔNUS #02 · Valor real: R$ 37,00",
    description: "O guia estratégico para ir a churrascos, pizzarias e aniversários com amigos e família sem engordar 1 grama nem se isolar socialmente.",
    realValue: "R$ 37,00",
    iconName: "Calendar",
    benefits: [
      "A estratégia do prato perfeito no churrasco",
      "A regra de hidratação para quem gosta de tomar cerveja ou vinho",
      "Como escolher os melhores sabores na pizzaria",
      "Como retomar o método na refeição seguinte sem culpa"
    ]
  },
  {
    id: 3,
    title: "Protocolo SOS Anti-Compulsão por Doces",
    subtitle: "BÔNUS #03 · Valor real: R$ 47,00",
    description: "Três ferramentas fisiológicas de ação rápida para desligar a vontade incontrolável de açúcar naqueles momentos de ansiedade ou TPM.",
    realValue: "R$ 47,00",
    iconName: "ShieldAlert",
    benefits: [
      "A regra dos 15 minutos comprovada para neutralizar picos de gula",
      "Técnica respiratória que baixa o cortisol e ansiedade na hora",
      "Receita secreta do mousse de cacau expresso sem açúcar",
      "Gatilhos mentais práticos para retomar o autocontrole"
    ]
  },
  {
    id: 4,
    title: "Lista Mestra de Compras Econômicas",
    subtitle: "BÔNUS #04 · Valor real: R$ 27,00",
    description: "Tudo o que você precisa comprar no mercado e feira livre organizado por corredores, evitando desperdício de comida e economizando dinheiro.",
    realValue: "R$ 27,00",
    iconName: "ShoppingCart",
    benefits: [
      "Lista completa de feira, açougue e mercearia",
      "Ingredientes comuns e acessíveis de qualquer bairro",
      "Guia dos temperos termogênicos de baixo custo",
      "Economia real de tempo e dinheiro no caixa do supermercado"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Silveira",
    age: 38,
    city: "Belo Horizonte, MG",
    weightLost: "-5,8 kg",
    timeframe: "30 dias de desafio",
    text: "Eu achava que precisava passar fome e comer só alface para secar a barriga. Com o Desafio Seca em 30 Dias eu como comida normal, me sinto leve e perdi quase 6kg. Meu marido ficou impressionado com a minha cinturinha!",
    rating: 5,
    badge: "Aluna Verificada"
  },
  {
    name: "Carla Mendes",
    age: 44,
    city: "Campinas, SP",
    weightLost: "-4,5 kg",
    timeframe: "30 dias",
    text: "O que mais amei foi a praticidade. O cardápio é super simples com coisas que a gente já tem na geladeira. O manual do fim de semana me salvou em viagens e nos almoços de domingo. Vale cada centavo!",
    rating: 5,
    badge: "Resultado Comprovado"
  },
  {
    name: "Patrícia Diniz",
    age: 32,
    city: "Curitiba, PR",
    weightLost: "-6,2 kg",
    timeframe: "30 dias",
    text: "O método das 4 fases é genial porque você vê o resultado logo nos primeiros 7 dias. Desinchei muito rápido e ganhei um ânimo que não sentia há anos. Os 15 minutinhos de treino no tapete da sala funcionam de verdade.",
    rating: 5,
    badge: "Aluna Verificada"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O que exatamente eu vou receber ao comprar o Desafio Seca em 30 Dias?",
    answer: "Você receberá o acesso imediato ao Guia Oficial digital completo (em PDF de alta resolução para celular, tablet ou computador), contendo a explicação detalhada das 4 Fases, o cardápio das 4 semanas, os segredos dos shots matinais, os treinos de 15 minutos, além dos 4 Bônus Exclusivos gratuitos."
  },
  {
    question: "Vou precisar passar fome ou cortar tudo o que gosto?",
    answer: "Não! O método é baseado em densidade nutricional e controle de insulina. As refeições contêm comida de verdade, proteínas saciantes, legumes e gorduras saudáveis que mantém você saciada por horas sem sofrimento."
  },
  {
    question: "Como e quando eu recebo o meu acesso?",
    answer: "O envio é 100% digital e automático. Assim que seu pagamento for aprovado (no PIX a liberação é imediata), você recebe as instruções de acesso e download diretamente no seu e-mail e no seu WhatsApp."
  },
  {
    question: "Preciso de equipamentos ou academia para os treinos de 15 minutos?",
    answer: "Nenhum aparelho é necessário. Os treinos foram desenvolvidos por especialistas para serem feitos na sala de casa, usando apenas o peso do próprio corpo em circuitos rápidos de 15 minutos."
  },
  {
    question: "Os ingredientes do cardápio são caros ou difíceis de achar?",
    answer: "Não. O método foi feito para o dia a dia de pessoas reais. Você usará ingredientes simples encontrados em qualquer supermercado ou feira de bairro, como ovos, frango, legumes, aveia, limão e temperos comuns."
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "O pagamento é realizado de forma 100% segura e à vista exclusivamente via PIX por apenas R$ 19,90 (sem mensalidades ou taxas escondidas). Com o PIX, sua confirmação é em tempo real e seu material é liberado na hora."
  },
  {
    question: "E se eu não gostar ou não conseguir resultados?",
    answer: "Você tem 7 dias de Garantia Incondicional. Se por qualquer motivo achar que o desafio não é para você, basta pedir seu dinheiro de volta que reembolsaremos 100% do valor pago, sem complicação."
  }
];
