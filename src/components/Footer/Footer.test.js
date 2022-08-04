import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    test('should mount Footer Component', () => {
        const component = render(<Footer />);
        expect(component).toBeDefined();
    });

    test('should render Logo zé delivery', () => {
        render(<Footer />);

        const logoZe = screen.getByAltText('Logo Zé Delivery');

        expect(logoZe).toBeDefined();
    });

    test('should render "Sobre o Zé Delivery"', () => {
        render(<Footer />);

        const aboutTheZe = screen.queryByText('Me ajuda, Zé!');
        const help = screen.queryByText('Me ajuda, Zé!');
        const workWithUs = screen.queryByText('Trabalhe conosco');
        const payment = screen.queryByText('Pagamento na Entrega');
        const citiesServed = screen.queryByText('Cidades atendidas');

        expect(aboutTheZe).toBeDefined();
        expect(help).toBeDefined();
        expect(workWithUs).toBeDefined();
        expect(payment).toBeDefined();
        expect(citiesServed ).toBeDefined();
    });

    test('should render "Parcerias"', () => {
        render(<Footer />);

        const partnerships = screen.queryByText('Parcerias');
        const wantPartner= screen.queryByText('Quero ser parceiro');


        expect(partnerships).toBeDefined();
        expect(wantPartner).toBeDefined();
    });

    test('should render "Já baixou o aplicativo?"', () => {
        render(<Footer />);

        const downloadApp = screen.queryByText('Já baixou o aplicativo?');
        const linkGoogleStore = screen.queryByText('link para ir ao Google PlayStore');
        const linkAppleStore = screen.queryByText('link para ir a Apple Store');


        expect(downloadApp).toBeDefined();
        expect(linkGoogleStore).toBeDefined();
        expect(linkAppleStore).toBeDefined();
    });
});