import { Breakingnews } from "../entities/Breakingnews";



export interface IbreakingnewsRepository {
    getBreakingnews(): Promise<Breakingnews>;
}