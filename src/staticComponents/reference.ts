export interface ReferenceClient {
  name: string;
  logo: string;
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
        logo: "/img/companies/dogus-teknoloji.svg"
      },
      {
        name: "Koç Sistem",
        logo: "/img/companies/koc-sistem.png"
      },
      {
        name: "Turkcell",
        logo: "/img/companies/turkcell.png"
      },
      {
        name: "Garanti Bankası",
        logo: "/img/companies/garanti-bankasi.svg"
      },
      {
        name: "Sigorta Bilgi ve Gözetim Merkezi",
        logo: "/img/companies/sbgm.png"
      },
      {
        name: "Türkiye Finans Katılım Bankası",
        logo: "/img/companies/turkiye-finans.png"
      },
      {
        name: "TatMetal",
        logo: "/img/companies/tatmetal.svg"
      },
    ],
  },
  {
    country: "UAE",
    clients: [
      {
        name: "Rakbank",
        logo: "/img/companies/rakbank.png"
      }
    ],
  },
  {
    country: "Saudi Arabia",
    clients: [
      {
        name: "Ministry of Environment, Water and Agriculture",
        logo: "/img/companies/mewa-saudi.svg"
      }
    ],
  },
  {
    country: "Qatar",
    clients: [
      {
        name: "Malomatia",
        logo: "/img/companies/malomatia.png"
      }
    ],
  },
  {
    country: "Jordan",
    clients: [
      {
        name: "Umniah Telecom",
        logo: "/img/companies/umniah.png"
      }
    ],
  },
  {
    country: "Macedonia",
    clients: [
      {
        name: "A1 Telecom",
        logo: "/img/companies/a1-telecom.png"
      }
    ],
  },
];
