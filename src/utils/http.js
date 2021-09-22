import axios from 'axios';

var INSTANCE = axios.create({
	baseURL: window.apiHostSetting['API'],
	headers: {
		'Content-Type': 'application/json'
	},
	timeout: 10000
});

INSTANCE.interceptors.response.use(
	(res) => {
		if (res.status === 200) return Promise.resolve(res);
		return Promise.reject(res);
	},
	(err) => {
		if (err.response.status) {
			switch (err.response.status) {
				default:
					console.log(err.response.data.message);
			}
			return Promise.reject(err.response);
		}
	}
);

export const HTTP_SERVERS = {
	AxiosInterceptors: function () {}
};
