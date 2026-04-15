import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { COUNTY_BY_ID } from '../data/counties';
import { baseFocusAreas, basePrograms, baseStats, basePartners, countySpecificData } from '../data/countyDetailsData';

export const useCountyDetail = () => {
  const { countyId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countyId]);

  const county = COUNTY_BY_ID[countyId];
  const specificData = countySpecificData[countyId] || {};

  return {
    county,
    countyId,
    focusAreas: specificData.focusAreas || baseFocusAreas,
    programs: specificData.programs ? [...specificData.programs, ...basePrograms.slice(specificData.programs.length)] : basePrograms,
    stats: specificData.stats || baseStats,
    partners: specificData.partners || basePartners,
    successStories: specificData.successStories || [],
  };
};
