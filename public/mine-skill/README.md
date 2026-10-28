# 🟩 mine-skill

Transforme qualquer site web (HTML puro, React, Next.js, Vue, Svelte, etc.) em uma experiência imersiva de Minecraft com estética autêntica de GUI, chanfros clássicos, tipografia 8-bit e mobs decorativos autônomos na base da tela (Creeper e Ovelha Rosa).

---

## 🎯 Filosofia de Design & Diretrizes de Negócio

1. **Parceria de Marcas (Brand Safe)**: A estética Minecraft atua em segundo plano colaborativo. As fotos reais dos produtos, dados analíticos e formulários conservam destaque absoluto e contraste legível.
2. **Zero Transparência (100% Sólido)**: Todos os cards, slots, botões e painéis são 100% opacos. Nenhum padrão de fundo ou ruído pode vazar ou transparecer através dos containers de conteúdo.
3. **Regra de Ouro de Contraste Automático**:
   - **Fundo Escuro** (Cards, slots profundos `#121214`): Letras e números forçados para **Branco Puro (`#ffffff`)** e detalhes em **Cinza Claro (`#cbd5e1`)**.
   - **Fundo Claro** (Painéis GUI `#c6c6c6`, caixas claras): Letras forçadas para **Preto Sólido (`#111111`)**.
4. **Zero Áudio**: Nenhum efeito sonoro de passos, cliques ou explosão para manter o ambiente corporativo e acessível.
5. **Mobs Decorativos Autônomos**: Exatamente 1 Creeper e 1 Ovelha Rosa caminhando na base da tela (`position: fixed; bottom: 0; pointer-events: none;`), com pausas naturais para pastar/observar.
6. **100% Autocontido**: Sprites em SVG inline de alta fidelidade e pixel art. Sem dependência de CDNs ou links externos de imagens.

---

## 📦 Estrutura do Pacote

```
mine-skill/
├── mine-theme.css   # Estilos da GUI, chanfros clássicos, botões e fontes
├── mine-mobs.js     # Engine de patrulha e animação do Creeper e da Ovelha Rosa
├── mine-toggle.js   # Botão flutuante para ligar/desligar com localStorage
└── README.md        # Documentação completa de integração
```

---

## 🚀 Como Instalar

### 1. Em Sites Estáticos (HTML Puro)
Basta incluir os arquivos na raiz ou na pasta `assets` do seu projeto e adicionar as tags no `<head>` e antes do fechamento do `</body>`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu Site</title>

  <!-- 1. CSS do Tema Minecraft -->
  <link rel="stylesheet" href="mine-theme.css">
</head>
<body class="mine-theme">

  <!-- Seu conteúdo normal continua aqui -->
  <header>
    <h1>Minha Loja Oficial</h1>
  </header>

  <main>
    <div class="mine-card">
      <img src="produto.jpg" alt="Produto">
      <button class="mine-btn">Comprar Item</button>
    </div>
  </main>

  <!-- 2. Scripts Autônomos (Mobs + Botão de Alternância) -->
  <script src="mine-mobs.js" defer></script>
  <script src="mine-toggle.js" defer></script>
</body>
</html>
```

---

### 2. Em React / Next.js (App Router ou Pages Router)

Copie os arquivos para a pasta `public/mine-skill/` ou importe diretamente no seu layout/componente:

```tsx
'use client';

import { useEffect } from 'react';
import './mine-theme.css';

export default function MinecraftLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Import dinâmico ou carregamento dos scripts vanilla
    import('./mine-mobs.js').then((module) => {
      window.MineMobs?.init({ showMobs: true });
    });

    import('./mine-toggle.js').then(() => {
      window.MineToggle?.init({ position: 'bottom-right' });
    });

    return () => {
      window.MineMobs?.destroy();
      window.MineToggle?.destroy();
    };
  }, []);

  return (
    <div className="mine-theme">
      {children}
    </div>
  );
}
```

---

### 3. Em Vue 3 / Nuxt

```vue
<template>
  <div class="mine-theme min-h-screen">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(async () => {
  const { default: mobs } = await import('/mine-skill/mine-mobs.js');
  const { default: toggle } = await import('/mine-skill/mine-toggle.js');
  
  window.MineMobs?.init();
  window.MineToggle?.init({ position: 'bottom-right' });
});

onUnmounted(() => {
  window.MineMobs?.destroy();
  window.MineToggle?.destroy();
});
</script>

<style>
@import '/mine-skill/mine-theme.css';
</style>
```

---

## ⚙️ Parâmetros de Customização

### Desativar a Exibição dos Mobs
Você pode desativar os mobs de três maneiras simples:

1. **Atributo HTML**:
   ```html
   <body data-mobs="false">
   ```
2. **Via JavaScript**:
   ```javascript
   window.MineMobs.toggle(false); // ou window.MineMobs.setVisible(false)
   ```
3. **Na Inicialização**:
   ```javascript
   window.MineMobs.init({ showMobs: false });
   ```

### Alterar a Posição do Botão Flutuante (Toggle)
```javascript
window.MineToggle.init({
  position: 'bottom-right' // Opções: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
});
```

### Ouvir Alterações de Tema via Evento
```javascript
window.addEventListener('mine-theme-change', (e) => {
  console.log('Tema Minecraft ativo:', e.detail.enabled);
});
```

---

## 🎨 Classes Utilitárias do Tema

| Classe CSS | Descrição |
| :--- | :--- |
| `.mine-theme` | Ativa a tipografia e os resets de borda e renderização de pixel no container |
| `.mine-box` / `.mine-panel` | Janela clássica da GUI com bordas duplas chanfradas e fundo cinza `#c6c6c6` |
| `.mine-btn` | Botão padrão de pedra com relevo 3D e sombra de texto `#3f3f3f` |
| `.mine-btn-wood` | Variante de botão com textura de tábuas de madeira de carvalho |
| `.mine-btn-diamond` | Botão de destaque com bordas de diamante ciano |
| `.mine-slot` | Caixa rebaixada de inventário para inputs, busca e itens |
| `.mine-card` | Container para produtos e mídias, preservando a qualidade da imagem |
| `.mine-lore` | Tooltip escuro estilo descrição de itens raros do Minecraft |

---

## 🤖 Gatilhos de Ativação da Skill (Prompt Triggers)

A IA ou assistente de código reconhece os seguintes comandos para acionar esta especificação:
- *"aplica a mine-skill nessa landing page"*
- *"injeta mobs de minecraft nesse componente"*
- *"converte esse site pro tema minecraft mantendo meus produtos"*
- *"adiciona a mine-skill nesse projeto"*
- *"gera o pacote zip da mine-skill para esse layout"*
