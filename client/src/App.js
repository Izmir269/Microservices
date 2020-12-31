import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return(
    <div className="container">
      <h1>Ajouter un poste</h1>
      <PostCreate />
      <hr/>
      <h1>Liste des postes</h1>
      <PostList/>
    </div>
  ) 
};

