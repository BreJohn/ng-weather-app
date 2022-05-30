import { Action } from "@ngrx/store";

export const SET_FAVORITE_CITY = 'SET_FAVORITE_CITY';

export class SetFavoriteCity implements Action {
    readonly type = SET_FAVORITE_CITY;
    payload = {};
}