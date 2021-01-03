import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from './service/websocket.service';

@Component({
  selector: 'web1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  connection;
  data;
  message;

  constructor(private websocketService: WebsocketService) {}

  onClick() {
    this.websocketService.emit('message', 'Hello!!');
  }

  ngOnInit() {
    this.websocketService.connect();
    this.connection = this.websocketService.on('message').subscribe((data) => {
      console.log(data);
      this.message = data;
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
