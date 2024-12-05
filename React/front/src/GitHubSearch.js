import React, { useState } from 'react';
import axios from 'axios';
import './GitHubSearch.css';
import Swal from 'sweetalert2';

function GitHubSearch() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);

    const searchUser = async () => {
        try 
        {
            const userResponse = await axios.get(`http://localhost:8080/api/github/user/${username}`);
            setUserData(userResponse.data);
    
            const reposResponse = await axios.get(`http://localhost:8080/api/github/repos/${username}`);
            setRepos(reposResponse.data);
        } catch (error) 
        {
            console.error("Erro ao buscar dados do GitHub:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário não encontrado ou erro de conexão!',
            });
        }
    };

    return (
        <div className="container">
            <h1>&#128270; Pesquisar Usuário do GitHub </h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite o nome do usuário"
            />
            <button onClick={searchUser}>Pesquisar</button>

            {userData && (
                <div className="usuario-info">
                    <h2>Informações do Usuário</h2>
                    <p><strong>Nome:</strong> {userData.name}</p>
                    <p><strong>Bio:</strong> {userData.bio}</p>
                    <p><strong>Seguidores:</strong> {userData.followers}</p>
                </div>
            )}

            {repos.length > 0 ? (
                <div className="repositorio-info">
                    <h2>Repositórios</h2>
                    <ul>
                        {repos.map((repo) => (
                            <li key={repo.id}>{repo.name} - {repo.language}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="no-repositorio">Nenhum repositório encontrado.</p>
            )}
        </div>
    );
}

export default GitHubSearch;