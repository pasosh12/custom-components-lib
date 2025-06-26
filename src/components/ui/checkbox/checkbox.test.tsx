import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import  {Checkbox} from './Checkbox';

describe('Checkbox - Prop-based rendering', () => {
    it('renders with label if provided',()=>{
        render(<Checkbox label="Accept terms" onClickHandler={() => {}} />);
        expect(screen.getByText(/accept terms/i)).toBeInTheDocument();
    });

    it('applies "disabled" attribute when disabled is true', () => {
        render(<Checkbox disabled label="Disabled checkbox" onClickHandler={() => {}} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    it('defaults to checked on mount', () => {
        render(<Checkbox label="Default checked" onClickHandler={() => {}} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });
});