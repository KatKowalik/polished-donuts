import { test, expect } from "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { getDonuts } from "../src/pages/Products/Products";

test("loads and display data", async () => {
   const result = await getDonuts()
})