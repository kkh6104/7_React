import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  gap: 20px;
  padding: 16px 24px;
  background: var(--card-bg);
  color: var(--app-text);
  border-bottom: 1px solid var(--border);
  font-weight: 600;
`

const Main = styled.main`
  max-width: 720px;
  margin: 24px auto;
  padding: 0 16px;
`

function Layout(){
    return (
        <>
            <Header>
                <Link to="/">Home</Link>
                <Link to="/posts">게시글</Link>
                <Link to="/posts/new">새 글</Link>
            </Header>
            <Main>
                <Outlet />
            </Main>
        </>
    )
}

export default Layout