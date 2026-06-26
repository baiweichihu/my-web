function InterestsContent({ language }) {
  if (language === 'en') {
    return (
      <div className="section-body about-section">
        <p className="about-paragraph">
          My interests are fairly broad. When I was younger, I especially liked board games and sports. These days I have become more of a homebody, so I spend more time playing games and watching videos.
        </p>
        <ul className="interest-list">
          <li>
            <span className="interest-label">Board games</span>
            I am relatively good at chess, and I have also played other games such as Gomoku and checkers.
          </li>
          <li>
            <span className="interest-label">Sports</span>
            I like running and cycling, and I also enjoy badminton and table tennis. I also started orienteering when I was six and kept doing it from primary school until I graduated from high school, for about ten years in total. Since moving to Hong Kong, I have not really been able to take part in orienteering events, but when I go back to Beijing during holidays, I still occasionally join one when I have time.
          </li>
          <li>
            <span className="interest-label">Video games</span>
            I have played popular competitive games such as Honor of Kings, Game for Peace, and Delta Force, as well as classics like Minecraft and Minesweeper. I also play anime-style gacha games such as Genshin Impact, Honkai: Star Rail, Zenless Zone Zero, and Blue Archive. I jokingly call myself a big miHoYo fan because I especially like playing miHoYo games. Besides those, I also play more casual or miscellaneous games like Mahjong Soul, Anipop, and Boom Beach. These days I am mainly playing Delta Force, Minesweeper, and Mahjong Soul.
          </li>
          <li>
            <span className="interest-label">Others</span>
            Besides that, my daily routine often includes browsing Bilibili and listening to Vocaloid-style music. I have also made my own CV voicebank before, though honestly it was not very good. Recently I have also been watching the World Cup. I would call myself a casual football fan, a Messi fan, and my favorite team is Argentina.
          </li>
        </ul>
        <p className="about-paragraph">
          Overall, I am someone who is interested in many different things, and I may pick up even more interests in the future.
        </p>
      </div>
    );
  }

  return (
    <div className="section-body about-section">
      <p className="about-paragraph">
        我的兴趣爱好还是比较广泛的，小时候尤其喜欢棋类和运动，到了现在比较宅了，更多的是打打游戏和刷刷视频。
      </p>
      <ul className="interest-list">
        <li>
          <span className="interest-label">棋类</span>
          相对擅长的有国际象棋，其他棋类比如五子棋、跳棋等也有所涉猎。
        </li>
        <li>
          <span className="interest-label">运动类</span>
          我比较喜欢跑步和骑车，球类方面爱好有羽毛球、乒乓球等。此外，我从六岁开始玩定向越野，从小学跑到高中毕业，一共玩了十年，不过自从到了香港就没办法参加定向越野活动了。假期回到北京之后有时间还会偶尔去参加看看。
        </li>
        <li>
          <span className="interest-label">电子游戏</span>
          我打过王者、和平、三角洲等比较热门的竞技类游戏，也有 MC、扫雷这种经典游戏，还有原神、崩铁、绝区零、蔚蓝档案等二游（米孝子），以及雀魂、开心消消乐、海岛奇兵之类的杂游；现在在玩的还有三角洲、扫雷和雀魂。
        </li>
        <li>
          <span className="interest-label">其他</span>
          除此之外，我每天经常做的也就刷刷B站、听听术曲之类的了。术力口方面我还做过自己的CV声库，不过就是做的很一般就是了。最近世界杯我也在看，算个伪球迷，梅粉，主队是阿根廷。
        </li>
      </ul>
      <p className="about-paragraph">
        总的来说，我是一个对很多东西都感兴趣的人，未来也许会收获更多的兴趣爱好。
      </p>
    </div>
  );
}

export function InterestsSection({ language }) {
  return <InterestsContent language={language} />;
}
