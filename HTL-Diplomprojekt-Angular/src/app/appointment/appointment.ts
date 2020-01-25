import { BusinessPartner } from '../business-partner/business-partner';

export class Appointment{
    id: String;
    title: String;
    action: String;
    start_date: Date;
    start_time: string;
    end_date: Date;
    end_time: string;
    description: string; 
    bp: BusinessPartner;
}