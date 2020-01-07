import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IConfig, ViewPortSize } from './if-view-port-size.models';
import { distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class IfViewPortSizeService {
    private _currentViewportSize: BehaviorSubject<string>;
    private _viewPortSize: ViewPortSize = new ViewPortSize();

    constructor(
        @Inject('VIEW_PORT_CONFIG') private _config: IConfig) {
        this._handleResizeEvent();
        window.addEventListener('resize', () => this._handleResizeEvent());
    }

    private _handleResizeEvent(): void {
        const clientWidth: number = document.body.clientWidth;

        let viewportSize = this._viewPortSize.small;
        if (clientWidth >= this._config.medium && clientWidth < this._config.large) {
            viewportSize = this._viewPortSize.medium;
        }
        if (clientWidth >= this._config.large) {
            viewportSize = this._viewPortSize.large;
        }
        if (!this._currentViewportSize) {
            this._currentViewportSize = new BehaviorSubject<string>(viewportSize);
        } else {
            this._currentViewportSize.next(viewportSize);
        }
    }

    get currentViewportSize(): Observable<string> {
        return this._currentViewportSize.asObservable()
            .pipe(distinctUntilChanged());
    }
}