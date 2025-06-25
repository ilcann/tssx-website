import { MapPin, Mail, Phone } from "lucide-react";

export const footerLinks = {
    "companyLinks": [
        { href: "/about", labelKey: "footer.companyLinks.links.aboutUs" },
        { href: "/references", labelKey: "footer.companyLinks.links.references" },
        { href: "/partners", labelKey: "footer.companyLinks.links.partners" }
    ],
    "solutionLinks": [
        { href: "/solutions/observability", labelKey: "footer.solutionLinks.links.observability" },
        { href: "/solutions/asset-management", labelKey: "footer.solutionLinks.links.assetManagement" },
        { href: "/solutions/automation", labelKey: "footer.solutionLinks.links.automation" },
        { href: "/solutions/security", labelKey: "footer.solutionLinks.links.security" },
        { href: "/solutions/finops", labelKey: "footer.solutionLinks.links.finops" },
    ]
}

export const footerContactItems = [
  {
    icon: MapPin,
    lines: [
      "İçerenköy yolu cd. Bodur İş Merkezi",
      "No:8-11, Ataşehir, İstanbul",
      "34752",
    ],
  },
  {
    icon: Mail,
    lines: [
      {
        text: "info@tss-x.com",
        href: "mailto:info@tss-x.com",
      },
    ],
  },
  {
    icon: Phone,
    lines: [
      {
        text: "+90 545 852 2713",
        href: "tel:+905458522713",
      },
      {
        text: "+90 532 216 4040",
        href: "tel:+905322164040",
      },
    ],
  },
];