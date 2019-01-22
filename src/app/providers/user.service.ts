import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, timeout, catchError } from 'rxjs/operators';
import { UserQuery } from './graphql/query/user-query';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = `${environment.baseUrl}/graphql`;
  public timeout_val = 3000;

  constructor(
    private userQuery: UserQuery,
    private http: HttpClient
  ) {
  }

  public checkphoneNumber(phoneNumber: string): Observable<any> {
    const query = this.userQuery.checkphoneNumber(phoneNumber);
    return this.http.post(this.baseUrl, { query: query })
      .pipe(
      // timeout(this.timeout_val),
      map(response => response['data']['checkphoneNumberUser'])
      );
  }

  handlerError() {

  }

  public confirmPhoneNumber(phoneNumber: string, smsCode: number): Observable<any> {
    const query = this.userQuery.confirmPhoneNumber(phoneNumber, smsCode);
    return this.http.post(this.baseUrl, { query: query }).pipe(
      map(response => response['data']['confirmPhoneNumber'])
    );
  }

  public confirmPseudo(phoneNumber: string, pseudo): Observable<any> {
    const query = this.userQuery.confirmPseudo(phoneNumber, pseudo);
    return this.http.post(this.baseUrl, { query: query }).pipe(
      map(response => response['data']['confirmPseudo'])
    );
  }

  public confirmEmail(phoneNumber: string, pseudo: string, email: string, password: string): Observable<any> {
    const query = this.userQuery.confirmEmail(phoneNumber, pseudo, email ,password);
    return this.http.post(this.baseUrl, { query: query }).pipe(
      map(response => response['data']['confirmEmail'])
    );
  }

  public sendInterests(userId: string, interests: string[]): Observable<any> {
    const params = this.userQuery.sentInterests(userId, interests);
    return this.http.post(this.baseUrl, params);
  }
}
