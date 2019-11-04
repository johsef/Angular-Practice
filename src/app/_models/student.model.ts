export interface IStudent{
  id: number
  name: string
  age: number
  e_mail: string
  level: number
  Degree_Programme?: string
  phonenumber: number
  location?:{
    address: string
    town: string
    state: string
  }
  website?: string
  gender: string
}
