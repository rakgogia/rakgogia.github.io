import { useEffect, useState } from 'react';
import { getStateByName } from 'us-state-flags';
import worldCountries from 'world-countries';
import {
  countriesLivedIn as fallbackCountriesLivedIn,
  indianStatesLivedIn as fallbackIndianStatesLivedIn,
  indianStatesVisited as fallbackIndianStatesVisited,
  travelMapKmlUrl,
  usStatesLivedIn as fallbackUsStatesLivedIn,
  usStatesVisited as fallbackUsStatesVisited,
  visitedCountries as fallbackVisitedCountries,
} from '../data';

export interface CountryLocation {
  name: string;
  flag: string;
  code: string;
  region: string;
  division: string;
}

export interface StateLocation {
  name: string;
  abbreviation: string;
  region?: string;
  division?: string;
}

export interface IndianStateLocation {
  name: string;
  zone: string;
}

interface TravelMapData {
  countriesLivedIn: CountryLocation[];
  visitedCountries: CountryLocation[];
  usStatesLivedIn: StateLocation[];
  usStatesVisited: StateLocation[];
  indianStatesLivedIn: IndianStateLocation[];
  indianStatesVisited: IndianStateLocation[];
}

const stateRegions: Record<string, string> = {
  AL: 'South', AK: 'West', AZ: 'West', AR: 'South', CA: 'West', CO: 'West', CT: 'Northeast', DE: 'South',
  FL: 'South', GA: 'South', HI: 'West', ID: 'West', IL: 'Midwest', IN: 'Midwest', IA: 'Midwest', KS: 'Midwest',
  KY: 'South', LA: 'South', ME: 'Northeast', MD: 'South', MA: 'Northeast', MI: 'Midwest', MN: 'Midwest', MS: 'South',
  MO: 'Midwest', MT: 'West', NE: 'Midwest', NV: 'West', NH: 'Northeast', NJ: 'Northeast', NM: 'West', NY: 'Northeast',
  NC: 'South', ND: 'Midwest', OH: 'Midwest', OK: 'South', OR: 'West', PA: 'Northeast', RI: 'Northeast', SC: 'South',
  SD: 'Midwest', TN: 'South', TX: 'South', UT: 'West', VT: 'Northeast', VA: 'South', WA: 'West', WV: 'South',
  WI: 'Midwest', WY: 'West', DC: 'South',
};

const stateDivisions: Record<string, string> = {
  CT: 'New England', ME: 'New England', MA: 'New England', NH: 'New England', RI: 'New England', VT: 'New England',
  NJ: 'Mid-Atlantic', NY: 'Mid-Atlantic', PA: 'Mid-Atlantic',
  IL: 'East North Central', IN: 'East North Central', MI: 'East North Central', OH: 'East North Central', WI: 'East North Central',
  IA: 'West North Central', KS: 'West North Central', MN: 'West North Central', MO: 'West North Central', NE: 'West North Central', ND: 'West North Central', SD: 'West North Central',
  DE: 'South Atlantic', DC: 'South Atlantic', FL: 'South Atlantic', GA: 'South Atlantic', MD: 'South Atlantic', NC: 'South Atlantic', SC: 'South Atlantic', VA: 'South Atlantic', WV: 'South Atlantic',
  AL: 'East South Central', KY: 'East South Central', MS: 'East South Central', TN: 'East South Central',
  AR: 'West South Central', LA: 'West South Central', OK: 'West South Central', TX: 'West South Central',
  AZ: 'Mountain', CO: 'Mountain', ID: 'Mountain', MT: 'Mountain', NV: 'Mountain', NM: 'Mountain', UT: 'Mountain', WY: 'Mountain',
  AK: 'Pacific', CA: 'Pacific', HI: 'Pacific', OR: 'Pacific', WA: 'Pacific',
};

const indianStateZones: Record<string, string> = {
  'Andaman and Nicobar Islands': 'Southern',
  'Andhra Pradesh': 'Southern',
  'Arunachal Pradesh': 'North-Eastern',
  Assam: 'North-Eastern',
  Bihar: 'Eastern',
  Chandigarh: 'Northern',
  Chhattisgarh: 'Central',
  'Dadra and Nagar Haveli and Daman and Diu': 'Western',
  Delhi: 'Northern',
  Goa: 'Western',
  Gujarat: 'Western',
  Haryana: 'Northern',
  'Himachal Pradesh': 'Northern',
  'Jammu and Kashmir': 'Northern',
  Jharkhand: 'Eastern',
  Karnataka: 'Southern',
  Kerala: 'Southern',
  Ladakh: 'Northern',
  Lakshadweep: 'Southern',
  'Madhya Pradesh': 'Central',
  Maharashtra: 'Western',
  Manipur: 'North-Eastern',
  Meghalaya: 'North-Eastern',
  Mizoram: 'North-Eastern',
  Nagaland: 'North-Eastern',
  Odisha: 'Eastern',
  Puducherry: 'Southern',
  Punjab: 'Northern',
  Rajasthan: 'Northern',
  Sikkim: 'North-Eastern',
  'Tamil Nadu': 'Southern',
  Telangana: 'Southern',
  Tripura: 'North-Eastern',
  'Uttar Pradesh': 'Central',
  Uttarakhand: 'Central',
  'West Bengal': 'Eastern',
};

const countryByName = new Map<string, (typeof worldCountries)[number]>();
worldCountries.forEach((country) => {
  countryByName.set(country.name.common.toLowerCase(), country);
  countryByName.set(country.name.official.toLowerCase(), country);
});

const normalizeCountryRegion = (region: string, subregion: string): string => {
  if (region !== 'Americas') return region;
  return subregion === 'South America' ? 'South America' : 'North America';
};

const normalizeCountryDivision = (subregion: string): string => {
  if (subregion === 'North America') return 'Northern America';
  return subregion || 'Other';
};

const toCountryLocation = (name: string): CountryLocation => {
  const country = countryByName.get(name.toLowerCase());
  if (!country) return { name, flag: '🌍', code: '', region: 'Other', division: 'Other' };

  return {
    name,
    flag: country.flag,
    code: country.cca2,
    region: normalizeCountryRegion(country.region, country.subregion),
    division: normalizeCountryDivision(country.subregion),
  };
};

const toStateLocation = (name: string, includeRegion: boolean): StateLocation | null => {
  const state = getStateByName(name);
  if (!state) return null;

  return {
    name: state.name,
    abbreviation: state.abbreviation,
    ...(includeRegion ? {
      region: stateRegions[state.abbreviation] ?? 'Other',
      division: stateDivisions[state.abbreviation] ?? 'Other',
    } : {}),
  };
};

const toIndianStateLocation = (name: string): IndianStateLocation => ({
  name,
  zone: indianStateZones[name] ?? 'Other',
});

const directChildText = (element: Element, tagName: string): string | undefined =>
  Array.from(element.children)
    .find((child) => child.localName === tagName)
    ?.textContent?.trim();

const getLayerItems = (document: Document, layerName: string): string[] => {
  const folder = Array.from(document.getElementsByTagName('Folder')).find(
    (candidate) => directChildText(candidate, 'name')?.toLowerCase() === layerName.toLowerCase(),
  );

  if (!folder) return [];

  return [...new Set(Array.from(folder.children)
    .filter((child) => child.localName === 'Placemark')
    .map((placemark) => directChildText(placemark, 'name'))
    .filter((name): name is string => Boolean(name)))];
};

const fallbackData: TravelMapData = {
  countriesLivedIn: fallbackCountriesLivedIn.map((country) => toCountryLocation(country.name)),
  visitedCountries: fallbackVisitedCountries.map((country) => toCountryLocation(country.name)),
  usStatesLivedIn: [...fallbackUsStatesLivedIn],
  usStatesVisited: fallbackUsStatesVisited
    .map((state) => toStateLocation(state.name, true))
    .filter((state): state is StateLocation => Boolean(state)),
  indianStatesLivedIn: fallbackIndianStatesLivedIn.map((state) => toIndianStateLocation(state.name)),
  indianStatesVisited: fallbackIndianStatesVisited.map((state) => toIndianStateLocation(state.name)),
};

export const useTravelMapData = (): TravelMapData => {
  const [travelData, setTravelData] = useState<TravelMapData>(fallbackData);

  useEffect(() => {
    const controller = new AbortController();

    const loadTravelData = async () => {
      try {
        const response = await fetch(travelMapKmlUrl, {
          cache: 'no-store',
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`KML request failed with status ${response.status}`);

        const document = new DOMParser().parseFromString(await response.text(), 'application/xml');
        if (document.querySelector('parsererror')) throw new Error('Google My Maps returned invalid KML');

        const visitedCountryNames = getLayerItems(document, 'Countries I have visited');
        const livedCountryNames = getLayerItems(document, 'Countries that I have lived In');
        const livedStateNames = getLayerItems(document, 'US States I have lived in');
        const visitedStateNames = getLayerItems(document, 'US States I have visited');
        const livedIndianStateNames = getLayerItems(document, 'Indian States I have lived in');
        const visitedIndianStateNames = getLayerItems(document, 'Indian states I have visited');

        setTravelData({
          visitedCountries: visitedCountryNames.length
            ? visitedCountryNames.map(toCountryLocation)
            : fallbackData.visitedCountries,
          countriesLivedIn: livedCountryNames.length
            ? livedCountryNames.map(toCountryLocation)
            : fallbackData.countriesLivedIn,
          usStatesLivedIn: livedStateNames.length
            ? livedStateNames.map((name) => toStateLocation(name, false)).filter((state): state is StateLocation => Boolean(state))
            : fallbackData.usStatesLivedIn,
          usStatesVisited: visitedStateNames.length
            ? visitedStateNames.map((name) => toStateLocation(name, true)).filter((state): state is StateLocation => Boolean(state))
            : fallbackData.usStatesVisited,
          indianStatesLivedIn: livedIndianStateNames.length
            ? livedIndianStateNames.map(toIndianStateLocation)
            : fallbackData.indianStatesLivedIn,
          indianStatesVisited: visitedIndianStateNames.length
            ? visitedIndianStateNames.map(toIndianStateLocation)
            : fallbackData.indianStatesVisited,
        });
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          console.warn('Unable to refresh travel data from Google My Maps; using bundled data.', error);
        }
      }
    };

    void loadTravelData();
    return () => controller.abort();
  }, []);

  return travelData;
};
