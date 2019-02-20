import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public systemNotification: string[];
  public performNotification: string[];
  public rules: string[];

  constructor(private router:Router) { }

  ngOnInit() {
    this.systemNotification = ["systemNotification","systemNotification2"];
    this.performNotification = ["performNotification","performNotification2","performNotification3","performNotification4"];
    this.rules = ["rules1","rules2"];
  }

  routeTo() {
      this.router.navigateByUrl('rule');
  }

}
