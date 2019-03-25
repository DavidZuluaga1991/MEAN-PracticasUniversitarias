export interface IInternships {
  _id?: string | undefined;
  namecompany: string | undefined;
  code: string | undefined;
  sede: string | undefined;
  datefrom: Date | undefined;
  dateto: Date | undefined;
  requirements: string | undefined;
  programs: string | undefined;
  photography: string;
}
export class Internships implements IInternships {

  // tslint:disable-next-line:variable-name
  _id?: string;
  namecompany: string;
  code: string;
  sede: string;
  datefrom: Date;
  dateto: Date;
  requirements: string;
  programs: string;
  photography: string;

  constructor(inter: IInternships) {
    this._id = inter._id;
    this.namecompany = inter.namecompany;
    this.code = inter.code;
    this.sede = inter.sede;
    this.datefrom = inter.datefrom;
    this.dateto = inter.dateto;
    this.requirements = inter.requirements;
    this.programs = inter.programs;
    this.photography = inter.photography;
  }
}

