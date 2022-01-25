import * as S from './RepoList.style';
import useRepository from '../hooks/useRepository';

export default function RepoList() {

    const { repoList, init, repoAno } = useRepository();

    return (
        <S.Cards>
        {repoList.map((repo, index) => (
          <S.Card>
            <S.CardText>
              {repo.name}
              <S.CardLanguage>{repo.language}</S.CardLanguage>
            </S.CardText>
            <S.CardButtons>
              <S.CardButton onClick={() => window.open(repo.html_url, "_blank")}>
                View
              </S.CardButton>
              <S.CardBottomText>
                {repoAno(repo.created_at)}
              </S.CardBottomText>
            </S.CardButtons>
          </S.Card>
        ))}
      </S.Cards>
    );

}