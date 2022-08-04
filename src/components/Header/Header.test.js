import React from 'react';

import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('should mount Header Component', () => {
        const component = render(<Header />);
        expect(component).toBeDefined();
    });

    test('should render Logo zé delivery', () => {
        render(<Header />);

        const logoZe = screen.getByAltText('Logo Zé Delivery');

        expect(logoZe).toBeInTheDocument();
    })

    test('should the address contain "Receber em:" "{Endereço}"', () => {
        render(<Header address='R. Prof. Jefferson Seraphim - Jardim Amalia, Volta Redonda - RJ, 27251, Brazil' />);

        const toReceive = screen.queryByText('Receber em:');
        const address = screen.queryByText('R. Prof. Jefferson Seraphim - Jardim Amalia, Volta Redonda - RJ, 27251, Brazil');

        expect(toReceive).toBeInTheDocument()
        expect(address).toBeInTheDocument();
    })

    test('should shopping cart start with 0', () => {
        render(<Header shoppingCart={0} />);

        const shoppingCart = screen.queryByText('0');

        expect(shoppingCart).toBeInTheDocument();
    })

    test('should render shoppingCart', () => {
        render(<Header shoppingCart={0} />);

        const shoppingCart = screen.getByAltText('Carrinho de Compra');

        expect(shoppingCart).toBeInTheDocument();
    })

});