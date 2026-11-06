import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Experience from './Experience';

describe('Experience Component', () => {
  it('renderiza a trajetória em ordem cronológica reversa', () => {
    render(<Experience />);

    const items = within(screen.getByRole('list')).getAllByRole('listitem');
    expect(items).toHaveLength(5);
    expect(items[0]).toHaveTextContent('CI&T');
    expect(items[4]).toHaveTextContent('CPqD');
  });

  it('destaca o cargo atual com o selo "Atual"', () => {
    render(<Experience />);

    expect(screen.getByText('Atual')).toBeInTheDocument();
    expect(
      screen.getAllByText('Engenheiro de Software Sênior')
    ).toHaveLength(2);
  });

  it('exibe as empresas e os períodos de cada experiência', () => {
    render(<Experience />);

    expect(screen.getAllByText('CI&T')).toHaveLength(2);
    expect(screen.getByText('PicPay')).toBeInTheDocument();
    expect(screen.getByText('Nubank')).toBeInTheDocument();
    expect(screen.getByText('CPqD')).toBeInTheDocument();
    expect(screen.getByText('nov 2023 – atual')).toBeInTheDocument();
    expect(screen.getByText('dez 2014 – mar 2022')).toBeInTheDocument();
  });

  it('mostra o destaque de impacto do Open Banking', () => {
    render(<Experience />);

    expect(
      screen.getByText(/open banking no maior banco privado do brasil/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/600\+ TPS/i)).toBeInTheDocument();
  });
});
