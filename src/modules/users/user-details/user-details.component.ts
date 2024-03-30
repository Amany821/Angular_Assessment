import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { UserModel } from 'src/models/users/UserModel';
import { LoadingSpinnerService } from 'src/services/loading-spinner.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  user!: UserModel;
  userId!: number;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private loadingSpinnerService: LoadingSpinnerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = Number(params['id']!);
    });
    this.onGetUserInfo();
  }

  onGetUserInfo() {
    this.loadingSpinnerService.start();
    this.userService.GetSpecificUserDetails(this.userId).pipe(finalize(() => 
    this.loadingSpinnerService.stop()
    )).subscribe({
      next: (res: any) => {
        this.user = res.data;
      },
    })
  }
}
