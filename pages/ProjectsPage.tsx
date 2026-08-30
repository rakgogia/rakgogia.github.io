import React from 'react';
import Section from '../components/Section';
import {
  CopilotLogo,
  GitHubIcon,
  MicrosoftLogo,
  OutlookLogo,
  SharePointLogo,
  TeamsLogo,
} from '../components/Icons';
import { githubProjects, microsoftSearchProducts, personalProjects } from '../data';

const productLogos: Record<string, React.ElementType> = {
  outlook: OutlookLogo,
  teams: TeamsLogo,
  sharepoint: SharePointLogo,
  copilot: CopilotLogo,
  'copilot-search': CopilotLogo,
};

const languageColors: Record<string, string> = {
  JavaScript: 'bg-yellow-400',
  Python: 'bg-blue-500',
  TypeScript: 'bg-blue-600',
};

const projectAccents = [
  'from-blue-600 to-cyan-400',
  'from-violet-600 to-fuchsia-400',
  'from-amber-500 to-orange-400',
];

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Section title="Professional Projects">
        <article className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-5 text-white shadow-xl shadow-slate-300/40 sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true" />

          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/20">
                <MicrosoftLogo className="h-full w-full" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-300">Microsoft</p>
              </div>
            </div>

            <h3 className="max-w-3xl text-2xl font-black leading-tight sm:text-4xl">
              Improving how people find information across Microsoft 365
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Improved search quality across Outlook, Teams, SharePoint, Copilot, and Copilot Search by enhancing query formulation and language understanding capabilities, enabling more relevant and useful search experiences at scale.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
              {microsoftSearchProducts.map((product) => {
                const Logo = productLogos[product.logo];
                return (
                  <div key={product.name} className="group flex min-h-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10">
                    <Logo className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    <span className="mt-2.5 text-xs font-bold text-slate-200 sm:text-sm">{product.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </Section>

      <Section title="Selected GitHub Projects">
        <div className="grid gap-4 md:grid-cols-2">
          {githubProjects.map((project) => (
            <article key={project.name} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/70 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-slate-950 text-white shadow-md">
                  <GitHubIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                  <span className={`h-2 w-2 rounded-full ${languageColors[project.language] ?? 'bg-slate-400'}`} aria-hidden="true" />
                  {project.language}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-black text-slate-900 sm:text-xl">{project.name}</h3>
              <p className="mt-2 flex-grow text-sm leading-6 text-slate-600">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.topics.map((topic) => (
                  <span key={topic} className="rounded-full bg-cyan-50 px-2.5 py-1 text-[11px] font-bold text-cyan-800">{topic}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs font-black">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-700 transition-colors hover:text-blue-700">
                  View repository <span aria-hidden="true">↗</span>
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-blue-700 transition-colors hover:text-cyan-600">
                    Live project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <a href="https://github.com/rakgogia?tab=repositories" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-blue-700 hover:shadow-md sm:text-sm">
          <GitHubIcon className="h-4 w-4" aria-hidden="true" />
          Explore all repositories
          <span aria-hidden="true">↗</span>
        </a>
      </Section>

      <Section title="Personal Projects">
        <div className="space-y-5">
          {personalProjects.map((project, index) => (
            <article key={project.title} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/70 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-5">
                <div className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${projectAccents[index % projectAccents.length]} text-sm font-black text-white shadow-md sm:h-14 sm:w-14`} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <h3 className="text-lg font-black leading-tight text-slate-900 sm:text-xl">{project.title}</h3>
                    <span className="w-fit whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-500 sm:px-3 sm:text-xs">{project.duration}</span>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">{technology}</span>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5 text-[13px] leading-5 text-slate-600 sm:ml-[4.75rem] sm:text-sm sm:leading-6">
                {project.description.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="flex h-5 flex-none items-center sm:h-6" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProjectsPage;
