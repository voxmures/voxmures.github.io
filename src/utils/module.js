export default class ModuleManager {
	_store = null;
	_modules = new Map();

	constructor(store) {
		this._store = store;
	};

	register(modules) {
		let target = Object.values(modules);
		for (let t of target) {
			this._register(t);
		}
	};

	isRegistered(name) {
		return this._modules.get(name);
	};

	_register(module) {
		let m = module(this._store);
		if (!this.isRegistered(m.module.name)) {
			m.register();
		}
	};
};

export class Store {
	name = '';
	namespaced = true;
	state = {};
	actions = {};
	mutations = {};
	getters = {};

	constructor(options) {
		Object.assign(this, options);
	};
};

const moduleDecorator = (name, _store) => {
	return function decorator(Class) {
		return (store) => {
			let module = new Class(_store);
			return {
				module,
				register: () => {
					store.registerModule('$_' + name, module);
					if (typeof module['init'] === 'function')
						module.init(store);
				}
			};
		}
	}
};
export { moduleDecorator as Module };

const moduleMixin = {
	created() {
		if (this.$options.modules) {
			this.$modules.register(this.$options.modules);
		}
	}
};
export { moduleMixin as ModuleMixin };