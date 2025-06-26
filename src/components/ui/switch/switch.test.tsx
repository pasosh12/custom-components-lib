import { render, screen } from '@testing-library/react';
import { Switch } from './Switch';
import s from './Switch.module.css'

describe('Switch – prop-based rendering', () => {
    it('renders label when provided', () => {
        render(<Switch label="Enable dark mode" />);
        expect(screen.getByText(/enable dark mode/i)).toBeInTheDocument();
    });

    it('renders as disabled when prop is true', () => {
        render(<Switch disabled label="Disabled switch" />);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('applies size-specific class for "small"', () => {
        const { container } = render(<Switch size="small" label="Small" />);
        const inner = container.querySelector(`.${s.switch}`);
        expect(inner).toHaveClass(s.switch__small);
    });

    it('applies checked styles when "checked" is true', () => {
        const { container } = render(<Switch checked label="On" />);
        const inner = container.querySelector(`.${s.switch}`);
        expect(inner).toHaveClass(s.switch__checked);
    });

    it('spreads extra props like aria-label', () => {
        render(<Switch aria-label="toggle input" />);
        const button = screen.getByLabelText(/toggle input/i);
        expect(button).toBeInTheDocument();
    });
});
