import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConfig } from 'src/environment/AppConfig';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    currentPageRequested = new BehaviorSubject<number>(1);

    constructor(
        private httpClient: HttpClient
    ) { }

    GetAllUsers(page: number) {
        return this.httpClient.get(`${AppConfig.returnApiUrl()}/users?page=${page}`);
    }

    GetSpecificUserDetails(id: number) {
        return this.httpClient.get(`${AppConfig.returnApiUrl()}/users/${id}`);
    }
}