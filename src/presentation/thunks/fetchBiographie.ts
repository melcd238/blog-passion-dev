import { AppDispatch } from '../redux/store';
import { DependencyInjection } from '../../infrastructure/dependencyInjections';
import { setLoading, setBiographie } from '../redux/biographieSlice';


export const fetchBiographie = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    
    const displayBiographies = DependencyInjection.getDisplayBiographies();
    const biographie = await displayBiographies();
    
    dispatch(setBiographie(biographie));
    dispatch(setLoading(false));
    };