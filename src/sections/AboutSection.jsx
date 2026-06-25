function GeneralAbout({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body about-section">
        <article className="about-card">
          <h3>Basic Introduction</h3>
          <p className="about-paragraph">
            I am Li Linfeng, an 18-year-old student. Personality-wise, I can be a little introverted and socially reserved around people I do not know very well, but with friends I am much more humorous, lively, and sometimes a bit absurd in a playful way. Deep down, I would describe myself as kind, caring, and responsible. I like helping my friends voluntarily and working with them to solve problems.
          </p>
        </article>
      </div>
    );
  }

  return (
    <div className="section-body about-section">
      <article className="about-card">
        <h3>基本介绍</h3>
        <p className="about-paragraph">
        我是李林峰，是一名十八岁的男生。性格方面，对不太熟悉的人我会表现的有点内向和社恐，而在朋友面前我就是一个幽默风趣，有时会搞点抽象的人。我的性格内在比较善良有爱和有责任心，喜欢自发帮助朋友做事情和解决困难。
        </p>
      </article>
    </div>
  );
}

export function AboutSection({ language }) {
  return <GeneralAbout language={language} />;
}
