import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_category';
import ActiveCategory from './reducer_active-category';
import ActivePaper from './reducer_active-paper';

const CategoriesData = {'a': 'ss'};

Object.keys(CategoriesReducer).map((category) => {
  CategoriesData[category] = CategoriesReducer[category];
});

console.log(CategoriesData);

const rootReducer = combineReducers({
  categories:       CategoriesReducer,
  activeCategory:   ActiveCategory,
  activePaper:      ActivePaper
});

export default rootReducer;