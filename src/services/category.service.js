import { BaseService } from './base.service';
import { ErrorWrapper, ResponseWrapper } from './util';

export class CategoryService extends BaseService {
  static get entity() {
    // TODO: here front route will be added
    return `front/category-tree`;
  }

  static async getCategory() {
    try {
      const response = await this.request({ auth: true }).get(`${this.entity}`);
      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }
}
