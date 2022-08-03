import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { WrapperSearch, Input } from './style';

const Search = (props) => {
  return (
    <PlacesAutocomplete
      value={props.address}
      onChange={props.handleChange}
      onSelect={props.handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <WrapperSearch className="search"
          sizeHeight={props.sizeHeight}
          sizeWidth={props.sizeWidth}>
          <img src={props.iconSearch} />
          <Input
            {...getInputProps({
              placeholder: props.placeholder,
            })}
          />
          <div>
            {loading && <div>Carregando...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </WrapperSearch>
      )}
    </PlacesAutocomplete>
  )
}

export default Search