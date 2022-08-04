import React from 'react';
import { render, screen } from '@testing-library/react';
import CardProduct from './CardProduct';

describe('CardProduct', () => {
    test('should mount CardProduct Component', () => {
        const component = render(<CardProduct />);

        expect(component).toBeDefined();
    });

    test('should render image product', () => {
        render(<CardProduct nameProduct='Cerveja Geladinha'/>);

        const imgProduct = screen.queryByAltText('Produto: Cerveja Geladinha');

        expect(imgProduct).toBeInTheDocument()
    })

    test('should render price product', () => {
        render(<CardProduct price='R$ 7,00'/>);

        const price = screen.queryByText('R$ 7,00');

        expect(price).toBeInTheDocument()
    })

    test('should render button incrementer amount', () => {
        render(<CardProduct/>);

        const incremental = screen.queryByText('+');

        expect(incremental).toBeInTheDocument()
    })

    test('should render button decrements amount', () => {
        render(<CardProduct/>);

        const decrements = screen.queryByText('-');

        expect(decrements).toBeInTheDocument()
    })
});