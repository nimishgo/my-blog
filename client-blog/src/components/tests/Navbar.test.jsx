import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../Navbar';


describe('Navigation Bar', () => {
    it('displays title', () => {
      render(<BrowserRouter>
                <NavBar />
            </BrowserRouter>);

        const title = screen.getByRole('heading', {level: 1});

        expect(title.textContent).toBe('Full Stack Tutorials');
    });

    it('displays change theme button', () => {
        render(<BrowserRouter>
                  <NavBar />
              </BrowserRouter>);
  
          const button = screen.getByLabelText('change-theme');
  
          expect(button).toBeInTheDocument();
    });
});