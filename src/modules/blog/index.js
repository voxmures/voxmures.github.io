import { Module, Store } from '@/utils/module';
import _store from './_store';

import Types from '../types';

@Module(Types.MODULE_BLOG, _store)
export default class BlogModule extends Store{
	init(store) {
		console.log('Registered!');
	}
};
