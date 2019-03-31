import React, {Component} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import {fabric} from 'fabric';
import Toolbox from './Toolbox';

class Canvas extends Component {
  componentDidMount() {
    this.__canvas = new fabric.Canvas('canvas', {
      backgroundColor: 'rgb(225,225,225)',
      width: 760,
      height: 400,
      preserveObjectStacking: true
    });

    this.__canvas.setDimensions({width: '100%', height: '400px'}, {cssOnly: true});
  }

  addText() {
    let text = new fabric.IText('text', {
        left: 100,
        top: 100,
        objecttype: 'text'
    });

    this.__canvas.add(text);
  }

  removeText() {
    this.__canvas.remove(this.__canvas.getActiveObject());
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <canvas id="canvas" />
          </Col>
          <Col className="d-flex flex-column justify-content-between" sm={12} md={4}>
            <Toolbox>
              <Button id="create-text" variant="primary" onClick={() => this.addText()}>Add text</Button>
              <Button id="remove-text" className="mt-2" variant="danger" onClick={() => this.removeText()}>Delete selected text</Button>
            </Toolbox>
            <textarea name="" id="log-box" cols="30" rows="10" readOnly></textarea>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Canvas;
