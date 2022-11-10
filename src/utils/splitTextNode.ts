const splitTextNode = (string: string, splitter: string, converter?: (splitter: string) => React.ReactNode) => {
  const splittedString = string.split(splitter);
  return [...Array(splittedString.length * 2 - 1)].map((_, i) =>
    i % 2 ? converter?.(splitter) ?? splitter : splittedString[Math.floor(i / 2)]
  );
};

export default splitTextNode;
