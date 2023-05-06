import { render } from '@testing-library/react'
import Button from './Button'

describe('@components/Button', () => {
  it('Should render a component',  () => {
    //arrange
    const { getByRole } = render(
      <Button type="button" />
    );
    //act
    const buttonTest = getByRole('button')
    //assert
    expect(buttonTest).toBeDefined();
  });

});