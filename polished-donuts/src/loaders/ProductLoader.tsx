import axios from "axios";
import { Donut } from "../types/types";


export const productLoader = async() => {
    const donutsData = await axios.get<Donut[]>("http://localhost:8080/donuts");
    const donuts = donutsData.data;
    return donuts;
}