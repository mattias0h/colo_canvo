import React, {Component} from "react";
import {Button, Collapse} from 'react-bootstrap';

class Toolbox extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          id="open-toolbox"
          onClick={() => this.setState({ open: !open })}
          aria-controls="toolbox-controls"
          aria-expanded={open}
          variant="secondary"
        >
          Open text toolbox
        </Button>
        <Collapse in={this.state.open}>
          <div id="toolbox-controls">
            <div className="pt-3 d-flex flex-column">
              {this.props.children}
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Toolbox;