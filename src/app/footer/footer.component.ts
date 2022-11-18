import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private stateService: AppStateService) { }

  ngOnInit(): void {
  }

  addError(): void {
    this.stateService.addError();
  }
}
