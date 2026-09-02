import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renderiza o copyright com o ano atual e o nome', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    
    expect(screen.getByText(new RegExp(`${currentYear}.*Cezar Cruz`))).toBeInTheDocument();
  });
});

