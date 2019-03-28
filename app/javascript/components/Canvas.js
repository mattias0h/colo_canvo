import React, {Component} from "react";
import {fabric} from 'fabric';

class Canvas extends Component {

  componentDidMount() {
    this.__canvas = new fabric.Canvas('canvas', {
      preserveObjectStacking: true,
      height: 700,
      width: 700,
      backgroundColor: 'gray'
    });
  }

  addText() {
    let text = new fabric.IText('текст', {
        fontFamily: 'arial black',
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
      <div>
        <button onClick={() => this.addText()}>Add text object</button>
        <button onClick={() => this.removeText()}>Delete text object</button>
        <canvas id="canvas"/>
      </div>
    )
  }
}
export default Canvas
