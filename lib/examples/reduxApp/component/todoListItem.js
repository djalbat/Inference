'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var TodoListItem = function TodoListItem(props) {
  var onClick = props.onClick,
      completed = props.completed,
      text = props.text,
      textDecoration = completed ? 'line-through' : 'none',
      style = {
    textDecoration: textDecoration
  };


  return React.createElement(
    'li',
    { style: style,
      onClick: onClick
    },
    text
  );
};

module.exports = TodoListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWFjdCIsInJlYWN0aW9uIiwiVG9kb0xpc3RJdGVtIiwicHJvcHMiLCJvbkNsaWNrIiwiY29tcGxldGVkIiwidGV4dCIsInRleHREZWNvcmF0aW9uIiwic3R5bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFTSxlQUFXQSxRQUFRLFVBQVIsQ0FBWDtBQUFBLElBQ0VDLEtBREYsR0FDWUMsUUFEWixDQUNFRCxLQURGOzs7QUFHTixJQUFNRSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDdEJDLE9BRHNCLEdBQ09ELEtBRFAsQ0FDdEJDLE9BRHNCO0FBQUEsTUFDYkMsU0FEYSxHQUNPRixLQURQLENBQ2JFLFNBRGE7QUFBQSxNQUNGQyxJQURFLEdBQ09ILEtBRFAsQ0FDRkcsSUFERTtBQUFBLE1BRXhCQyxjQUZ3QixHQUVQRixZQUNDLGNBREQsR0FFRyxNQUpJO0FBQUEsTUFLeEJHLEtBTHdCLEdBS2hCO0FBQ05ELG9CQUFnQkE7QUFEVixHQUxnQjs7O0FBUzlCLFNBRUU7QUFBQTtBQUFBLE1BQUksT0FBT0MsS0FBWDtBQUNJLGVBQVNKO0FBRGI7QUFHR0U7QUFISCxHQUZGO0FBU0QsQ0FsQkQ7O0FBb0JBRyxPQUFPQyxPQUFQLEdBQWlCUixZQUFqQiIsImZpbGUiOiJ0b2RvTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHQgfSA9IHByb3BzLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbiA9IGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB0ZXh0RGVjb3JhdGlvblxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8bGkgc3R5bGU9e3N0eWxlfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG4gICk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3RJdGVtO1xuIl19