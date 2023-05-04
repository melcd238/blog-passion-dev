import { IbreakingnewsRepository } from "../../domain/repositories/breakingnewsRepository";
import { Breakingnews } from "../../domain/entities/Breakingnews";


export const displayBreakingnews = async (breakingnewsRepository: IbreakingnewsRepository): Promise<Breakingnews> => {
    const breakingnews = await breakingnewsRepository.getBreakingnews();
    return breakingnews;
}