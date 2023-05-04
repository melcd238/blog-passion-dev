import { FakeArticleRepository } from "../../data/repositories/FakeArticleRepository";
import { displayArticles } from "./displayArticles";


describe('displayArticles function', () => {
  it('should return an array of articles from the given repository', async () => {
    const articles = await displayArticles(FakeArticleRepository);
    expect(Array.isArray(articles)).toBe(true);
    expect(articles.length).toBeGreaterThan(0);
    expect(articles[0]).toHaveProperty('id');
    expect(articles[0]).toHaveProperty('title');
    expect(articles[0]).toHaveProperty('summary');
    expect(articles[0]).toHaveProperty('content');
    expect(articles[0]).toHaveProperty('publicationDate');
    expect(articles[0]).toHaveProperty('author');
    expect(articles[0]).toHaveProperty('tag');
    expect(articles[0]).toHaveProperty('imgUrl');
  });
});




export{}
