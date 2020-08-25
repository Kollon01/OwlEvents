import axios from 'axios';

// Se crea instancia http con valores default
const httpInstance = axios.create( {
    baseURL: 'http://localhost:8001/api/' 
});

// Interceptor para enviar datos recibidos y checar errores
httpInstance.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
        // Loggear mensaje de error a un servicio como Sentry
        // Mostrar error genérico al usuario
        return Promise.reject(error);
    }
});
 
export default httpInstance;