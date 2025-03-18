export interface CreateUserDTO {
    nombre: string;
    email: string;
    edad?: number;
    direcciones: {
      calle: string;
      ciudad: string;
      pais: string;
      codigo_postal: string;
    }[];
  }
  
  export interface UpdateUserDTO {
    nombre?: string;
    email?: string;
    edad?: number;
    direcciones?: {
      calle: string;
      ciudad: string;
      pais: string;
      codigo_postal: string;
    }[];
  }
  