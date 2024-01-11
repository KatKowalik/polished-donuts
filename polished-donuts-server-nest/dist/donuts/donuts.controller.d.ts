import { DonutService } from './donuts.service';
export declare class DonutsController {
    private readonly donutService;
    constructor(donutService: DonutService);
    getDonuts(): Promise<import("./donuts.model").Donut[]>;
}
