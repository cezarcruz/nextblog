import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getDictionary } from '@/i18n/dictionaries';

describe('Footer Component', () => {
  it('renderiza o copyright com o ano atual e o nome', () => {
    render(<Footer dict={getDictionary('br')} />);
    const currentYear = new Date().getFullYear().toString();

    expect(screen.getByText(new RegExp(`${currentYear}.*Cezar Cruz`))).toBeInTheDocument();
  });

  it('renderiza a versão em inglês', () => {
    render(<Footer dict={getDictionary('en')} />);

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });
});
