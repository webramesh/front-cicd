import axios from 'axios';
import { BaseService } from './base.service';
import { ErrorWrapper, ResponseWrapper } from './util';
import { API_URL } from '../.env';
import $store from '../store';
import $router from '../router';
import { Http } from './http.init';

export class LogoUploadService extends BaseService {
  static get entity() {
    return '';
  }

  static async postLogo({ image }) {
    // debugger;
    axios
      .post(`${API_URL}/api/admin/logo_upload`, { image })
      .then(response => {
        // debugger;
        if (response.status == 200) {
          localStorage.setItem('logo', JSON.stringify(response.data.payload));
          localStorage.setItem(
            'logo_location',
            JSON.stringify(response.data.location)
          );
        }
        return new ResponseWrapper(response, response.data.data);
      })
      .catch(error => {});
  }

  static async postBusinessForm({
    website_name,
    business_address,
    email,
    telephone,
    mobile
  }) {
    let postData = {
      website_name: website_name,
      business_address: business_address,
      email: email,
      telephone: telephone,
      mobile: mobile
    };
    await axios
      .post(`${API_URL}/` + this.entity + `business_form`, postData)
      .then(response => {
        // debugger
        if (response.data.status == 200) {
          $store.commit('user/SET_CURRENT_USER', response.data.payload);
          localStorage.setItem('user', JSON.stringify(response.data.payload));
        }
      })
      .catch(error => {
        // debugger;
      });
  }
}
