import { vi } from 'vitest';

const mockResponse = {
    data: {
        name: "donut",
        background: "purple",
        description: "description"
    }
}

export default {
    get: vi.fn().mockResolvedValue(mockResponse)
}

