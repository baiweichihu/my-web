import { useMemo } from 'react';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { A11y, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { defaultHeroSelection, heroImages, heroIntros, heroNames } from './heroData';

function text(value, language) {
  return value?.[language] || value?.en || value?.zh || '';
}

function findById(records, id, fallbackId) {
  return records.find((record) => record.id === id) ?? records.find((record) => record.id === fallbackId) ?? records[0];
}

export function Hero({ language, selection = defaultHeroSelection }) {
  const name = findById(heroNames, selection.nameId, defaultHeroSelection.nameId);
  const intro = findById(heroIntros, selection.introId, defaultHeroSelection.introId);
  const selectedImages = useMemo(() => {
    const ids = Array.isArray(selection.imageIds) ? selection.imageIds : defaultHeroSelection.imageIds;
    return ids.map((id) => heroImages.find((image) => image.id === id)).filter(Boolean);
  }, [selection.imageIds]);
  const hasImages = selectedImages.length > 0;
  const hasMultipleImages = selectedImages.length > 1;

  return (
    <section className={`hero-band ${hasImages ? 'hero-with-photo' : ''} mb-4`}>
      <div className="hero-copy">
        <h1 className="hero-name fw-bold mb-3">
          {name.value}
        </h1>
        <p className="lead mb-0">
          {text(intro.text, language)}
        </p>
      </div>
      {hasImages && (
        <div className="hero-photo-box">
          <Swiper
            className="hero-carousel"
            modules={[A11y, EffectFade, Navigation]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={hasMultipleImages ? { prevEl: '.hero-carousel-button-prev', nextEl: '.hero-carousel-button-next' } : false}
            allowTouchMove={hasMultipleImages}
            rewind={hasMultipleImages}
            speed={420}
            slidesPerView={1}
          >
            {selectedImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div
                  className="hero-image-frame"
                  role={image.src ? 'img' : undefined}
                  aria-label={image.src ? text(image.alt, language) : undefined}
                  style={image.src ? { backgroundImage: `url(${image.src})` } : undefined}
                />
              </SwiperSlide>
            ))}
            {hasMultipleImages && (
              <>
                <button className="hero-carousel-button hero-carousel-button-prev" type="button" aria-label="Previous image">
                  <CircleChevronLeft className="hero-carousel-icon" size={32} strokeWidth={1.8} />
                </button>
                <button className="hero-carousel-button hero-carousel-button-next" type="button" aria-label="Next image">
                  <CircleChevronRight className="hero-carousel-icon" size={32} strokeWidth={1.8} />
                </button>
              </>
            )}
          </Swiper>
        </div>
      )}
    </section>
  );
}
