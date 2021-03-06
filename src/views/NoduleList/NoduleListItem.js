import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import './NoduleList.css'

import NoduleListController from '../../Controllers/NoduleListController'

class NoduleListItem extends Component {
  constructor () {
    super()
    this.controller = new NoduleListController()
  }

  render = () => {
    const { nodule } = this.props 
    return (
      <Card key={nodule.id} id={nodule.id} style={{ width: '380px' }}>
        <Card.Content>
          <Card.Header>{ nodule.label }</Card.Header>
          <Card.Meta>{`${nodule.tables.length} tables`}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <span 
          onClick={() => { this.controller.deleteNodule(nodule.id) }}
          style={{ cursor: 'pointer' }}>
            Delete <Icon name='trash' />
          </span>
          <span 
          onClick={() => { this.controller.selectTableToView(nodule.id) }}
          style={{ cursor: 'pointer' }}>
            View <Icon name='table' />
          </span>
          <span 
          onClick={() => { this.controller.convertNoduleToTable(nodule.id) }}
          style={{ cursor: 'pointer' }}>
            To Table <Icon name='clone' />
          </span>
        </Card.Content>
      </Card>
    )
  }
}

export default NoduleListItem
