# Especificação & Arquitetura da "mine-skill"

Especificação completa da **mine-skill**, um pacote agnóstico e modular em Vanilla JS e CSS padrão capaz de transformar qualquer aplicação web em uma experiência temática autêntica de Minecraft sem dependências externas, preservando o protagonismo dos produtos reais e permitindo exportação em arquivo `.zip`.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> **Decisões Alinhadas na Fase 1:**
> - **Ambiente de Demonstração Multi-Arquétipo**: A aplicação integrará um visualizador comutável entre **E-commerce automotivo/luxo**, **SaaS Dashboard de Métricas** e **Site Institucional Corporativo**, permitindo testar a injeção da skill em tempo real em múltiplos contextos.
> - **Intensidade Visual da GUI**: Estilo GUI clássica equilibrado com relevos chanfrados (`#c6c6c6`, bordas `#ffffff`, `#555555`, `#373737`), tipografia pixelada (`Press Start 2P`), e cards com fundo e contraste protegidos para as fotos de produtos e dados analíticos.
> - **Comportamento dos Mobs (Creeper & Ovelha Rosa)**: Patrulha horizontal suave na base da tela com pausas aleatórias para "pastar/observar", alternância de pernas em pixel art e inversão horizontal (`scaleX`) nas bordas ou após pausas.
> - **Zero Áudio**: Sem sons de clique, passos ou explosão, mantendo a experiência corporativa e limpa.

---

## 1. Overview & Core Concept

- **O que é**: Uma skill e biblioteca agnóstica (`mine-skill`) compacta e autocontida para desenvolvedores e IAs. Composta por 4 arquivos principais (`mine-theme.css`, `mine-mobs.js`, `mine-toggle.js`, `README.md`) e um empacotador ZIP client-side pronto para download direto.
- **Público-alvo**: Engenheiros front-end, designers de produto e agentes de IA que precisam transformar landing pages, lojas e dashboards em ações comemorativas/temáticas de Minecraft com zero atrito de instalação.
- **Valor Central**: Integração não invasiva via `<link>` e `<script>` ou imports modernos (React, Vue, Svelte, Next.js), compatível com qualquer framework sem sobrescrever regras críticas de layout nem exigir assets em CDN.

---

## 2. User Experience & Visual Design

### Fluxos do Usuário no Showcase & Playground
1. **Alternância Global do Tema**: O usuário clica no botão flutuante de toggle (ou no cabeçalho) para ligar/desligar a estética Minecraft instantaneamente (`.mine-theme`), persistida no `localStorage`.
2. **Troca de Arquétipo do Site**:
   - *E-commerce Automotivo/Retail*: Veículos e especificações com destaque visual nítido emoldurados em chanfros de inventário.
   - *SaaS Dashboard*: Gráficos, métricas tabulares e tabelas de faturamento mantendo legibilidade total.
   - *Site Institucional*: Hero limpo, proposta de valor e formulário de contato estilizado como interface de fornalha/bigorna clássica.
3. **Controle Dinâmico dos Mobs**: Switch interativo para ligar/desligar mobs (`data-mobs="true|false"` ou `window.MineMobs.toggle()`).
4. **Exportação & Download em ZIP**: Botão dedicado de download que gera em tempo de execução o arquivo `mine-skill.zip` contendo os 4 arquivos de código-fonte documentados e prontos para uso em qualquer site.
5. **Inspetor de Código & Manual de Instalação**: Aba interativa com snippets prontos para HTML puro, React/Next.js e Vue.

### Identidade Visual & Design System
- **Paleta de Cores GUI Minecraft**:
  - Superfície Base: `#c6c6c6` (Cinza GUI clássico)
  - Chanfros de Luz: `#ffffff` e `#dbdbdb`
  - Chanfros de Sombra: `#555555` e `#373737`
  - Fundo de Inventário/Cards: `#8b8b8b` ou `#2c2c2c` (Dark Mode compatível)
  - Botão Primário: Estilo botão de pedra com texto sombreado `#ffffff` sobre `#3f3f3f`
- **Tipografia**:
  - Títulos e Ações: `Press Start 2P`, `monospace`, pixel-perfect
  - Corpo e Dados Críticos: Mantém fonte legível de alta fidelidade (`Plus Jakarta Sans`) para leitura fluida de produtos e métricas
- **Pixel Art Autônomo**:
  - Sprites vetoriais SVG inline em alta fidelidade com viewBox de 16x16 / 32x32 e `shape-rendering="crispEdges"`.
  - Creeper clássico verde camuflado com animação de caminhada nas 4 pernas.
  - Ovelha Rosa com lã rosa, cabeça cúbica, pernas brancas e animação de pastar (inclinação suave da cabeça durante pausas).

---

## 3. Key Product Decisions & Trade-Offs

- **Vanilla JS puro vs React Library**:
  - *Decisão*: Os arquivos da skill são 100% JavaScript Vanilla e CSS puro.
  - *Por que*: Permite que a skill funcione em qualquer site HTML, WordPress, Shopify, Next.js, Vue ou Svelte sem dependências ou compilação prévia. O showcase usará React para renderizar a interface de teste interativa e fornecer o gerador ZIP.
- **Sprites em SVG Inline vs Imagens Externas**:
  - *Decisão*: Sprites dos mobs desenhados em SVG paramétrico com grade pixelada diretamente no `mine-mobs.js`.
  - *Por que*: Elimina problemas de CORS, links quebrados em sandbox ou dependência de servidores de imagem externos.
- **Preservação de Imagens e Contrastes**:
  - *Decisão*: Regras estritas de isolamento com filtros e `z-index` nos cards de produto, impedindo que texturas de fundo sobreponham fotos ou textos sensíveis.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ARQUITETURA DA MINE-SKILL                       │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  mine-theme.css ──────────────> Aplica GUI chanfrada, botões de pedra, │
│                                 inputs de inventário e tipografia 8-bit│
│                                                                        │
│  mine-mobs.js ────────────────> Instancia 1 Creeper e 1 Ovelha Rosa    │
│                                 em SVG autônomo com patrulha e pausas  │
│                                                                        │
│  mine-toggle.js ──────────────> Injeta floating toggle button e gerencia│
│                                 a classe .mine-theme no <body>         │
│                                                                        │
│  README.md ───────────────────> Guia de instalação agnóstico (HTML,   │
│                                 React, Vue, Svelte, CDN)               │
│                                                                        │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       PLAYGROUND MULTI-ARQUÉTIPO                       │
├────────────────────────────────────────────────────────────────────────┤
│  [ Seletor de Arquétipo: E-commerce │ SaaS Dashboard │ Institucional ] │
│  [ Toggle Mine-Theme: ON/OFF ]  [ Mobs: LIGADO/DESLIGADO ]             │
│  [ Botão: Baixar Pacote Completo (mine-skill.zip) ]                    │
│  [ Aba: Código-Fonte & Documentação de Integração ]                    │
└────────────────────────────────────────────────────────────────────────┘
```

### Componentes e Mapeamento de Estado
- **`mine-theme.css`**: Define as classes `.mine-theme`, `.mine-btn`, `.mine-card`, `.mine-input`, `.mine-slot`, variáveis CSS de chanfro e reset `image-rendering: pixelated;`.
- **`mine-mobs.js`**: Cria um elemento container fixo `#mine-mobs-container`. Implementa a `class MobPatrol` que computa coordenadas `x`, velocidade, estado (`walking` vs `grazing_idle`), frame de passos (0-3) e direção (`scaleX(1)` vs `scaleX(-1)`).
- **`mine-toggle.js`**: Gerencia o ciclo de vida do botão flutuante `#mine-theme-toggle`, escuta atalhos opcionais e sincroniza com `localStorage.getItem('mine-theme-enabled')`.
- **ZIP Builder**: Usa utilitário cliente sem bibliotecas pesadas externas (ou JSZip) para gerar o download imediato de `mine-skill.zip`.
