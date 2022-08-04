import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
    test('Should be defined', () => {
        const component = renderer.create(<Header />);
        expect(component).toBeDefined();
    });
});