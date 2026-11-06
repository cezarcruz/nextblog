import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Experience from './Experience';
import { getDictionary } from '@/i18n/dictionaries';

describe('Experience Component', () => {
  it('renderiza a trajetória em ordem cronológica reversa', () => {
    render(<Experience dict={getDictionary('br')} />);

    const items = within(screen.getByRole('list')).getAllByRole('listitem');
    expect(items).toHaveLength(5);
    expect(items[0]).toHaveTextContent('CI&T');
    expect(items[4]).toHaveTextContent('CPqD');
  });

  it('destaca o cargo atual com o selo "Atual"', () => {
    render(<Experience dict={getDictionary('br')} />);

    expect(screen.getByText('Atual')).toBeInTheDocument();
    expect(
      screen.getAllByText('Engenheiro de Software Sênior')
    ).toHaveLength(2);
  });

  it('exibe as empresas e os períodos de cada experiência', () => {
    render(<Experience dict={getDictionary('br')} />);

    expect(screen.getAllByText('CI&T')).toHaveLength(2);
    expect(screen.getByText('PicPay')).toBeInTheDocument();
    expect(screen.getByText('Nubank')).toBeInTheDocument();
    expect(screen.getByText('CPqD')).toBeInTheDocument();
    expect(screen.getByText('nov 2023 – atual')).toBeInTheDocument();
    expect(screen.getByText('dez 2014 – mar 2022')).toBeInTheDocument();
  });

  it('mostra o destaque de impacto do Open Banking', () => {
    render(<Experience dict={getDictionary('br')} />);

    expect(
      screen.getByText(/open banking no maior banco privado do brasil/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/600\+ TPS/i)).toBeInTheDocument();
  });

  it('renderiza a versão em inglês', () => {
    render(<Experience dict={getDictionary('en')} />);

    expect(screen.getByText('Current')).toBeInTheDocument();
    expect(screen.getByText('Nov 2023 – Present')).toBeInTheDocument();
    expect(screen.getByText('Dec 2014 – Mar 2022')).toBeInTheDocument();
    expect(screen.getByText(/brazil's largest private bank/i)).toBeInTheDocument();
  });
});
