import styled from "styled-components";
import Header from "../header";
import { useState, useEffect } from "react";
import { customAxios } from "../../apis";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [dataList, setDataList] = useState([]);

  const fetchBoardList = async () => {
    try {
      const { data } = await customAxios.get("/board");
      setDataList(data);
    } catch {
      console.log("에러");
    }
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

  return (
    <ListContainer>
      <Header />
      <Li>
        <LiText>No</LiText>
        <LiTextLong>글제목</LiTextLong>
        <LiText>조회수</LiText>
        <LiText>작성일</LiText>
      </Li>
      {dataList.map((item) => (
        <Li>
          <LiText>{item.id}</LiText>
          <LiTextLong>{item.title}</LiTextLong>
          <LiText>{item.views}</LiText>
          <LiText>2023.10.10</LiText>
        </Li>
      ))}
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  margin: 100px;
`;

const Li = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 200px; */
  border-bottom: 1px solid black;
`;

const LiText = styled.p`
  /* border: 1px solid black; */
  width: 300px;
`;

const LiTextLong = styled.p`
  /* border: 1px solid black; */
  width: 700px;
`;
