# Daniel Leite — Product Designer & Design Engineer Portfolio

Portfólio interativo de alta performance construído com Vite, Tailwind CSS v4, GSAP, Lenis e Lucide.

## 🚀 Deploy na Vercel

O projeto está configurado para deploy contínuo na [Vercel](https://vercel.com/):
- **Domínio Principal**: [https://danielleite.vercel.app/](https://danielleite.vercel.app/)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Clean URLs & Headers**: Configurados em `vercel.json`

> **Nota sobre o domínio**: Se o repositório no GitHub estiver apontando para `danielleitedesign.vercel.app`, certifique-se de atualizar o campo About do repositório para `https://danielleite.vercel.app/`.

## 🛠️ Comandos de Desenvolvimento

- **Instalar dependências**:
  ```bash
  npm install
  ```
- **Ambiente de desenvolvimento local**:
  ```bash
  npm run dev
  ```
- **Build de produção**:
  ```bash
  npm run build
  ```
- **Preview local da build**:
  ```bash
  npm run preview
  ```

## ⚡ Otimizações de Performance Aplicadas

- **Vídeo do Hero**: Codificação H.264 720p 24fps faststart (1.3 MB) + WebM VP9 (2.3 MB) + Poster WebP (12 KB).
- **Controle de Viewport & Visibility**: O vídeo pausa automaticamente quando fora da tela (`IntersectionObserver`) ou em abas em segundo plano (`visibilitychange`). Em mobile, reduced-motion e economia de dados, o vídeo é pausado e o poster é exibido.
- **Render Cost Reduction**: Remoção de `backdrop-filter` pesado e `blur-[60px] animate-pulse-slow` que forçavam recomposição contínua sobre o vídeo em movimento.
- **Main Thread Throttling**: Loop do Canvas limitado a 30 FPS e pausado durante a exibição do vídeo; loop de scroll unificado via GSAP Ticker.
- **Zero CDNs**: Tailwind compilado via Vite + tree-shaking do Lucide Icons (redução de 742 KB para 155 KB de JS).
- **Assets Modernos**: Imagens convertidas para WebP com mais de 90% de redução no payload total.
