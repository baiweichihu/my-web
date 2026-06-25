function InterestsContent({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body about-section">
        <article className="about-card">
          <h3>Interests</h3>
          <p className="about-paragraph">
            My interests are fairly broad. In board and strategy games, I am relatively good at chess, and I have also played games such as Gomoku and checkers. For sports, I like running and cycling, and I also enjoy badminton and table tennis. As for video games, I have played popular competitive games such as Honor of Kings, Game for Peace, and Delta Force, as well as classics like Minecraft and Minesweeper. I also play games such as Genshin Impact, Honkai: Star Rail, and Zenless Zone Zero, plus more casual games like Mahjong Soul, Anipop, and Boom Beach. These days I am mainly playing Delta Force, Minesweeper, and Mahjong Soul. Besides that, my daily routine often includes browsing Bilibili and listening to Vocaloid-style music. Recently I have also been watching the World Cup. I would call myself a casual football fan, a Messi fan, and my favorite team is Argentina.
          </p>
        </article>
      </div>
    );
  }

  return (
    <div className="section-body about-section">
      <article className="about-card">
        <h3>兴趣爱好</h3>
        <p className="about-paragraph">
        我的兴趣爱好还是比较广泛的。棋类方面，相对擅长的有国际象棋，其他棋类比如五子棋、跳棋等也有所涉猎。运动方面，我比较喜欢跑步和骑车，球类方面爱好有羽毛球、乒乓球等。电子游戏方面，我打过王者、和平、三角洲等比较热门的竞技类游戏，也有MC、扫雷这种经典游戏，还有原神、崩铁、绝区零等二游（米孝子），以及雀魂、开心消消乐、海岛奇兵之类的杂游；现在在玩的还有三角洲、扫雷和雀魂。除此之外，我每天经常做的也就刷刷B站、听听术曲之类的了。最近世界杯我也在看，算个伪球迷，梅粉，主队是阿根廷。
        </p>
      </article>
    </div>
  );
}

export function InterestsSection({ language }) {
  return <InterestsContent language={language} />;
}
