import { IUser } from 'app/core/user/user.model';
import { IBarrio } from 'app/shared/model/barrio.model';
import { IVehiculo } from 'app/shared/model/vehiculo.model';
import { IEstadoPersona } from 'app/shared/model/estado-persona.model';
import { IDomicilio } from 'app/shared/model/domicilio.model';

export interface IPersona {
  id?: number;
  nombrePersona?: string;
  apellidoPersona?: string;
  dniPersona?: number;
  telefonoPersona?: number;
  personaUser?: IUser;
  personabarrio?: IBarrio;
  vehiculos?: IVehiculo[];
  personaEstados?: IEstadoPersona[];
  personadomicilios?: IDomicilio[];
}

export class Persona implements IPersona {
  constructor(
    public id?: number,
    public nombrePersona?: string,
    public apellidoPersona?: string,
    public dniPersona?: number,
    public telefonoPersona?: number,
    public personaUser?: IUser,
    public personabarrio?: IBarrio,
    public vehiculos?: IVehiculo[],
    public personaEstados?: IEstadoPersona[],
    public personadomicilios?: IDomicilio[]
  ) {}
}
