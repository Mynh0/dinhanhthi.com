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
  {
    id: 'tools-services',
    name: 'Tools & Services',
    list: [
      'bash',
      'chrome-extension',
      'dialogflow',
      'imgur',
      'gcp',
      'git',
      'gitkraken',
      'huggingface',
      'latex',
      'linkedin',
      'linux',
      'notion',
      'openai',
      'postman',
      'sphinx',
      'vscode'
    ]
  }
]

export default skills
