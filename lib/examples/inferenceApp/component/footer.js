'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var FilterLink = require('./filterLink'),
    constants = require('../constants');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED;

var Footer = function Footer() {

  return React.createElement(
    'p',
    null,
    'Show: ',
    React.createElement(
      FilterLink,
      { filter: SHOW_ALL },
      'All'
    ),
    ' - ',
    React.createElement(
      FilterLink,
      { filter: SHOW_ACTIVE },
      'Active'
    ),
    ' - ',
    React.createElement(
      FilterLink,
      { filter: SHOW_COMPLETED },
      'Completed'
    )
  );
};

module.exports = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJyZWFjdGlvbiIsIkZpbHRlckxpbmsiLCJjb25zdGFudHMiLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiLCJGb290ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFTSxlQUFXQSxRQUFRLFVBQVIsQ0FBWDtBQUFBLElBQ0VDLEtBREYsR0FDWUMsUUFEWixDQUNFRCxLQURGOzs7QUFHTixJQUFNRSxhQUFhSCxRQUFRLGNBQVIsQ0FBbkI7QUFBQSxJQUNNSSxZQUFZSixRQUFRLGNBQVIsQ0FEbEI7O0FBR0EsSUFBTUssV0FBV0QsVUFBVUMsUUFBM0I7QUFBQSxJQUNNQyxjQUFjRixVQUFVRSxXQUQ5QjtBQUFBLElBRU1DLGlCQUFpQkgsVUFBVUcsY0FGakM7O0FBSUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07O0FBRW5CLFNBRUU7QUFBQTtBQUFBO0FBQ0csWUFESDtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxRQUFZLFFBQVFILFFBQXBCO0FBQUE7QUFBQSxLQUZGO0FBR0csU0FISDtBQUlFO0FBQUMsZ0JBQUQ7QUFBQSxRQUFZLFFBQVFDLFdBQXBCO0FBQUE7QUFBQSxLQUpGO0FBS0csU0FMSDtBQU1FO0FBQUMsZ0JBQUQ7QUFBQSxRQUFZLFFBQVFDLGNBQXBCO0FBQUE7QUFBQTtBQU5GLEdBRkY7QUFZRCxDQWREOztBQWdCQUUsT0FBT0MsT0FBUCxHQUFpQkYsTUFBakIiLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRmlsdGVyTGluayA9IHJlcXVpcmUoJy4vZmlsdGVyTGluaycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMLFxuICAgICAgU0hPV19BQ1RJVkUgPSBjb25zdGFudHMuU0hPV19BQ1RJVkUsXG4gICAgICBTSE9XX0NPTVBMRVRFRCA9IGNvbnN0YW50cy5TSE9XX0NPTVBMRVRFRDtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIl19