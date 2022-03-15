import * as React from 'react';
import { BoozeCard } from '../../shared';
import "./Home.css";

const Home=()=> {

    const [boozeList, setBoozeList] = React.useState([]);

    React.useEffect(()=> {
        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data => setBoozeList(data));
    }, [])

    return <div className="grid-container">
        {boozeList?.map((booze: any)=> 
         <div className="grid-item"><BoozeCard key={booze.id} title={booze.name} ph={booze.ph} volume={booze.volume.value} alcohol={booze.srm} image={booze.image_url}/></div>)}
    </div>


}

export default Home;