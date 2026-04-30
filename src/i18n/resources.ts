export const resources = {
  en: {
    common: {
      nav: {
        home: "Home",
        lessons: "Lessons",
        chapters: "Chapters",
        media: "Media",
        getInvolved: "Get Involved",
      },
      footer: {
        tagline: "Started in Jammu & Kashmir — expanding across India.",
      },
    },
  },
  hi: {
    common: {
      nav: {
        home: "होम",
        lessons: "पाठ",
        chapters: "चैप्टर्स",
        media: "मीडिया",
        getInvolved: "जुड़ें",
      },
      footer: {
        tagline: "जम्मू और कश्मीर से शुरू — पूरे भारत में विस्तार।",
      },
    },
  },
  bn: {
    common: {
      nav: {
        home: "হোম",
        lessons: "পাঠ",
        chapters: "চ্যাপ্টারস",
        media: "মিডিয়া",
        getInvolved: "যুক্ত হন",
      },
      footer: {
        tagline: "জম্মু ও কাশ্মীর থেকে শুরু — সারা ভারতে বিস্তার।",
      },
    },
  },
  ta: {
    common: {
      nav: {
        home: "முகப்பு",
        lessons: "பாடங்கள்",
        chapters: "அத்தியாயங்கள்",
        media: "ஊடகம்",
        getInvolved: "இணையுங்கள்",
      },
      footer: {
        tagline: "ஜம்மு & காஷ்மீரில் தொடங்கி — இந்தியா முழுவதும் விரிவாகிறது.",
      },
    },
  },
  te: {
    common: {
      nav: {
        home: "హోమ్",
        lessons: "పాఠాలు",
        chapters: "అధ్యాయాలు",
        media: "మీడియా",
        getInvolved: "భాగస్వామ్యం అవ్వండి",
      },
      footer: {
        tagline: "జమ్మూ & కాశ్మీర్‌లో ప్రారంభం — భారతదేశమంతా విస్తరిస్తోంది.",
      },
    },
  },
  mr: {
    common: {
      nav: {
        home: "मुख्यपृष्ठ",
        lessons: "धडे",
        chapters: "अध्याय",
        media: "मीडिया",
        getInvolved: "सहभागी व्हा",
      },
      footer: {
        tagline: "जम्मू आणि काश्मीरपासून सुरुवात — संपूर्ण भारतात विस्तार.",
      },
    },
  },
  gu: {
    common: {
      nav: {
        home: "હોમ",
        lessons: "પાઠો",
        chapters: "અધ્યાયો",
        media: "મીડિયા",
        getInvolved: "જોડાઓ",
      },
      footer: {
        tagline: "જમ્મુ અને કાશ્મીરથી શરૂઆત — સમગ્ર ભારતમાં વિસ્તરણ.",
      },
    },
  },
  kn: {
    common: {
      nav: {
        home: "ಮುಖಪುಟ",
        lessons: "ಪಾಠಗಳು",
        chapters: "ಅಧ್ಯಾಯಗಳು",
        media: "ಮಾಧ್ಯಮ",
        getInvolved: "ಸೇರಿಕೊಳ್ಳಿ",
      },
      footer: {
        tagline: "ಜಮ್ಮು ಮತ್ತು ಕಾಶ್ಮೀರದಲ್ಲಿ ಆರಂಭ — ಭಾರತದಾದ್ಯಂತ ವಿಸ್ತರಣೆ.",
      },
    },
  },
  ml: {
    common: {
      nav: {
        home: "ഹോം",
        lessons: "പാഠങ്ങൾ",
        chapters: "അധ്യായങ്ങൾ",
        media: "മീഡിയ",
        getInvolved: "പങ്കുചേരുക",
      },
      footer: {
        tagline: "ജമ്മു & കാശ്മീരിൽ നിന്ന് ആരംഭിച്ചു — ഇന്ത്യയിലുടനീളം വികസിക്കുന്നു.",
      },
    },
  },
  pa: {
    common: {
      nav: {
        home: "ਮੁੱਖ ਪੰਨਾ",
        lessons: "ਪਾਠ",
        chapters: "ਅਧਿਆਏ",
        media: "ਮੀਡੀਆ",
        getInvolved: "ਜੁੜੋ",
      },
      footer: {
        tagline: "ਜੰਮੂ ਅਤੇ ਕਸ਼ਮੀਰ ਤੋਂ ਸ਼ੁਰੂ — ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਵਿਸਥਾਰ।",
      },
    },
  },
} as const;

export type SupportedLanguage = keyof typeof resources;
