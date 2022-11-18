import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

interface StatState {
  errors: number;
  speed: number;
}

const initialState: StatState = {
  errors: 0,
  speed: 0
};

@Injectable({
  providedIn: 'root'
})
export class AppStateService extends StateService<StatState>{
  errors$: Observable<number> = this.select(state => state.errors);
  speed$: Observable<number> = this.select(state => state.speed);

  constructor() {
    super(initialState);
  }

  addError() {
    if (this.state.errors == 10) this.reset();
    else this.setState({ errors: this.state.errors + 1 })
  }
  reset() {
    this.setState({ errors: 0, speed: 0 })
  }
}
