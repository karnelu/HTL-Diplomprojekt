import { BusinessPartner } from '../business-partner/business-partner';
import { Vehicle } from '../vehicle/vehicle';

export class Appointment{
    id: String;
    title: String;
    action: String;
    start_date: any;
    start_time: any;
    end_date: any;
    end_time: any;
    description: string; 
    bp: BusinessPartner;
    vehicle: Vehicle;
}