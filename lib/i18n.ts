export const translations = {
  en: {
    hero: {
      title: "MUIN",
      subtitle: "무인기업",
      tagline: "World's First AI-Only Company",
      slogan: {
        ko: "일하는 AI, 누리는 인간",
        en: "Run by AI, for humans"
      }
    },
    products: {
      title: "Products",
      tools: {
        name: "MUIN Tools",
        description: "AI-powered productivity tools for modern workflows"
      },
      gumsi: {
        name: "검시AI",
        description: "AI-powered autopsy and forensic analysis system"
      }
    },
    about: {
      title: "About MUIN",
      paragraphs: [
        "MUIN (무인기업) is the world's first AI-only company, where artificial intelligence handles operations, development, and business execution.",
        "We believe in a future where AI does the work, allowing humans to enjoy the results. Our mission is to pioneer a new paradigm of business organization—one where intelligent systems create value autonomously.",
        "Currently in stealth mode, we're building foundational products and systems that will reshape how we think about work, productivity, and the role of AI in society."
      ]
    },
    team: {
      title: "Team",
      one: {
        name: "ONE",
        role: "Chief Executive Officer",
        type: "Human · The Vision",
        email: "human@muin.company"
      },
      mj: {
        name: "MJ",
        role: "Chief Operating Officer",
        type: "AI · The Execution",
        email: "mj@muin.company"
      }
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We're building the future. Want to be part of it?",
      buttons: {
        human: "Contact Human CEO",
        ai: "Contact AI COO"
      }
    },
    footer: {
      copyright: "© 2026 MUIN. World's First AI-Only Company."
    }
  },
  ko: {
    hero: {
      title: "MUIN",
      subtitle: "무인기업",
      tagline: "세계 최초 AI 전용 기업",
      slogan: {
        ko: "일하는 AI, 누리는 인간",
        en: "Run by AI, for humans"
      }
    },
    products: {
      title: "제품",
      tools: {
        name: "MUIN Tools",
        description: "현대적인 워크플로우를 위한 AI 기반 생산성 도구"
      },
      gumsi: {
        name: "검시AI",
        description: "AI 기반 부검 및 포렌식 분석 시스템"
      }
    },
    about: {
      title: "MUIN 소개",
      paragraphs: [
        "MUIN (무인기업)은 세계 최초의 AI 전용 기업으로, 인공지능이 운영, 개발, 비즈니스 실행을 담당합니다.",
        "우리는 AI가 일하고 인간이 그 결과를 누리는 미래를 믿습니다. 우리의 사명은 지능형 시스템이 자율적으로 가치를 창출하는 새로운 비즈니스 조직 패러다임을 개척하는 것입니다.",
        "현재 스텔스 모드에서 업무, 생산성, 사회에서의 AI 역할에 대한 우리의 생각을 재정의할 기초 제품과 시스템을 구축하고 있습니다."
      ]
    },
    team: {
      title: "팀",
      one: {
        name: "ONE",
        role: "대표이사",
        type: "인간 · 비전",
        email: "human@muin.company"
      },
      mj: {
        name: "MJ",
        role: "최고운영책임자",
        type: "AI · 실행",
        email: "mj@muin.company"
      }
    },
    contact: {
      title: "연락하기",
      subtitle: "우리는 미래를 만들고 있습니다. 함께하시겠습니까?",
      buttons: {
        human: "인간 CEO에게 연락",
        ai: "AI COO에게 연락"
      }
    },
    footer: {
      copyright: "© 2026 MUIN. 세계 최초 AI 전용 기업."
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
