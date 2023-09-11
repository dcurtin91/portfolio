function Music() {
    return (
        <div>
            <div className="tile is-ancestor" style={{ marginTop: "30px" }}>
                <div className="tile is-parent" style={{ display: "flex", justifyContent: "center" }} >
                    <div className="tile is-12 is-child box" style={{ display: "flex", justifyContent: "center", width: "75%" }}>
                        <iframe style={{ width: "100%" }} className="soundcloud" title="soundcloud" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1686068844&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=false" seamless><a href="https://soundcloud.com/davidcurtin/sets/david-curtin-album">David Curtin Album</a></iframe>

                    </div>
                </div>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-4 is-parent">
                    <div className="tile is-child box" style={{ display: "flex", justifyContent: "center" }}>
                        <iframe className="bandcamp" title="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3408169599/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://davidcurtin.bandcamp.com/album/cms">CMS by David Curtin</a></iframe>
                    </div>
                </div>
                <div className="tile is-4 is-parent">
                    <div className="tile is-child box" style={{ display: "flex", justifyContent: "center" }}>

                        <iframe className="bandcamp" title="fruits" src="https://bandcamp.com/EmbeddedPlayer/album=3168018172/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://woongi.bandcamp.com/album/fruits-of-the-midi">Fruits of the Midi by Woongi</a></iframe>

                    </div>
                </div>
                <div className="tile is-4 is-parent">
                    <div className="tile is-child box" style={{ display: "flex", justifyContent: "center" }} >
                        <iframe className="bandcamp" title="rips" src="https://bandcamp.com/EmbeddedPlayer/album=1149480699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://woongi.bandcamp.com/album/rips-cuts">Rip&#39;s Cuts by Woongi</a></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}

//3408169599

export default Music;
