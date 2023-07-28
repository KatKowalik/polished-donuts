import Header from "./Header";
import { render, screen } from "@testing-library/react";
import {describe, it, expect} from "vitest";
import { BrowserRouter } from "react-router-dom";


describe("Header", ()=> {
    it("renders logo", () => {
        render(<Header />, {wrapper: BrowserRouter});
        const logo = screen.queryByText(/Polished Donuts!/i);
        expect(logo).toBeInTheDocument();
    })

    it("renders login button", () => {
        render(<Header />, {wrapper: BrowserRouter});
        expect(screen.getByText(/Log in!/i)).toBeInTheDocument();
    })

    it("renders singup button", () => {
        render(<Header />, {wrapper: BrowserRouter});
        expect(screen.getByText(/Sign up!/i)).toBeInTheDocument();
    })

    it("login button is not disabled", ()=> {
        render(<Header/>, {wrapper: BrowserRouter});
        const button = screen.getAllByRole("button");
        expect(button[0]).not.toBeDisabled();
      
    })

    it("signup button is not disabled", ()=> {
        render(<Header/>, {wrapper: BrowserRouter});
        const button = screen.getAllByRole("button");
        expect(button[1]).not.toBeDisabled();
    })

})

