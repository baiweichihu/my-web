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
      zh: '这里写一段温和、自然的自我介绍。它会跟随语言切换。',
      en: 'Write a gentle and natural introduction here. It changes with the selected language.',
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
    alt: { zh: '证件照', en: 'Portrait' },
  },
  {
    id: 'personal_photo',
    label: { zh: '生活照', en: 'Personal Photo' },
    src: '',
    alt: { zh: '生活照', en: 'Personal photo' },
  },
  {
    id: 'qq_avatar',
    label: { zh: '可爱头像', en: 'Cute Avatar' },
    src: qq_avatar,
    alt: { zh: '可爱头像', en: 'Cute avatar' },
  },
  {
    id: 'wechat_avatar',
    label: { zh: '尼克狐尼克', en: 'Nick the Fox' },
    src: wechat_avatar,
    alt: { zh: '尼克狐尼克', en: 'Nick the Fox' },
  }
];

export const defaultHeroSelection = {
  nameId: 'zh-name',
  introId: 'gentle',
  imageIds: ['portrait'],
};
