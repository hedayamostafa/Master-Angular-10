import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import {throwError, Subject, Observable} from 'rxjs';
import {KeycloakConfig} from 'keycloak-js';
/*import {Keycloak} from 'keycloak-angular/lib/core/services/keycloak.service';*/
import { CookieService } from 'ngx-cookie-service';


export interface AuthResponseData {
  kind: string;
  idToken: string;
  username: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  grant_type: string;
  client_id: string;
  scope: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {


  constructor(private http: HttpClient,  private cookieService: CookieService ) {}
  public redirectUri = 'http://localhost:8083/';

  login(username: string, password: string) {

    /*const keycloak = Keycloak({
      url: 'http://localhost:8083/auth',
      realm: 'CIB',
      clientId: 'myClient'
    });
*/
   /* let keycloakConfig: KeycloakConfig = { url: 'http://localhost:8083/auth',
      realm: 'CIB', clientId: 'myclient' };*/


    let params = new URLSearchParams();

    params.append('grant_type','password');
    params.append('client_id', 'myclient');
    params.append('username', username);
    params.append('password', password);
    params.append('scope','read write');
    params.append('redirect_uri', this.redirectUri);

    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    this.http.post('http://localhost:8083/auth/realms/BANKNET/protocol/openid-connect/token',
      params.toString(), { headers: headers })
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials'));

    /*  return this.http
        .post<AuthResponseData>(
          'http://localhost:8083/auth/realms/CIB/protocol/openid-connect/token',
          {
            username: "myuser",
            password: "P@ssw0rd",
            grant_type: "password",
            client_id: "myclient",
            scope: "read write"
          }
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.handleAuthentication(
              resData.username,
              resData.localId,
              resData.grant_type,
              +resData.client_id
            );
          })
        );*/
  }
  saveToken(token) {
    console.log('Obtained Access token::'+token);
    console.log('Obtained Access token:'+ token.username);
    console.log('Obtained Access token:'+ token.access_token);
    console.log('Obtained Access token:'+ token.expires_in);
    console.log('Obtained Access token:'+ token.username);


    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    this.cookieService.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token');
    /*window.location.href = 'http://localhost:4200/shopping-list';*/
    console.log('Obtained Access token::'+token.accessToken);

  }

  logout(): void {
    this.cookieService.delete('access_token');
  }

 /* getResource(resourceUrl) : Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer '+Cookie.get('access_token')});
    return this.http.get(resourceUrl, { headers: headers })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  checkCredentials() {
    return Cookie.check('access_token');
  }*/
}
