import { BadgeInfosProps } from '@notion-x/src/components/BadgeInfos'
import cn from 'classnames'

import me from './me'

export const inforLinks: BadgeInfosProps[] = [
  {
    id: 'contact',
    url: `mailto:${me.email}`,
    title: 'Contact',
    external: true,
    className: cn(
      'px-7 md:shadow-sky-100 font-normal bg-sky-500 border-none hover:bg-sky-600 text-white'
    ),
    targetSelf: true
  },
  {
    id: 'cv',
    url: '/about/',
    title: 'My CV',
    icon: '📋'
  },
  {
    id: 'reading',
    url: 'https://www.goodreads.com/user/show/177211704-ha-my',
    title: 'Reading list',
    icon: '📚',
    external: true
  }
]

export default inforLinks
