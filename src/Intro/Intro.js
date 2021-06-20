import {
  Link
} from 'react-router-dom'
import cat from './cat-collar.jpg'
export const Intro = () => {
  return (<div>
    <h1>Wollen Sie für Ihr Kätzchen auch so ein schönes Halsband?</h1>
    <img src={cat} alt="cat-collar"></img>
    <Link to="/order"><button>Hier geht's zur Bestellung</button></Link>
  </div>)
}