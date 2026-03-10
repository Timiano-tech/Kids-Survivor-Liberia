import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { COUNTY_BY_ID } from '../data/counties';
import { baseFocusAreas, basePrograms, baseStats, basePartners } from '../data/countyDetailsData';

export const useCountyDetail = () => {
  const { countyId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countyId]);

  const county = COUNTY_BY_ID[countyId];

  return {
    county,
    countyId,
    focusAreas: baseFocusAreas,
    programs: basePrograms,
    stats: baseStats,
    partners: basePartners,
  };
};
