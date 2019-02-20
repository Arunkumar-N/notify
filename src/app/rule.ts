import { Time } from "@angular/common";
import { criteria } from './criteria';

export class rule {
    notifier: string;
    schedule: string;
    time: Time;
    alertMode: boolean;
    ruleCriteria: string;
    criterias: criteria[];
    pattern: string;
    account: boolean;
    title: string;
}