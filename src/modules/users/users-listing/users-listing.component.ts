import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { UserModel } from 'src/models/users/UserModel';
import { UsersModel } from 'src/models/users/UsersModel';
import { LoadingSpinnerService } from 'src/services/loading-spinner.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit, OnChanges {
  page = 1;
  data!: UsersModel;
  users: UserModel[] = [];
  filteredUsers: UserModel[] = [];
  searchValue: string = '';

  constructor(
    private userService: UserService,
    private loadingSpinnerService: LoadingSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.currentPageRequested.subscribe({
      next: (pageNum: number) => {
        this.onGetUsers(pageNum);
      }
    });
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      this.filteredUsers = changes['users'].currentValue.tickets;
      this.searchValue = "";
    }
  }

  onGetUsers(pageNumber: number) {
    this.loadingSpinnerService.start();
    this.userService.GetAllUsers(pageNumber).pipe(
      finalize(() => {
        this.loadingSpinnerService.stop();
      })
    ).subscribe({
      next: (res: any) => {
        console.log(res);
        this.data = res;
        this.users = res.data;
        this.filteredUsers = res.data;
      }
    });
  }
  
  onPageChange(pageNumber: number){
    this.userService.currentPageRequested.next(pageNumber);
  }

  onGetMoreInfoAboutUser(user: UserModel) {
    this.router.navigate(['users/' + user.id]);
  }

  onSearchChange(e: any) {
    this.filteredUsers = this.users.filter(x =>
      x.id!.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    );
  }
}
