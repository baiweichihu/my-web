export function AboutSection({ language }) {
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
