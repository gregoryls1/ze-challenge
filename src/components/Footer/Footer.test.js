import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer', () => {
    test('Should be defined', () => {
        const component = renderer.create(<Footer />);
        expect(component).toBeDefined();
    });
});