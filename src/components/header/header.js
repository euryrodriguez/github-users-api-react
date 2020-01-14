import React,{Component} from 'react';

class Header extends Component{
    state = {
        query:''
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Buscar Repositorio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
               
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" onChange={(e)=>this.props.searchRepo(e.target.value, false)} type="text" placeholder="Search"/>
              </form>
            </div>
          </nav>
        )
    }
}

export default Header;