import seriesData from '../api/seriesData.json'

const NetflixSeries = () =>{
    return (
        <ul>
            {seriesData.map((currElem)=>{
                return (
                    <li key={currElem.id}>
                        <img src={currElem.img_url} alt="Error" />
                        <br /><br />
                        <h2>{currElem.name}</h2>
                        
                        <h2>{currElem.cast}</h2>
                        <h2>{currElem.genre}</h2>
                        <p>{currElem.description}</p>
                        <h1>{currElem.rating}</h1>
                        <a href={currElem.watch_url}>
                            <button>Watch Now</button>
                        </a>
                        <br /><br /><br />
                        <hr />
                    </li>
                )
            })}
        </ul>
    )
} 

export default NetflixSeries;