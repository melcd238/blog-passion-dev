import { IbiographieRepository } from "../../coreLogic/domain/repositories/BiographieRepository";
import { Biographie } from "../../coreLogic/domain/entities/Biographie";



export const FakeBiographieRepository: IbiographieRepository = {
    getBiographie:  () => {
        let bio : Biographie = {
            name: "Mélaïna Donati",
            function: "Développeuse web Js - React - Node - Nest.js",
            description: "Craftswomanship",
            picture: "https://avatars.githubusercontent.com/u/78885788?v=4",
            body: `En tant que spécialiste en JavaScript et React, je possède une solide expérience dans le développement
            front-end tout en ayant également des compétences en back-end, grâce à ma maîtrise de Node et Nest.
            Animée par les principes du software craftsmanship, je porte une attention particulière à la qualité de mon 
            travail en adoptant des pratiques telles que le Test-Driven Development (TDD),
            le Clean Code et la Clean Architecture. Mon objectif est de créer des solutions élégantes et durables qui
            répondent aux besoins de mes clients et garantissent une expérience utilisateur exceptionnelle.\n\n
            🦷 Chirurgienne-dentiste de formation, mon expérience en tant que dentiste m'apporte une perspective unique et des
            compétences transférables telles que ma capacité à apprendre et à m'adapter, la rigueur, l'organisation,
            l'empathie, la communication, l'éthique et le professionnalisme.
            `,
            lkdn: "https://www.linkedin.com/in/melainadonati/",
            github: "https://github.com/melcd238"
    }
        return Promise.resolve(bio);
}
} 