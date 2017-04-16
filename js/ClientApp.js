var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'props are the best!' }),
        MyTitleFactory({ title: 'semi-colons suck!' }),
        MyTitleFactory({ title: 'some people like semi-colons!' }),
        MyTitleFactory({ title: 'this is the last string.' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
