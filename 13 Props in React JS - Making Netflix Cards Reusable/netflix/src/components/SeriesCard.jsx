import '../SeriesCard.css'

export const SeriesCard = (props) => {
    console.log(props)
    return (            
                
                    <li key={props.curElem.id}>
                        <img src={props.curElem.img_url} alt="Error" 
                         width="800px"
                         height="500px"
                        />
                        <br /><br />
                        <div className='info'>
                        <h2>{props.curElem.name}</h2>
                        
                        <h2>{props.curElem.cast}</h2>
                        <h2>{props.curElem.genre}</h2>
                        <p>{props.curElem.description}</p>
                        <h1>{props.curElem.rating}</h1>
                        <a href={props.curElem.watch_url}>
                            <button>Watch Now</button>
                        </a>
                        <br /><br /><br />
                        <hr />
                        </div>
                    </li>        

    )
}