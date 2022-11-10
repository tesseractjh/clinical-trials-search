export const flex = (justifyContent = 'center', alignItems = 'center', gap = '0') => `
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  gap: ${gap};
`;
