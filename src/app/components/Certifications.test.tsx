import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Certifications from './Certifications';

describe('Certifications Component', () => {
  it('renderiza todas as certificações da lista com seus respectivos títulos e emissores', () => {
    render(<Certifications />);

    expect(screen.getByText('AWS Certified Cloud Practitioner')).toBeInTheDocument();
    expect(screen.getByText('AWS Cloud Quest: Cloud Practitioner')).toBeInTheDocument();
    expect(screen.getByText('Oracle Certified Associate, Java SE 8 Programmer')).toBeInTheDocument();
    
    // Confirma se os emissores aparecem
    const amazonIssuers = screen.getAllByText('Amazon Web Services');
    expect(amazonIssuers.length).toBe(2);
    expect(screen.getByText('Oracle')).toBeInTheDocument();
  });

  it('possui links válidos direcionando para o Credly', () => {
    render(<Certifications />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3);

    links.forEach((link) => {
      expect(link).toHaveAttribute('href', expect.stringContaining('https://www.credly.com/badges/'));
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});

