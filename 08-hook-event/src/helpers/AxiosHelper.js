const axiosHelper = {
    ajax: async function (url, method, formData, headers={}) {
        let response = null;

        try {
            switch (method.toLowerCase()) {
                case "get":
                    let data = null;
                    try {
                        data = Object.fromEntries(formData);
                    } catch (e) {
                        data = formData;
                    }

                    response = await axios.get(url, {
                        params: data,
                        headers: headers
                    });
                    break;
                case "post":
                    response = await axios.post(url, formData, {
                        headers: headers
                    });
                    break;
                case "put":
                    response = await axios.put(url, formData, {
                        headers: headers
                    });
                    break;
                case "delete":
                    response = await axios.delete(url, {
                        data: formData,
                        headers: headers
                    });
                    break;
            }
        } catch (error) {
            let alertTitle = null;
            let alertMsg = null;
            console.log(error);

            if (error.response?.data) {
                const data = error.response.data;

                alertTitle = `${data.status} Error`;
                alertMsg = data.message;

                console.error("Error occurred in the backend server.");
                console.error(`[${data.status}] ${data.error}`);
                console.error(data.trace);
            } else {
                alertMsg = error.message;

                console.error("Error occurred in the Axios.");
                console.error(`[${error.code}] ${error.message}`);
            }

            throw new Error(`[${alertTitle}]\n${alertMsg}`);
        }

        return response?.data;
    },
    get: async function (url, formData, headers = {}) {
        return await this.ajax(url, "get", formData, headers);
    },
    post: async function (url, formData, headers = {}) {
        return await this.ajax(url, "post", formData, headers);
    },
    put: async function (url, formData, headers = {}) {
        return await this.ajax(url, "put", formData, headers);
    },
    delete: async function (url, formData, headers = {}) {
        return await this.ajax(url, "delete", formData, headers);
    }
}

export default axiosHelper;