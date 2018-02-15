const makeClassName = styleNames => styleNames.length
  ? styleNames.reduce((acc, cur) => `${acc} ${cur}`)
  : null;

export default makeClassName;