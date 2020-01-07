import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { TabTitleComponent } from './tab/tab-title/tab-title.component';
import { TabContentComponent } from './tab/tab-content/tab-content.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
    declarations: [
        TabsComponent,
        TabComponent,
        TabTitleComponent,
        TabContentComponent
    ],
    imports: [],
    exports: [
        TabsComponent,
        TabComponent,
        TabTitleComponent,
        TabContentComponent
    ]
})
export class TabsModule { }