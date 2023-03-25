function NotFound() {

function handleBackClick(e) {
  e.preventDefault();
  window.history.back();
}

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <a href="#" className="not-found__link" onClick={handleBackClick}>
        Назад
      </a>
    </div>
  );
}

export default NotFound;
