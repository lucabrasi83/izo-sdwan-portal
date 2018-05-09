import { Component } from '@angular/core';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import {LoginService} from './login/login.service';


@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        // private translate: TranslateService,
        private fuseNavigationService: FuseNavigationService,
        private fuseSplashScreen: FuseSplashScreenService,
        public authService: LoginService
        // private fuseTranslationLoader: FuseTranslationLoaderService
    )
    {
        // // Add languages
        // this.translate.addLangs(['en', 'tr']);
        //
        // // Set the default language
        // this.translate.setDefaultLang('en');
        //
        // // Set the navigation translations
        // this.fuseTranslationLoader.loadTranslations(navigationEnglish, navigationTurkish);
        //
        // // Use a language
        // this.translate.use('en');
    }
}
