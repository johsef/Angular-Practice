export interface IStudent{
  id: number
  name: string
  age: number
  e_mail: string
  level: number
  Degree_Programme?: string
  phonenumber: string
  location?:{
    address: string
    town: string
    state: string
  }
  website?: string
  gender: string
  // sessions: ISession[]
}

// export interface ISession{
//   id : number
//   name: string
//   phonenumber: number
//   Degree_Programme: string
//   age: number

// }
