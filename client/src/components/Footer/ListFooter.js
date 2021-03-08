import React from 'react'
import { List } from 'semantic-ui-react'

const ListFooter = () => (
  <div className="list-footer">
    <List floated='right' horizontal>

      <List.Item href='#'>Termos</List.Item>
      <List.Item href='#'>Privacidade</List.Item>
      <List.Item href='#'>Contato</List.Item>
    </List>

    <List horizontal>
      <List.Item  href='#'>
        © CalegariCorporation, Inc.
      </List.Item>
    </List>
  </div>
)

export default ListFooter;