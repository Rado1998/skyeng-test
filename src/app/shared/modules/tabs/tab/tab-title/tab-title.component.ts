import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-tab-title',
    template: `
        <div class="tab-title">
            <ng-content></ng-content>
        </div>
    `
})
export class TabTitleComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}
