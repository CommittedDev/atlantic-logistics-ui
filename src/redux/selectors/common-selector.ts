import {RootState} from '../store';

export const selectLoading = (state: RootState) => state.common.loading;