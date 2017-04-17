import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'props are the best!', color: 'peru' }),
        MyTitleFactory({ title: 'semi-colons suck!', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'some people like semi-colons!', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'this is the last string.', color: 'darkvioletred' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
