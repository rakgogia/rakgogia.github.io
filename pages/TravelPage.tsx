import React from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { USStateFlags } from 'us-state-flags';
import Section from '../components/Section';
import { travelMapEmbedUrl } from '../data';
import { useTravelMapData, type CountryLocation } from '../hooks/useTravelMapData';

const regions = ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania', 'Antarctic', 'Other'] as const;
const countryDivisions = [
  'Northern Africa',
  'Eastern Africa',
  'Middle Africa',
  'Southern Africa',
  'Western Africa',
  'Caribbean',
  'Central America',
  'Northern America',
  'South America',
  'Central Asia',
  'Eastern Asia',
  'South-Eastern Asia',
  'Southern Asia',
  'Western Asia',
  'Central Europe',
  'Eastern Europe',
  'Northern Europe',
  'Southeast Europe',
  'Southern Europe',
  'Western Europe',
  'Australia and New Zealand',
  'Melanesia',
  'Micronesia',
  'Polynesia',
  'Other',
] as const;
const stateRegions = ['Northeast', 'Midwest', 'South', 'West'] as const;
const stateDivisions = [
  'New England',
  'Mid-Atlantic',
  'East North Central',
  'West North Central',
  'South Atlantic',
  'East South Central',
  'West South Central',
  'Mountain',
  'Pacific',
] as const;
const indianStateZones = ['Northern', 'Central', 'Eastern', 'Western', 'Southern', 'North-Eastern', 'Other'] as const;

const sortByName = <T extends { name: string },>(items: readonly T[]): T[] =>
  [...items].sort((first, second) => first.name.localeCompare(second.name));

interface CollapsibleSectionProps {
  id?: string;
  title: string;
  count: number;
  className?: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ id, title, count, className = '', children }) => (
  <details id={id} open className={`group scroll-mt-24 ${className}`}>
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

const CountryCard: React.FC<{ country: CountryLocation; targetId?: string }> = ({ country, targetId }) => {
  const content = (
    <>
      {country.code ? (
        <span className={`fi fi-${country.code.toLowerCase()} flex-none rounded-sm text-3xl shadow-sm`} role="img" aria-label={`${country.name} flag`} />
      ) : (
        <span className="text-3xl" aria-hidden="true">{country.flag}</span>
      )}
      <span className="text-sm font-bold leading-tight text-slate-800">{country.name}</span>
      {targetId && <span className="ml-auto text-lg text-cyan-700" aria-hidden="true">↓</span>}
    </>
  );
  const className = "flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md";

  return targetId ? (
    <a href={`#${targetId}`} className={className} aria-label={`View ${country.name} state details`}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
};

const IndianStateCard: React.FC<{ state: { name: string } }> = ({ state }) => (
  <div className="flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
    <span className="fi fi-in flex-none rounded-sm text-3xl shadow-sm" role="img" aria-label="India flag" />
    <span className="text-sm font-bold leading-tight text-slate-800">{state.name}</span>
  </div>
);

const TravelPage: React.FC = () => {
  const {
    countriesLivedIn,
    visitedCountries,
    usStatesLivedIn,
    usStatesVisited,
    indianStatesLivedIn,
    indianStatesVisited,
  } = useTravelMapData();

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
              <CountryCard
                key={country.name}
                country={country}
                targetId={country.name === 'United States' ? 'us-states-lived-in' : country.name === 'India' ? 'indian-states-lived-in' : undefined}
              />
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Countries I Have Visited" count={visitedCountries.length} className="mb-10">
          <div className="space-y-8">
            {regions.map((region) => {
              const countries = sortByName(visitedCountries.filter((country) => country.region === region));
              if (!countries.length) return null;

              const isDivided = countries.length > 9;
              const groups = isDivided
                ? countryDivisions
                    .map((division) => ({
                      name: division,
                      countries: countries.filter((country) => country.division === division),
                    }))
                    .filter((group) => group.countries.length > 0)
                : [{ name: region, countries }];

              return (
                <section key={region}>
                  {isDivided && (
                    <div className="mb-5 flex items-center gap-3">
                      <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{region}</h4>
                      <span className="h-px flex-1 bg-slate-200" />
                      <span className="text-xs font-bold text-slate-400">{countries.length}</span>
                    </div>
                  )}
                  <div className={isDivided ? 'space-y-6 pl-4 sm:pl-6' : ''}>
                    {groups.map((group) => (
                      <div key={group.name}>
                        <div className="mb-3 flex items-center gap-3">
                          {isDivided ? (
                            <h5 className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700">{group.name}</h5>
                          ) : (
                            <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{group.name}</h4>
                          )}
                          <span className="h-px flex-1 bg-slate-200" />
                          <span className="text-xs font-bold text-slate-400">{group.countries.length}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {group.countries.map((country) => (
                            <CountryCard
                              key={country.name}
                              country={country}
                              targetId={country.name === 'United States' ? 'us-states-visited' : country.name === 'India' ? 'indian-states-visited' : undefined}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="us-states-lived-in" title="U.S. States I Have Lived In" count={usStatesLivedIn.length} className="mb-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {sortByName(usStatesLivedIn).map((state) => (
              <div key={state.name} className="flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
                <USStateFlags state={state.abbreviation} showFlag flagSize="sm" flagAlt={`${state.name} flag`} />
                <span className="text-sm font-bold leading-tight text-slate-800">{state.name}</span>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="us-states-visited" title="U.S. States I Have Visited" count={usStatesVisited.length} className="mb-10">
          <div className="space-y-8">
            {stateRegions.flatMap((region) => {
              const states = sortByName(usStatesVisited.filter((state) => state.region === region));
              if (!states.length) return null;

              const isDivided = states.length > 9;
              const groups = isDivided
                ? stateDivisions
                    .map((division) => ({
                      name: division,
                      states: states.filter((state) => state.division === division),
                    }))
                    .filter((group) => group.states.length > 0)
                : [{ name: region, states }];

              return (
                <section key={region}>
                  {isDivided && (
                    <div className="mb-5 flex items-center gap-3">
                      <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{region}</h4>
                      <span className="h-px flex-1 bg-slate-200" />
                      <span className="text-xs font-bold text-slate-400">{states.length}</span>
                    </div>
                  )}
                  <div className={isDivided ? 'space-y-6 pl-4 sm:pl-6' : ''}>
                    {groups.map((group) => (
                      <div key={group.name}>
                        <div className="mb-3 flex items-center gap-3">
                          {isDivided ? (
                            <h5 className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700">{group.name}</h5>
                          ) : (
                            <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{group.name}</h4>
                          )}
                          <span className="h-px flex-1 bg-slate-200" />
                          <span className="text-xs font-bold text-slate-400">{group.states.length}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {group.states.map((state) => (
                            <div key={state.name} className="flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
                              <USStateFlags state={state.abbreviation} showFlag flagSize="sm" flagAlt={`${state.name} flag`} />
                              <span className="text-sm font-bold leading-tight text-slate-800">{state.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="indian-states-lived-in" title="Indian States I Have Lived In" count={indianStatesLivedIn.length} className="mb-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {sortByName(indianStatesLivedIn).map((state) => (
              <IndianStateCard key={state.name} state={state} />
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="indian-states-visited" title="Indian States I Have Visited" count={indianStatesVisited.length}>
          {indianStatesVisited.length > 9 ? (
            <div className="space-y-8">
              {indianStateZones.map((zone) => {
                const states = sortByName(indianStatesVisited.filter((state) => state.zone === zone));
                if (!states.length) return null;

                return (
                  <section key={zone}>
                    <div className="mb-3 flex items-center gap-3">
                      <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{zone}</h4>
                      <span className="h-px flex-1 bg-slate-200" />
                      <span className="text-xs font-bold text-slate-400">{states.length}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {states.map((state) => <IndianStateCard key={state.name} state={state} />)}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {sortByName(indianStatesVisited).map((state) => (
                <IndianStateCard key={state.name} state={state} />
              ))}
            </div>
          )}
        </CollapsibleSection>
      </Section>
    </div>
  );
};

export default TravelPage;