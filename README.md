# React Portfolio with Vite
<!-- 使用 Vite 构建的 React 个人作品集 -->

This repository contains a personal portfolio site built with **React**, **TypeScript** and **Vite**. It provides a fast starting point for showcasing projects, articles and contact information.
<!-- 该仓库包含一个使用 React、TypeScript 和 Vite 构建的个人作品集站点，可用于快速展示项目、文章和联系方式。 -->

## Key Features
<!-- 主要特性 -->

- Hot module replacement for an efficient development workflow.
<!-- 通过热模块替换提升开发效率 -->
- Routing powered by React Router.
<!-- 使用 React Router 实现路由功能 -->
- ESLint configuration for consistent code style.
<!-- 使用 ESLint 保持统一的代码风格 -->
- Modular component structure (Hero, About, Projects, etc.).
<!-- 模块化组件结构（Hero、About、Projects 等） -->

## Getting Started
<!-- 快速开始 -->

### Install dependencies
<!-- 安装依赖 -->

Make sure you have Node.js 18 or newer installed and run:
<!-- 请确保已安装 Node.js 18 或更高版本，然后运行： -->

```bash
npm install
```

### Start the development server
<!-- 启动开发服务器 -->

```bash
npm run dev
```

Vite will serve the app at `http://localhost:5173` by default.
<!-- 默认情况下，Vite 会在 http://localhost:5173 提供应用程序 -->

## Build and Lint
<!-- 构建与代码检查 -->

Create an optimized production build:
<!-- 生成优化后的生产环境构建： -->

```bash
npm run build
```

Preview the built site locally:
<!-- 在本地预览构建后的站点： -->

```bash
npm run preview
```

Check code quality with ESLint:
<!-- 使用 ESLint 检查代码质量： -->

```bash
npm run lint
```

## Project Structure
<!-- 项目结构 -->

```
public/             Static assets and HTML template
<!-- 静态资源和 HTML 模板 -->
src/
  assets/           Images and other static resources
  <!-- 图像等静态资源 -->
  components/       React components
  <!-- React 组件 -->
  styles/           Component styles
  <!-- 组件样式 -->
  App.tsx           Application routes
  <!-- 应用路由 -->
  main.tsx          Entry point
  <!-- 入口文件 -->
index.html          Root HTML page used by Vite
<!-- Vite 使用的根 HTML 页面 -->
```

Build artifacts are output to `dist/` when running `npm run build`.
<!-- 运行 `npm run build` 时构建产物会生成到 dist/ 目录 -->

### Environment Notes
<!-- 环境注意事项 -->

- Node.js v18+ is recommended.
<!-- 推荐使用 Node.js v18+ -->
- Ensure network access during the initial `npm install` so that dependencies can be fetched.
<!-- 初次执行 `npm install` 时请保持网络畅通以便下载依赖 -->

## Deploy Your Own
<!-- 部署你的站点 -->

You can deploy the project to Vercel:
<!-- 可以将项目部署到 Vercel -->

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite-react&template=vite-react)

### Deploying From Your Terminal
<!-- 通过命令行部署 -->

Install [Vercel CLI](https://vercel.com/download) and run:
<!-- 安装 Vercel CLI 后执行： -->

```bash
vercel
```
