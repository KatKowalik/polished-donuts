import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";
import {describe, it, expect} from "vitest";
import { BrowserRouter } from "react-router-dom";


describe("HomePage", () => {
    it("renders title", () => {
        render(<HomePage />, {wrapper: BrowserRouter});
        const title = screen.getByText(/Indulge in Poland's Sweetest Tradition!/i);
        expect(title).toBeInTheDocument();
    })
})