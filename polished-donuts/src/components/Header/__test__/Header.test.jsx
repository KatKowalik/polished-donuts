import Header from "../Header";
import { render, screen } from "@testing-library/react";


test("renders logo", () => {
    render(<Header />);
    const logo = screen.queryByText(/Polished Donuts!/i);
    expect(logo).toBeInTheDocument();
})