const validateStyleNames = validStyleNames => props => {
  if(!props.styleNames) return { ...props, styleNames: [] };
  return { ...props, styleNames: props.styleNames.filter(name => validStyleNames.includes(name)) };
};

export default validateStyleNames;