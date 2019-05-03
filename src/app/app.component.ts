import { Component } from '@angular/core';
import { KfsServiceService } from './kfs-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kfs';
  constructor(private kfsService:KfsServiceService){}
}
