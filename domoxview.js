/*
Foco Component.
@param {String }
*/

class Lightbulb extends React.Component {
      render(){
          this.props.pin;
          return (
          <div>
          <label for="flip-select-second"><strong>{ this.props.name}</strong></label>
          <select name="flip-select" data-role="flipswitch" class="foco">
            <option>Off</option>
            <option selected="">On</option>
          </select>
          </div>
          )
      }
}
