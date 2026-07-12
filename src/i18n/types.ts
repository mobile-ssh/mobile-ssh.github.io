export interface FeatureRow {
  title: string;
  text: string;
}

export interface FeatureGroup {
  title: string;
  items: string[];
}

export interface CompareRow {
  need: string;
  mobileSsh: string;
  termux: string;
  termius: string;
}

export interface CompareCard {
  title: string;
  body: string;
}

export interface DocCard {
  slug: string;
  title: string;
  text: string;
}

export interface Dict {
  meta: {
    siteName: string;
    languageLabel: string;
    languageSwitcher: string;
  };
  nav: {
    home: string;
    features: string;
    docs: string;
    compare: string;
    about: string;
    privacy: string;
  };
  footer: {
    tagline: string;
    documentation: string;
    comparison: string;
    privacy: string;
    contact: string;
    feedback: string;
    // Optional: link to the (English-only) closed-beta recruitment page.
    // Components fall back to English when a locale omits it.
    beta?: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    versionLine: string;
    ctaDocs: string;
    ctaPlay: string;
    // iOS install CTA (TestFlight public beta link).
    ctaIos: string;
    // Short platform captions used above the screenshot carousels and demo
    // videos ("Android" / "iOS — iPhone & iPad").
    platformAndroid: string;
    platformIos: string;
    advantagesHead: string;
    advantagesIntro: string;
    advantages: FeatureRow[];
    sectionAHead: string;
    sectionAIntro: string;
    features: FeatureRow[];
    multiHead: string;
    multiP1: string;
    multiP2: string;
    multiAlt: string;
    sftpHead: string;
    sftpBody: string;
    sftpCtaGuide: string;
    sftpCtaAll: string;
    sftpAlt: string;
    galleryHead: string;
    galleryIntro: string;
    galleryAlts: string[];
    // Alt text for the iOS screenshot carousel (same order as the iOS shots
    // in Home.astro).
    galleryIosAlts: string[];
    carouselPrev: string;
    carouselNext: string;
    carouselDot: string;
    videoHead: string;
    videoIntro: string;
    videoAlt: string;
    videoIosAlt: string;
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
    betaJoin: string;
    betaOr: string;
    betaRequest: string;
    // Optional: hero "testers wanted" banner. Components fall back to English
    // when a locale omits these (the closed test runs in English).
    betaWantedTitle?: string;
    betaWantedText?: string;
    betaWantedCta?: string;
    // Optional: note telling Android testers to open the Play opt-in link in a
    // mobile browser (the closed test may be missing inside the Google Play
    // app). Falls back to English when a locale omits it.
    betaPlayNote?: string;
    compareHead: string;
    compareIntro: string;
    compareGuideTitle: string;
    compareGuideText: string;
    privacyTitle: string;
    privacyText: string;
  };
  features: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    groups: FeatureGroup[];
    security: string;
  };
  compare: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    columns: {
      need: string;
      mobileSsh: string;
      termux: string;
      termius: string;
    };
    rows: CompareRow[];
    cards: CompareCard[];
    featureHeading: string;
    featureRows: { category: string; feature: string; mobile: string; termux: string; termius: string }[];
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    sections: { heading: string; body: string }[];
    permissionsHeading: string;
    permissions: { label: string; body: string }[];
    securityHeading: string;
    securityBody: string;
    contactHeading: string;
    contactBody: string;
  };
  docsIndex: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    cards: DocCard[];
  };
  docsNav: {
    home: string;
    gettingStarted: string;
    terminal: string;
    fileTransfer: string;
    portForwarding: string;
    troubleshooting: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    appHeading: string;
    versionLabel: string;
    authorLabel: string;
    authorValue: string;
    licenseLabel: string;
    licenseValue: string;
    websiteLabel: string;
    privacyLabel: string;
    privacyLinkText: string;
    noticesHeading: string;
    noticesIntro: string;
    notices: { name: string; license: string; url?: string }[];
    contactHeading: string;
    contactBody: string;
  };
}
