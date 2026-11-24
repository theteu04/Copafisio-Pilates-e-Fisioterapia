export const clinic = {
  name: "Copafisio Pilates & Fisioterapia",
  whatsappNumber: "5521986441647",
  whatsappDisplay: "+55 (21) 98644-1647",
  mapsUrl: "https://maps.app.goo.gl/pX6ZDcKdybrVcxUG8",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=-22.9710152,-43.1893731&z=16&output=embed",
  locationLabel: "Copacabana, Rio de Janeiro — RJ",
  address: "Rua Raimundo Corrêa, 60, sala 204",
  phone: "+55 (21) 98644-1647",
  openingHours: "Segunda a sexta-feira, das 7h às 21h",
  instagramUrl: "",
  privacyPolicyUrl: "/politica-de-privacidade.html",
  reviewsUrl: "https://maps.app.goo.gl/smxFQvHUrHqY5UXSA",
  googleRating: 5,
  reviewCount: 43,
  professional: {
    name: "Alexandre Zeferino Alves",
    photoUrl: "/images/alexandre-zeferino.jpeg",
    instagramUrl:
      "https://www.instagram.com/zeferinoalexandre?evlk=MWIyenhvZ3RmZjFv",
    education:
      "Fisioterapia, osteopatia, acupuntura e instrução de Pilates",
    crefito: "219490F",
    specialties:
      "Massoterapia, técnica miofascial, osteopatia, acupuntura, fisioterapia avançada e RPG",
    bio: "",
  },
  reviews: [
    {
      category: "Fisioterapia",
      quote:
        "Faço sessões de fisioterapia regulares com Alexandre há mais ou menos 3 anos e falo que ele que equilibra meu corpo. Tem um conhecimento amplo e uma capacidade ímpar de avaliar o corpo globalmente. Indico de olhos fechados.",
    },
    {
      category: "Fisioterapia",
      quote:
        "O Prof Alexandre é um profissional excepcional! Cauteloso e cuidadoso, atende de forma única cada aluno/paciente. Estou muito satisfeita com os resultados. Recomendo fortemente a Copafisio!",
    },
    {
      category: "Pilates",
      quote:
        "Excelente profissional. Estava com problemas respiratórios e com as aulas de Pilates aprendi a respirar. As aulas são dinâmicas e os exercícios são orientados individualmente.",
    },
    {
      category: "Pilates",
      quote:
        "Conheci o Professor Alexandre da Copafisio há 10 anos, quando precisei me reabilitar após uma cirurgia delicada. Ele tem várias especializações. Retornei e não pretendo mais sair. Ele corrigi a nossa postura com muito cuidado. O atendimento é personalizado. A Copafisio é um ambiente acolhedor e bem higienizado. Agradeço pela sua dedicação, orientação e carinho durante os treinos. Sempre indico para os amigos.",
    },
    {
      category: "Pilates",
      quote:
        "Dr Alexandre é um raro profissional competente que une os mais diversos conhecimentos, em um espaço completo, para melhor abordar as questões de seus pacientes. Sem exageros, saímos renovados após cada sessão, diminuindo as dores nas articulações etc.",
    },
  ],
  gallery: [
    {
      src: "/images/pilates-studio.jpg",
      alt: "Espaço de Pilates da Copafisio com equipamentos e acessórios",
      title: "Espaço de Pilates",
    },
    {
      src: "/images/treatment-room.jpg",
      alt: "Sala de atendimento de fisioterapia da Copafisio",
      title: "Sala de atendimento",
    },
    {
      src: "/images/consultation-room.jpg",
      alt: "Consultório da Copafisio",
      title: "Consultório",
    },
  ],
  services: [
    {
      name: "Avaliação fisioterapêutica",
      description:
        "Avaliação funcional para compreender suas necessidades e orientar o tratamento.",
      message:
        "Olá! Gostaria de agendar uma avaliação fisioterapêutica na Copafisio.",
      number: "01",
    },
    {
      name: "Fisioterapia ortopédica",
      description:
        "Atendimento voltado à recuperação funcional de condições relacionadas à coluna, joelhos, ombros e outras estruturas musculoesqueléticas.",
      message:
        "Olá! Gostaria de obter mais informações sobre fisioterapia ortopédica.",
      number: "02",
    },
    {
      name: "Fisioterapia pós-operatória",
      description:
        "Acompanhamento fisioterapêutico durante o processo de recuperação após procedimentos cirúrgicos.",
      message:
        "Olá! Gostaria de saber mais sobre fisioterapia pós-operatória.",
      number: "03",
    },
    {
      name: "Pilates clínico",
      description:
        "Exercícios orientados para trabalhar força, mobilidade, equilíbrio e postura.",
      message: "Olá! Gostaria de saber mais sobre o Pilates clínico.",
      number: "04",
    },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const generalMessage =
  "Olá! Gostaria de agendar uma avaliação na Copafisio Pilates & Fisioterapia.";
