import React from 'react';

class StorePicker extends React.Component {

  render() {
    return (<form className="store-selector">
      <h2>Hello</h2>
      <input type='text' required placeholder="Store Name..."/>
      <button type="submit">Visit Store -></button>
    </form>)
  }
}
