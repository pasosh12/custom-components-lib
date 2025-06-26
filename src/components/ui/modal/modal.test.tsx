import {render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import {Modal} from './Modal'

describe('Modal', () => {
    it('renders children when open', () => {
        render(<Modal open={true} onClose={() => {}}><p>Modal content</p></Modal>);
        expect(screen.getByText(/modal content/i)).toBeInTheDocument();
    });

    it('does not render when closed', () => {
        render(<Modal open={false} onClose={() => {}}><p>Hidden</p></Modal>);
        expect(screen.queryByText(/hidden/i)).not.toBeInTheDocument();
    });

    it('applies child variant class if provided', () => {
        render(<Modal open={true} onClose={() => {}} variant="child"><p role={'modalChild'}>Child</p></Modal>);
        const childModal = screen.getByText(/child/i).closest('div');
        expect(childModal).toHaveClass('modalChild');
    });
});