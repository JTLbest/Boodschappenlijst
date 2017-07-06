var items = [];

if(localStorage && localStorage.getItem('items')){
  items = JSON.parse(localStorage.getItem('items'));
} else {
  items = [['Appels', 1, 'checked'], ['Bananen', 6, ''], ['Peren', 4, '']];
}

class boodschappenlijst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    var value = this.state.value;
    if (value != '') {
      items.unshift([value, 1, '']);
      localStorage.setItem('items', JSON.stringify(items));
    }
    
    this.setState({value: ''});
  }
  
  handleRemove(e) {
    e.preventDefault();
    
    var idx = items.indexOf(this);
    if (idx !== -1) { items.splice(idx, 1); }
    
    var event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
    localStorage.setItem('items', JSON.stringify(items));
  }
  
  handleCheck(e) {
    e.preventDefault();
    if (items[this][2] != 'checked') {
      items[this][2] = 'checked';
    } else {
      items[this][2] = '';
    }
    
    localStorage.setItem('items', JSON.stringify(items));
    var event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
  }
  
  handleCountUp(e) {
    e.preventDefault();
    items[this][1]++;
    
    localStorage.setItem('items', JSON.stringify(items));
    var event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
  }
  
  printPage(e) {
    e.preventDefault();
    window.print();
  }
  
  handleCountDown(e) {
    e.preventDefault();
    if (items[this][1] > 1) {
      items[this][1]--;
    }
    
    localStorage.setItem('items', JSON.stringify(items));
    
    var event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
  }
  
  render() {
    var self = this;
    var listItems;
    
    if (items.length == 0) {
      listItems = React.createElement("li", {className: 'empty'}, 'Dit lijstje bevat geen items..')
    } else {
      listItems = items.map(function(item, key) {
        return React.createElement(
          'li', {
            key: key,
            'data-id': key, 
            title: item[0],
            className: item[2]
          },
          React.createElement("div", {className: "wrap"},
            React.createElement("div", {className: "check", onClick: self.handleCheck.bind(key)}),
            React.createElement("p", {className: "count"}, item[1]),
            React.createElement("div", {className: "vote"}, null,
              React.createElement("button", {className: "up", onClick: self.handleCountUp.bind(key)}, "Up"),
              React.createElement("button", {className: "down", onClick: self.handleCountDown.bind(key)}, "Down"),
            ),
            React.createElement("p", {className: "value"}, item[0]),
            React.createElement("button", {className: "delete", onClick: self.handleRemove.bind(item)}, "Remove")
          )
        );
      });
    }
    
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Boodschappenlijst"
      ),
      React.createElement(
        "span",
        null,
        items.length
      ),
      React.createElement(
        "form",
        {onSubmit: this.handleSubmit },
        React.createElement("input", {
          type: "text",
          id: 'input',
          value: this.state.value,
          onChange: this.handleChange,
          placeholder: "Item toevoegen.."
        }),
      ),
      React.createElement(
        "ul",
        {id: 'list'},
        listItems
      ),
      React.createElement(
        "a",
        {id: 'share', href: '#', onClick: this.printPage},
        "Print je boodschappenlijst"
      )
    );
  }
};

ReactDOM.render(
  React.createElement(boodschappenlijst, null), document.getElementById('container')
);