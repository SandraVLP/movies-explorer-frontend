import React from 'react';

function MoviesCard(props) {

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    };
const imgUrl = props.data.image.url ? `https://api.nomoreparties.co/${props.data.image.url}` : props.data.image;

    return (
        <div className="card">
            <a target="_blank" href={props.data.trailerLink}><img className="card__image" src={imgUrl} alt="Фильм"></img> </a>
            {props.showAddButton ? 
            (props.data.isSaved
            ? <button className="card__save-active" type="button" onClick={() =>  props.onDeleteClick(props.data)}></button>
            : 
            <button className="card__save" type="button" onClick={() => props.onSaveClick(props.data)} >Сохранить</button>)

            : <button className="card__remove" type="button" onClick={() => props.onDeleteClick(props.data)}></button> }
            <div className="card__description">
                <p className="card__name">{props.data.nameRU}</p>
                <p className="card__duration">{getTimeFromMins(props.data.duration)}</p>
            </div>
       </div>

    );
  }
  
  export default MoviesCard;