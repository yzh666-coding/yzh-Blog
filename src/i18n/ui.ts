/**
 * i18n UI translations for Chinese (zh) and English (en)
 * 翻译字典，支持中文和英文
 */

export const languages = {
  zh: "中文",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "zh";

/**
 * UI text translations
 * UI 文本翻译
 */
export const ui = {
  zh: {
    // Header / 导航栏
    "nav.posts": "文章",
    "nav.tags": "标签",
    "nav.about": "关于",
    "nav.archives": "归档",
    "nav.search": "搜索",
    "nav.skipToContent": "跳到内容",
    "nav.openMenu": "打开菜单",
    "nav.closeMenu": "关闭菜单",
    "nav.toggleTheme": "切换明暗主题",
    "nav.toggleLanguage": "切换语言",

    // Footer / 页脚
    "footer.copyright": "版权所有",
    "footer.allRightsReserved": "保留所有权利",

    // Home page / 首页
    "home.greeting": "你好",
    "home.description":
      "AstroPaper 是一个简约、响应式、易访问且 SEO 友好的 Astro 博客主题。此主题遵循最佳实践并默认提供无障碍支持。默认支持明暗主题，也可以配置其他配色方案。",
    "home.readMore": "阅读博客文章或查看",
    "home.readme": "README",
    "home.moreInfo": "了解更多信息。",
    "home.socialLinks": "社交链接：",
    "home.featured": "精选",
    "home.recentPosts": "最新文章",
    "home.allPosts": "所有文章",

    // Posts page / 文章页面
    "posts.title": "文章",
    "posts.description": "我发布的所有文章。",

    // Search page / 搜索页面
    "search.title": "搜索",
    "search.description": "搜索任意文章...",
    "search.devWarning": "开发模式警告！",
    "search.devWarningDesc":
      "您需要至少构建一次项目才能在开发期间看到搜索结果。",

    // Tags page / 标签页面
    "tags.title": "标签",
    "tags.description": "我博客文章中使用的所有标签。",

    // Archives page / 归档页面
    "archives.title": "归档",
    "archives.description": "按日期归档的所有文章。",

    // Post detail / 文章详情
    "post.publishedOn": "发布于",
    "post.updatedOn": "更新于",
    "post.editPost": "编辑页面",
    "post.backButton": "返回",
    "post.toc": "目录",
    "post.share": "分享此文章",

    // Pagination / 分页
    "pagination.prev": "上一页",
    "pagination.next": "下一页",

    // 404 page / 404 页面
    "404.title": "未找到",
    "404.description": "找不到您要查找的页面。",
    "404.backHome": "返回首页",

    // Common / 通用
    "common.readingTime": "阅读时间",
    "common.minutes": "分钟",
    "common.rss": "RSS 订阅",
  },
  en: {
    // Header / Navigation
    "nav.posts": "Posts",
    "nav.tags": "Tags",
    "nav.about": "About",
    "nav.archives": "Archives",
    "nav.search": "Search",
    "nav.skipToContent": "Skip to content",
    "nav.openMenu": "Open Menu",
    "nav.closeMenu": "Close Menu",
    "nav.toggleTheme": "Toggles light & dark",
    "nav.toggleLanguage": "Switch Language",

    // Footer
    "footer.copyright": "Copyright",
    "footer.allRightsReserved": "All rights reserved",

    // Home page
    "home.greeting": "Mingalaba",
    "home.description":
      "AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme. This theme follows best practices and provides accessibility out of the box. Light and dark mode are supported by default. Moreover, additional color schemes can also be configured.",
    "home.readMore": "Read the blog posts or check",
    "home.readme": "README",
    "home.moreInfo": "for more info.",
    "home.socialLinks": "Social Links:",
    "home.featured": "Featured",
    "home.recentPosts": "Recent Posts",
    "home.allPosts": "All Posts",

    // Posts page
    "posts.title": "Posts",
    "posts.description": "All the articles I've posted.",

    // Search page
    "search.title": "Search",
    "search.description": "Search any article ...",
    "search.devWarning": "DEV mode Warning!",
    "search.devWarningDesc":
      "You need to build the project at least once to see the search results during development.",

    // Tags page
    "tags.title": "Tags",
    "tags.description": "All the tags used in my blog posts.",

    // Archives page
    "archives.title": "Archives",
    "archives.description": "All posts archived by date.",

    // Post detail
    "post.publishedOn": "Published on",
    "post.updatedOn": "Updated on",
    "post.editPost": "Edit page",
    "post.backButton": "Back",
    "post.toc": "Table of Contents",
    "post.share": "Share this post",

    // Pagination
    "pagination.prev": "Prev",
    "pagination.next": "Next",

    // 404 page
    "404.title": "Not Found",
    "404.description": "The page you are looking for cannot be found.",
    "404.backHome": "Back to Home",

    // Common
    "common.readingTime": "Reading Time",
    "common.minutes": "minutes",
    "common.rss": "RSS Feed",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
