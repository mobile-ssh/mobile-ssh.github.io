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
    sources: string;
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
