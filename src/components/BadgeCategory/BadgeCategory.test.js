import React from 'react';
import { render, screen } from '@testing-library/react';
import BadgeCategory from './BadgeCategory';

describe('BadgeCategory', () => {
    test('should mount BadgeCategory Component', () => {
        const component = render(<BadgeCategory />);
        expect(component).toBeDefined();
    });

    test('should BadgeCategory props category', () => {
        render(<BadgeCategory category='Cerveja' />);

        const propsCategory = screen.queryByText('Cerveja');

        expect(propsCategory).toBeDefined();
    });
});