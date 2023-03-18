import film1 from "../../images/film1.png";
import React, { useState } from 'react';
import { isFocusable } from "@testing-library/user-event/dist/utils";

function MoviesCard(props) {
    const [isSaved, setisSaved] = useState(props.data.isSaved);


    return (
        <div className="card">
            <img className="card__image" src={props.data.src}></img>
            {props.showAddButton ? 
            (isSaved 
            ? <button className="card__save" type="button" onClick={() => setisSaved(false)} >Сохранить</button>
            : <button className="card__save-active" type="button" onClick={() => setisSaved(true)}></button>)

            : <button className="card__remove" type="button"></button> }
            <div className="card__description">
                <p className="card__name">{props.data.cardName}</p>
                <p className="card__duration">{props.data.cardDuration}</p>
            </div>
       </div>

    );
  }
  
  export default MoviesCard;