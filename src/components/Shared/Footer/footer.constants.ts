import { slugs } from "@/routes/slugs";
import { MapPin, Mail, Phone } from "lucide-react";

export const getFooterLinks = (lang: "tr" | "en") => {
  const solutions = slugs[lang].solutions;
  const solutionList = slugs[lang].solutionList;

  return {
    companyLinks: [
      { href: `/${lang}/${slugs[lang].about}`, labelKey: "footer.companyLinks.links.aboutUs" },
      { href: `/${lang}/${slugs[lang].references}`, labelKey: "footer.companyLinks.links.references" },
      { href: `/${lang}/${slugs[lang].partners}`, labelKey: "footer.companyLinks.links.partners" },
    ],
    solutionLinks: [
      { href: `/${lang}/${solutions}/${solutionList.observability}`, labelKey: "footer.solutionLinks.links.observability" },
      { href: `/${lang}/${solutions}/${solutionList["asset-management"]}`, labelKey: "footer.solutionLinks.links.assetManagement" },
      { href: `/${lang}/${solutions}/${solutionList.automation}`, labelKey: "footer.solutionLinks.links.automation" },
      { href: `/${lang}/${solutions}/${solutionList.security}`, labelKey: "footer.solutionLinks.links.security" },
      { href: `/${lang}/${solutions}/${solutionList.finops}`, labelKey: "footer.solutionLinks.links.finops" },
    ]
  };
};


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