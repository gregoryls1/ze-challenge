import React from 'react';
import renderer from 'react-test-renderer';
import CardProduct from './CardProduct';

describe('CardProduct', () => {
    test('Should be defined', () => {
        const component = renderer.create(<CardProduct />);
        expect(component).toBeDefined();
    });
});