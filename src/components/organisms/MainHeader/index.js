import React from 'react';

// import Components
import MainTitle from '../../molecules/MainTitle';
import Header from '../../atoms/Header';

const MainHeader = () => (
  <Header styleNames={['Horizontal__Center']}>
    <MainTitle />
  </Header>
);

export default MainHeader;
