import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import ProductPage from '../src/components/Product/ProductPage';
import { BrowserRouter } from 'react-router-dom';
describe("ProductPage component", () => {

    it("renders correct heading", () => {
        render(<BrowserRouter><ProductPage /></BrowserRouter>);

        let header = screen.getByText(/products/i);

        expect(header).toBeInTheDocument();
    });

});
