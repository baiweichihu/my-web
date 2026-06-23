import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Moveable from 'react-moveable';
import {
  Check,
  Eye,
  EyeOff,
  GripVertical,
  LayoutGrid,
  Settings,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './styles.css';
import { Hero } from './hero/Hero';
import { defaultHeroSelection, heroImages, heroIntros, heroNames } from './hero/heroData';
import { defaultSections } from './siteData';
import { renderSectionContent } from './sections';

const SETTINGS_KEY = 'my-web-settings';
const DEFAULT_LAYOUT_PANEL_HEIGHT = 280;
const DEFAULT_LAYOUT_GAP = 16;

const ui = {
  zh: {
    appName: 'My Web',
    settings: '设置',
    openConsole: '打开控制台',
    heroControl: 'Hero 控制',
    heroName: '名字',
    heroIntro: '简介',
    heroImages: '图片',
    layoutMode: '布局调整',
    layoutModeActive: '布局调整模式',
    enterLayoutMode: '进入布局调整',
    exitLayoutMode: '退出布局调整',
    saveLayout: '保存当前布局',
    defaultLayout: '默认',
    saved: '已保存',
    layoutOverlap: '布局重叠',
    layoutNoOverlap: '布局检查：未检测到重叠。',
    language: '语言',
    theme: '主题',
    light: '亮色',
    dark: '深色',
    ownerArea: '站点配置',
    consoleTitle: '控制台',
    close: '关闭',
    reset: '重置设置',
    contentSort: '板块排序',
    visibilityControl: '可见控制',
    cancel: '取消',
    save: '保存',
    visible: '可见',
    dragToSort: '拖动普通板块调整顺序，点击保存后生效。',
    sortSaved: '排序已保存',
    noSections: '暂无普通内容板块。Hero 固定显示；普通板块请在 src/siteData.js 和 src/sections 中添加。',
  },
  en: {
    appName: 'My Web',
    settings: 'Settings',
    openConsole: 'Open Console',
    heroControl: 'Hero Control',
    heroName: 'Name',
    heroIntro: 'Intro',
    heroImages: 'Images',
    layoutMode: 'Layout Tuning',
    layoutModeActive: 'Layout Tuning Mode',
    enterLayoutMode: 'Enter Layout Tuning',
    exitLayoutMode: 'Exit Layout Tuning',
    saveLayout: 'Save Layout',
    defaultLayout: 'Default',
    saved: 'Saved',
    layoutOverlap: 'Layout overlap',
    layoutNoOverlap: 'Layout check: no overlap detected.',
    language: 'Language',
    theme: 'Theme',
    light: 'Light',
    dark: 'Deep Blue',
    ownerArea: 'Site Config',
    consoleTitle: 'Console',
    close: 'Close',
    reset: 'Reset Settings',
    contentSort: 'Section Sorting',
    visibilityControl: 'Visibility Control',
    cancel: 'Cancel',
    save: 'Save',
    visible: 'Visible',
    dragToSort: 'Drag regular sections to reorder. Changes apply after saving.',
    sortSaved: 'Sorting saved',
    noSections: 'No regular content sections yet. Hero is fixed; add regular sections in src/siteData.js and src/sections.',
  },
};
function cloneSection(section) {
  return {
    ...section,
    title: { ...(section.title ?? {}) },
  };
}

function buildDefaultSettings() {
  return {
    language: 'zh',
    theme: 'light',
    editMode: false,
    hero: { ...defaultHeroSelection },
    layout: {},
    sections: defaultSections.map(cloneSection),
  };
}

function normalizeSettings(storedSettings) {
  const defaults = buildDefaultSettings();
  if (!storedSettings) return defaults;

  const storedSections = Array.isArray(storedSettings.sections) ? storedSettings.sections : [];

  return {
    ...defaults,
    ...storedSettings,
    hero: {
      ...defaults.hero,
      ...(storedSettings.hero ?? {}),
      imageIds: Array.isArray(storedSettings.hero?.imageIds) ? storedSettings.hero.imageIds : defaults.hero.imageIds,
    },
    sections: defaults.sections
      .map((section, index) => {
        const storedSection = storedSections.find((record) => record.id === section.id);
        return {
        id: section.id,
        visible: storedSection?.visible ?? section.visible !== false,
        order: Number(storedSection?.order ?? section.order ?? index + 1),
        title: {
          zh: section.title?.zh ?? '新板块',
          en: section.title?.en ?? 'New Section',
        },
      };
      }),
  };
}

function readStoredSettings() {
  try {
    const stored = window.localStorage.getItem(SETTINGS_KEY);
    return normalizeSettings(stored ? JSON.parse(stored) : null);
  } catch {
    return buildDefaultSettings();
  }
}

function getText(value, language) {
  return value?.[language] || value?.en || value?.zh || '';
}

function sortByOrder(records) {
  return [...records].sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0));
}

function resequence(records) {
  return records.map((record, index) => ({ ...record, order: index + 1 }));
}

function sectionNumber(index) {
  return String(index + 1).padStart(2, '0');
}

function rectsOverlap(a, b) {
  return (
    a.id !== b.id &&
    a.left < b.left + b.width &&
    a.left + a.width > b.left &&
    a.top < b.top + b.height &&
    a.top + a.height > b.top
  );
}

function findLayoutOverlaps(layoutBoxes) {
  const issues = [];
  for (let i = 0; i < layoutBoxes.length; i += 1) {
    for (let j = i + 1; j < layoutBoxes.length; j += 1) {
      if (rectsOverlap(layoutBoxes[i], layoutBoxes[j])) {
        issues.push([layoutBoxes[i].id, layoutBoxes[j].id]);
      }
    }
  }
  return issues;
}

function formatLayoutIssue(issues, text) {
  return `${text.layoutOverlap}: ${issues.map((pair) => pair.join(' / ')).join(', ')}`;
}

function buildDefaultPixelLayout(panels, containerWidth) {
  const columnGap = DEFAULT_LAYOUT_GAP;
  const columnWidth = (containerWidth - columnGap) / 2;
  const layoutBoxes = [];

  panels.forEach((panel, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    layoutBoxes.push({
      id: panel.section.id,
      left: column * (columnWidth + columnGap),
      top: row * (DEFAULT_LAYOUT_PANEL_HEIGHT + columnGap),
      width: columnWidth,
      height: DEFAULT_LAYOUT_PANEL_HEIGHT,
    });
  });

  return layoutBoxes;
}

function normalizeStoredLayout(layoutBox, fallback, containerWidth) {
  if (!layoutBox) return fallback;

  return {
    id: fallback.id,
    left: Math.max(0, Math.min(containerWidth - 80, layoutBox.left ?? fallback.left)),
    top: Math.max(0, layoutBox.top ?? fallback.top),
    width: Math.max(120, Math.min(containerWidth, layoutBox.width ?? fallback.width)),
    height: Math.max(120, layoutBox.height ?? fallback.height),
  };
}

function copyLayoutMap(layout = {}) {
  return Object.fromEntries(Object.entries(layout ?? {}).map(([id, layoutBox]) => [id, { ...layoutBox }]));
}

function App() {
  const [settings, setSettings] = useState(readStoredSettings);
  const [view, setView] = useState('home');
  const [layoutDragging, setLayoutDragging] = useState(false);
  const [layoutSaved, setLayoutSaved] = useState(false);
  const [layoutIssues, setLayoutIssues] = useState([]);
  const [layoutDraft, setLayoutDraft] = useState(() => copyLayoutMap(settings.layout));

  useEffect(() => {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    document.documentElement.dataset.bsTheme = settings.theme === 'dark' ? 'dark' : 'light';
  }, [settings]);

  const text = ui[settings.language];
  const sortedSections = useMemo(() => sortByOrder(settings.sections), [settings.sections]);

  const updateSettings = (patch) => setSettings((current) => ({ ...current, ...patch }));
  const updateHero = (patch) => {
    setSettings((current) => ({
      ...current,
      hero: { ...current.hero, ...patch },
    }));
  };
  const updateLayout = (layout) => {
    setLayoutSaved(false);
    const issues = findLayoutOverlaps(layout);
    setLayoutIssues(issues);
    setLayoutDraft(Object.fromEntries(layout.map((layoutBox) => [layoutBox.id, layoutBox])));
  };
  const toggleSection = (sectionId) => {
    setSettings((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === sectionId ? { ...section, visible: section.visible === false } : section,
      ),
    }));
  };
  const saveContentSort = ({ sections }) => {
    setSettings((current) => ({
      ...current,
      sections: resequence(sections).map((section) => {
        const existing = current.sections.find((record) => record.id === section.id);
        return existing ? { ...existing, order: section.order } : section;
      }),
    }));
  };
  const enterLayoutMode = () => {
    setLayoutDraft(copyLayoutMap(settings.layout));
    setLayoutSaved(false);
    setLayoutIssues([]);
    setView('home');
  };
  const exitLayoutMode = () => {
    setLayoutDraft(copyLayoutMap(settings.layout));
    setLayoutSaved(false);
    setLayoutIssues([]);
    updateSettings({ editMode: false });
    setView('console');
  };

  if (view === 'console') {
    return (
      <OwnerConsole
        settings={settings}
        hero={settings.hero}
        sections={sortedSections}
        text={text}
        language={settings.language}
        onClose={() => {
          updateSettings({ editMode: false });
          setView('home');
        }}
        onEnterLayout={enterLayoutMode}
        onUpdate={updateSettings}
        onUpdateHero={updateHero}
        onToggleSection={toggleSection}
        onSaveContentSort={saveContentSort}
        onReset={() => setSettings(buildDefaultSettings())}
      />
    );
  }

  return (
    <div className={`site-shell ${settings.theme === 'dark' ? 'theme-dark' : 'theme-light'} ${settings.editMode ? 'layout-mode-active' : ''} ${layoutDragging ? 'layout-dragging' : ''}`}>
      <TopBar settings={settings} text={text} onUpdate={updateSettings} onOpenConsole={() => setView('console')} />
      <main className="container py-4 py-lg-5">
        {settings.editMode && (
          <div className="layout-mode-banner mb-3">
            <div className="d-flex align-items-center gap-2">
              <LayoutGrid size={18} />
              <strong>{text.layoutModeActive}</strong>
            </div>
            <div className="d-flex flex-wrap gap-2 justify-content-end">
              <button
                className="btn btn-outline-primary btn-icon btn-sm order-3"
                type="button"
                aria-label={text.saveLayout}
                title={text.saveLayout}
                onClick={() => {
                  const layoutBoxes = Object.values(layoutDraft ?? {});
                  const issues = findLayoutOverlaps(layoutBoxes);
                  if (issues.length) {
                    setLayoutSaved(false);
                    setLayoutIssues(issues);
                    return;
                  }
                  updateSettings({ layout: copyLayoutMap(layoutDraft) });
                  setLayoutIssues([]);
                  setLayoutSaved(true);
                }}
              >
                <Check size={16} />
              </button>
              <button className="btn btn-outline-secondary btn-sm order-1 layout-default-button" type="button" data-label={text.defaultLayout} onClick={() => { setLayoutSaved(false); setLayoutIssues([]); setLayoutDraft({}); }}>
                {text.defaultLayout}
              </button>
              <button
                className="btn btn-outline-danger btn-icon btn-sm order-2"
                type="button"
                aria-label={text.exitLayoutMode}
                title={text.exitLayoutMode}
                onClick={exitLayoutMode}
              >
                <X size={16} />
              </button>
            </div>
            {layoutSaved && <span className="layout-save-state">{text.saved}</span>}
          </div>
        )}
        {settings.editMode && (
          <div className={`layout-issue-box mb-3 ${layoutIssues.length ? 'has-issue' : ''}`}>
            {layoutIssues.length ? formatLayoutIssue(layoutIssues, text) : text.layoutNoOverlap}
          </div>
        )}
        <Hero language={settings.language} selection={settings.hero} />
        <Dashboard
          sections={sortedSections}
          language={settings.language}
          editMode={settings.editMode}
          layout={settings.editMode ? layoutDraft : settings.layout}
          onLayoutChange={updateLayout}
          onDragStateChange={setLayoutDragging}
          onLayoutIssueChange={setLayoutIssues}
        />
      </main>
    </div>
  );
}

function TopBar({ settings, text, onUpdate, onOpenConsole }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand border-bottom sticky-top glass-nav">
      <div className="container position-relative">
        <span className="navbar-brand fw-semibold">{text.appName}</span>
        <div className="d-flex align-items-center gap-2 ms-auto">
          <button className="btn btn-icon btn-outline-secondary" type="button" title={text.settings} aria-label={text.settings} onClick={() => setSettingsOpen((open) => !open)}>
            <Settings size={18} />
          </button>
        </div>
        {settingsOpen && <SettingsPanel settings={settings} text={text} onUpdate={onUpdate} onOpenConsole={onOpenConsole} onClose={() => setSettingsOpen(false)} />}
      </div>
    </nav>
  );
}

function SettingsPanel({ settings, text, onUpdate, onOpenConsole, onClose }) {
  return (
    <div className="settings-panel">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h2 className="h6 fw-bold mb-0">{text.settings}</h2>
        <button className="btn btn-icon btn-sm btn-outline-secondary" type="button" aria-label={text.close} onClick={onClose}>
          <X size={16} />
        </button>
      </div>
      <SettingRow label={text.language}>
        <select className="form-select form-select-sm" value={settings.language} onChange={(event) => onUpdate({ language: event.target.value })}>
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </SettingRow>
      <SettingRow label={text.theme}>
        <select className="form-select form-select-sm" value={settings.theme} onChange={(event) => onUpdate({ theme: event.target.value })}>
          <option value="light">{text.light}</option>
          <option value="dark">{text.dark}</option>
        </select>
      </SettingRow>
      <div className="settings-action-row">
        <button className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-2" type="button" onClick={onOpenConsole}>
          <SlidersHorizontal size={16} />
          <span>{text.openConsole}</span>
        </button>
      </div>
    </div>
  );
}

function SettingRow({ label, children }) {
  return (
    <label className="setting-row">
      <span>{label}</span>
      {children}
    </label>
  );
}

function Dashboard({ sections, language, editMode, layout, onLayoutChange, onDragStateChange, onLayoutIssueChange }) {
  const panels = sections
    .filter((section) => section.visible !== false)
    .map((section, index) => ({ section, index }));

  if (panels.length === 0) {
    return null;
  }

  if (editMode) {
    return (
      <MoveableDashboard
        panels={panels}
        language={language}
        layout={layout}
        onLayoutChange={onLayoutChange}
        onDragStateChange={onDragStateChange}
        onLayoutIssueChange={onLayoutIssueChange}
      />
    );
  }

  if (Object.keys(layout ?? {}).length > 0) {
    return <StaticLayoutDashboard panels={panels} language={language} layout={layout} />;
  }

  return (
    <div className="dashboard-grid">
      {panels.map((panel) => (
        <SectionPanel panel={panel} language={language} key={panel.section.id} />
      ))}
    </div>
  );
}

function StaticLayoutDashboard({ panels, language, layout }) {
  const canvasRef = useRef(null);
  const containerWidth = canvasRef.current?.clientWidth
    ?? document.querySelector('.site-shell main.container')?.clientWidth
    ?? Math.min(Math.max(window.innerWidth - 48, 320), 1320);
  const defaultLayout = buildDefaultPixelLayout(panels, containerWidth);
  const renderedLayout = defaultLayout.map((fallback) => normalizeStoredLayout(layout[fallback.id], fallback, containerWidth));
  const canvasHeight = Math.max(0, ...renderedLayout.map((layoutBox) => layoutBox.top + layoutBox.height)) + DEFAULT_LAYOUT_GAP;

  return (
    <div className="static-layout-canvas" ref={canvasRef} style={{ minHeight: canvasHeight }}>
      {panels.map((panel) => {
        const layoutBox = renderedLayout.find((candidate) => candidate.id === panel.section.id);
        return (
          <div
            className="static-layout-panel"
            key={panel.section.id}
            style={{
              width: layoutBox.width,
              height: layoutBox.height,
              transform: `translate(${layoutBox.left}px, ${layoutBox.top}px)`,
            }}
          >
            <SectionPanel panel={panel} language={language} />
          </div>
        );
      })}
    </div>
  );
}

function MoveableDashboard({ panels, language, layout, onLayoutChange, onDragStateChange, onLayoutIssueChange }) {
  const canvasRef = useRef(null);
  const targetsRef = useRef({});
  const liveLayoutRef = useRef([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);

  const containerWidth = canvasRef.current?.clientWidth
    ?? document.querySelector('.site-shell main.container')?.clientWidth
    ?? Math.min(Math.max(window.innerWidth - 48, 320), 1320);
  const defaultLayout = buildDefaultPixelLayout(panels, containerWidth);
  const renderedLayout = defaultLayout.map((fallback) => normalizeStoredLayout(layout[fallback.id], fallback, containerWidth));
  const canvasHeight = Math.max(0, ...renderedLayout.map((layoutBox) => layoutBox.top + layoutBox.height)) + DEFAULT_LAYOUT_GAP;
  liveLayoutRef.current = renderedLayout;

  const syncIssue = (layoutBoxes) => {
    const issues = findLayoutOverlaps(layoutBoxes);
    onLayoutIssueChange(issues);
  };

  const commitLiveLayout = () => {
    const layoutBoxes = liveLayoutRef.current.map((layoutBox) => ({ ...layoutBox }));
    onLayoutChange(layoutBoxes);
    syncIssue(layoutBoxes);
  };

  const updateLiveLayoutBox = (sectionId, patch) => {
    liveLayoutRef.current = liveLayoutRef.current.map((layoutBox) => (layoutBox.id === sectionId ? { ...layoutBox, ...patch } : layoutBox));
  };

  return (
    <div className="moveable-canvas" ref={canvasRef} style={{ minHeight: canvasHeight }}>
      {panels.map((panel) => {
        const layoutBox = renderedLayout.find((candidate) => candidate.id === panel.section.id);
        return (
          <div
            className={`moveable-panel ${selectedId === panel.section.id ? 'selected' : ''}`}
            data-section-id={panel.section.id}
            key={panel.section.id}
            ref={(node) => {
              if (node) targetsRef.current[panel.section.id] = node;
            }}
            style={{
              width: layoutBox.width,
              height: layoutBox.height,
              transform: `translate(${layoutBox.left}px, ${layoutBox.top}px)`,
            }}
            onPointerDown={() => {
              setSelectedId(panel.section.id);
              setSelectedTarget(targetsRef.current[panel.section.id]);
            }}
          >
            <SectionPanel panel={panel} language={language} editMode />
          </div>
        );
      })}

      {selectedTarget && (
        <Moveable
          target={selectedTarget}
          container={canvasRef.current}
          draggable
          resizable
          snappable
          snapThreshold={10}
          bounds={{ left: 0, top: 0, right: containerWidth }}
          verticalGuidelines={[0, containerWidth / 2, containerWidth]}
          horizontalGuidelines={[0, 160, 320, 480, 640, 800, 960, 1120, 1280, 1440, 1600]}
          elementGuidelines={Object.values(targetsRef.current).filter((target) => target !== selectedTarget)}
          onDragStart={() => onDragStateChange(true)}
          onDrag={(event) => {
            const [left, top] = event.beforeTranslate;
            const safeTop = Math.max(0, top);
            event.target.style.transform = `translate(${left}px, ${safeTop}px)`;
            updateLiveLayoutBox(selectedId, { left, top: safeTop });
          }}
          onDragEnd={() => {
            onDragStateChange(false);
            commitLiveLayout();
          }}
          onResizeStart={() => onDragStateChange(true)}
          onResize={(event) => {
            const [left, top] = event.drag.beforeTranslate;
            const width = Math.max(160, event.width);
            const height = Math.max(140, event.height);
            const safeTop = Math.max(0, top);
            event.target.style.width = `${width}px`;
            event.target.style.height = `${height}px`;
            event.target.style.transform = `translate(${left}px, ${safeTop}px)`;
            updateLiveLayoutBox(selectedId, { left, top: safeTop, width, height });
          }}
          onResizeEnd={() => {
            onDragStateChange(false);
            commitLiveLayout();
          }}
        />
      )}
    </div>
  );
}

function SectionPanel({ panel, language, editMode = false }) {
  return (
    <section className={`content-panel ${editMode ? 'editable-panel' : ''}`}>
      <div className={`d-flex align-items-start justify-content-between gap-3 mb-3 ${editMode ? 'panel-drag-handle' : ''}`}>
        <h2 className="h4 fw-bold mb-0">{getText(panel.section.title, language)}</h2>
        <span className="section-mark">{sectionNumber(panel.index)}</span>
      </div>
      {renderSectionContent(panel.section, language)}
    </section>
  );
}

function OwnerConsole(props) {
  const { settings, hero, sections, text, language, onClose, onEnterLayout, onUpdate, onUpdateHero, onToggleSection, onSaveContentSort, onReset } = props;
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className={`console-screen ${settings.theme === 'dark' ? 'theme-dark' : 'theme-light'}`} role="dialog" aria-modal="true" aria-label={text.consoleTitle}>
      <header className="console-header">
        <div>
          <p className="section-kicker mb-1">{text.ownerArea}</p>
          <h2 className="h4 fw-bold mb-0">{text.consoleTitle}</h2>
        </div>
        <button className="btn btn-icon btn-outline-secondary" type="button" aria-label={text.close} onClick={onClose}><X size={18} /></button>
      </header>

      <div className="console-workspace">
          <aside className="console-sidebar">
            <button className={`console-tab ${activeTab === 'hero' ? 'active' : ''}`} type="button" onClick={() => setActiveTab('hero')}>{text.heroControl}</button>
            <button className={`console-tab ${activeTab === 'sort' ? 'active' : ''}`} type="button" onClick={() => setActiveTab('sort')}>{text.contentSort}</button>
            <button className={`console-tab ${activeTab === 'visibility' ? 'active' : ''}`} type="button" onClick={() => setActiveTab('visibility')}>{text.visibilityControl}</button>
            <button className={`console-tab ${activeTab === 'layout' ? 'active' : ''}`} type="button" onClick={() => setActiveTab('layout')}>{text.layoutMode}</button>
          </aside>
          <section className="console-main">
            {activeTab === 'hero' && <HeroControl hero={hero} text={text} language={language} onUpdate={onUpdateHero} />}
            {activeTab === 'sort' && <ContentSortControl sections={sections} text={text} language={language} onSave={onSaveContentSort} />}
            {activeTab === 'visibility' && <VisibilityControl sections={sections} text={text} language={language} onToggleSection={onToggleSection} />}
            {activeTab === 'layout' && <LayoutControl settings={settings} text={text} onReset={onReset} onEnter={() => { onUpdate({ editMode: true }); onEnterLayout(); }} />}
          </section>
      </div>
    </div>
  );
}

function EmptyConsoleState({ text }) {
  return <p className="text-muted mb-0">{text.noSections}</p>;
}

function HeroControl({ hero, text, language, onUpdate }) {
  const selectedImageIds = hero.imageIds ?? [];
  const toggleImage = (imageId) => {
    const nextIds = selectedImageIds.includes(imageId)
      ? selectedImageIds.filter((id) => id !== imageId)
      : [...selectedImageIds, imageId];
    onUpdate({ imageIds: nextIds });
  };

  return (
    <div>
      <div className="console-title-row">
        <div>
          <h3 className="h5 fw-bold mb-1">{text.heroControl}</h3>
          <p className="text-muted mb-0">Hero 固定显示在页面顶部，不参与普通板块排序或布局拖拽。</p>
        </div>
      </div>

      <div className="hero-control-list mt-3">
        <label className="hero-control-row">
          <span className="hero-control-label">{text.heroName}</span>
          <select className="form-select" value={hero.nameId} onChange={(event) => onUpdate({ nameId: event.target.value })}>
            {heroNames.map((name) => (
              <option value={name.id} key={name.id}>{name.label}: {name.value}</option>
            ))}
          </select>
        </label>

        <label className="hero-control-row">
          <span className="hero-control-label">{text.heroIntro}</span>
          <select className="form-select" value={hero.introId} onChange={(event) => onUpdate({ introId: event.target.value })}>
            {heroIntros.map((intro) => (
              <option value={intro.id} key={intro.id}>{getText(intro.label, language)}</option>
            ))}
          </select>
        </label>

        <div className="hero-control-row hero-control-row-top">
          <span className="hero-control-label">{text.heroImages}</span>
          <div className="hero-image-options">
            {heroImages.map((image) => (
              <label className="hero-image-option" key={image.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedImageIds.includes(image.id)}
                  onChange={() => toggleImage(image.id)}
                />
                <span className="hero-image-copy">
                  <strong>{getText(image.label, language)}</strong>
                  <span>{getText(image.alt, language) || image.id}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSortControl({ sections, text, language, onSave }) {
  const [sectionDraft, setSectionDraft] = useState(() => resequence(sortByOrder(sections)));
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSectionDraft(resequence(sortByOrder(sections)));
  }, [sections]);

  const resetDraft = () => {
    setSectionDraft(resequence(sortByOrder(sections)));
    setSaved(false);
  };

  const saveDraft = () => {
    const nextSections = resequence(sectionDraft);
    onSave({ sections: nextSections });
    setSectionDraft(nextSections);
    setSaved(true);
  };

  return (
    <div>
      <div className="console-title-row">
        <div>
          <h3 className="h5 fw-bold mb-1">{text.contentSort}</h3>
          <p className="text-muted mb-0">{text.dragToSort}</p>
        </div>
        {sectionDraft.length > 0 && (
          <div className="section-actions">
            <button className="btn btn-outline-danger btn-icon" type="button" aria-label={text.cancel} title={text.cancel} onClick={resetDraft}><X size={17} /></button>
            <button className="btn btn-outline-primary btn-icon" type="button" aria-label={text.save} title={text.save} onClick={saveDraft}><Check size={17} /></button>
          </div>
        )}
      </div>

      {saved && <p className="layout-save-state static mb-3">{text.sortSaved}</p>}

      <div className="sort-tree">
        {sectionDraft.length === 0 ? <EmptyConsoleState text={text} /> : sectionDraft.map((section, index) => (
          <article className="sort-section" key={section.id}>
            <SortRow
              label={getText(section.title, language)}
              meta={sectionNumber(index)}
              draggable
              scope="sections"
              onMove={(from, to) => {
                setSectionDraft((current) => moveRecord(current, from, to));
                setSaved(false);
              }}
              index={index}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

function moveRecord(records, fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return records;
  const next = [...records];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return resequence(next);
}

function SortRow({ label, meta, draggable = false, index, scope, onMove }) {
  const handleDragStart = (event) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('application/x-my-web-sort', JSON.stringify({ index, scope }));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const payload = event.dataTransfer.getData('application/x-my-web-sort');
    if (!payload) return;
    try {
      const { index: from, scope: sourceScope } = JSON.parse(payload);
      if (sourceScope === scope && Number.isFinite(from)) onMove(from, index);
    } catch {
      // Ignore drops from outside the sorting list.
    }
  };

  return (
    <div
      className="sort-row"
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <span className="btn btn-icon btn-sm btn-outline-secondary sort-toggle" aria-hidden="true"><GripVertical size={15} /></span>
      <GripVertical className="sort-grip" size={16} aria-hidden="true" />
      <span className="sort-label">{label}</span>
      <span className="sort-meta">{meta}</span>
    </div>
  );
}

function VisibilityControl({ sections, text, language, onToggleSection }) {
  return (
    <div>
      <div className="console-title-row"><h3 className="h5 fw-bold mb-1">{text.visibilityControl}</h3></div>
      <div className="visibility-tree">
        {sections.length === 0 ? <EmptyConsoleState text={text} /> : sections.map((section) => {
          const sectionVisible = section.visible !== false;
          return (
            <article className="tree-section" key={section.id}>
              <div className="tree-section-row">
                <div className="tree-section-title">{sectionVisible ? <Eye size={18} /> : <EyeOff size={18} />}<div><strong>{getText(section.title, language)}</strong><span>{section.id}</span></div></div>
                <SwitchToggle checked={sectionVisible} label={text.visible} hideLabel onChange={() => onToggleSection(section.id)} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function LayoutControl({ settings, text, onReset, onEnter }) {
  return (
    <div>
      <div className="console-title-row"><h3 className="h5 fw-bold mb-1">{text.layoutMode}</h3></div>
      <div className="basic-grid">
        <button className="btn btn-primary d-inline-flex align-items-center justify-content-center gap-2" type="button" disabled={settings.editMode} onClick={onEnter}>
          <LayoutGrid size={16} />
          <span>{settings.editMode ? text.layoutModeActive : text.enterLayoutMode}</span>
        </button>
        <button className="btn btn-outline-secondary" type="button" onClick={onReset}>{text.reset}</button>
      </div>
    </div>
  );
}

function SwitchToggle({ checked, label, onChange, hideLabel = false }) {
  return <label className="switch-toggle">{!hideLabel && <span>{label}</span>}<input className="form-check-input" type="checkbox" checked={checked} aria-label={label} onChange={onChange} /></label>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);


