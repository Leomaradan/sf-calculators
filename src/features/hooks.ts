import { useDispatch, useSelector } from 'react-redux';
import type { IAlbumType } from './album/types';
import type { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppSelector: <TState = RootState, TSelected = unknown>(
  selector: (state: TState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) => TSelected = useSelector;

export const useAlbumPage = (category: IAlbumType, page: number) =>
  useAppSelector((state) =>
    state.album[category]
      ? state.album[category].filter((item) => item.page === page)
      : [],
  );
