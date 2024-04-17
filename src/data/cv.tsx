import GadiacAsiaLogo from '@/public/about/cv/gadiacasia.webp'
import SymperLogo from '@/public/about/cv/symper.png'
import P13Logo from '@/public/about/cv/ftu_logo.png'
import SelfLearnLogo from '@/public/about/cv/avatar_my.png'

import { CVGroupType } from '../app/components/CVGroup'

const cv: CVGroupType[] = [
  {
    id: 'experiences',
    name: 'Experiences',
    list: [
      {
        id: 'self-employed',
        where: 'Self-working',
        logo: SelfLearnLogo,
        url: 'https://www.mynh.id.vn/projects/',
        title: 'Business Consultant',
        date: '2023 — current',
        activity: [
          'I have been working and learning as a self learning business consultant. I have worked on data and business projects of all sizes, from small and simple to large and complex'
        ]
        tech: [
          'tableau',
          'powerbi',
          'python'
        ]
      },
      {
        id: 'symper',
        where: 'Symper',
        bgWhite: false,
        logo: SymperLogo,
        url: 'https://symper.vn/',
        title: 'Business Analyst',
        date: '2023',
        activity: [
          'Symper is a low-code platform company that enables non-technical users to build applications visually without coding.',
          'My job is to Work on two projects over three months - one for transportation, one for steel exports. Engaged in requirements gathering, design of SQL and Power BI solutions, testing, deployment and support for ERP systems.'
        ],
        tech: [
          'postgresql',
          'sqlite',
          'powerbi'
        ]
      },
      {
        id: 'gadiacasia',
        where: 'GadiacAsia',
        logo: GadiacAsiaLogo,
        url: 'https://www.facebook.com/GADiAC.Asia/?locale=vi_VN',
        title: 'Digital  Marketer',
        date: '2023',
        activity: [
          'Gadiac Asia is a strategic marketing agency with outstanding in social media marketing.',
          'Successfully pitched marketing plans and campaigns to 12 stakeholders, utilizing knowledge of blockchain, Jira, Clickup and Agile/OKR methods, winning 5 contracts and contributing to 20% quarterly growth.'
        ],
        tech: [
          'clickup',
          'jira'
        ]
      }
    ]
  },
  {
    id: 'educations',
    name: 'Education',
    list: [
      {
        id: 'self-learning-cs',
        where: 'Self-learning',
        logo: SelfLearnLogo,
        title: 'Business Consultant',
        date: '2023 — current',
        activity: [
          "I've been improving my technical skilss through online courses (Coursera, SAP, ERP) and real projects."
        ]
      },
      {
        id: 'self-learning-web-dev',
        where: 'Self-learning',
        logo: SelfLearnLogo,
        title: 'Web Development',
        date: '2024 — current',
        activity: [
          "I've been learning myself Web Development by making websites."
        ]
      },
      {
        id: 'foreign-trade-university',
        where: 'Foreign Trade University',
        logo: P13Logo,
        bgWhite: true,
        url: 'https://ftu.edu.vn/',
        title: 'Bachelor Degree in Advanced Program in International Business Economics',
        date: '2021 — 2025',
        activity: [
          "I have studied International Business Economics, where I gained knowledge in areas such as international trade, economics, business management and foreign languages. The program equipped me with the skills needed to operate successfully in the global economy."
        ]
      }
    ]
  }
]

export default cv
