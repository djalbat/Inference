'use strict';

const constants = require('../constants');

const SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

const setVisibilityFilter = (action = {}) => {
  const { type } = action;

  let update;

  switch (type) {
    case SET_VISIBILITY_FILTER :
      const { visibilityFilter } = action;

      update = {
        visibilityFilter: visibilityFilter
      };
      break;
  }

  return update;
};

module.exports = setVisibilityFilter;