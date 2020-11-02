import React from 'react';
import './QuoteCard.css';

const QuoteCard= ({character, image, quote}) => (
        <figure className='QuoteCard'>
            <img src={image} alt={character}/>
            <figcaption>
                <blockquote>{quote}</blockquote>
                <cite>{character}</cite>
            </figcaption>
        </figure>
    
);

    export default QuoteCard;