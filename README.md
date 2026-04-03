# INGRESS-GUIDE

这是一个基于 [Astro](https://astro.build/) 和 [Starlight](https://starlight.astro.build/) 构建的开源 Ingress 游戏指南。

本项目旨在为 Ingress 玩家（尤其是新玩家）提供清晰、准确、老玩家视角的玩法指导和数据参考。

## 目录结构

文档内容主要位于 `src/content/docs/` 目录下，分为以下四个板块：

- `guides/`：游戏操作（基础的行动指南与界面说明）
- `gameplay/`：游戏玩法（进阶策略与机制分析）
- `reference/`：名词解释（道具、术语的详细字典）
- `data/`：游戏数据（等级要求、伤害公式、掉落概率等数据）

## 本地开发指南

请确保你已经安装了 [Node.js](https://nodejs.org/)（推荐 v22 稳定版或以上）。

1. **克隆仓库并安装依赖**
   ```bash
   npm install
   ```

2. **启动本地开发服务器**
   ```bash
   npm run dev
   ```
   随后可以在浏览器中打开 `http://localhost:4321` 进行实时预览。

3. **构建生产版本**
   ```bash
   npm run build
   ```
   构建出的静态文件会生成在 `dist/` 目录中。

## 部署

本项目配置了 GitHub Actions 工作流，只要将代码推送到 `master` 分支，系统将自动构建并部署至 GitHub Pages：
`https://MarsianCreator.github.io/INGRESS-GUIDE/`