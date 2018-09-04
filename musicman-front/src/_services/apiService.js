import axios from 'axios';
import { _config } from '../_config';

export default axios.create({
  baseURL: `${_config.apiBaseUrl}`
});
