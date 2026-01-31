# yzh-Blog 项目实施路线图 | Project Implementation Roadmap

本文档提供了完成 yzh-Blog 项目的详细实施指南。

This document provides a detailed implementation guide for completing the yzh-Blog project.

---

## 🎯 Phase 1: 项目初始化 | Project Initialization

**优先级 | Priority**: 🔴 高 | High  
**预计时间 | Estimated Time**: 1-2 小时 | hours

### 步骤 | Steps

1. **初始化 Astro 项目 | Initialize Astro Project**
   ```bash
   npm create astro@latest . -- --template minimal --yes
   ```

2. **安装核心依赖 | Install Core Dependencies**
   ```bash
   npm install
   npm install @astrojs/tailwind tailwindcss
   npm install @astrojs/mdx
   npm install -D typescript @types/node
   ```

3. **配置 Tailwind CSS | Configure Tailwind CSS**
   ```bash
   npx astro add tailwind
   ```

4. **创建目录结构 | Create Directory Structure**
   ```bash
   mkdir -p src/content/blog
   mkdir -p src/components
   mkdir -p src/layouts
   mkdir -p src/pages/blog
   mkdir -p src/styles
   mkdir -p public/images
   ```

### 验证 | Verification
```bash
npm run dev  # 应该能在 localhost:4321 访问 | Should be accessible at localhost:4321
```

---

## 🏗️ Phase 2: 基础布局和组件 | Basic Layouts and Components

**优先级 | Priority**: 🔴 高 | High  
**预计时间 | Estimated Time**: 2-3 小时 | hours

### 1. 创建基础布局 | Create Base Layout
**文件 | File**: `src/layouts/BaseLayout.astro`

包含 | Include:
- HTML 结构 | structure
- 头部元数据 | Head metadata
- 导航栏位置 | Navigation area
- 页脚位置 | Footer area

### 2. 创建 Header 组件 | Create Header Component
**文件 | File**: `src/components/Header.astro`

包含 | Include:
- 网站标题 | Site title
- 导航链接（首页、博客、关于）| Navigation links (Home, Blog, About)
- 暗黑模式切换按钮占位 | Dark mode toggle placeholder

### 3. 创建 Footer 组件 | Create Footer Component
**文件 | File**: `src/components/Footer.astro`

包含 | Include:
- 版权信息 | Copyright info
- 社交链接占位 | Social links placeholder
- 备案信息占位 | ICP filing placeholder

### 4. 创建暗黑模式切换组件 | Create Theme Toggle Component
**文件 | File**: `src/components/ThemeToggle.astro`

功能 | Features:
- 明暗主题切换 | Light/dark theme toggle
- 本地存储偏好 | LocalStorage preference
- 平滑过渡动画 | Smooth transition animation

---

## 📄 Phase 3: 核心页面 | Core Pages

**优先级 | Priority**: 🟡 中 | Medium  
**预计时间 | Estimated Time**: 3-4 小时 | hours

### 1. 配置内容集合 | Configure Content Collections
**文件 | File**: `src/content/config.ts`

定义 | Define:
- Blog 集合 schema
- 文章元数据类型 | Article metadata types
- 标签和分类 | Tags and categories

### 2. 创建首页 | Create Homepage
**文件 | File**: `src/pages/index.astro`

功能 | Features:
- 显示最近文章列表 | Display recent articles list
- 文章摘要 | Article excerpts
- 发布日期 | Publication dates
- 标签显示 | Tag display
- 分页功能（可选）| Pagination (optional)

### 3. 创建关于页面 | Create About Page
**文件 | File**: `src/pages/about.astro`

内容 | Content:
- 个人简介 | Personal introduction
- 技术栈 | Tech stack
- 联系方式 | Contact information
- 项目经验（可选）| Project experience (optional)

### 4. 创建博客详情页 | Create Blog Detail Page
**文件 | File**: `src/pages/blog/[...slug].astro`

功能 | Features:
- 动态路由 | Dynamic routing
- Markdown 渲染 | Markdown rendering
- 目录导航（可选）| Table of contents (optional)
- 上一篇/下一篇导航 | Previous/next navigation
- 评论组件占位 | Comment component placeholder

---

## ✨ Phase 4: 增强功能 | Enhanced Features

**优先级 | Priority**: 🟢 低 | Low  
**预计时间 | Estimated Time**: 1-2 小时 | hours

### 1. 创建评论组件占位 | Create Comment Component Placeholder
**文件 | File**: `src/components/Comments.astro`

准备 | Prepare:
- Giscus 配置占位 | Giscus config placeholder
- 条件渲染逻辑 | Conditional rendering logic

### 2. 创建示例文章 | Create Sample Article
**文件 | File**: `src/content/blog/hello-world.md`

内容 | Content:
```markdown
---
title: 欢迎来到我的博客 | Welcome to My Blog
description: 这是第一篇文章 | This is the first article
pubDate: 2026-01-31
tags: ['hello', 'introduction']
---

# 欢迎来到我的博客

这是一篇示例文章，演示了：
- Markdown 语法
- 代码高亮
- 图片插入
- 列表和表格
```

### 3. 添加全局样式 | Add Global Styles
**文件 | File**: `src/styles/global.css`

包含 | Include:
- Tailwind 指令 | directives
- 自定义 CSS 变量 | Custom CSS variables
- 暗黑模式样式 | Dark mode styles
- 排版优化 | Typography optimization

---

## 🚀 Phase 5: 部署准备 | Deployment Preparation

**优先级 | Priority**: 🟡 中 | Medium  
**预计时间 | Estimated Time**: 1 小时 | hour

### 1. 配置 Astro | Configure Astro
**文件 | File**: `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://yzh-blog.vercel.app', // 你的域名 | Your domain
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
```

### 2. 创建 Vercel 配置 | Create Vercel Config
**文件 | File**: `vercel.json` (可选 | optional)

### 3. 测试构建 | Test Build
```bash
npm run build
npm run preview  # 预览构建结果 | Preview build result
```

### 4. 更新 README | Update README
**文件 | File**: `README.md`

添加 | Add:
- 项目描述 | Project description
- 技术栈说明 | Tech stack description
- 本地开发指南 | Local development guide
- 部署说明 | Deployment instructions

---

## 📋 完整检查清单 | Complete Checklist

### Phase 1: 初始化 | Initialization
- [ ] 初始化 Astro 项目
- [ ] 安装依赖包
- [ ] 配置 Tailwind CSS
- [ ] 创建目录结构

### Phase 2: 布局组件 | Layouts & Components
- [ ] BaseLayout.astro
- [ ] Header.astro
- [ ] Footer.astro
- [ ] ThemeToggle.astro

### Phase 3: 核心页面 | Core Pages
- [ ] 内容集合配置
- [ ] index.astro (首页)
- [ ] about.astro
- [ ] blog/[...slug].astro

### Phase 4: 增强功能 | Enhanced Features
- [ ] Comments.astro
- [ ] hello-world.md
- [ ] global.css

### Phase 5: 部署 | Deployment
- [ ] astro.config.mjs
- [ ] 构建测试
- [ ] README 更新
- [ ] Vercel 部署

---

## 🛠️ 开发命令速查 | Development Commands Quick Reference

```bash
# 启动开发服务器 | Start dev server
npm run dev

# 构建生产版本 | Build for production
npm run build

# 预览构建结果 | Preview build
npm run preview

# 检查代码 | Check code
npm run astro check

# 添加集成 | Add integration
npx astro add [integration-name]
```

---

## 📚 参考资源 | Reference Resources

- [Astro 官方文档 | Official Docs](https://docs.astro.build)
- [Astro Paper Theme](https://github.com/satnaing/astro-paper)
- [Tailwind CSS 文档 | Docs](https://tailwindcss.com/docs)
- [Vercel 部署指南 | Deployment Guide](https://vercel.com/docs)

---

## 💡 实用提示 | Useful Tips

1. **开发时使用 TypeScript** - 更好的类型安全和 IDE 支持
   Use TypeScript during development - Better type safety and IDE support

2. **先完成基础功能再优化** - 确保核心功能正常工作
   Complete basic features before optimization - Ensure core functionality works

3. **定期提交代码** - 使用有意义的提交信息
   Commit code regularly - Use meaningful commit messages

4. **测试响应式设计** - 在不同设备上测试
   Test responsive design - Test on different devices

5. **优化性能** - 使用 Astro 的静态生成优势
   Optimize performance - Leverage Astro's static generation

---

**预计总时间 | Total Estimated Time**: 8-12 小时 | hours  
**难度 | Difficulty**: 中等 | Medium  
**适合 | Suitable for**: 有基础前端经验的开发者 | Developers with basic frontend experience

---

*最后更新 | Last Updated*: 2026-01-31  
*维护者 | Maintainer*: GitHub Copilot Coding Agent
