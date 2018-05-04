import React, { Component } from 'react'
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';


export default class ReactForce extends Component {
    render() {
    return (
        <InteractiveForceGraph
          simulationOptions={{ height: 600, width: 600 }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
        >
          <ForceGraphNode node={{ id: 'first-node', label: 'First node' }} fill="red" />
          <ForceGraphNode node={{ id: 'second-node', label: 'Second node' }} fill="blue" />
          <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
        </InteractiveForceGraph>
    );
  }
};