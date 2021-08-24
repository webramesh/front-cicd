import { BaseService } from './base.service';
import { ErrorWrapper, ResponseWrapper } from './util';

export class UsersService extends BaseService {
  static get entity() {
    return 'api/users';
  }

  static async getCurrent() {
    try {
      // debugger
      const response = await this.request({ auth: true }).post(
        `${this.entity}/current`
      );
      // debugger
      return new ResponseWrapper(response, response.data.data);
    } catch (error) {
      const message = error.response.data
        ? error.response.data.error
        : error.response.statusText;
      throw new ErrorWrapper(error, message);
    }
  }
}
