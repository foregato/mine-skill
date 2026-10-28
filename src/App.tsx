import React, { useState, useEffect } from 'react';
import { Download, Copy, Check, Terminal, FileCode, BookOpen, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import JSZip from 'jszip';
import { MinecraftMobsFloor } from './components/MinecraftMobsFloor';
import { MINE_THEME_CSS, MINE_MOBS_JS, MINE_TOGGLE_JS, MINE_README_MD } from './mineSkillFiles';

export default function App() {
  const [isMinecraftTheme, setIsMinecraftTheme] = useState<boolean>(true);
  const [showMobs, setShowMobs] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'readme' | 'css' | 'mobs' | 'toggle' | 'triggers'>('readme');
  const [copied, setCopied] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [testInput, setTestInput] = useState<string>('Teste seu componente aqui');

  // Synchronize .mine-theme on document root
  useEffect(() => {
    if (isMinecraftTheme) {
      document.body.classList.add('mine-theme');
      document.documentElement.classList.add('mine-theme');
    } else {
      document.body.classList.remove('mine-theme');
      document.documentElement.classList.remove('mine-theme');
    }
  }, [isMinecraftTheme]);

  // Synchronize data-mobs attribute
  useEffect(() => {
    document.body.setAttribute('data-mobs', showMobs ? 'true' : 'false');
    document.documentElement.setAttribute('data-mobs', showMobs ? 'true' : 'false');
  }, [showMobs]);

  const currentFile = () => {
    switch (activeTab) {
      case 'css':
        return { name: 'mine-theme.css', content: MINE_THEME_CSS, lang: 'css' };
      case 'mobs':
        return { name: 'mine-mobs.js', content: MINE_MOBS_JS, lang: 'javascript' };
      case 'toggle':
        return { name: 'mine-toggle.js', content: MINE_TOGGLE_JS, lang: 'javascript' };
      case 'readme':
      default:
        return { name: 'README.md', content: MINE_README_MD, lang: 'markdown' };
    }
  };

  const handleCopy = () => {
    const file = currentFile();
    navigator.clipboard.writeText(file.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = async () => {
    try {
      setIsDownloading(true);
      const zip = new JSZip();
      
      const folder = zip.folder('mine-skill');
      if (folder) {
        folder.file('mine-theme.css', MINE_THEME_CSS);
        folder.file('mine-mobs.js', MINE_MOBS_JS);
        folder.file('mine-toggle.js', MINE_TOGGLE_JS);
        folder.file('README.md', MINE_README_MD);
      }

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'mine-skill.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Falha ao empacotar mine-skill.zip:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const cur = currentFile();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isMinecraftTheme ? 'mine-theme bg-[#1a1a1e] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Bar Header */}
      <header className={`sticky top-0 z-40 border-b ${
        isMinecraftTheme 
          ? 'bg-[#c6c6c6] text-black border-black shadow-md' 
          : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold tracking-tight whitespace-nowrap">
              {isMinecraftTheme ? '🟩 MINE-SKILL' : 'mine-skill'}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 border ${
              isMinecraftTheme ? 'mine-item-frame text-amber-300' : 'bg-slate-100 text-slate-700 rounded'
            }`}>
              v1.0.0 · Core Engine
            </span>
          </div>

          {/* Direct ZIP Download Button */}
          <button
            onClick={handleDownloadZip}
            disabled={isDownloading}
            className={
              isMinecraftTheme 
                ? 'mine-btn mine-btn-diamond text-xs py-2 px-4' 
                : 'px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm'
            }
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? 'Empacotando...' : 'Baixar mine-skill.zip'}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 pb-32">
        {/* Hero Package Info */}
        <div className={`p-6 md:p-8 border ${
          isMinecraftTheme ? 'mine-panel' : 'bg-white rounded-2xl shadow-sm border-slate-200'
        }`}>
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className={`px-2 py-0.5 border ${
                isMinecraftTheme ? 'mine-item-frame text-amber-300' : 'bg-slate-100 text-slate-700 rounded'
              }`}>
                Framework-Agnostic
              </span>
              <span className="text-slate-500">HTML · React · Next.js · Vue · Svelte</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500">Zero Áudio</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500">100% Opaco (Sem Transparência)</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
              {isMinecraftTheme ? 'PACOTE OFICIAL DA MINE-SKILL' : 'mine-skill: Minecraft GUI & Autonomous Mobs'}
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed">
              Pacote limpo e autocontido para transformar qualquer interface web em uma experiência estética autêntica de Minecraft (chanfros de GUI, botões clássicos, tipografia pixelada e mobs decorativos em SVG inline). Mantém contraste estrito e total preservação dos seus componentes.
            </p>

            {/* Live Interactive Control Switches */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsMinecraftTheme(!isMinecraftTheme)}
                className={
                  isMinecraftTheme 
                    ? 'mine-btn' 
                    : 'px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800'
                }
              >
                Tema Minecraft: {isMinecraftTheme ? 'ATIVADO' : 'DESATIVADO'}
              </button>

              <button
                onClick={() => setShowMobs(!showMobs)}
                className={
                  isMinecraftTheme 
                    ? 'mine-btn mine-btn-wood' 
                    : 'px-4 py-2 bg-slate-100 text-slate-800 rounded-lg text-xs font-medium hover:bg-slate-200'
                }
              >
                Mobs Decorativos: {showMobs ? 'LIGADOS' : 'DESLIGADOS'}
              </button>

              <button
                onClick={handleDownloadZip}
                disabled={isDownloading}
                className={
                  isMinecraftTheme 
                    ? 'mine-btn mine-btn-diamond' 
                    : 'px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium'
                }
              >
                <Download className="w-3.5 h-3.5" />
                {isDownloading ? 'Gerando ZIP...' : 'Download (.ZIP)'}
              </button>
            </div>
          </div>
        </div>

        {/* 4 Files Manifest Grid */}
        <div>
          <div className="mb-4">
            <h2 className={`text-base font-bold ${isMinecraftTheme ? 'text-white' : 'text-slate-900'}`}>
              Estrutura de Arquivos Essenciais do Pacote
            </h2>
            <p className={`text-xs ${isMinecraftTheme ? 'text-slate-300' : 'text-slate-500'}`}>
              Distribuição limpa em 4 arquivos autocontidos, sem dependências de build ou CDNs externos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                file: 'mine-theme.css',
                desc: 'GUI chanfrada (#c6c6c6), botões de pedra/madeira, slots profundos e regras estritas de opacidade e contraste.',
                tab: 'css' as const,
              },
              {
                file: 'mine-mobs.js',
                desc: 'Motor autônomo do Creeper e da Ovelha Rosa em SVG inline pixel art com patrulha e pausas de pastagem.',
                tab: 'mobs' as const,
              },
              {
                file: 'mine-toggle.js',
                desc: 'Botão flutuante minimalista para alternar .mine-theme com persistência em localStorage.',
                tab: 'toggle' as const,
              },
              {
                file: 'README.md',
                desc: 'Manual completo de instalação para HTML puro, React, Next.js, Vue e gatilhos de ativação para IA.',
                tab: 'readme' as const,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(item.tab)}
                className={`p-4 border cursor-pointer transition-all ${
                  activeTab === item.tab
                    ? (isMinecraftTheme ? 'mine-card border-white' : 'bg-slate-100 border-slate-400 rounded-xl')
                    : (isMinecraftTheme ? 'mine-card opacity-90 hover:opacity-100' : 'bg-white rounded-xl border-slate-200 shadow-sm hover:shadow')
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <FileCode className={`w-4 h-4 ${isMinecraftTheme ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span className="font-mono text-xs font-bold">{item.file}</span>
                </div>
                <p className={`text-xs leading-relaxed ${isMinecraftTheme ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Interactive Sandbox / Test Strip */}
        <div className={`p-6 border ${
          isMinecraftTheme ? 'mine-card text-white' : 'bg-white rounded-xl border-slate-200 shadow-sm'
        }`}>
          <div className="mb-4">
            <h3 className={`text-sm font-bold ${isMinecraftTheme ? 'text-white' : 'text-slate-900'}`}>
              Teste Rápido de Componentes (Regra de Contraste e Opacidade)
            </h3>
            <p className={`text-xs ${isMinecraftTheme ? 'text-slate-300' : 'text-slate-500'}`}>
              Validação direta: fundo escuro = letras claras, fundo claro = letras escuras, 100% sólido.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                className="w-full text-xs"
                placeholder="Digite algo para testar..."
              />
            </div>
            <button className={isMinecraftTheme ? 'mine-btn' : 'px-3.5 py-2 bg-slate-900 text-white rounded-lg text-xs'}>
              Botão Pedra
            </button>
            <button className={isMinecraftTheme ? 'mine-btn mine-btn-wood' : 'px-3.5 py-2 bg-amber-800 text-white rounded-lg text-xs'}>
              Botão Madeira
            </button>
            <button className={isMinecraftTheme ? 'mine-btn mine-btn-diamond' : 'px-3.5 py-2 bg-cyan-600 text-white rounded-lg text-xs'}>
              Botão Diamante
            </button>
            <div className={`px-3 py-2 border text-xs ${isMinecraftTheme ? 'mine-slot text-white' : 'bg-slate-100 rounded-lg text-slate-800'}`}>
              Slot 100% Sólido
            </div>
          </div>
        </div>

        {/* Code & Documentation Explorer */}
        <div className={`border overflow-hidden ${
          isMinecraftTheme ? 'mine-panel' : 'bg-white rounded-2xl shadow-sm border-slate-200'
        }`}>
          {/* Tabs bar */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-black/20 gap-2 overflow-x-auto">
            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => setActiveTab('readme')}
                className={`px-3 py-1.5 flex items-center gap-1.5 font-medium transition-colors ${
                  activeTab === 'readme'
                    ? (isMinecraftTheme ? 'mine-btn' : 'bg-slate-900 text-white rounded-md')
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" /> README.md
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-3 py-1.5 flex items-center gap-1.5 font-medium transition-colors ${
                  activeTab === 'css'
                    ? (isMinecraftTheme ? 'mine-btn' : 'bg-slate-900 text-white rounded-md')
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" /> mine-theme.css
              </button>
              <button
                onClick={() => setActiveTab('mobs')}
                className={`px-3 py-1.5 flex items-center gap-1.5 font-medium transition-colors ${
                  activeTab === 'mobs'
                    ? (isMinecraftTheme ? 'mine-btn' : 'bg-slate-900 text-white rounded-md')
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> mine-mobs.js
              </button>
              <button
                onClick={() => setActiveTab('toggle')}
                className={`px-3 py-1.5 flex items-center gap-1.5 font-medium transition-colors ${
                  activeTab === 'toggle'
                    ? (isMinecraftTheme ? 'mine-btn' : 'bg-slate-900 text-white rounded-md')
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" /> mine-toggle.js
              </button>
              <button
                onClick={() => setActiveTab('triggers')}
                className={`px-3 py-1.5 flex items-center gap-1.5 font-medium transition-colors ${
                  activeTab === 'triggers'
                    ? (isMinecraftTheme ? 'mine-btn' : 'bg-slate-900 text-white rounded-md')
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" /> Gatilhos de IA
              </button>
            </div>

            {/* Copy button */}
            {activeTab !== 'triggers' && (
              <button
                onClick={handleCopy}
                className={
                  isMinecraftTheme 
                    ? 'mine-btn text-[10px] py-1 px-3' 
                    : 'px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-medium flex items-center gap-1.5'
                }
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copiado!' : 'Copiar Arquivo'}
              </button>
            )}
          </div>

          {/* Code viewer pane */}
          <div className="p-4">
            {activeTab === 'triggers' ? (
              <div className="space-y-4 text-xs">
                <div className={`p-4 border ${isMinecraftTheme ? 'mine-slot text-white' : 'bg-slate-50 border-slate-200 rounded-lg'}`}>
                  <h4 className="text-sm font-bold text-emerald-400 mb-1">Comandos de Ativação da Skill para Agentes de IA</h4>
                  <p className="text-slate-300">
                    A IA responde automaticamente aos comandos abaixo para injetar a skill no projeto alvo:
                  </p>
                </div>

                <div className="space-y-2">
                  {[
                    { cmd: 'aplica a mine-skill nessa landing page', desc: 'Injeta os 4 arquivos, reseta bordas e aplica estilo de GUI clássica.' },
                    { cmd: 'injeta mobs de minecraft nesse componente', desc: 'Inicializa o Creeper e a Ovelha Rosa patrulhando o rodapé da tela.' },
                    { cmd: 'converte esse site pro tema minecraft mantendo meus produtos', desc: 'Reestiliza a página aplicando a regra de contraste e preservação de mídias.' },
                    { cmd: 'adiciona a mine-skill nesse projeto', desc: 'Cria a pasta /mine-skill/ com os scripts vanilla e o CSS padrão.' },
                    { cmd: 'gera o pacote zip da mine-skill para esse layout', desc: 'Empacota e disponibiliza o mine-skill.zip para download.' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 border flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                        isMinecraftTheme ? 'mine-card' : 'bg-slate-50 border-slate-200 rounded-lg'
                      }`}
                    >
                      <code className="font-mono text-emerald-400 font-semibold">{`"${item.cmd}"`}</code>
                      <span className="text-slate-400 text-[11px]">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <pre className={`p-4 text-xs font-mono overflow-x-auto max-h-[500px] leading-relaxed border ${
                isMinecraftTheme 
                  ? 'mine-slot bg-[#121214] text-white border-black' 
                  : 'bg-slate-900 text-slate-100 rounded-xl'
              }`}>
                <code>{cur.content}</code>
              </pre>
            )}
          </div>
        </div>
      </main>

      {/* Autonomous Mobs on screen floor */}
      <MinecraftMobsFloor enabled={showMobs} />

      {/* Floating Theme Toggle Switcher */}
      <button
        onClick={() => setIsMinecraftTheme((prev) => !prev)}
        aria-label="Alternar Tema Minecraft"
        className="fixed bottom-6 right-6 z-[99998] flex items-center gap-2 px-3 py-2 border-2 border-black bg-[#4e4e52] text-white transition-all shadow-xl hover:brightness-110 active:translate-y-0.5"
        style={{
          boxShadow: 'inset 2px 2px 0px #82828a, inset -2px -2px 0px #242426, 0 4px 10px rgba(0,0,0,0.3)',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '10px'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" shapeRendering="crispEdges">
          <rect width="16" height="16" fill="#866043"/>
          <rect x="2" y="8" width="2" height="2" fill="#573d26"/>
          <rect x="8" y="10" width="2" height="2" fill="#573d26"/>
          <rect x="12" y="7" width="2" height="2" fill="#573d26"/>
          <rect x="5" y="13" width="2" height="2" fill="#573d26"/>
          <rect x="0" y="0" width="16" height="5" fill="#5b8731"/>
          <rect x="1" y="5" width="2" height="3" fill="#5b8731"/>
          <rect x="5" y="5" width="3" height="2" fill="#5b8731"/>
          <rect x="10" y="5" width="2" height="4" fill="#5b8731"/>
          <rect x="13" y="5" width="2" height="2" fill="#5b8731"/>
          <rect x="0" y="0" width="16" height="1" fill="#7ebd3e"/>
        </svg>
        <span>{isMinecraftTheme ? 'MINE: ON' : 'MINE: OFF'}</span>
        <span
          className="w-2 h-2 border border-black"
          style={{ backgroundColor: isMinecraftTheme ? '#55ff55' : '#ff5555' }}
        />
      </button>
    </div>
  );
}
