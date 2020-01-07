import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
    selector: 'main-view',
    templateUrl: 'main.view.html',
    styleUrls: ['main.view.scss']
})
export class MainView implements OnInit, OnDestroy {
    public activeTab: number = 0;
    public tabs: number[] = [1, 2];

    constructor() { }

    ngOnInit() { }

    public addTab(): void {
        this.tabs.push(this.tabs.length + 1);
    }

    public removeTab(): void {
        if(this.activeTab == this.tabs.length-1){
            this.activeTab = 0;
        }
        this.tabs = this.tabs.slice(0, -1);
    }

    public onClickTabTitle(index: number): void {
        this.activeTab = index;
    }

    ngOnDestroy() { }
}