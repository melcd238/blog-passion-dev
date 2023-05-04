import { IbiographieRepository } from "../../domain/repositories/BiographieRepository";
import { Biographie } from "../../domain/entities/Biographie";


export const displayBiographies = async (biographieRepository: IbiographieRepository): Promise<Biographie> => {
    const biographie = await biographieRepository.getBiographie();
    return biographie;
}