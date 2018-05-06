import { appRouter } from './routing';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clearSession: boolean = false;

  constructor(private auth: AuthService){
  }
  componentRenderized(event?){
    if(typeof event.router != 'undefined'){
      this.clearSession = true;
    }
  }
}
