import React from 'react';
import renderer from 'react-test-renderer';
import Products from './Products';


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Products', () => {
    test('Should be defined', () => {
        const component = renderer.create(<Products />);
        expect(component).toBeDefined();
    });
});