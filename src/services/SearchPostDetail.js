import React, { Component } from 'react' ;
import api from './api';


class SearchPostDetail extends Component{

    state= {
        detalhes: [],
    }

    async componentDidMount(){
        const response = await api.get('/posts')
        this.setState({detalhes: response.data});
    }

render(){

    const {detalhes } = this.state;
    return(
        <div>
            lega
            {detalhes.map(postagem =>(
                <li key={postagem._id}>
                    <div>
                        <h2>
                            <strong>{postagem.title}</strong>
                        </h2>
                        <p>{postagem.body}</p>
                        <div>
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
export default SearchPostDetail;