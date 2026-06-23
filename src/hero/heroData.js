export const heroNames = [
  {
    id: 'zh-name',
    label: '中文名',
    value: '你的中文名',
  },
  {
    id: 'en-name',
    label: '英文名',
    value: 'Your English Name',
  },
  {
    id: 'nickname',
    label: '昵称',
    value: '你的昵称',
  },
  {
    id: 'handle',
    label: '网名',
    value: '你的网名',
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
      zh: '这里写一段更适合求职、合作或正式场景的简介。',
      en: 'Write a more formal introduction for recruiting, collaboration, or professional contexts.',
    },
  },
  {
    id: 'personal',
    label: { zh: '个人版', en: 'Personal' },
    text: {
      zh: '这里写一段更像你自己的话，可以更松弛、更有生活感。',
      en: 'Write something that sounds more like you: relaxed, personal, and lived-in.',
    },
  },
];

export const heroImages = [
  {
    id: 'portrait',
    label: { zh: '人头像', en: 'Portrait' },
    src: '',
    alt: { zh: '人头像', en: 'Portrait' },
  },
  {
    id: 'symbol',
    label: { zh: '代表我的图片', en: 'Personal Symbol' },
    src: '',
    alt: { zh: '代表我的图片', en: 'Personal symbol' },
  },
];

export const defaultHeroSelection = {
  nameId: 'zh-name',
  introId: 'gentle',
  imageIds: ['portrait'],
};
