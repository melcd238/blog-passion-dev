import { FakeBiographieRepository } from "../../../data/repositories/FakeBiographieRepository";
import { displayBiographies } from "./displayBiographie";



describe ('displayBiographies function', () => {
    it('should return an object of biographie from the given repository', async () => {
        const bio = await displayBiographies(FakeBiographieRepository);
        expect(bio).toHaveProperty('name');
        expect(bio).toHaveProperty('function');
        expect(bio).toHaveProperty('description');
        expect(bio).toHaveProperty('picture');
        expect(bio).toHaveProperty('body');
        expect(bio).toHaveProperty('lkdn');
        expect(bio).toHaveProperty('github');
    });
});















export{}