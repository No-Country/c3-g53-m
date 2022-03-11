import React from 'react';
import {SmallNews} from "./smallNews/smallNews.jsx";
import "./newsFeaturesAdvertising.css"
import Jordan from "./jordanshoes.jpg"
import Jordan2 from "./jordan2.jpg"

export function NewsFeaturesAdvertising() {

    return(
        <div className='news-features-advertising'>
            <div className='last-news'>
                <SmallNews />
            </div>
            <div className="features-advertising">
                <img className="jordan" src={Jordan2} alt="no-foto" />
                <img src={Jordan} alt="no-foto" />
            </div>
        </div>
    )
}