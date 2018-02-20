import {Component} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {IAppState} from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select('count') count: Observable<number>;
  title = 'app';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  onClick() {
    this.ngRedux.dispatch({type: 'inc'});
  }
}
