import { generatedUpdatedAt } from './generated/updatedAt';

export const defaultSections = [
  {
    id: 'about',
    visible: true,
    order: 1,
    title: { zh: '自我介绍', en: 'About Me' },
    updatedAt: generatedUpdatedAt.sections.about,
  },
  {
    id: 'interests',
    visible: true,
    order: 2,
    title: { zh: '兴趣爱好', en: 'Interests' },
    updatedAt: generatedUpdatedAt.sections.interests,
  },
  {
    id: 'study',
    visible: true,
    order: 3,
    title: { zh: '个人经历', en: 'Personal Experience' },
    updatedAt: generatedUpdatedAt.sections.study,
  },
];
