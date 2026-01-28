export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: ServiceType;
  acceptPrivacy: boolean;
}

export enum ServiceType {
  REGISTRO = 'Registro',
  RENOVACION = 'Renovación',
  VIGILANCIA = 'Vigilancia',
  OPOSICION = 'Oposición'
}

export interface FormResponse {
  success: boolean;
  message: string;
}