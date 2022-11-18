import { AppStateService } from './../app-state.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  errors: number = 0;

  constructor(private accountService: AccountService,
    private stateService: AppStateService,
    private cdr: ChangeDetectorRef) {

    this.stateService.errors$.subscribe(errors => {
      this.errors = errors;
      this.cdr.markForCheck(); // Fix View not updating
    });

  }

  ngOnInit(): void {
  }

  logout(): void {
    this.accountService.logout();
  }
}
