import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_category';
import ActiveCategoryArr from './reducer_active-category';
import ActivePaper from './reducer_active-paper';

const CategoriesData = {};

Object.keys(CategoriesReducer).map((category) => {
  CategoriesData[category] = CategoriesReducer[category];
});

const rootReducer = combineReducers({
  categories:           CategoriesReducer,
  activeCategoryArr:    ActiveCategoryArr,
  activePaper:          ActivePaper
});

export default rootReducer;