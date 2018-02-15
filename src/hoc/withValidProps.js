import React from 'react';

const withValidProps = validator => Comp => props => <Comp {...validator(props)} />;

export default withValidProps;