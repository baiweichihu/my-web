import qq_avatar from '../assets/hero/qq_avatar.jpg';
import wechat_avatar from '../assets/hero/wechat_avatar.jpg';
import portrait from '../assets/hero/portrait.jpg'

export const heroNames = [
  {
    id: 'zh-name',
    label: '中文名',
    value: '李林峰',
  },
  {
    id: 'en-name',
    label: '英文名',
    value: 'Li Linfeng',
  },
  {
    id: 'nickname1',
    label: '昵称1',
    value: '白尾赤狐',
  },
  {
    id: 'nickname2',
    label: '昵称2',
    value: '枫',
  },
  {
    id: 'nickname3',
    label: '昵称3',
    value: 'MapleFox',
  },
];

export const heroIntros = [
  {
    id: 'gentle',
    label: { zh: '温和版', en: 'Gentle' },
    text: {
      zh: '一个性格幽默风趣、内心善良有爱的社恐少年。',
      en: 'A humorous and kind introverted boy.',
    },
  },
  {
    id: 'resume',
    label: { zh: '简历版', en: 'Resume' },
    text: {
      zh: '香港科技大学本科在读，计算机科学专业准大三生，热爱且擅长AI编程。',
      en: 'An upcoming Year 3 UG student at Hong Kong University of Science and Technology, majoring in Computer Science, passionate about and skilled in AI coding.',
    },
  },
  {
    id: 'personal',
    label: { zh: '个人版', en: 'Personal' },
    text: {
      zh: '没有人比我更了解我自己。',
      en: 'No one knows me better than myself.',
    },
  },
];

export const heroImages = [
  {
    id: 'portrait',
    label: { zh: '证件照', en: 'Portrait' },
    src: portrait,
    alt: { zh: '人头像', en: 'Portrait' },
  },
  {
    id: 'qq_avatar',
    label: { zh: 'QQ头像', en: 'QQ Avatar' },
    src: qq_avatar,
    alt: { zh: '可爱二次元头像', en: 'Cute Anime Avatar' },
  },
  {
    id: 'wechat_avatar',
    label: { zh: '微信头像', en: 'WeChat Avatar' },
    src: wechat_avatar,
    alt: { zh: '尼克狐尼克', en: 'Nick the Fox' },
  }
];

export const defaultHeroSelection = {
  nameId: 'zh-name',
  introId: 'gentle',
  imageIds: ['portrait'],
  updatedAt: '2026-06-25',
};
