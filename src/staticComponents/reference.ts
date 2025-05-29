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
        logo: "/img/logos/dogus-teknoloji.png"
      },
      {
        name: "Koç Sistem",
        logo: "/img/logos/koc-sistem.png"
      },
      {
        name: "Turkcell",
        logo: "/img/logos/turkcell.png"
      },
      {
        name: "Garanti Bankası",
        logo: "/img/logos/garanti-bankasi.png"
      },
      {
        name: "Sigorta Bilgi ve Gözetim Merkezi",
        logo: "/img/logos/sbgm.png"
      },
      {
        name: "Türkiye Finans Katılım Bankası",
        logo: "/img/logos/turkiye-finans.png"
      },
      {
        name: "TatMetal",
        logo: "/img/logos/tatmetal.png"
      },
    ],
  },
  {
    country: "UAE",
    clients: [
      {
        name: "Rakbank",
        logo: "/img/logos/rakbank.png"
      }
    ],
  },
  {
    country: "Saudi Arabia",
    clients: [
      {
        name: "Ministry of Environment, Water and Agriculture",
        logo: "/img/logos/mewa-saudi.png"
      }
    ],
  },
  {
    country: "Qatar",
    clients: [
      {
        name: "Malomatia",
        logo: "/img/logos/malomatia.png"
      }
    ],
  },
  {
    country: "Jordan",
    clients: [
      {
        name: "Umniah Telecom",
        logo: "/img/logos/umniah.png"
      }
    ],
  },
  {
    country: "Macedonia",
    clients: [
      {
        name: "A1 Telecom",
        logo: "/img/logos/a1-telecom.png"
      }
    ],
  },
];
