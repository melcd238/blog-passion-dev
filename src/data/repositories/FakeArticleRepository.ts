import { IarticleRepository } from "../../coreLogic/domain/repositories/ArticleRepository";
import { Article } from "../../coreLogic/domain/entities/Article";



export const  FakeArticleRepository: IarticleRepository = {
    getAllArticles:  () => { 
        
        let articles : Article [] = [
        {
            id: "1",
            title: "La programmation fonctionnelle en JavaScript",
            summary: "Dans cet article, nous explorons les bases de la programmation fonctionnelle, en nous concentrant sur l'immuabilité, la composition et les fonctions pures.",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
            vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
            maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
            consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
            aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
            auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
            erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
            vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
            maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
            consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
            aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
            auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
            erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.`,
            publicationDate: "01-05-2023",
            author: "Mélaïna Donati",
            tag: "Apprentissage",
            imgUrl: "https://picsum.photos/200/300",
        },
        {
            id: "2",
            title: "La POO en JavaScript",
            summary: "Dans cet article, nous explorons les bases de la programmation fonctionnelle, en nous concentrant sur l'immuabilité, la composition et les fonctions pures.",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
            vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
            maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
            consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
            aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
            auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
            erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.`,
            publicationDate: "01-04-2023",
            author: "Mélaïna Donati",
            tag: "Apprentissage",
            imgUrl: "https://picsum.photos/200/300",
        },
        {
            id: "3",
            title: "Le Context API de React",
            summary: "Dans cet article, nous explorons les bases de la programmation fonctionnelle, en nous concentrant sur l'immuabilité, la composition et les fonctions pures.",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
            vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
            maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
            consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
            aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
            auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
            erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.`,
            publicationDate: "01-03-2023",
            author: "Mélaïna Donati",
            tag: "JS-React",
            imgUrl: "https://picsum.photos/200/300",
        }
    ];
    return Promise.resolve(articles);
    },
};