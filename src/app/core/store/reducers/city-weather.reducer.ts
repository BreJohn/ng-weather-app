import { Action } from '@ngrx/store';
import { CityApiResponse } from 'src/app/features/cities/model/CityApiResponse';

import * as CityWeatherActions from '../actions/city-weather.actions';

const initialState: {
    favoriteCities: CityApiResponse[]
} = {
  favoriteCities: [],
};

export function cityWeatherReducer(
  state = initialState,
  action: CityWeatherActions.SetFavoriteCity
) {
  switch (action.type) {
    case CityWeatherActions.SET_FAVORITE_CITY:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
    default:
      return state
  }
}
