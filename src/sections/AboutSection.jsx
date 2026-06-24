function DefaultAbout({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body about-section">
        <p className="section-lead">
          Write your English self-introduction here. This section is intentionally written like HTML, so you can freely add paragraphs, links, lists, images, and small visual blocks.
        </p>

        <div className="feature-block">
          <h3>What I Care About</h3>
          <p>
            Use this area for something more structured: your interests, working style, values, or the kind of things you like building.
          </p>
        </div>

        <figure className="inline-media">
          <div className="media-placeholder">Image</div>
          <figcaption>Replace this block with an actual image when you have one.</figcaption>
        </figure>

        <ul className="clean-list">
          <li>One thing that feels important to you.</li>
          <li>One thing you are learning or building.</li>
          <li>One thing that makes the site feel like yours.</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="section-body about-section">
      <p className="section-lead">
        这里写你的中文自我介绍。这个板块故意写得像 HTML 一样，你可以自由加入段落、链接、列表、图片和一些小的视觉块。
      </p>

      <div className="feature-block">
        <h3>我在意的事情</h3>
        <p>
          这里可以写得更有结构一点：你的兴趣、做事方式、价值观，或者你喜欢做什么样的东西。
        </p>
      </div>

      <figure className="inline-media">
        <div className="media-placeholder">图片</div>
        <figcaption>以后有真实图片时，把这里替换成 img 标签。</figcaption>
      </figure>

      <ul className="clean-list">
        <li>一件你觉得重要的事情。</li>
        <li>一件你正在学习或正在做的事情。</li>
        <li>一件让这个网站更像你的事情。</li>
      </ul>
    </div>
  );
}

function ConciseAbout({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body about-section">
        <p className="section-lead">
          Write a short, direct introduction here. This version is useful when you want the homepage to feel quick and focused.
        </p>
        <div className="feature-block">
          <h3>Now</h3>
          <p>Use this paragraph for what you are studying, building, or paying attention to right now.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section-body about-section">
      <p className="section-lead">
        这里写一版更短、更直接的自我介绍。如果你希望首页更干净，可以用这个版本。
      </p>
      <div className="feature-block">
        <h3>现在</h3>
        <p>这里写你现在正在学习、创作或关注的事情。</p>
      </div>
    </div>
  );
}

function StoryAbout({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body about-section">
        <p className="section-lead">
          Write a more narrative introduction here. This version can be slower, warmer, and more personal.
        </p>
        <div className="feature-block">
          <h3>How I Got Here</h3>
          <p>
            Use this area for a small story: why you care about your field, what changed your direction, or what kind of work keeps pulling you forward.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="section-body about-section">
      <p className="section-lead">
        这里写一版更像故事的自我介绍。它可以更慢一点、更温和一点，也更个人一点。
      </p>
      <div className="feature-block">
        <h3>我是怎么走到这里的</h3>
        <p>
          这里可以写一个小故事：你为什么在意自己的领域，什么改变了你的方向，或者哪类工作一直吸引你往前走。
        </p>
      </div>
    </div>
  );
}

export const aboutSectionMeta = {
  activeVariantId: 'default',
  variants: [
    {
      id: 'default',
      title: { zh: '默认版', en: 'Default' },
    },
    {
      id: 'concise',
      title: { zh: '简洁版', en: 'Concise' },
    },
    {
      id: 'story',
      title: { zh: '故事版', en: 'Story' },
    },
  ],
};

const aboutVariants = {
  default: DefaultAbout,
  concise: ConciseAbout,
  story: StoryAbout,
};

export function AboutSection({ section, language }) {
  const AboutVariant = aboutVariants[section.activeVariantId] ?? DefaultAbout;
  return <AboutVariant language={language} />;
}
