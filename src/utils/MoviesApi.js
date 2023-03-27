class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }


    _checkResponse(res) {
        // тут проверка ответа
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      }

      getMovies() {
        return fetch(`${this._baseUrl}`, { headers: this._headers }).then(
            this._checkResponse
          );
      }
    }
      const moviesApi = new Api({
        baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
        headers: {
          // authorization: "3bd429b0-18aa-4fd8-8b35-785c3cf83e41",
          "Content-Type": "application/json",
        },
      });
      
      export default moviesApi;