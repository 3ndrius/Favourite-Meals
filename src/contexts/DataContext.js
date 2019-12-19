import React, { Component, createContext } from "react";

export const DataContext = createContext();

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

class DataContextProvider extends Component {
  state = {
    meals: null,
    liked: JSON.parse(localStorage.getItem('Liked')) || [],
    value: ''
  };
  componentDidMount = async () => {
    console.log("Provider did mount ");
    try {
      let response = await fetch(`${API_URL}search.php?s=Soup`);
      let data = await response.json();
      this.setState({
        meals: data.meals
      });
      console.log(this.state.meals)
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

  savedToLocalStorage = (item) => {
    localStorage.setItem("Liked", JSON.stringify(item))
  }

  addToLike = (title, img) => {
    let saveMeal = [title, img];
    let save = [...this.state.liked, saveMeal];
    this.setState({liked: save}, 
      () => this.savedToLocalStorage(this.state.liked))
  }

  handleChangeInput = async (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value,
    })

   try{
    let response = await fetch(`${API_URL}search.php?s=${this.state.value}`);
    let data = await response.json();
    this.setState({
      meals: data.meals
    })
   } catch(err) {
     console.log(err);
   }
  }



  render() {
    return (
      <DataContext.Provider value={{ ...this.state , handleDelete: this.handleDelete, addToLike: this.addToLike, liked: this.state.liked, handleChangeInput: this.handleChangeInput}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
