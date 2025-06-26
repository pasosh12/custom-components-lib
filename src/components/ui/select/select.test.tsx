import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

describe('Select – prop-based rendering', () => {
    it('renders all passed options', () => {
        render(<Select options={['Apple', 'Banana']} />);
        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(3); // +1 пустой option
        expect(options[1]).toHaveTextContent('Apple');
        expect(options[2]).toHaveTextContent('Banana');
    });

    it('renders label when provided', () => {
        render(<Select options={[]} label="Pick one" />);
        expect(screen.getByText(/pick one/i)).toBeInTheDocument();
    });

    it('renders with default empty option selected', () => {
        render(<Select options={['One']} />);
        const select = screen.getByRole('combobox') as HTMLSelectElement;
        expect(select.value).toBe('');
    });

    it('calls selectHandler with correct value on change', async () => {
        const handler = jest.fn();
        render(<Select options={['A', 'B']} selectHandler={handler} />);
        const select = screen.getByRole('combobox');
        await userEvent.selectOptions(select, 'B');
        expect(handler).toHaveBeenCalledWith('B');
    });

    it('spreads additional props like aria-label', () => {
        render(<Select options={[]} aria-label="custom-select" />);
        expect(screen.getByLabelText(/custom-select/i)).toBeInTheDocument();
    });
});
