import './People.css';
import male from './icons/male.png';
import female from './icons/female.png';

function People(props)
{
    return(
        <div id="People">
        {
            Object.keys(props.db).map
            (
                element =>
                {
                    return(
                        <div className='card'>
                            <img className='photo' src = {props.db[element].photo} alt="Photo"/>
                            <div className='name'>{props.db[element].name} {props.db[element].surname}</div>
                            <div className='age'>Age: {props.db[element].age}</div>
                            <div className='gender'><img src={props.db[element].pol==='male'? male:female} alt=""/></div>
                        </div>
                    )
                }
            )
        }
        </div>
    )
}
export default People;