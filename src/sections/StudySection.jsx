function StudyContent({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body about-section">
        <article className="about-card">
          <h3>Study Experience</h3>
          <p className="about-paragraph">
            I am currently studying at the Hong Kong University of Science and Technology (HKUST), and I am about to enter my third year. My major is Computer Science, and I am especially interested in software development and web development. Through university courses, I have systematically studied programming fundamentals and algorithms, including Python and C++. I also have some understanding of frontend development and data structures, and I am familiar with technologies such as HTML, CSS, and JavaScript. In personal projects, I am good at and enjoy AI coding. I have used tools including GitHub Copilot, Cursor, GPT Codex, and TRAE CN to assist my development work. I am currently learning and practicing frontend development skills through an internship.
          </p>
        </article>
      </div>
    );
  }

  return (
    <div className="section-body about-section">
      <article className="about-card">
        <h3>学习经历</h3>
        <p className="about-paragraph">
        我现在就读于香港科技大学（HKUST），是一名准大三生。我的专业是计算机科学，我对软件开发和互联网开发方向比较感兴趣。大学课程中，我系统性学习过编程基础和算法，例如Python和C++语言，我也对前端开发和数据结构有一定的了解，了解HTML，CSS和JavaScript等技术。在个人项目中，我擅长且喜欢AI Coding，使用过包括Github Copilot, Cursor, GPT Codex, TRAE CN等在内的AI Coding工具来辅助开发。当前我正在实习中学习和实践相关前端开发技能。
        </p>
      </article>
    </div>
  );
}

export function StudySection({ language }) {
  return <StudyContent language={language} />;
}
