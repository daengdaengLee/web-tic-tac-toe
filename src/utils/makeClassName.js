const makeClassName = styleNames => styleNames.length
  ? styleNames.reduce((acc, cur) => `${acc} ${cur}`)
  : '';

export default makeClassName;