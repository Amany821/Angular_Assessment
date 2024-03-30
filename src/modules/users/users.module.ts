import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsResolver } from './user-details/user-details.resolver';

const routes: Routes = [
    { path: '', component: UsersListingComponent },
    { path: ':id', component: UserDetailsComponent, resolve: { user: UserDetailsResolver }}
];

@NgModule({
    declarations: [
    UsersListingComponent,
    UserDetailsComponent
],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NgbPaginationModule
    ]
})
export class UsersModule { }
