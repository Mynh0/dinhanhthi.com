import PostgreSQLIcon from '@/public/about/techs/postgresql.svg'
import SQLiteIcon from '@/public/about/techs/sqlite.png'
import PythonIcon from '@/public/about/techs/python.svg'
import TableauIcon from '@/public/about/techs/tableau.png'
import PowerBIIcon from '@/public/about/techs/powerbi.png'
import ExcelIcon from '@/public/about/techs/excel.png'
import ConfluenceIcon from '@/public/about/techs/confluence.png'
import JiraIcon from '@/public/about/techs/jira.png'
import ClickupIcon from '@/public/about/techs/clickup.png'
import AsanaIcon from '@/public/about/techs/asana.png'
import { StaticImageData } from 'next/image'

export type TechItem = {
  id: string
  name: string
  icon: StaticImageData
  url: string
  imgClass?: string
}

const techs: TechItem[] = [
  {id: 'postgresql',
   name: 'PostgreSQL',
   icon: PostgreSQLIcon,
   url: 'https://www.postgresql.org/'
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    icon: SQLiteIcon,
    url:'https://www.sqlite.org/'
  },
  {
    id: 'python',
    name: 'Python',
    icon: PythonIcon,
    url: 'https://www.python.org/'
  },
{
  id: 'tableau',
  name: 'Tableau',
  icon: TableauIcon,
  url: 'https://www.tableau.com/'
},
{
  id: 'powerbi',
  name: 'PowerBI',
  icon: PowerBIIcon,
  url: 'https://app.powerbi.com/'
},
{
  id: 'excel',
  name: 'Excel',
  icon: ExcelIcon
  url: 'https://www.microsoft.com/'
}, 
{
  id: 'confluence',
  name: 'Confluence',
  icon: ConfluenceIcon,
  url: 'https://www.confluence.com/'
},
{
  id: 'jira',
  name: 'Jira',
  icon: JiraIcon,
  url: 'https://www.atlassian.com/'
},
{
  id: 'cllickup',
  name: 'Clickup',
  icon: ClickupIcon,
  url: 'https://clickup.com/'
},
{
  id: 'asana',
  name: 'Asana',
  icon: AsanaIcon,
  url: 'https://asana.com/'
}
]

export default techs
