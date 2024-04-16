import { SkillGroupType } from '../app/components/SkillGroup'

const skills: SkillGroupType[] = [
  {
    id: 'languages',
    name: 'Languages',
    list: ['postgresql','sqlite','python']
  },
  {
    id: 'data',
    name: 'Data',
    list: [
     'tableau',
     'powerbi',
     'excel'
    ]
  },
  {
    id: 'project_management',
    name: 'Project Management',
    list: [
    'confluence',
    'jira',
    'clickup',
    'asana'
    ]
  },
]

export default skills
