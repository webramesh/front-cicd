import { BaseService } from './base.service';
import { ErrorWrapper, ResponseWrapper } from './util';
import { API_URL } from '../.env';
import bundle from '../store/modules/bundle';
import store from '../store';

export class FontService extends BaseService {
  static get entity() {
    return `/front/category/${store.state.frontflow.userProjectInfo.selected_sub_category_slug}/bundle?`;
  }

  static async getBundle({ limit = '', page = 1 } = {}) {
    try {
      const response = await this.request({ auth: true }).get(
        `${this.entity}limit=${limit}&page=${page}`
      );

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async postChoosedFont(choosedFont) {
    try {
      const response = await this.request({ auth: true }).post(
        `${this.entity}`,
        { font: choosedFont }
      );
      return new ResponseWrapper(response, response.data.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async findFont(fonts) {
    try {
      const response = await this.request({ auth: true }).post(
        `${API_URL}` + '/' + this.entity + '/fonts',
        { font: fonts }
      );

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }
}
