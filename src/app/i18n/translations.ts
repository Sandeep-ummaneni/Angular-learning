export type AppLanguage = 'en' | 'Te';

export const translations = {
  en: {
    title: 'Deep Space Tracker',
    home: 'Home',
    image: 'Image',
    live: 'Live Status',
    news: 'News',
    distance: 'Distance Tool',
    security: 'Security'
  },
  Te: {
   title: 'అంతరిక్ష ట్రాకర్',
  home: 'ముఖ్య పేజీ',
  image: 'చిత్రం',
  live: 'ప్రత్యక్షం',
  news: 'వార్తలు',
  distance: 'దూరం',
  security: 'భద్రత'
  }
} as const;