import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-tab-content',
    template: `
        <div class="tab-content">
            <ng-content></ng-content>
        </div>
    `
})
export class TabContentComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}
