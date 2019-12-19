import React, { Component, createContext } from "react";

export const DataContext = createContext();

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

class DataContextProvider extends Component {
  state = {
    meals: []
  };
  componentDidMount = async () => {
    console.log("Provider did mount ");
    try {
      let response = await fetch(`${API_URL}search.php?s=Soup`);
      let data = await response.json();
      this.setState({
        meals: data.meals
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleDelete = (data, info) => {
    console.log(info)
    if(info === 'tag') {
      
      this.setState({
        meals: this.state.meals.filter(item => item.strTags !== data)
      })
    }
    if(info === 'area') {
      this.setState({
        meals: this.state.meals.filter(item => item.strArea !== data)
      })
    }
    if(info === 'category') {
      this.setState({
        meals: this.state.meals.filter(item => item.strCategory !== data)
      })
    }
  }



  render() {
    return (
      <DataContext.Provider value={{ ...this.state , handleDelete: this.handleDelete}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
