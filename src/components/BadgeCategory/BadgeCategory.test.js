import React from 'react';
import renderer from 'react-test-renderer';
import BadgeCategory from './BadgeCategory';

describe('BadgeCategory', () => {
    test('Should be defined', () => {
        const component = renderer.create(<BadgeCategory />);
        expect(component).toBeDefined();
    });
});