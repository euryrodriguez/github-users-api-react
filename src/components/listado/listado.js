import React, {Component} from 'react';

class Listado extends Component{
    
  state = {
    page:this.props.page
  }

  render(){
    
    const rows = (typeof this.props.results != "undefined") ? this.props.results.length:0;

    if(rows>0){
      
      const list = this.props.results.map((entry, index)=>{
      
      return( 
        <div key={index} className="col-md-4">
          <div className="card border-primary mb-3">
          <div className="card-header">{ entry.name }</div>
          <div className="card-body">
            <h4 className="card-title">{ entry.full_name }</h4>
            <p className="card-text">
              { 
                 (entry.description == null) ?
                 "Sin descripción":
                 entry.description 
              }
            </p>
            <span className="badge badge-primary" title="lenguaje">{ entry.language }</span>
            <br />
            <a href={entry.html_url} target="_blank" rel="noopener noreferrer">
              Visitar en github
            </a>
            <br />
            <span>
              <i className="fas fa-star" title="Estrellas"></i> { entry.stargazers_count }   <br />
              <i className="fas fa-exclamation-triangle" title="Issues"></i> { entry.open_issues }
            </span>
            <br />
            <hr />
            <a href={ `/contributors/${ encodeURIComponent(entry.contributors_url)}` } target="_blank" rel="noopener noreferrer">
            <i className="fas fa-users"></i> Top 10 Contributors
            </a>
          </div>
        </div>
        </div>
        )
      })
      
      return (
        <div className="container">
          <div className="row">{list}</div>
          <button type="button" 
          onClick={(e)=>(this.handleClickCargarMas(e))} 
          className="btn btn-outline-primary">
            Cargar más <i className="fas fa-spinner"></i>
          </button>
        </div>
      )

      }else{
        return (
          <p className="text-center font-weight-bold">Ningún regístro.</p>
          )
        }
      }


    handleClickCargarMas = (e)=>{
      this.props.searchRepo(this.props.query, this.state.page, true);
    }
  }
    
    export default Listado;