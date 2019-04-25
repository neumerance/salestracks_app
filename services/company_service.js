import {
  COMPANY_NAME,
  COMPANY_SLUG,
  API_BASE_URL
} from 'react-native-dotenv';
import axios from 'axios';

// {"access-token"=>"8oFusLgJhJWPeLXJxogMlA", "token-type"=>"Bearer", "client"=>"V6CdOirvhfVZy0yIcE1BTg", "expiry"=>"1557270476", "uid"=>"jonathan@mailer.com"}
// Make a request for a user with a given ID
axios.get(`${API_BASE_URL}/v1/companies.json`).
      then(function (response) {
        // handle success
        console.log(response);
      }).
      catch(function (error) {
        // handle error
        console.log(error);
      }).
      then(function () {
        // always executed
      });
r