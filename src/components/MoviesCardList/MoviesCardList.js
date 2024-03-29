
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

    return (
        <div className={`card-list${props.grey ? " card-list_grey" : ""}`}>
            <div className="card-list__container">
        <div className="card-list__grid">
            {props.cardList.map(element => 
                <MoviesCard data={element} showAddButton={props.showAddButton} />

                
            )}


       </div>
       <div className="card-list__more">
       <button className="card-list__button">Ещё</button>
       </div>
       </div>
</div>
    );
  }
  
  export default MoviesCardList;