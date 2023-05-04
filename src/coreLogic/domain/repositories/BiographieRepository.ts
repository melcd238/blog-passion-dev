import { Biographie } from "../entities/Biographie";

export interface IbiographieRepository {
    getBiographie(): Promise<Biographie>;
}