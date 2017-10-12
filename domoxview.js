
/**
* Bar Component <Uibar>text...</Uibar>
* @children { String } title
* use for title of block.
*/

class Uibar extends React.Component {
  render(){
    return
       (<div>
          <h3 className="ui-bar ui-bar-a ui-corner-all">{ this.props.children }</h3>
       </div>)
     }
}

/**
* Foco Component <Lightbulb name="foo" pin={n}/>.
* @props { String } name
* @props { Number } pin
* use for unique light.
*/

class Lightbulb extends React.Component {
  render(){
    this.props.pin;
    return
    (<div>
      <label for="flip-select-second"><strong>{ this.props.name}</strong></label>
        <select name="flip-select" data-role="flipswitch" className="foco">
        <option>Off</option>
        <option selected="">On</option>
      </select>
    </div>)
    }
}
