import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainView } from './main.view';
import { CommonModule } from '@angular/common';
import { TestComponent } from 'src/app/core/components';
import { TabsModule } from '../../shared/modules/tabs/tabs.module';
import { IfViewPortSizeModule } from '../../shared/modules/if-view-port-size/if-view-port-size.module';

@NgModule({
    declarations: [
        MainView,
        TestComponent,
    ],
    imports: [
        MainRoutingModule,
        CommonModule,
        TabsModule,
        IfViewPortSizeModule
    ],
    schemas: []
})
export class MainModule { }