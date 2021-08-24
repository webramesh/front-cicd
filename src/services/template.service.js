import { BaseService } from './base.service';
import { ErrorWrapper, ResponseWrapper } from './util';
import store from '../store';

export class TemplateService extends BaseService {
  static get entity() {
    return `front/category/${store.state.frontflow.userProjectInfo.selected_sub_category_slug}/template?`;
  }

  static async getTemplate({ limit = '', page = 1 } = {}) {
    try {
      const response = await this.request({ auth: true }).get(
        `${this.entity}limit=${limit}&page=${page}`
      );
      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }
}
