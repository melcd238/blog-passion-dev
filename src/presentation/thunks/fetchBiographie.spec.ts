import { DependencyInjection } from "../../infrastructure/dependencyInjections";
import { store } from "../redux/store";
import { fetchBiographie } from "./fetchBiographie";


describe('fecthBiographie test', () => {
    it('should have an initial empty state', () => {
      const initialStateBio ={
        biographie: {
            name: "",
            function: "",
            description: "",
            picture: "",
            body: "",
            lkdn: "",
            github: ""
      } 
    };
      const state = store.getState();
      expect(state.biographie.biographie).toEqual(initialStateBio.biographie);
    });
  
    it('should fetch biographie and update the store', async () => {
      const dispatch = store.dispatch;
      const expectedBiographies = await DependencyInjection.getDisplayBiographies()();
  
      await dispatch(fetchBiographie());
  
      const state = store.getState();
      expect(state.biographie.biographie).toEqual(expectedBiographies);
    });
  }
);