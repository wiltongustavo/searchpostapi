import React, { Component } from 'react' ;
import api from '../services/api';
import '../pages/globalcss/App.css'


class SearchPost extends Component{

    state= {
        postagens: [],
    }

    async componentDidMount(){
        const response = await api.get('/posts')
        this.setState({postagens: response.data});
    }

render(){

    const {postagens } = this.state;
    return(
        <div>
            legal
            {console.log(postagens)}
            {postagens.map(postagem =>(
                <li key={postagem._id} className="postsearch" className="li-post">
                    <div className="card-post">
                        <h2 className="titulo-post">
                            <strong>{postagem.title}</strong>
                        </h2>
                        <p className="conteudo-post">{postagem.body}</p>
                        <hr/>
                        <div className="info-post">
                        <p>Usuário:{postagem.userId}</p>
                        <p>Postagem:{postagem.id}</p>
                        </div>
                    </div>
                </li>
            ))}
        </div>
     );
 };
};
export default SearchPost;