import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renderiza o nome principal e o cargo', () => {
    render(<Home />);
    
    expect(screen.getByRole('heading', { level: 1, name: /cezar cruz/i })).toBeInTheDocument();
    expect(screen.getByText('Desenvolvedor de Software')).toBeInTheDocument();
  });

  it('renderiza os links das redes sociais com os links corretos', () => {
    render(<Home />);
    
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    const instagramLink = screen.getByRole('link', { name: /instagram/i });

    expect(githubLink).toHaveAttribute('href', 'https://github.com/cezarcruz');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/cezar-cruz/');
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/cezzao1914/');
  });

  it('renderiza a lista de tecnologias', () => {
    render(<Home />);
    
    expect(screen.getByRole('heading', { level: 2, name: /tecnologias/i })).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Kotlin')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('renderiza a seção de certificações', () => {
    render(<Home />);
    
    expect(screen.getByRole('heading', { level: 2, name: /certificações/i })).toBeInTheDocument();
  });

  it('renderiza a foto de perfil otimizada pelo next/image', () => {
    render(<Home />);

    const photo = screen.getByAltText(/foto de perfil de cezar cruz/i);
    expect(photo.tagName).toBe('IMG');
    expect(photo).toHaveAttribute('src', expect.stringContaining('avatars.githubusercontent.com'));
  });

  it('abre os links externos de forma segura em nova aba', () => {
    render(<Home />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(3);

    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
