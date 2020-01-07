import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: 'test.component.html',
    styleUrls: ['test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
    @Input('tabNum') public tubNumber: number;

    constructor() { }

    ngOnInit() {
        console.log(`>>> TestComponent ${this.tubNumber} initialized`)
    }

    ngOnDestroy() {
        console.log(`>>> TestComponent ${this.tubNumber} deleted`)
    }
}