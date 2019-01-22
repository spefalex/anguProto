import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actions, Effect } from "@ngrx/effects";
import {
  UserActionTypes,
  UserAction,
  UserInformationAction,
  UserInscriptionAction
} from "./user.reducer";
import { UserService } from "./user.service";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
@Injectable()
export class UserEffects {
  constructor(private actions: Actions, private userService: UserService) {}

  @Effect()
  login = this.actions
    .ofType(UserActionTypes.USER_LOGIN)
    .map((action: UserAction) => action)
    .switchMap(action =>
      this.userService
        .loginUserQL(action.email, action.password)
        .then(response => ({
          type: UserActionTypes.USER_LOGIN_SUCCESS,
          token: response["data"].loginUser.token,
          message: response["data"].loginUser.message,
          user: response["data"].loginUser.result,
        }))
        .catch(err => ({
          type: UserActionTypes.USER_LOGIN_ERROR
        }))
    );


  @Effect()
  informationUtilisateurs = this.actions
    .ofType(UserActionTypes.USER_LIRE)
    .map((action: UserInformationAction) => action)
    .switchMap(action =>
      this.userService
        .infoUser(action.tokenUser)
        .map(response => ({
          type: UserActionTypes.USER_LOGIN_INFORMATION,
          user: response
        }))
        .catch(() => Observable.of({ type: UserActionTypes.USER_FETCH_ERROR }))
    );

  @Effect()
  inscription = this.actions
    .ofType(UserActionTypes.USER_INSCRIPTION)
    .map((action: UserInscriptionAction) => action)
    .switchMap(action =>
      this.userService
        .inscription(action.name, action.password)
        .map(response => ({
          type: UserActionTypes.USER_INSCRIPTION_SUCCESS,
          message: response.success
        }))
        .catch(() =>
          Observable.of({ type: UserActionTypes.USER_INSCRIPTION_ERROR })
        )
    );
}
