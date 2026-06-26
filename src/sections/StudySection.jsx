function StudyContent({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body about-section">
        <p className="about-paragraph">
          This section is more like a personal timeline than a pure study record. I currently divide it into primary school, secondary school, university, and internship experience.
        </p>
        <section className="experience-stage">
          <h3>Primary school <span>2014.09-2019.06</span></h3>
          <div className="study-note-list">
            <article className="study-note">
              <div className="study-note-heading">
                <h4>Memories</h4>
                <span>Primary school years</span>
              </div>
              <p>Write your primary school experience here.</p>
            </article>
          </div>
        </section>
        <section className="experience-stage">
          <h3>Secondary school <span>2019.09-2024.06</span></h3>
          <div className="study-note-list">
            <article className="study-note">
              <div className="study-note-heading">
                <h4>Middle and high school</h4>
                <span>Student life</span>
              </div>
              <p>Write your middle school and high school experience here.</p>
            </article>
          </div>
        </section>
        <section className="experience-stage">
          <h3>University <span>2024.09-present</span></h3>
          <div className="study-note-list">
            <article className="study-note">
              <div className="study-note-heading">
                <h4>HKUST</h4>
                <span>Computer Science</span>
              </div>
              <p>I am currently studying at the Hong Kong University of Science and Technology (HKUST), and I am about to enter my third year. My major is Computer Science, and I am especially interested in software development and web development. Through university courses, I have systematically studied programming fundamentals and algorithms, including Python and C++. I also have some understanding of frontend development and data structures, and I am familiar with technologies such as HTML, CSS, and JavaScript.</p>
            </article>
          </div>
        </section>
        <section className="experience-stage">
          <h3>Internship</h3>
          <div className="study-note-list">
            <article className="study-note">
              <div className="study-note-heading">
                <h4>Frontend development</h4>
                <span>AI coding practice</span>
              </div>
              <p>I am currently learning and practicing frontend development skills through an internship. In personal projects and development practice, I am good at and enjoy AI coding. I have used tools including GitHub Copilot, Cursor, GPT Codex, and TRAE CN to assist my development work.</p>
            </article>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="section-body about-section">
      <p className="about-paragraph">
        这个板块与其说是学习经历，不如说是个人经历。我目前先分四个部分来写，分别是小学、中学、大学和实习。目前我还在本科就读，因此大学和实习部分都还在继续展开。
      </p>
      <section className="experience-stage">
        <h3>小学 <span>2014.09-2019.06</span></h3>
        <p className="about-paragraph">
          我在2014年（6岁时）进入了北京市朝阳区日坛小学东恒校区上小学。由于时间线有点过于久远了，所以我只能按照我脑海里面依稀记得的几个关键词来梳理了。
        </p>
        <div className="study-note-list">
          <article className="study-note">
            <div className="study-note-heading">
              <h4>同学和老师</h4>
              <span>小学记忆</span>
            </div>
            <p>这里写同学和老师相关的内容。</p>
          </article>
          <article className="study-note">
            <div className="study-note-heading">
              <h4>成绩</h4>
              <span>学习表现</span>
            </div>
            <p>这里写成绩相关的内容。</p>
          </article>
          <article className="study-note">
            <div className="study-note-heading">
              <h4>荷娃</h4>
              <span>一代传承</span>
            </div>
            <p>这里写荷娃相关的内容。</p>
          </article>
          <article className="study-note">
            <div className="study-note-heading">
              <h4>定向越野</h4>
              <span>梦开始的地方</span>
            </div>
            <p>这里写定向越野相关的内容。</p>
          </article>
          <article className="study-note">
            <div className="study-note-heading">
              <h4>若干次演出</h4>
              <span>舞台经历</span>
            </div>
            <p>这里写演出相关的内容。</p>
          </article>
          <article className="study-note">
            <div className="study-note-heading">
              <h4>《成长没烦恼》</h4>
              <span>短剧经历</span>
            </div>
            <p>这里写《成长没烦恼》相关的内容。</p>
          </article>
        </div>
      </section>
      <section className="experience-stage">
        <h3>中学 <span>2019.09-2024.06</span></h3>
        <div className="study-note-list">
          <article className="study-note">
            <div className="study-note-heading">
              <h4>中学阶段</h4>
              <span>初中与高中</span>
            </div>
            <p>这里写初中和高中阶段的学习经历。</p>
          </article>
        </div>
      </section>
      <section className="experience-stage">
        <h3>大学 <span>2024.09-至今</span></h3>
        <div className="study-note-list">
          <article className="study-note">
            <div className="study-note-heading">
              <h4>香港科技大学</h4>
              <span>计算机科学</span>
            </div>
            <p>我现在就读于香港科技大学（HKUST），是一名准大三生。我的专业是计算机科学，我对软件开发和互联网开发方向比较感兴趣。大学课程中，我系统性学习过编程基础和算法，例如Python和C++语言，我也对前端开发和数据结构有一定的了解，了解HTML，CSS和JavaScript等技术。</p>
          </article>
        </div>
      </section>
      <section className="experience-stage">
        <h3>实习</h3>
        <div className="study-note-list">
          <article className="study-note">
            <div className="study-note-heading">
              <h4>前端开发</h4>
              <span>AI Coding 实践</span>
            </div>
            <p>当前我正在实习中学习和实践相关前端开发技能。在个人项目和开发实践中，我擅长且喜欢 AI Coding，使用过包括 Github Copilot、Cursor、GPT Codex、TRAE CN 等在内的 AI Coding 工具来辅助开发。</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export function StudySection({ language }) {
  return <StudyContent language={language} />;
}
