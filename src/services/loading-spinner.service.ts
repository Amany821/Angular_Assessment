import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoadingSpinnerService {
    counter = 0;
    loadingVisible = false;
    isMinimized = false;

    constructor() { }

    start(isMinimized = false) {
        this.counter++;
        if (this.counter > 0) {
            this.isMinimized = isMinimized;
            this.loadingVisible = true;
        }
    }

    stop() {
        this.counter--;
        if (this.counter < 0) {
            this.counter = 0;
        }
        if (this.counter == 0) {
            this.loadingVisible = false;
            this.isMinimized = false;
        }
    }
}
