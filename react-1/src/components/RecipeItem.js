import React from 'react'
import { slugify } from '../helpers';


const highlight = (text, highlight) => {
    if ((text !== null) && (text !== '') && (typeof text !== 'undefined'))	{
        let regex = new RegExp(`(${highlight})`, 'gi');
        let parts = text.split(regex);
        return <span>{ parts.map((part,index) => {
            if (part.toLowerCase() === highlight) {
                return <mark key={index}>{part}</mark>
            }
            return part;
        })
        }</span>
    }
};

const RecipeItem = (props) => (

    <div className="col-sm-3 mt-4" onClick={() => props.onClick(slugify(props.title))}>
        <div className="card">
            <img className="card-img-top img-fluid" src={props.thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title">{highlight(props.title, props.highlight)}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{highlight(props.ingredients, props.highlight)}
                </p>
            </div>
        </div>
    </div>
);
export default RecipeItem;
