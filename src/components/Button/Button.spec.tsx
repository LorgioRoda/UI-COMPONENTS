import { render } from '@testing-library/react'
import * as React from 'react';
import Button from './Button'

describe('@components/Button', () => {
  it('Should render a component',  () => {
    //arrange
    const component = render(
      <Button />
    );
    //act
    //assert
    expect(component).toBeInTheDocument();
  });

});