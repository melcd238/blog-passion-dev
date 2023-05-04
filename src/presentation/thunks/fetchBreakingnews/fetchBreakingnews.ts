import { AppDispatch } from '../../redux/store';
import { DependencyInjection } from '../../../infrastructure/dependencyInjections';
import { setLoading, setBreakingnews } from '../../redux/breakingnewsSlice';


export const fetchBreakingnews = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    
    const displayBreakingnews = DependencyInjection.getDisplayBreakingnews();
    const breakingnews = await displayBreakingnews();
    
    dispatch(setBreakingnews(breakingnews));
    dispatch(setLoading(false));
    }

    