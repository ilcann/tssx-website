import type { TFunction } from "i18next";

type FAQItemData = {
  question: string;
  answer: string;
};

const getFaqItems = (t: TFunction): FAQItemData[] => [
  {
    question: t("faq_question_1"),
    answer: t("faq_answer_1"),
  },
  {
    question: t("faq_question_2"),
    answer: t("faq_answer_2"),
  },
  {
    question: t("faq_question_3"),
    answer: t("faq_answer_3"),
  },
  {
    question: t("faq_question_4"),
    answer: t("faq_answer_4"),
  },
  {
    question: t("faq_question_5"),
    answer: t("faq_answer_5"),
  },
];

export default getFaqItems;
