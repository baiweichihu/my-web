import { AboutSection } from './AboutSection';
import { InterestsSection } from './InterestsSection';
import { StudySection } from './StudySection';

const sectionComponents = {
  about: AboutSection,
  interests: InterestsSection,
  study: StudySection,
};

function EmptySection({ section }) {
  return (
    <div className="section-body empty-section">
      <p>
        Add <code>{section.id}</code> in <code>src/sections</code> and map it in <code>src/sections/index.jsx</code>.
      </p>
    </div>
  );
}

export function renderSectionContent(section, language) {
  const SectionContent = sectionComponents[section.id] ?? EmptySection;
  return <SectionContent section={section} language={language} />;
}

export function getSectionDefinition(section) {
  return {
    ...section,
    title: section.title,
  };
}
