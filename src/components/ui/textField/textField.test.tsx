import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField – Prop-based rendering', () => {
    it('renders with default label if none provided', () => {
        render(<TextField />);
        expect(screen.getByLabelText('Label')).toBeInTheDocument();
    });

    it('renders custom label when provided', () => {
        render(<TextField label="Username" />);
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('applies outlined variant by default', () => {
        render(<TextField label='Password'/>);
        const input = screen.getByLabelText('Password');
        expect(input.className).toMatch(/outlined/);
    });

    it('applies correct variant class', () => {
        const { rerender } = render(<TextField variant="filled" label='Email' />);
        let input = screen.getByLabelText('Email');
        expect(input.className).toMatch(/filled/);

        rerender(<TextField variant="standard" label='Email'/>);
        input = screen.getByLabelText('Email');
        expect(input.className).toMatch(/standard/);
    });

    it('applies error class when error=true', () => {
        render(<TextField  label='Password' error/>);
        const input = screen.getByLabelText('Password');
        expect(input.className).toMatch(/error/);
    });

    it('spreads extra props like required, id, type', () => {
        render(<TextField id="email" required type="email" label="Email" />);
        const input = screen.getByLabelText('Email') as HTMLInputElement;
        expect(input.id).toBe('email');
        expect(input.required).toBe(true);
        expect(input.type).toBe('email');
    });
});
