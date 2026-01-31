# i18n (Internationalization) Implementation

## 概述 / Overview

本博客已实现完整的中英文界面切换功能。
This blog now has full Chinese/English interface switching functionality.

## 功能特性 / Features

1. **双语支持** / **Bilingual Support**
   - 中文 (Chinese) 
   - English

2. **语言切换** / **Language Toggle**
   - 点击导航栏中的语言切换按钮（中/EN）
   - Click the language toggle button (中/EN) in the navigation bar

3. **自动检测** / **Auto Detection**
   - 首次访问时自动检测浏览器语言
   - Automatically detects browser language on first visit
   - 默认语言：中文 (Default language: Chinese)

4. **持久化存储** / **Persistent Storage**
   - 使用 localStorage 保存语言偏好
   - Language preference is saved in localStorage
   - 刷新页面后保持选择
   - Preference persists across page refreshes

## 文件结构 / File Structure

```
src/
├── i18n/
│   ├── ui.ts           # 翻译字典 / Translation dictionaries
│   └── utils.ts        # i18n 工具函数 / i18n utility functions
├── components/
│   ├── LanguageToggle.astro  # 语言切换按钮 / Language toggle button
│   ├── Header.astro          # 已更新以支持 i18n / Updated for i18n
│   └── Footer.astro          # 已更新以支持 i18n / Updated for i18n
└── layouts/
    └── Layout.astro    # 全局 i18n 初始化 / Global i18n initialization
```

## 如何添加新的翻译 / How to Add New Translations

### 1. 在翻译字典中添加键值对 / Add key-value pairs to translation dictionary

编辑 `src/i18n/ui.ts`:

```typescript
export const ui = {
  zh: {
    // ... 现有翻译
    "your.new.key": "中文翻译",
  },
  en: {
    // ... 现有翻译
    "your.new.key": "English translation",
  },
} as const;
```

### 2. 在 HTML 中使用 / Use in HTML

在需要翻译的元素上添加 `data-i18n` 属性:

```html
<span data-i18n="your.new.key">Default text</span>
```

默认文本将在页面加载时自动替换为对应语言的翻译。
The default text will be automatically replaced with the corresponding language translation on page load.

## 支持的页面 / Supported Pages

✅ 首页 / Homepage
✅ 文章列表 / Posts
✅ 标签页 / Tags
✅ 搜索页 / Search
✅ 归档页 / Archives
✅ 404 页面 / 404 Page
✅ 导航栏 / Navigation
✅ 页脚 / Footer

## 关于博客文章内容 / About Blog Post Content

当前实现仅翻译界面文本（导航、标题、按钮等）。
Current implementation only translates UI text (navigation, headings, buttons, etc.).

博客文章内容（.md 文件）保持原始语言。
Blog post content (.md files) remains in the original language.

### 未来扩展 / Future Extension

如需为博客文章添加多语言支持，可以：
To add multilingual support for blog posts, you can:

1. 为每篇文章创建不同语言的版本
   Create different language versions for each post
   - `example-post.zh.md`
   - `example-post.en.md`

2. 修改内容加载逻辑以根据当前语言加载对应文件
   Modify content loading logic to load the corresponding file based on current language

## 技术细节 / Technical Details

### 语言检测优先级 / Language Detection Priority

1. localStorage 中保存的语言偏好
   Language preference saved in localStorage
2. 浏览器语言设置
   Browser language settings
3. 默认语言（中文）
   Default language (Chinese)

### 实现方式 / Implementation Approach

- 使用 `data-i18n` 属性标记需要翻译的元素
  Use `data-i18n` attribute to mark elements that need translation
- JavaScript 在客户端动态替换文本
  JavaScript dynamically replaces text on the client side
- 支持 Astro 的视图过渡（View Transitions）
  Supports Astro's View Transitions

## 开发者注意事项 / Developer Notes

1. **添加新页面时** / **When Adding New Pages**
   - 记得为所有用户可见的文本添加 `data-i18n` 属性
   - Remember to add `data-i18n` attribute to all user-visible text

2. **性能考虑** / **Performance Considerations**
   - 翻译在客户端执行，首次加载时可能有轻微延迟
   - Translations are executed on the client, may have slight delay on first load
   - localStorage 缓存确保后续访问速度
   - localStorage caching ensures fast subsequent visits

3. **样式保持** / **Style Preservation**
   - 所有翻译保持原有的 CSS 类和样式
   - All translations maintain original CSS classes and styles
   - 响应式设计在两种语言下都能正常工作
   - Responsive design works correctly in both languages

## 支持 / Support

如有问题或建议，请提交 Issue。
For questions or suggestions, please submit an Issue.
