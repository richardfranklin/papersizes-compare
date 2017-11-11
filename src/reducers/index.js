import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_category';
import { CategoryReducer_1 } from './reducer_active_category';
import { CategoryReducer_2 } from './reducer_active_category';
import { ActivePaper_1 } from './reducer_active_paper';
import { ActivePaper_2 } from './reducer_active_paper';

const CategoriesData = {};

Object.keys(CategoriesReducer).map((category) => {
  CategoriesData[category] = CategoriesReducer[category];
});

const rootReducer = combineReducers({
  categories:             CategoriesReducer,
  activeCategoryArr_1:    CategoryReducer_1,
  activeCategoryArr_2:    CategoryReducer_2,
  activePaper_1:          ActivePaper_1,
  activePaper_2:          ActivePaper_2
  // activePaper:          ActivePaper
});

export default rootReducer;