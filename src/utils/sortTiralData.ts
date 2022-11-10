const sortTrialData = (value: string) => (a: Sick, b: Sick) => {
  const aIndex = a.sickNm.indexOf(value);
  const bIndex = b.sickNm.indexOf(value);
  if (aIndex === bIndex) {
    if (a.sickNm < b.sickNm) {
      return -1;
    }
    if (a.sickNm > b.sickNm) {
      return 1;
    }
    return 0;
  }
  return aIndex - bIndex;
};

export default sortTrialData;
