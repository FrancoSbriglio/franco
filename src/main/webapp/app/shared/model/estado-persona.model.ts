import { IPersona } from 'app/shared/model/persona.model';

export interface IEstadoPersona {
  id?: number;
  nombreEstadoPersona?: string;
  estadoPersonas?: IPersona[];
}

export class EstadoPersona implements IEstadoPersona {
  constructor(public id?: number, public nombreEstadoPersona?: string, public estadoPersonas?: IPersona[]) {}
}
