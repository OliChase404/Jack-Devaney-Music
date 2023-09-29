import React, {useState} from "react";


function Home(){
    const [showAlbumLink, setShowAlbumLink] = useState(false)

    function handleBannerClick(){
        window.open("https://jackdevaney.bandcamp.com/album/the-phantom-limb")
    }

    return (
        <div className="Home">

            <div onClick={() => handleBannerClick()} onMouseEnter={() => setShowAlbumLink(true)} onMouseLeave={() => setShowAlbumLink(false)} className="Banner">
                {showAlbumLink ? 
                <img src="src/assets/TPL_ad_bg_Dark.png" alt="Moody Jack" className="MoodyJack"/> : 
                <img src="src/assets/TPL_ad_bg.png" alt="Moody Jack" className="MoodyJack"/> 
                }
                <img src="src/assets/TPL COVERART.png" alt="The Phantom Limb" className="AlbumArt"/>
                {showAlbumLink ? <div className="AlbumLink">Buy the album on BandCamp!</div> : null}
            </div>





        </div>
    )
}

export default Home;