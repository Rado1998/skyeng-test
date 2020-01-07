import { Directive, OnInit, OnDestroy, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { IfViewPortSizeService } from './if-view-port-size.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[ifViewportSize]'
})
export class IfViewPortSizeDirective implements OnInit, OnDestroy {
    @Input('ifViewportSize') private _ifViewPortSize: string;
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainerRef: ViewContainerRef,
        private _ifViewPortSizeService: IfViewPortSizeService
    ) { }

    ngOnInit() {
        this._ifViewPortSizeService.currentViewportSize
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((size: string) => {
                if (size === this._ifViewPortSize) {
                    this._viewContainerRef.createEmbeddedView(this._templateRef);
                } else {
                    this._viewContainerRef.clear();
                }
            });
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
