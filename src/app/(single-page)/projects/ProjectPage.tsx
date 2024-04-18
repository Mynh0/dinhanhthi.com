'use client'

import FiSearch from '@notion-x/src/icons/FiSearch'
import IoCloseCircle from '@notion-x/src/icons/IoCloseCircle'
import cn from 'classnames'
import Fuse from 'fuse.js'
import { ChangeEvent, useRef, useState } from 'react'

import ProjectItem, { Project, ProjectType } from '../../components/ProjectItem'

export default function ProjectPage(props: { projects: Project[] }) {
  const { projects } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchResult, setSearchResult] = useState<Project[]>(props.projects)
  const [query, setQuery] = useState('')
  const [typesToShow, setTypesToShow] = useState<ProjectType[]>(['bus', 'dt', 'other'])
  const buttonClassName = (type: ProjectType) =>
    cn(
      'px-4 py-1.5 thi-box-code rounded-3xl border-l-4 flex gap-2',
      'text-[0.95rem] flex items-center justify-center',
      {
        'text-white': typesToShow.includes(type),
        'bg-white': !typesToShow.includes(type),
        'border-l-sky-600': type === 'dt',
        'border-l-amber-500': type === 'bus',
        'border-l-emerald-600': type === 'other',
        'bg-sky-600': typesToShow.includes('dt') && type === 'dt',
        'bg-amber-500': typesToShow.includes('bus') && type === 'bus',
        'bg-emerald-600': typesToShow.includes('other') && type === 'other'
      }
    )

  const numClass = (type: ProjectType) =>
    cn(
      'bg-[#ffffffb8] text-slate-800 rounded-full text-[0.8rem] flex items-center justify-center',
      'h-5 w-6',
      {
        '!bg-slate-200': !typesToShow.includes(type)
      }
    )

  const toggleTypeToShow = (type: ProjectType) => {
    if (typesToShow.includes(type)) {
      setTypesToShow(typesToShow.filter(item => item !== type))
    } else {
      setTypesToShow([...typesToShow, type])
    }
  }

  const numDataProjects = projects.filter(project => project.type.includes('dt')).length
  const numBusinessProjects = projects.filter(project => project.type.includes('bus')).length
  const numOtherProjects = projects.filter(project => project.type.includes('other')).length

  const projectsToShow = searchResult.filter(project =>
    typesToShow.some(type => project.type.includes(type))
  )

  const fuseOptions = {
    includeScore: false,
    keys: ['title', 'description']
  }

  const fuse = new Fuse(props.projects, fuseOptions)

  function handleOnchangeInput(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setQuery(value)
    if (value.length) {
      const result = fuse.search(value)
      setSearchResult(result.map(item => item.item))
    } else {
      setSearchResult(props.projects)
    }
  }

  function clearQuery() {
    setQuery('')
    setSearchResult(props.projects)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Tags */}
      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap justify-center sm:justify-start">
        <div className="text-slate-600 whitespace-nowrap">Show only?</div>
        <div className="flex gap-4">
          <button onClick={() => toggleTypeToShow('dt')} className={buttonClassName('dt')}>
            <span className="hidden md:inline whitespace-nowrap">Data</span>
            <span className="md:hidden">Data</span>
            <span className={numClass('dt')}>{numDataProjects}</span>
          </button>
          <button onClick={() => toggleTypeToShow('bus')} className={buttonClassName('bus')}>
            <span className="hidden md:inline whitespace-nowrap">Business</span>
            <span className="md:hidden">Business</span>
            <span className={numClass('bus')}>{numBusinessProjects}</span>
          </button>
          <button onClick={() => toggleTypeToShow('other')} className={buttonClassName('other')}>
            Others
            <span className={numClass('other')}>{numOtherProjects}</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className={cn('flex items-center gap-3 p-4 bg-white rounded-xl')}>
        <div className={cn('grid place-items-center text-slate-500')}>
          <FiSearch className="text-2xl" />
        </div>
        <input
          ref={inputRef}
          className={cn(
            'peer h-full w-full text-ellipsis bg-transparent pr-2 outline-none',
            'm2it-hide-wscb'
          )}
          id="search"
          type="search"
          placeholder={'Search projects...'}
          autoComplete="off"
          value={query}
          onChange={e => handleOnchangeInput(e)}
        />
        {query && (
          <button onClick={() => clearQuery()}>
            <IoCloseCircle className="h-5 w-5 text-slate-500" />
          </button>
        )}
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
        {projectsToShow.map((project: Project) => (
          <ProjectItem
            key={project.id}
            project={project}
            className={cn({
              hidden: !typesToShow.some(type => project.type.includes(type))
            })}
          />
        ))}
      </div>
      {!projectsToShow.length && (
        <div className="text-slate-500 flex gap-2 items-center justify-center w-full">
          <div>No projects found.</div>
        </div>
      )}
    </div>
  )
}
