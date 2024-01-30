import axios from "axios";

export const instance = axios.create()

instance.defaults.headers.post['Accept'] = 'application/json';
instance.defaults.timeout = 60000;

