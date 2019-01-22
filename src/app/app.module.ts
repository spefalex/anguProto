import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TabsPageModule } from "../app/tabs/tabs.module";
import { MenuPageModule } from "../app/menu/menu.module";
import { ObjectifPageModule } from "../app/objectif/objectif.module";
import { EditProfilPageModule } from './edit-profil/edit-profil.module';
import { StoreModule } from "@ngrx/store";
import { NgxSpinnerModule } from "ngx-spinner";
import { UserEffects } from "../Stores/User/user.effects";
import { UserQuery } from "./providers/graphql/query/user-query";
import { StorageService } from "../Stores/Services/storage-service";
import { userReducer } from "../Stores/User/user.reducer";
import { HttpModule } from "@angular/http";
import { GlobalService } from "../Stores/Services/global-service";
import { UserService } from "../Stores/User/user.service";
import { EffectsModule } from "@ngrx/effects";
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ProgressBarModule } from "angular-progress-bar";
import { File, IWriteOptions } from '@ionic-native/file/ngx';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    TabsPageModule,
    MenuPageModule,
    ObjectifPageModule,
    EditProfilPageModule,
    ProgressBarModule,
    HttpClientModule,
    NgxSpinnerModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot(<any>{ userState: userReducer }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    FileOpener,
    File,
    UserQuery,
    StorageService,
    GlobalService,
    SplashScreen,
    FileOpener,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
