import React from "react";

import { connect } from "react-redux";

import { fetchRestaurant } from "./actions";

import Table from "./component/Table";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.loadData();
  }
  loadData = () => {
    this.props.fetchRestaurant("toronto");
  };
  _handleChange = e => this.setState({ searchInput: e.target.value });
  render() {
    const { searchInput } = this.state;
    const { restaurant } = this.props;
    let result = [];
    if (searchInput.length > 2) {
      result = restaurant.restaurants.filter(el => el.name.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1 || el.area.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1 || el.address.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1);
    } else {
      result = restaurant.restaurants;
    }
    
    return (
      <div className="container">
          <div className="search-input">
        <input type="text" onChange={e => this._handleChange(e)} />
        </div>
        {result.length > 0 && <Table data={result} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurant: state.allRestaurants
  };
}

export default connect(mapStateToProps, { fetchRestaurant })(App);
