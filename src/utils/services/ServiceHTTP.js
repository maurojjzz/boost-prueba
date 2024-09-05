export class ServiceHTTP {

  constructor(subRoute) {
    this._url = import.meta.env.VITE_API_URL;
    this._subRoute = subRoute;
  }

  async get() {
    try {
      const response = await fetch(`${this._url}/${this._subRoute}`);
      if (!response.ok) {
        throw new Error('Error en la petición GET');
      }
      return response.json();
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`);
      throw error;
    }
  }

  async getById(id) {
    try {
      const response = await fetch(`${this._url}/${this._subRoute}/${id}`);
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      return response.json();
    } catch (error) {
      console.error(`Error en la peticiion: ${error.message}`);
      throw error;
    }
  }

}
