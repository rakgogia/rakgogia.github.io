import React from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { USStateFlags } from 'us-state-flags';
import Section from '../components/Section';
import { travelMapEmbedUrl } from '../data';
import { useTravelMapData } from '../hooks/useTravelMapData';

const regions = ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania', 'Antarctic', 'Other'] as const;
const stateRegions = ['Northeast', 'Midwest', 'South', 'West'] as const;

const sortByName = <T extends { name: string },>(items: readonly T[]): T[] =>
  [...items].sort((first, second) => first.name.localeCompare(second.name));

interface CollapsibleSectionProps {
  title: string;
  count: number;
  className?: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, count, className = '', children }) => (
  <details open className={`group ${className}`}>
    <summary className="mb-6 flex cursor-pointer list-none items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-4 text-white shadow-lg transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden sm:px-6">
      <h3 className="min-w-0 flex-1 text-xl font-black">{title}</h3>
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/15 text-lg font-black backdrop-blur">
        {count}
      </span>
      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-xl font-semibold" aria-hidden="true">
        <span className="group-open:hidden">+</span>
        <span className="hidden group-open:inline">−</span>
      </span>
    </summary>
    {children}
  </details>
);

const TravelPage: React.FC = () => {
  const { countriesLivedIn, visitedCountries, usStatesLivedIn, usStatesVisited } = useTravelMapData();

  return (
    <div>
      <Section title="My Journey Around the World">
        <div className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <iframe
            src={travelMapEmbedUrl}
            title="Map of countries and U.S. states Rakshit Gogia has visited and lived in"
            className="h-[28rem] w-full border-0 sm:h-[34rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <CollapsibleSection title="Countries I Have Lived In" count={countriesLivedIn.length} className="mb-10">
          <div className="grid gap-3 sm:grid-cols-3">
            {sortByName(countriesLivedIn).map((country) => (
              <div key={country.name} className="flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
                {country.code ? (
                  <span className={`fi fi-${country.code.toLowerCase()} flex-none rounded-sm text-3xl shadow-sm`} role="img" aria-label={`${country.name} flag`} />
                ) : (
                  <span className="text-3xl" aria-hidden="true">{country.flag}</span>
                )}
                <span className="text-sm font-bold leading-tight text-slate-800">{country.name}</span>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Countries I Have Visited" count={visitedCountries.length} className="mb-10">
          <div className="space-y-8">
            {regions.map((region) => {
              const countries = sortByName(visitedCountries.filter((country) => country.region === region));
              if (!countries.length) return null;

              return (
                <section key={region}>
                  <div className="mb-3 flex items-center gap-3">
                    <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{region}</h4>
                    <span className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs font-bold text-slate-400">{countries.length}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {countries.map((country) => (
                      <div key={country.name} className="flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
                        {country.code ? (
                          <span className={`fi fi-${country.code.toLowerCase()} flex-none rounded-sm text-3xl shadow-sm`} role="img" aria-label={`${country.name} flag`} />
                        ) : (
                          <span className="text-3xl" aria-hidden="true">{country.flag}</span>
                        )}
                        <span className="text-sm font-bold leading-tight text-slate-800">{country.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="U.S. States I Have Lived In" count={usStatesLivedIn.length} className="mb-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {sortByName(usStatesLivedIn).map((state) => (
              <div key={state.name} className="flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
                <USStateFlags state={state.abbreviation} showFlag flagSize="sm" flagAlt={`${state.name} flag`} />
                <span className="text-sm font-bold leading-tight text-slate-800">{state.name}</span>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="U.S. States I Have Visited" count={usStatesVisited.length}>
          <div className="space-y-8">
            {stateRegions.map((region) => {
              const states = sortByName(usStatesVisited.filter((state) => state.region === region));
              if (!states.length) return null;

              return (
                <div key={region}>
                  <div className="mb-3 flex items-center gap-3">
                    <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{region}</h4>
                    <span className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs font-bold text-slate-400">{states.length}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {states.map((state) => (
                      <div key={state.name} className="flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
                        <USStateFlags state={state.abbreviation} showFlag flagSize="sm" flagAlt={`${state.name} flag`} />
                        <span className="text-sm font-bold leading-tight text-slate-800">{state.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CollapsibleSection>
      </Section>
    </div>
  );
};

export default TravelPage;