import { ResponseStatus } from "../enum/responseStatus.enum";

export class Logger {
    static success(data: any) {
      return {
        response_status: ResponseStatus.OK,
        data,
      };
    }
  
    static error(message: string, error: any = null) {
      return {
        response_status: ResponseStatus.ERROR,
        data: {
          message,
          error: error ? error.toString() : null,
        },
      };
    }
  }