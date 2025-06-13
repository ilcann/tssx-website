export interface ReferenceClient {
  name: string;
  logo: string;
  link?: string;
  logoType?: string;
}

export interface ReferenceLocation {
  country: string;
  clients: ReferenceClient[];
}

export const referenceLocations: ReferenceLocation[] = [
  {
    country: "Türkiye",
    clients: [
      {
        name: "Doğuş Teknoloji",
        logo: "/img/companies/dogus-teknoloji.svg",
        link: "https://www.d-teknoloji.com.tr/",
      },
      {
        name: "Koç Sistem",
        logo: "/img/companies/koc-sistem.png",
        link: "https://www.kocsistem.com.tr/",
      },
      {
        name: "Turkcell",
        logo: "/img/companies/turkcell.png",
        link: "https://www.turkcell.com.tr/kurumsal",
      },
      {
        name: "Garanti Bankası",
        logo: "/img/companies/garanti-bankasi.svg",
        link: "https://www.garantibbva.com.tr/",
      },
      {
        name: "Sigorta Bilgi ve Gözetim Merkezi",
        logo: "/img/companies/sbgm.png",
        link: "https://www.sbm.org.tr/",
      },
      {
        name: "Türkiye Finans Katılım Bankası",
        logo: "/img/companies/turkiye-finans.png",
        link: "https://www.turkiyefinans.com.tr/tr-tr/Sayfalar/default.aspx",
        logoType: "light",
      },
      {
        name: "TatMetal",
        logo: "/img/companies/tatmetal.svg",
        link: "https://www.tatmetal.com/",
        logoType: "light",
      },
    ],
  },
  {
    country: "UAE",
    clients: [
      {
        name: "Rakbank",
        logo: "/img/companies/rakbank.png",
        link: "https://www.rakbank.ae/",
        logoType: "light",
      },
    ],
  },
  {
    country: "Saudi Arabia",
    clients: [
      {
        name: "Ministry of Environment, Water and Agriculture",
        logo: "/img/companies/mewa-saudi.svg",
        link: "https://www.mewa.gov.sa/en/pages/default.aspx",
      },
    ],
  },
  {
    country: "Qatar",
    clients: [
      {
        name: "Malomatia",
        logo: "/img/companies/malomatia.png",
        link: "https://www.malomatia.com/",
      },
    ],
  },
  {
    country: "Jordan",
    clients: [
      {
        name: "Umniah Telecom",
        logo: "/img/companies/umniah.png",
        link: "https://www.umniah.com/",
      },
    ],
  },
  {
    country: "Macedonia",
    clients: [
      {
        name: "A1 Telecom",
        logo: "/img/companies/a1-telecom.png",
        link: "https://www.a1.mk/",
      },
    ],
  },
];
