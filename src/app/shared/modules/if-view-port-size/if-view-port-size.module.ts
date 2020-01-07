import { NgModule } from '@angular/core';
import { IfViewPortSizeService } from './if-view-port-size.service';
import { IfViewPortSizeDirective } from './if-view-port-size.directive';
import { IConfig } from './if-view-port-size.models';

const IfViewPortConfig: IConfig = {
    large: 900,
    medium: 600
}

@NgModule({
    declarations: [IfViewPortSizeDirective],
    imports: [],
    providers: [
        IfViewPortSizeService,
        {
            provide: 'VIEW_PORT_CONFIG',
            useValue: IfViewPortConfig
        }
    ],
    exports: [IfViewPortSizeDirective]
})
export class IfViewPortSizeModule { }
