import { TRENDS_PATH } from './path-constants';

console.log(TRENDS_PATH);

import(/* webpackChunkName: "internal-error-route" */ './InternalError');
import(/* webpackChunkName: "not-found-route" */ './NotFound');
