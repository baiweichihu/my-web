function StudyContent({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body study-section">
        <p className="study-paragraph">
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
    <div className="section-body study-section">
      <p className="study-paragraph">
        这个板块与其说是学习经历，不如说是个人经历。我目前先分四个部分来写，分别是小学、中学、大学和实习。目前我还在本科就读，因此大学和实习部分都还在继续展开。
      </p>
      <section className="experience-stage">
        <h3>小学 <span>2014.09-2019.06</span></h3>
        <p className="study-paragraph">
          我在2014年（6岁时）进入了北京市朝阳区日坛小学东恒校区上小学。由于时间线有点过于久远了，所以我只能按照我脑海里面依稀记得的几个关键词来梳理了。
        </p>
        <div className="study-note-list">
          <article className="study-note">
            <div className="study-note-heading">
              <h4>同学和老师</h4>
              <span>X年级(2)班 {" => "} X年级(5)班</span>
            </div>
            <p>2014.09.01，我第一次踏入了日坛小学东恒校区的大门。当时具体的情况，包括具体的时间地点人物、起因经过结果，以及我当时的心态和心情，我已经记不清了，或者说是完全没有记忆了。</p>
            <p>一年级，我还记得我们五班有一位同学叫lyy，据说因为在课桌上吐口水吹泡泡、还有顶撞老师等等原因被开除了。此外班里还有像是hzy、szy等比较逆天的同学，老师们经常批评他们，但是最终也没有发生什么很大的事情导致开除或者退学。至于比较优秀的同学，我现在还记得有张善煜、章熙然、陈昱诚、朱鸿熙、李子祎等：张善煜和章熙然的三科都很不错，经常是全班前三；张善煜还是好几年的班长。朱鸿熙属于是成绩也不差、性格还很憨厚的那种人；陈昱诚的英语一直很好。李子祎的数学很不错，不过后来几年级的时候我记得说是转走出国了。学习能力比较差的也有，比如lyx和ljr，ljr虽然学习成绩比较低但是人的性格很好，lyx的话感觉有点内向，总是静静的一个人坐着。此外还有各方面都处于中等水平、但是为人社交很不错的，比如刘展赫和周泓宇。我还记得一个人ghrm，现在想起来感觉长相有点像陈赫，他家和我家是同一个小区，不过后来听说上中学就搬走了。我记得和他最深的一件事是有点不愉快的事情，这个有机会以后再谈。此外我们隔壁班（4班）有一个叫阿斯卡的中俄混血男生，据说性格也是有点顽劣，但是外表很帅，老师们也对他又爱又恨。</p>
            <p>老师的话，我印象最深刻的肯定还是体育老师丁亚军老师。由于我是体育委员，我和丁老师的交集还是比较多的，再加上定向越野的坚持，丁老师对我的评价还是很高的，包括之后我上了中学和丁老师每周末定向的时候也会见到。其他比较深刻的一个是语文老师杜刚，感觉杜老师为人比较正直，说话铿锵有力，不过脾气还是比较暴躁。此外数学老师一个是低年级带我们的宋老师，为人和性格都很好。后来好像是怀孕了，就没有继续教我们了；再和宋老师见到就是后来定向越野的时候，她带着她的孩子也来定向的时候见到过。另外一个数学老师是张惠X老师（最后一个字我记不清了），性格还是挺好的，不过有时候脾气火爆。我依稀记得由于我的数学成绩一直很不错，张老师对我就是非常温柔和善良的；不过有时候有些学生课堂上不尊重她或者没交作业或者成绩太差的，她也会扯一会嗓子。英语老师我记得是有一位吴老师，声线比较中性，带一副黑色的眼镜。这位老师的性格给我的感觉一般，然后有时也会发脾气，毕竟我们班的神人同学还是太多了。我印象非常深刻的一件事是她曾经找来一位黑人外教，全程说英文来给我们上课。外教过来之前她叮嘱我们不要和外教当面讨论她的肤色，结果外教刚进门没说两句话，hzy直接问一句“Why are you black”，之后外教就当场发怒了，之后我们就再也没有看见那个外教。我的印象里还有一位科学老师，这个老师看起来比较老，并且比较胖，性格很臭，经常对各种同学发火，好像没有几个同学喜欢她。</p>
            <p>补写一下学校的整体概况吧，整体来说日坛小学分为两个校区，东恒校区和四惠校区，每个校区好像有自己的校长，我们这一届来说，四惠校区有三个班，东恒校区有两个班；由于四惠校区比较大，几乎所有两校区联办的活动我们都要走台阶去四惠校区，包括各种表演、运动会和比赛。东恒校区有三层，四惠校区好像有5层还是7层，我记不太清了，装修的话也是经典的大理石瓷砖地板，很花。四惠校区最大的录屏演出室在顶楼，模板是木质的，还有好几排座椅。</p>
            <p>小学的生活还是比较稀松平常的，每周一升国旗唱国歌戴红领巾，然后是国旗下演讲，是在主席台上每周一个班。我记得我们班上去过2-3次，每次演讲需要准备一周多，虽然台下其实也没有人听，但是当时的我就还是比较重视，心里也比较紧张，尤其是拿到话筒说话的那一刻。当时的演讲我记得还是需要背稿的。每周的下午还需要跑圈或者做操，会有一个同学在演播室放音乐。</p>
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
          <article className="study-note">
            <div className="study-note-heading">
              <h4>后记</h4>
              <span>离开日坛之后</span>
            </div>
            <p>这里写离开日坛小学之后和日坛小学相关的内容。</p>
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
