import { IbreakingnewsRepository } from "../../coreLogic/domain/repositories/breakingnewsRepository";
import { Breakingnews } from "../../coreLogic/domain/entities/Breakingnews";


export const FakeBreakingnewsRepository: IbreakingnewsRepository = {
    getBreakingnews:  () => {
        let breakingnews : Breakingnews = {
            title: "Pourquoi Blog passion dev : Nouveau Chapitre...",
            content: ` L'idée de créer ce blog m'est venue de mon désir profond d'aider les autres et de partager mon expérience en développement web, en particulier avec ceux qui
            sont en reconversion professionnelle. Au fil du temps, j'ai reçu de nombreuses demandes de conseils de la part de juniors sur LinkedIn, ce qui m'a montré qu'il
            y avait un besoin réel d'accompagnement et de ressources dans ce domaine.\n\nEn parcourant ce blog, j'espère que vous y trouverez des ressources précieuses et des conseils utiles pour vous aider
            dans votre parcours de reconversion professionnelle.`,
            author: "Mélaïna Donati - Développeuse web Js - React - Node - Nest.js - Craftswomanship"
    }
        return Promise.resolve(breakingnews);
}
}