"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _constants = require("../constants");
var id = 0, inputDOMElement;
var AddTodo = function(props, context) {
    var store = context.store;
    return _reaction.React.createElement("div", null, _reaction.React.createElement("input", {
        ref: function(domElement) {
            inputDOMElement = domElement;
        }
    }), _reaction.React.createElement("button", {
        onClick: function() {
            var type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
                type: type,
                text: text,
                id: id
            };
            id++;
            store.dispatch(action);
            inputDOMElement.value = "";
        }
    }, "Add todo"));
};
var _default = AddTodo;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlkID0gMCxcbiAgICBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlkKys7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvZG87XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxTQUFBO0lBRUEsVUFBQTtJQUVBLEVBQUEsR0FBQSxDQUFBLEVBQ0EsZUFBQTtJQUVBLE9BQUEsWUFBQSxLQUFBLEVBQUEsT0FBQTtRQUNBLEtBQUEsR0FBQSxPQUFBLENBQUEsS0FBQTtXQVJBLFNBQUEsc0JBWUEsR0FBQSxTQVpBLFNBQUEsc0JBYUEsS0FBQTtBQUFBLFdBQUEsV0FBQSxVQUFBO0FBRUEsMkJBQUEsR0FBQSxVQUFBOztRQWZBLFNBQUEsc0JBbUJBLE1BQUE7QUFBQSxlQUFBO2dCQUVBLElBQUEsR0FuQkEsVUFBQSxXQW9CQSxJQUFBLEdBQUEsZUFBQSxDQUFBLEtBQUEsRUFDQSxNQUFBO0FBQ0Esb0JBQUEsRUFBQSxJQUFBO0FBQ0Esb0JBQUEsRUFBQSxJQUFBO0FBQ0Esa0JBQUEsRUFBQSxFQUFBOztBQUdBLGNBQUE7QUFFQSxpQkFBQSxDQUFBLFFBQUEsQ0FBQSxNQUFBO0FBRUEsMkJBQUEsQ0FBQSxLQUFBOztRQUdBLFFBRUE7O2VBTUEsT0FBQSJ9