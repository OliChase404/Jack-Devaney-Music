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
                <img src="src/assets/TPL_ad_bg_Dark_Text.png" alt="Moody Jack" className="MoodyJack"/> : 
                <img src="src/assets/TPL_ad_bg.png" alt="Moody Jack" className="MoodyJack"/> 
                }
                <img src="src/assets/TPL COVERART.png" alt="The Phantom Limb" className="AlbumArt"/>
            </div>

            <div className="ReviewTextBlock">
            <p>"What a proper warm old school piece of acousticism here, 
                folky you have to say and when Jack’s vocals emerge that is confirmed in a manner that is not dissimilar to Simon & Garfunkel. 
                The inkling I had however is that this artist reaches for a greater rock platform so when he howls at the moon you can tell he 
                wouldn’t be out of place as he takes the stage and the hoards gaze on adoringly. But for now on ‘The Phantom Limb’ things are kept rather tempered, 
                full of sixties and Fleet Foxes reminders and a psychedelic drift that might have some reaching for the nearest flower to place it promptly in their hair. 
                The likeability is strong on this one and in that chorus there is a route to singalong that will probably mark the centerpiece of Jack’s shows going forward. 
                ‘The Phantom Limb’ makes it easy for us listeners because it is so likeable, it has a familiar side but one that is imbued with a rare vitality. 
                It will be among its own on our <strong><em>Indie Breakers</em></strong> playlist on Spotify!" - <em>MP3 Hugger Review</em></p>
            </div>

            <div className="ReviewTextBlock">
            <p>""Jack, thanks for the amazing evening! 
                It was a great atmosphere and we all enjoyed it. 
                You flooded the room with your amazing voice and pleasant personality" - <em>Anita</em> ★★★★★</p>
            </div>

        </div>
    )
}

export default Home;