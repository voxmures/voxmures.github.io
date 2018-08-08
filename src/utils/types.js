const expand = (array, cb) => {
	return cb(array.reduce((result, str) => {
		result[str] = str;
		return result;
	}, {}));
};

const format = (obj) => {
	let result = {};
	for (let key in obj) {
		expand(obj[key], (type) => {
			result[key] = type;
		});
	}
	return result;
};

export default format;