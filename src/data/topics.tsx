import APIServiceIcon from '@/public/topics/api.webp'
import CollectionIcon from '@/public/topics/collection.svg'
import DataIcon from '@/public/topics/ds.webp'
import FreshInstallIcon from '@/public/topics/fresh-install.svg'
import OthersIcon from '@/public/topics/others.svg'
import PythonIcon from '@/public/topics/python.webp'
import SkillsIcon from '@/public/topics/skills.webp'
import ToolsIcon from '@/public/topics/tools.webp'
import WebDevIcon from '@/public/topics/web-dev.svg'
import ManagementConsultingIcon from '@/public/topics/management consulting.png'
import StatisticsIcon from '@/public/topics/stats.svg'
import { Tag } from '@notion-x/src/interface'

const topics: Tag[] = [
  {
    name: 'Management Consulting',
    icon: ManagementConsultingIcon,
    pinned: true
  },
  {
    name: 'API & Services',
    icon: APIServiceIcon,
    pinned: true
  },
  {
    name: 'Collection',
    icon: CollectionIcon,
    description: 'Collection of resources, apps, tools, etc.'
  },
  {
    name: 'Data',
    icon: DataIcon,
    pinned: true
  },
  {
    name: 'Functional Consulting',
    description: 'Provides advice and support to businesses about technology',
    icon: FreshInstallIcon
  },
  {
    name: 'Others',
    icon: OthersIcon,
    pinned: true
  },
  {
    name: 'Python',
    icon: PythonIcon,
    pinned: true
  },
  {
    name: 'Soft Skills',
    icon: SkillsIcon,
    pinned: true
  },
  {
    name: 'Tools',
    icon: ToolsIcon,
    pinned: true
  },
  {
    name: 'Web Dev',
    icon: WebDevIcon,
    pinned: true
  },
  {
    name: 'Statistics',
    icon: StatisticsIcon,
    pinned: true
  }
]

export default topics
