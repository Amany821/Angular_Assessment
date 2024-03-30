import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigModel } from 'src/models/_common/AppConfigModel';
import { environment } from './environment';

@Injectable({
    providedIn: 'root',
})
export class AppConfig {
    static config: AppConfigModel;

    constructor(private http: HttpClient) { }

    loadConfig() {
        const jsonFile = `assets/config${environment.name}.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).subscribe((response: any) => {
                AppConfig.config = <any>response;
                resolve();
            });
        });
    }

    static returnApiUrl(): string {
        return this.config.serverURL + '/api';
    }
}