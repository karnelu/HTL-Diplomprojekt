import { Vehicle } from "../vehicle/vehicle";
import { VehicleService } from "../vehicle/vehicle.service";
import {
  Component,
  OnInit,
  Input,
  Output,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { BusinessPartner } from "../business-partner/business-partner";
import { BusinessPartnerService } from "../business-partner/business-partner.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void { }
}
