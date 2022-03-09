const API_END_POINT = API_END_POINT;

export const request = async (url, options = {}) => {
    try {
        const fullUrl = `${API_END_POINT}${url}`;
        const reponse = await fetach(fullUrl, options);

        if (response.ok) {
            const result = await response.json();
            return result;
        }
        throw new Error('Something went wrong');
    } catch (e) {
        alert(e.message);
    }
};
