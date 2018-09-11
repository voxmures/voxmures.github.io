class ModuleManager {
	_store = null;
	_modules = [];

	constructor(store) {
		this._store = store;
	};

	register(module) {
		let name = module.name;
		if (!this.isRegistered(name)) {
			this._store.registerModule('$_' + name, module);
			this._modules.push(name);
		}
	};

	isRegistered(name) {
		return this._modules.some(m => m === name);
	};
};

// const Module = (name, store) => {
// 	const modules = new ModuleManager(store);
// 	return function (Component) {
		
// 	}
// };
// export default Module;

// export class Store {
// 	name = '';
// 	namespaced = true;
// 	state = {};
// 	actions = {};
// 	mutations = {};
// 	getters = {};

// 	constructor(options) {
// 		Object.assign(this, options);
// 	};
// };

// const moduleDecorator = (name, _store) => {
// 	return function decorator(Class) {
// 		return () => {
// 			const module = new Class(_store);
// 			return {
// 				module,
// 				register: () => {
// 					store.registerModule('$_' + name, module);
// 					if (typeof module['init'] === 'function')
// 						module.init(store);
// 				}
// 			};
// 		}
// 	}
// };
// export { moduleDecorator as Module };
