import Autocomplete from './js'
import data from './data'
import './styles.css'

const search = input => {
  if (input.length < 1) {
    return []
  }
  return data.filter(item => item.toLowerCase().startsWith(input.toLowerCase()))
}

const autocomplete = new Autocomplete({
  root: document.querySelector('.autocomplete'),
  input: document.querySelector('.autocomplete-input'),
  results: document.querySelector('.autocomplete-results'),
  searchFn: search,
  shouldAutoSelect: true
})