import React from 'react';
import {SmallNews} from "./smallNews/smallNews.jsx";
import "./newsFeaturesAdvertising.css"

export function NewsFeaturesAdvertising() {
    return(
        <div className='news-features-advertising'>
            <div className='last-news'>
                <SmallNews />
            </div>
            <div className="features-advertising">
                <div className='features'>Aca va el contenido destacado</div>
                <div className='advertising'>Aca va la publicidad</div>
            </div>
        </div>
    )
}