import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';
import { getDictionary } from '@/i18n/dictionaries';

describe('LanguageSwitcher Component', () => {
  it('marca o idioma atual e linka para o outro idioma', () => {
    render(<LanguageSwitcher dict={getDictionary('br')} currentLocale="br" />);

    expect(screen.getByText('BR')).toHaveAttribute('aria-current', 'page');

    const englishLink = screen.getByRole('link', { name: 'English' });
    expect(englishLink).toHaveTextContent('EN');
    expect(englishLink).toHaveAttribute('href', '/en');
    expect(englishLink).toHaveAttribute('hreflang', 'en');
  });

  it('funciona a partir da versão em inglês', () => {
    render(<LanguageSwitcher dict={getDictionary('en')} currentLocale="en" />);

    expect(screen.getByText('EN')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Português' })).toHaveTextContent(
      'BR'
    );
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute(
      'href',
      '/br'
    );
  });
});
