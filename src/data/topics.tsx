import EleventyIcon from '@/public/topics/11ty.svg'
import AlgorithmsIcon from '@/public/topics/algo.svg'
import AngularIcon from '@/public/topics/angular.webp'
import APIServiceIcon from '@/public/topics/api.webp'
import AWSIcon from '@/public/topics/aws.svg'
import BackendIcon from '@/public/topics/backend.svg'
import CMSIcon from '@/public/topics/cms.svg'
import CollectionIcon from '@/public/topics/collection.svg'
import DLAIIcon from '@/public/topics/deeplearning-ai.png'
import DLIcon from '@/public/topics/dl.webp'
import DockerIcon from '@/public/topics/docker.svg'
import DataIcon from '@/public/topics/ds.webp'
import FreshInstallIcon from '@/public/topics/fresh-install.svg'
import GatsbyIcon from '@/public/topics/gatsby.svg'
import GitIcon from '@/public/topics/git.svg'
import GoogleIcon from '@/public/topics/google.svg'
import JSIcon from '@/public/topics/js.webp'
import LinuxIcon from '@/public/topics/linux.svg'
import AppleIcon from '@/public/topics/macos.webp'
import MathsIcon from '@/public/topics/math.webp'
import MLIcon from '@/public/topics/ml.webp'
import MLOpsIcon from '@/public/topics/mlops.webp'
import MOOCIcon from '@/public/topics/mooc.webp'
import NextJSIcon from '@/public/topics/nextjs.svg'
import NLPIcon from '@/public/topics/nlp.webp'
import OthersIcon from '@/public/topics/others.svg'
import PythonIcon from '@/public/topics/python.webp'
import SkillsIcon from '@/public/topics/skills.webp'
import SSGIcon from '@/public/topics/ssg.svg'
import TimeSeriesIcon from '@/public/topics/time-series.png'
import ToolsIcon from '@/public/topics/tools.webp'
import WebDevIcon from '@/public/topics/web-dev.svg'
import WindowsIcon from '@/public/topics/windows.svg'
import WordpressIcon from '@/public/topics/wordpress.svg'
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
