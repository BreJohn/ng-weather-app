import { Action } from '@ngrx/store';
import { City } from 'src/app/features/cities/model/city';

import * as CityWeatherActions from '../actions/city-weather.actions';

const initialState: {
    favoriteCities: City[]
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
