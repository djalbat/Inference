"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _todoListItem = _interopRequireDefault(require("./todoListItem"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = _reaction.React.Component;

var TodoListItems = /*#__PURE__*/function (_Component) {
  _inherits(TodoListItems, _Component);

  var _super = _createSuper(TodoListItems);

  function TodoListItems() {
    _classCallCheck(this, TodoListItems);

    return _super.apply(this, arguments);
  }

  _createClass(TodoListItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var store = this.context.store;
      this.unsubscribe = store.subscribe(function () {
        return _this.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.context.store,
          state = store.getState(),
          todos = state.todos,
          visibilityFilter = state.visibilityFilter,
          visibleTodos = getVisibleTodos(todos, visibilityFilter),
          items = visibleTodos.map(function (visibleTodo) {
        var id = visibleTodo.id,
            text = visibleTodo.text,
            completed = visibleTodo.completed;
        return _reaction.React.createElement(_todoListItem["default"], {
          text: text,
          completed: completed,
          clickHandler: function clickHandler() {
            var type = _constants.TOGGLE_TODO,
                action = {
              type: type,
              id: id
            };
            store.dispatch(action);
          }
        });
      });
      return items;
    }
  }]);

  return TodoListItems;
}(Component);

exports["default"] = TodoListItems;

var getVisibleTodos = function getVisibleTodos(todos, visibilityFilter) {
  var visibleTodos;

  switch (visibilityFilter) {
    case _constants.SHOW_ALL:
      visibleTodos = todos;
      break;

    case _constants.SHOW_ACTIVE:
      visibleTodos = todos.filter(function (todo) {
        var completed = todo.completed,
            active = !completed;
        return active;
      });
      break;

    case _constants.SHOW_COMPLETED:
      visibleTodos = todos.filter(function (todo) {
        var completed = todo.completed;
        return completed;
      });
      break;
  }

  return visibleTodos;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbXMuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJUb2RvTGlzdEl0ZW1zIiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ0b2RvcyIsInZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmxlVG9kb3MiLCJnZXRWaXNpYmxlVG9kb3MiLCJpdGVtcyIsIm1hcCIsInZpc2libGVUb2RvIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwidHlwZSIsIlRPR0dMRV9UT0RPIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiZmlsdGVyIiwidG9kbyIsImFjdGl2ZSIsIlNIT1dfQ09NUExFVEVEIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFMsR0FBY0MsZSxDQUFkRCxTOztJQUVhRSxhOzs7Ozs7Ozs7Ozs7O3dDQUNDO0FBQUE7O0FBQUEsVUFDVkMsS0FEVSxHQUNBLEtBQUtDLE9BREwsQ0FDVkQsS0FEVTtBQUdsQixXQUFLRSxXQUFMLEdBQW1CRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0I7QUFBQSxlQUFNLEtBQUksQ0FBQ0MsV0FBTCxFQUFOO0FBQUEsT0FBaEIsQ0FBbkI7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVGLEtBQUYsR0FBWSxLQUFLQyxPQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFDQUssS0FEQSxHQUNRTCxLQUFLLENBQUNNLFFBQU4sRUFEUjtBQUFBLFVBRUVDLEtBRkYsR0FFOEJGLEtBRjlCLENBRUVFLEtBRkY7QUFBQSxVQUVTQyxnQkFGVCxHQUU4QkgsS0FGOUIsQ0FFU0csZ0JBRlQ7QUFBQSxVQUdBQyxZQUhBLEdBR2VDLGVBQWUsQ0FBQ0gsS0FBRCxFQUFRQyxnQkFBUixDQUg5QjtBQUFBLFVBSUFHLEtBSkEsR0FJUUYsWUFBWSxDQUFDRyxHQUFiLENBQWlCLFVBQUNDLFdBQUQsRUFBaUI7QUFBQSxZQUNoQ0MsRUFEZ0MsR0FDUkQsV0FEUSxDQUNoQ0MsRUFEZ0M7QUFBQSxZQUM1QkMsSUFENEIsR0FDUkYsV0FEUSxDQUM1QkUsSUFENEI7QUFBQSxZQUN0QkMsU0FEc0IsR0FDUkgsV0FEUSxDQUN0QkcsU0FEc0I7QUFHeEMsZUFFRSw4QkFBQyx3QkFBRDtBQUFjLFVBQUEsSUFBSSxFQUFFRCxJQUFwQjtBQUNjLFVBQUEsU0FBUyxFQUFFQyxTQUR6QjtBQUVjLFVBQUEsWUFBWSxFQUFFLHdCQUFNO0FBRWxCLGdCQUFNQyxJQUFJLEdBQUdDLHNCQUFiO0FBQUEsZ0JBQ01DLE1BQU0sR0FBRztBQUNQRixjQUFBQSxJQUFJLEVBQUpBLElBRE87QUFFUEgsY0FBQUEsRUFBRSxFQUFGQTtBQUZPLGFBRGY7QUFNQWQsWUFBQUEsS0FBSyxDQUFDb0IsUUFBTixDQUFlRCxNQUFmO0FBRUQ7QUFaZixVQUZGO0FBa0JELE9BckJPLENBSlI7QUEyQk4sYUFBT1IsS0FBUDtBQUNEOzs7O0VBeEN3Q2QsUzs7OztBQTJDM0MsSUFBTWEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSCxLQUFELEVBQVFDLGdCQUFSLEVBQTZCO0FBQ25ELE1BQUlDLFlBQUo7O0FBRUEsVUFBUUQsZ0JBQVI7QUFDRSxTQUFLYSxtQkFBTDtBQUNFWixNQUFBQSxZQUFZLEdBQUdGLEtBQWY7QUFDQTs7QUFFRixTQUFLZSxzQkFBTDtBQUNFYixNQUFBQSxZQUFZLEdBQUdGLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDOUIsWUFBRVIsU0FBRixHQUFnQlEsSUFBaEIsQ0FBRVIsU0FBRjtBQUFBLFlBQ0ZTLE1BREUsR0FDTyxDQUFDVCxTQURSO0FBR04sZUFBT1MsTUFBUDtBQUNELE9BTGMsQ0FBZjtBQU1BOztBQUVGLFNBQUtDLHlCQUFMO0FBQ0VqQixNQUFBQSxZQUFZLEdBQUdGLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFBQSxZQUM1QlIsU0FENEIsR0FDZFEsSUFEYyxDQUM1QlIsU0FENEI7QUFHcEMsZUFBT0EsU0FBUDtBQUNELE9BSmMsQ0FBZjtBQUtBO0FBcEJKOztBQXVCQSxTQUFPUCxZQUFQO0FBQ0QsQ0EzQkQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tIFwiLi90b2RvTGlzdEl0ZW1cIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCwgVE9HR0xFX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iXX0=