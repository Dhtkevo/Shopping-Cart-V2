import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home/Home"
describe("HomePage component", () => {
    it("renders correct heading", () => {
        render(<Home />);

        let header = screen.getByText(/welcome/i);

        expect(header).toBeInTheDocument();
    });
});
