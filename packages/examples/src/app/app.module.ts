import { HotkeyModule } from 'angular2-hotkeys';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { SkyhookDndModule } from '@topdecked/angular-skyhook-core';

import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { customMultiBackend } from './customMultiBackend';
import { metaReducers, reducers } from './reducers';
import { routes } from './routes';
import { TestComponent } from './test/test.component';
// this is our own adaptation of dnd-multi-backend. will be published eventually
import { UtilityModule } from './utility.module';

@NgModule({
    declarations: [AppComponent, TestComponent],
    imports: [
        BrowserModule,
        UtilityModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            useHash: true
        }),
        StoreRootModule,
        SkyhookDndModule.forRoot({ backendFactory: customMultiBackend }),
        // SkyhookDndModule.forRoot({ backend: TouchBackend }),
        // SkyhookDndModule.forRoot({ backend: MouseBackend }),
        StoreModule.forRoot(reducers, { metaReducers }),
        // !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects]),
        HotkeyModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
