import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3001/casaMiaManagement/v1', 
    timeout: 3000, 
    httpsAgent: false
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem("user")

        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const register = async (data) => {
    try{
        return await apiClient.post('/auth/register', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const login = async (data) => {
    try{
        return await apiClient.post('/auth/login', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const fetchUserProfile = async () => {
    try {
        const response = await apiClient.get('/users/profile');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching profile');
    }
};

export const updateUserProfile = async (profileData) => {
    try {
        const response = await apiClient.put('/users/profile', profileData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error updating profile');
    }
};
