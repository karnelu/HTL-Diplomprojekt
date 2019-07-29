import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataVehicleService implements InMemoryDbService {
  createDb() {
    const vehicles = [
      {id: 1, vin: '1B3YA64E1JG420479', licencePlate: 'S-111 AA', brand: 'Audi', model: 'A1', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'},
      {id: 2, vin: 'WBAUL73589VE14314', licencePlate: 'S-111 BB', brand: 'Audi', model: 'A2', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'},
      {id: 3, vin: '1XKDD49X2CJ369071', licencePlate: 'S-111 CC', brand: 'Audi', model: 'A3', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'},
      {id: 4, vin: '5UXZV8C54D0C60987', licencePlate: 'S-111 DD', brand: 'Audi', model: 'A4', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'},
      {id: 5, vin: '1GCHK33G56F242618', licencePlate: 'S-111 EE', brand: 'Audi', model: 'A5', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'},
      {id: 6, vin: '1GCHK34J8TZ258722', licencePlate: 'S-111 FF', brand: 'Audi', model: 'A6', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'},
      {id: 7, vin: '1D7HE28K46S530593', licencePlate: 'S-111 GG', brand: 'Audi', model: 'A7', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'},
      {id: 8, vin: '1VWBA9178HV030915', licencePlate: 'S-111 HH', brand: 'Audi', model: 'A8', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'},
      {id: 9, vin: '3C6TD4MLXCG198462', licencePlate: 'S-111 II', brand: 'Audi', model: 'eTron', kmReading: 10000, productionYear: 2019, enginePower: '200 HP', fuelType: 'super 95', vehicleStatus: 'used vehicle', color: 'blue'}
    ];
    return {vehicles};
  }

  // Overrides the genId method to ensure that a vehicle always has an id.
  // If the vehicles array is empty,
  // the method below returns the initial number (11).
  // if the vehicls array is not empty, the method below returns the highest
  // vehicle id + 1.
  genId(vehicles: Vehicle[]): number {
    return vehicles.length > 0 ? Math.max(...vehicles.map(vehicle => vehicle.id)) + 1 : 11;
  }
}