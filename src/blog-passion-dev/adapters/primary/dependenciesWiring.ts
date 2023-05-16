import { Dependencies } from "../../store/reduxStore";
import { FakeArticleGateway } from "../secondary/fakeBlogGateway";


export const wireDependencies = (): Dependencies => {
    const articleGateway = new FakeArticleGateway();
    articleGateway.setCurrentArticle({
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
        publishDate: "01-05-2023",
        author: "Mélaïna Donati",
        tag: "Apprentissage",
        imgUrl: "https://picsum.photos/200/300",
    });
    
    
    articleGateway.setCurrentBreakingNews({
        title: "Pourquoi Blog passion dev : Nouveau Chapitre...",
        content: ` L'idée de créer ce blog m'est venue de mon désir profond d'aider les autres et de partager mon expérience en développement web, en particulier avec ceux qui
        sont en reconversion professionnelle. Au fil du temps, j'ai reçu de nombreuses demandes de conseils de la part de personnes en reconversion sur LinkedIn, ce qui m'a montré qu'il
        y avait un besoin réel d'accompagnement et de ressources dans ce domaine.\n\nEn parcourant ce blog, j'espère que vous y trouverez des ressources précieuses et des conseils utiles pour vous aider
        dans votre parcours de reconversion professionnelle.`,
        author: "Mélaïna Donati - Développeuse web Js - React - Node - Nest.js - Craftswomanship"
    });

    articleGateway.setCurrentBio({
            name: "Mélaïna Donati",
            fonction: "Développeuse web Js - React - Node - Nest.js",
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
    });

    articleGateway.setAllArticles([
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
            publishDate: "01-05-2023",
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
            publishDate: "01-04-2023",
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
            publishDate: "01-03-2023",
            author: "Mélaïna Donati",
            tag: "JS-React",
            imgUrl: "https://picsum.photos/200/300",
        }
    ]);
    articleGateway.setCurrentLibrairies({
        books: [
            {
                title: "Clean Code",
                picture: "https://picsum.photos/200/300",
                link: "https://www.amazon.fr/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
            },
            {
                title: "Clean Architecture",
                picture: "https://picsum.photos/200/300",
                link: "https://www.amazon.fr/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
            },
            {
                title: "Clean Coder",
                picture: "https://picsum.photos/200/300",
                link: "https://www.amazon.fr/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073",
            },
        ],
        learning: [
            {
                title: "Awesome Software and Architectural Design Patterns",  
                picture: "https://picsum.photos/200/300",
                link: "https://github.com/DovAmir/awesome-design-patterns",     
            }, {
                title: "Frontend Masters",
                picture: "https://picsum.photos/200/300",
                link: "https://frontendmasters.com/ ",
            }
        ],
        blogs: [
            {
                title: "The Clean Code Blog - Robert C. Martin",
                picture: "https://picsum.photos/200/300",
                link: "https://www.blog.cleancoder.com/",
            },
            {
                title: "Le blog d' Anthony Cyrille",
                picture: "https://picsum.photos/200/300",
                link: "https://flw.sh/ancyrweb",
            },
        ],
        podcasts: [
            {
                title: "Syntax FM",
                picture: "https://picsum.photos/200/300",
                link: "https://www.amazon.fr/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
            },
            {
                title: "React Podcast",
                picture: "https://picsum.photos/200/300",
                link: "https://www.amazon.fr/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
            },
        ]
    })

    return { articleGateway};    
};


   
   