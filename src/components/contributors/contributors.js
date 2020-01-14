import React, {Component} from 'react';

class Contributors extends Component{

    state = {
        url:decodeURIComponent(this.props.match.params.url),
        name:'',
        results:[],
        page:10
      }

    render(){
        
        const row_count = (typeof this.state.results != "undefined") ? this.state.results.length: 0;
       
        if(row_count>0){
            const list = this.state.results.map((entry, index)=>{
                return (
                    <div key={index} className="col-md-4">
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">{ entry.login }</div>
                            <img src={entry.avatar_url} className="card-img-top" alt={`Foto de ${entry.login}`}></img>
                            <div className="card-body">
                                <h4 className="card-title">{ entry.login }</h4>
                                <p className="card-text"></p>
                                <span className="badge badge-primary" title="Contribuciones">{ entry.contributions }</span>
                                <br />
                                <a href={entry.html_url} target="_blank" rel="noopener noreferrer">
                                    Perfil de github
                                </a>
                                <br />
                                <hr />
                            </div>
                        </div>
                    </div>
                )
            });

            return (
                <div className="container">
                    <br />
                    <a href="/" className="btn btn-outline-warning">
                    <i class="fas fa-backward"></i> Atrás
                    </a>
                    <div className="row">
                        {list}
                        <hr />
                        <div className="col-md-12 text-center mb-3">
                            <button type="button" 
                            onClick={(e)=>(this.handleClickCargarMas(e))} 
                            className="btn btn-outline-primary">
                                Cargar más <i className="fas fa-spinner"></i>
                            </button>
                            <br />
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
            <div className="alert alert-dismissible alert-danger">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                No existen contribuidores o ocurrio un error de red
            </div>
            )
        }
    }
    
    componentDidMount(){
        const url_repo = this.state.url
        this.loadContributors(url_repo, false);
    }

    loadContributors = (url_repo, add) =>{
        
        let page = this.state.page;
    
          if(add){
            
            page+=5;
            
            this.setState({
              page:this.state.page + 5
            });
    
          }else{
    
            page = 10;

          }
    
          const url = `${url_repo}?per_page=${page}`;
          
          fetch(url)
          .then(result => result.json())
          .then(data=>{
            this.setState({
              results:data,
              page:page
            });
            console.log(data);
            console.log(this.state.page);
          });
      }

      handleClickCargarMas = (e)=>{
        const url_repo = this.state.url
        this.loadContributors(url_repo, true);
      }
}

export default Contributors;