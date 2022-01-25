import React, { useState, useEffect } from 'react';
import RepoList from './components/RepoList';
import * as S from './components/RepoList.style';

function App() {

  return (
    <div>
      <S.Titulo>Git Repo</S.Titulo>
      <RepoList />
    </div>
  );
}

export default App;
