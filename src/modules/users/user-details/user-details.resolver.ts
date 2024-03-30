import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/services/user.service";

@Injectable({ providedIn: 'root' })
export class UserDetailsResolver implements Resolve<any> {

    constructor(
        private userService: UserService
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = Number(route.paramMap.get('id'))!;
        return this.userService.GetSpecificUserDetails(id);
    }
}
