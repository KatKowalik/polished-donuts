import Header from "./Header";
import { render, screen } from "@testing-library/react";
import {it, expect} from "vitest";
import { BrowserRouter } from "react-router-dom";


it("renders logo", () => {
    render(<Header />, {wrapper: BrowserRouter});
    const logo = screen.queryByText(/Polished Donuts!/i);
    expect(logo).toBeInTheDocument();
})