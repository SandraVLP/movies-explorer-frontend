class MainApi {
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
  
    setToken(token) {
      this._headers = {...this._headers, 
        authorization: `Bearer ${token}`}
    }
  
    removeToken () {
      this._headers = {...this._headers, 
        authorization: `Bearer `}
    }
  
    getProfileData() {
      return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
        this._checkResponse
      );
    }

    getSavedMovies() {
      return fetch(`${this._baseUrl}/movies`, { headers: this._headers }).then(
          this._checkResponse
        );
    }
  
  
    setProfileData(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          email: data.email,
        }),
      }).then(this._checkResponse);
    }

    addMovie(data) {
      return fetch(`${this._baseUrl}/movies`, {
        method: "POST",
        headers: this._headers,
  
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: `https://api.nomoreparties.co/${data.image.url}`,
          trailerLink: data.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
        }),
      }).then(this._checkResponse);
    }
  
    deleteMovie(_id) {
      return fetch(`${this._baseUrl}/movies/${_id}`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkResponse);
    }
  
    changeLikeCardStatus(cardId, isLiked) {
      return isLiked ? this.deleteLike(cardId) : this.putLike(cardId)
    }
  
    // другие методы работы с API
  }
  
  const api = new MainApi({
    baseUrl: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default api;
  