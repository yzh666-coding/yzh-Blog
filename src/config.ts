export const SITE = {
  website: "https://yzh666-coding.github.io/yzh-Blog/", // replace this with your deployed domain
  author: "yzh666-coding",
  profile: "https://github.com/yzh666-coding",
  desc: "记录学习笔记和有趣的东西",
  title: "yzh 的个人博客",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/yzh666-coding/yzh-Blog/edit/main/",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
