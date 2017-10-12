
/**
* Bar Component <Uibar>text...</Uibar>
* @children { String } title
* use for title of block.
*/

class Uibar extends React.Component {
  render(){
    return
       (<div>
          <h3 id={ this.props.id } className="ui-bar ui-bar-a ui-corner-all">{ this.props.children }</h3>
       </div>)
     }
}

/**
* Body Component <BodyComp></BodyComp>.
* use for unique structuring block.
*/

class BodyComp extends React.Component {
  render(){
    return
      (<div className="ui-body ui-body-a ui-corner-all">{ this.props.children }</div>)
    }
}

/**
* Switch Component <Switch name="foco" pin={n}/>.
* @props { String } name
* @props { Number } pin
* use for unique light.
*/

class Switch extends React.Component {
  render(){
    this.props.pin;
    return
    (<div>
      <label for="flip-select-second"><strong>{ this.props.name }</strong></label>
        <select name="flip-select" data-role="flipswitch" className="foco">
        <option>Off</option>
        <option selected="">On</option>
      </select>
    </div>)
    }
}

/**
* Component <THG temp={n} hum={n} gas={n}/>.
* @props { Number } temp
* @props { Number } hum
* @props { Number } gas
*/

class THG extends React.Component {
   render(){
      return (
      <div>
        <Uibar id="heaterPhoto">Temperatura - Humeda - Gas</Uibar>
            <BodyComp>
              <div className="ui-grid-a toggle" id="currentTemp">
                <legend className="ui-block-a" id="Temp-icon">Temperatura °C</legend>
                <div className="ui-block-b">
                  <span id="TempValue" className="ui-shadow ui-btn ui-corner-all ui-btn-inline">{ this.props.temp || 0 }</span>
                </div>
               </div>
                <div className="ui-grid-a toggle" id="currentHum">
                <legend className="ui-block-a" id="Hum-icon">Humedad %</legend>
                <div className="ui-block-b">
                  <span id="HumValue" className="ui-shadow ui-btn ui-corner-all ui-btn-inline">{ this.props.hum || 0 }</span>
                </div>
              </div>
              <div className="ui-grid-a toggle" id="currentTemp">
                <legend className="ui-block-a" id="gas-icon">Escape de gas</legend>
                <div className="ui-block-b">
                  <span id="TempValue" className="ui-shadow ui-btn ui-corner-all ui-btn-inline">{ this.props.gas || 0 }</span>
                </div>
              </div>
            </BodyComp>
        </div>)
    }
}
