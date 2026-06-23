import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { defaultHeroSelection, heroImages, heroIntros, heroNames } from './heroData';

function text(value, language) {
  return value?.[language] || value?.en || value?.zh || '';
}

function findById(records, id, fallbackId) {
  return records.find((record) => record.id === id) ?? records.find((record) => record.id === fallbackId) ?? records[0];
}

export function Hero({ language, selection = defaultHeroSelection }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const name = findById(heroNames, selection.nameId, defaultHeroSelection.nameId);
  const intro = findById(heroIntros, selection.introId, defaultHeroSelection.introId);
  const selectedImages = useMemo(() => {
    const ids = selection.imageIds?.length ? selection.imageIds : defaultHeroSelection.imageIds;
    return ids.map((id) => heroImages.find((image) => image.id === id)).filter(Boolean);
  }, [selection.imageIds]);
  const activeImage = selectedImages[activeImageIndex % Math.max(selectedImages.length, 1)];
  const hasMultipleImages = selectedImages.length > 1;

  const goToImage = (direction) => {
    if (!hasMultipleImages) return;
    setActiveImageIndex((current) => (current + direction + selectedImages.length) % selectedImages.length);
  };

  return (
    <section className="hero-band hero-with-photo mb-4">
      <div className="hero-copy">
        <p className="text-uppercase small text-primary-emphasis fw-semibold mb-2">
          {name.label}
        </p>
        <h1 className="display-6 fw-bold mb-3">
          {name.value}
        </h1>
        <p className="lead mb-0">
          {text(intro.text, language)}
        </p>
      </div>
      <div className="hero-photo-box">
        <div className="hero-carousel" aria-live="polite">
          {activeImage?.src ? (
            <img className="hero-carousel-image" src={activeImage.src} alt={text(activeImage.alt, language)} key={activeImage.id} />
          ) : (
            <div className="hero-photo-placeholder" key={activeImage?.id ?? 'placeholder'} />
          )}
          {hasMultipleImages && (
            <div className="hero-carousel-controls">
              <button className="btn btn-icon btn-sm btn-outline-secondary" type="button" aria-label="Previous image" onClick={() => goToImage(-1)}>
                <ChevronLeft size={16} />
              </button>
              <span>{activeImageIndex + 1} / {selectedImages.length}</span>
              <button className="btn btn-icon btn-sm btn-outline-secondary" type="button" aria-label="Next image" onClick={() => goToImage(1)}>
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
