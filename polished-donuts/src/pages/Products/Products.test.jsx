import { productLoader } from "../../loaders/ProductLoader";
import { describe, it, expect, vi } from "vitest";
import axios from "axios";


axios.get = vi.fn();

describe("productLoader", () => {
    it("loading data from database", async () => {
        
        axios.get.mockResolvedValue({
                data: {
                    name: "donut",
                    background: "purple",
                    description: "description"
                }
            })
            const donut = await productLoader()
            expect(donut).toStrictEqual({
                name: "donut",
                background: "purple",
                description: "description"
        })
    })
})

