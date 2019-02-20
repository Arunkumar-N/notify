import { Component, OnInit } from '@angular/core';
import { rule } from '../rule';
import { criteria } from '../criteria';

@Component({
  selector: 'app-rule-creation',
  templateUrl: './rule-creation.component.html',
  styleUrls: ['./rule-creation.component.css']
})
export class RuleCreationComponent implements OnInit {

  public users:any[];
  public schedules: string[];
  public scheduleTimes: string[];
  public modes: string[];
  public ruleCriteria: string[];
  public criteriaType: string[];
  public criteriaNotations: string[];
  public criteriaComparedTo: string[];
  public rule: rule= new rule();
  public editPattern = false;

  constructor() { }

  ngOnInit() {
    this.users = [{id: 1, name: 'Arunkumar', email: 'arunkumar@gmail.com', number: 8904516275},
                  {id: 2, name: 'Harit', email: 'Harit@gmail.com', number: 8901246275},
                  {id: 3, name: 'Nitin', email: 'nitin@gmail.com', number: 8912345275}];
    this.schedules = ['Monthly', 'Daily','Yearly'];
    this.scheduleTimes = ['00:00 AM','01:00 AM','02:00 AM','03:00 AM','04:00 AM','05:00 AM'];
    this.modes = ['sms','mail'];
    this.ruleCriteria = ['search campaign','site visitors','All campaign'];
    this.criteriaType = ['impressions','clicks','cost'];
    this.criteriaNotations = ['is greater than','is greater by','is less than'];
    this.criteriaComparedTo = ['same as last week','same as last month','same as last day'];
    let crt1: criteria = new criteria();
    crt1.id = 1;
    crt1.type = "impressions";
    crt1.notation = "is greater than";
    crt1.value = 1234;
    crt1.percent = true;
    crt1.comparedTo = "same as last week";
    crt1.andOr ="or";
    let crt2: criteria= new criteria();
    crt2.id = 2;
    crt2.type = "impressions";
    crt2.notation = "is greater than";
    crt2.value = 1234;
    crt2.percent = true;
    crt2.comparedTo = "same as last week";
    crt2.andOr ="and"
    this.rule.criterias = [];
    this.rule.criterias.push(crt1);
    this.rule.criterias.push(crt2);
  }

  onSave() {
    console.log(this.rule);
  }

}
