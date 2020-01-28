import React, { Component } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core/'

export default class Content extends Component {

  state = {
    news: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts', { headers: { cache: "force-cache" } })
      .then(response => response.json())
      .then(res => {
        this.setState({ news: res })
      })
  }


  render() {
    const { news } = this.state
    return (
      <div >
        <div style={{ textAlign: "center" }}>
          <h1>React PWA App Demo Test</h1>
        </div>
        <div>
          <List>
            {news && news.map((item) => {
              return (
                <ListItem style={{ flexDirection: 'column' }}>
                  <div style={{ flexDirection: 'column' }}>
                    <h4>{item.title}</h4>
                    <h5>{item.body}</h5>
                  </div>
                </ListItem>
              )
            })}
          </List>
        </div>
      </div>
    )
  }
}