import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button – Prop-based rendering', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText(/click me/i)).toBeInTheDocument();
    });

    it('applies default variant class', () => {
        render(<Button>Test</Button>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('btn btn--contained btn--medium');
    });

    it('applies variant class when passed', () => {
        render(<Button variant="outlined">Test</Button>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('btn btn--outlined btn--medium');
    });

    it('applies custom className if provided', () => {
        render(<Button className="custom">Test</Button>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('custom');
    });

    it('applies type prop if passed', () => {
        render(<Button type="submit">Submit</Button>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveAttribute('type', 'submit');
    });

    it('is disabled when disabled prop is true', () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('spreads other props like aria-label', () => {
        render(<Button aria-label="labelled">Label test</Button>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveAttribute('aria-label', 'labelled');
    });
});
