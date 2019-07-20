import React from 'react'
export const SearchContext = React.createContext({
  searchTerm: '',
  doSearch: () => {},
  onSearchChange: () => {},
})