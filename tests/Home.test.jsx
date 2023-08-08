import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home/Home"
import { BrowserRouter } from 'react-router-dom';

describe("HomePage component", () => {
    it("renders correct heading", () => {
        render(<BrowserRouter><Home /></BrowserRouter>);

        let header = screen.getByText(/welcome to dhtfashion!/i);

        expect(header).toBeInTheDocument();
    });

    it("should render button", () => {
        render(<BrowserRouter><Home /></BrowserRouter>)

        const button = screen.getByRole('button', { name: "Shop Now" });

        expect(button).toBeInTheDocument();
    });

});
