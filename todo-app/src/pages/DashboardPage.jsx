import styled from "styled-components"
import { Link } from "react-router-dom"

import { Card, PageTitle } from "../styles/common"
import { useTodoStore } from "../store/useTodoStore"

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`

const StatNumber = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4f6ef7;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 24px 0 12px;
  color: var(--app-text);
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

const CategoryCard = styled(Link)`
  display: block;
  background: var(--card-bg);
  color: var(--app-text);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

function DashboardPage(){
  const todos = useTodoStore((state) => state.todos)
  const filterd = todos.filter((todo)=>todo.done === true)

    return(
        <>
            <PageTitle>대시보드</PageTitle>

            <Stats>
              <Card>
                <div>전체</div>
                <StatNumber>{todos.length}</StatNumber>
              </Card>
              <Card>
                <div>완료</div>
                <StatNumber>{filterd.length}</StatNumber>
              </Card>
              <Card>
                <div>남은 일</div>
                <StatNumber>{todos.length - filterd.length}</StatNumber>
              </Card>
            </Stats>

            <SectionTitle>카테고리별</SectionTitle>
            <CategoryGrid>

            </CategoryGrid>

            <SectionTitle>최근 할 일</SectionTitle>
            {/* TODO: 할일목록 표시  날짜 기준, 3개 정도 표시*/}
        </>
    )
}

export default DashboardPage