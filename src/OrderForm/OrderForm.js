import {useState} from 'react'
export const OrderForm = () => {
  const [material, setMaterial] = useState('leather')
  const [labelWanted, setLabelWanted] = useState(true)
  const renderLeatherOptions = () => {
    if (material === 'leather') {
      return <div>
      <label htmlFor="pattern">Muster</label>
      <select name="pattern" id="pattern">
        <option value="dots">Dots</option>
        <option value="diamonds">Diamonds</option>
        <option value="hearts">Hearts</option>
      </select>
    </div>
    }
  }
  const renderFabricOptions = () => {
    const renderLabel = () => {
      if (labelWanted) {
        return <input type="text" id="labelText" name="labelText" placeholder="Geben Sie hier den Namen ihres Lieblings ein"/>
      }
    }
    if (material === 'fabric') {
      return <div>
        <div>
      <label htmlFor="color">Farbe</label>
      <select name="color" id="color" defaultValue='##ff0000'>
        <option value="#ff0000">Rot</option>
        <option value="#00ff00">Grün</option>
        <option value="#0000ff">Blau</option>
        <option value="#ffff00">Gelb</option>
        <option value="#00ffff">Türkis</option>
        <option vlaue="#ff9900">Orange</option>
        <option value="#ff00ff">Lila</option>
        <option value="#ffffff">Weiß</option>
        <option value="#000000">Schwarz</option>
      </select>
      </div>
      <div>
        <label htmlFor="label">Möchten Sie einen Namensanhänger für das Halsband?</label>
        <input type="checkbox" id="label" name="label" defaultChecked={labelWanted} onChange={()  => setLabelWanted(!labelWanted)}/>
      </div>
      <div>
        {renderLabel()}
      </div>
    </div>
    }
  }
  return (
    <div><h1>OrderForm</h1>
    <form>
      <input type="radio" id="leather" name="material" value="leather" defaultChecked onClick={() => setMaterial('leather')}/>

      <label htmlFor="leather">
        Leder
      </label>

      <input type="radio" id="fabric" name="material" value="fabric" onClick={() => setMaterial('fabric')}/>

      <label htmlFor="fabric">
        Stoff
      </label>
      {renderLeatherOptions()}
      {renderFabricOptions()}
      
    </form>
    </div>
  )
}