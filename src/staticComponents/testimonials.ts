import type { TFunction } from "i18next";

export const getTestimonials = (t: TFunction) => [
  {
    name: t("testimonial_1_name"),
    title: t("testimonial_1_title"),
    comment: t("testimonial_1_comment"),
    avatar: "/img/people/ayse.png",
  },
  {
    name: t("testimonial_2_name"),
    title: t("testimonial_2_title"),
    comment: t("testimonial_2_comment"),
    avatar: "/img/people/mert.png",
  },
];