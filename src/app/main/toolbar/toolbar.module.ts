import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { AvatarModule } from 'ng2-avatar';
import { FuseToolbarComponent } from 'app/main/toolbar/toolbar.component';
import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';


@NgModule({
    declarations: [
        FuseToolbarComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,
        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        AvatarModule

    ],
    exports     : [
        FuseToolbarComponent
    ]
})
export class FuseToolbarModule
{

}
