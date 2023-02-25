import { useMemo } from "react";

interface Item {
  moon_phase: number;
}

const useMoonPhase = (item: Item) => {
  const phase = item.moon_phase;
  return useMemo(() => {
    if (phase >= 0 && phase < 0.25) return "Waxing Crescent";
    else if (phase === 0.25) return "First Quarter Moon";
    else if (phase > 0.25 && phase < 0.5) return "Waxing Gibious";
    else if (phase === 0.5) return "Full Moon";
    else if (phase > 0.5 && phase < 0.75) return "Waning Gibious";
    else if (phase === 0.75) return "Last Quarter Moon";
    else if (phase > 0.75 && phase < 1) return "Waning Crescent";
    else return "New Moon";
  }, [phase]);
};

export default useMoonPhase;
