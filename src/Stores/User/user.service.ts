import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { StorageService } from "../Services/storage-service";
const client = new ApolloClient({
  uri: "http://172.17.0.1:3001/graphql"
});
@Injectable()
export class UserService {
  public apiHost: string = "http://172.17.0.1:3001";

  constructor(public http: Http, public storageService:StorageService) {}

  public loginUserQL(username: string, password: string) {
   return client
      .query({
        query: gql`
      {
  
        loginUser(username:"${username}", password:"${password}") {
          code
          message,
          token,
          result {
            _id
            email
            mobileNumber
            photos
            username
         
          }
        }
      }
   
      `
      })
      .then(data => {
        return data;
      })
      .catch(error => console.error(error));
  }


  public editPorfil(username: string, token: string, email: string, id: string, mobileNumber: string) {
    return client
       .query({
         query: gql`
       {
   
      editProfilUser(username:"${username}", token:"${token}", id:"${id}", email:"${email}", mobileNumber:"${mobileNumber}") {
           code
           message,
         }
       }
    
       `
       })
       .then(data => {
         return data;
       })
       .catch(error => console.error(error));
   }
  public login(email: string, password: string): Observable<any> {
    console.log(email);
    let body: string = "name=" + email + "&password=" + password,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ "Content-Type": type }),
      options: any = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiHost + "/authenticate", body, options)
      .map(response => {
        return response.json();
      })
      .catch(err => {
        throw Observable.throw(err);
      });
  }
  public inscription(name: string, password: string): Observable<any> {
    console.log(name);
    let body: string = "name=" + name + "&password=" + password,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ "Content-Type": type }),
      options: any = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiHost + "/inscription", body, options)
      .map(response => {
        return response.json();
      })
      .catch(err => {
        throw Observable.throw(err);
      });
  }

  public infoUser(token: string): Observable<any> {
    //token = localStorage.getItem('idUser'); on peut utiliser le local storage
    return this.http
      .get(this.apiHost + "/api/users?token="+ token)
      .map(res => {
        return res.json();
      });
  }

  public addAvatar(id,avatar) {
    const formData: FormData = new FormData();
    formData.append("avatar", avatar, avatar.name);
    formData.append("id",id);
    const headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "application/json");
    const body = JSON.stringify({ headers: headers });
    this.http
      .post(
        this.apiHost+"/upload",
        formData,
        body
      )
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(data => {
       console.log(data);
      });
  }
  
  public addPDF(id,pdf) {

    console.log('pdf',pdf);
    const formData: FormData = new FormData();
    formData.append("avatar", pdf,pdf.name);
    const headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");
    
    headers.append("Accept", "application/json");
    const body = JSON.stringify({ headers: headers });
    this.http
      .post(
        this.apiHost+"/uploadPDF",
        formData,
        body
      )
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(data => {
       console.log(data);
      });
  }
}
