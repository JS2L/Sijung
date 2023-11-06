// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/page.json";
import ko from "./locales/ko/page.json";
import jp from "./locales/jp/page.json";
import cn from "./locales/cn/page.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ko: {
      translation: ko,
    },
    jp: {
      translation: jp,
    },
    cn: {
      translation: cn,
    },
  },
  lng: "ko", // 기본 언어 설정 (한국어)
  fallbackLng: "ko", // 번역이 없는 경우의 기본 언어 설정
  debug: true,
  interpolation: {
    escapeValue: false, // React 컴포넌트와의 통합을 위해 false로 설정
  },
});

export default i18n;
