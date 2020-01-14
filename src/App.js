import React, {Component} from 'react';
import Header from './components/header/header';
import Listado from './components/listado/listado';
import './App.css';

class App extends Component{

  state = {
    query:'',
    results:[],
    page:6
  }

  render(){

    return (
      <div className="App">
        <Header 
        searchRepo={this.searchRepo} 
        page={this.state.page}/>
        <hr />
        <div className="container">
          <Listado 
          results={this.state.results} 
          searchRepo={this.searchRepo} 
          query={this.state.query} 
          page={this.state.page} />
        </div>
        <hr />
      </div>
    );
  }
  searchRepo = (query, add) =>{
    
    if(query.trim().length>3){
      
      let page = this.state.page;

      if(add){
        
        page+=5;
        
        this.setState({
          page:this.state.page + 5
        });

      }else{

        page = 6;

        this.setState({
          page:6
        });
      }

      const url = `https://api.github.com/search/repositories?q=${query}&per_page=${page}`;
      
      fetch(url)
      .then(result => result.json())
      .then(data=>{
        this.setState({
          query:query,
          results:data.items,
        });
        console.log(data);
        console.log(this.state.page);
      });
    }
  }
}

export default App;
