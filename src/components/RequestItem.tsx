import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

export type RequestDataType = {
  id: number;
  amount: number;
  client: string;
  count: number;
  due: string;
  material: string[];
  method: string[];
  status: string;
  title: string;
};

type RequestItemProps = {
  requestData: RequestDataType;
};

type TitleProps = {
  isConsulting: boolean;
};

const RequestItem = ({ requestData }: RequestItemProps) => (
  <Container>
    <BasicInfo>
      <li>
        <Title isConsulting={requestData.status === '상담중'}>
          {requestData.title}
        </Title>
        <span>{requestData.client}</span>
      </li>
      <li>{`${requestData.due}까지 납기`}</li>
    </BasicInfo>
    <DetailInfo>
      <li>
        <span>도면개수</span>
        <span>{`${requestData.count}개`}</span>
      </li>
      <li>
        <span>총 수량</span>
        <span>{`${requestData.amount}개`}</span>
      </li>
      <li>
        <span>가공방식</span>
        <span>{`${requestData.method.join(',')}`}</span>
      </li>
      <li>
        <span>재료</span>
        <span>{`${requestData.material.join(',')}`}</span>
      </li>
    </DetailInfo>
    <div>
      <FilledButton>요청 내역 보기</FilledButton>
      <OutlinedButton>채팅 하기</OutlinedButton>
    </div>
  </Container>
);

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 366px;
  height: 356px;
  padding: 24px 16px;
  border: 2px solid #e5e5e5;
  border-radius: 4px;
  background: #ffffff;
  transition: ease-in 300ms border-color;

  > div:last-child {
    width: fit-content;
    height: fit-content;
    display: flex;

    > button + button {
      margin-left: 8px;
    }
  }

  :hover {
    border-color: #2196f3;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
    height: 344px;
  }
`;

const Title = styled.h2<TitleProps>`
  position: relative;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  ${(props) =>
    props.isConsulting &&
    css`
      ::after {
        content: '상담중';
        position: absolute;
        right: 0;
        padding: 1px 8px;
        border: 1px solid #ffa000;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        color: #ffa000;
      }
    `}
`;

const UL = styled.ul`
  width: 100%;
  height: 108px;
  margin-bottom: 32px;
`;

const BasicInfo = styled(UL)`
  border-bottom: 1px solid #e5e5e5;

  > li:first-child {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    > span:last-child {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin-top: 4px;
    }
  }

  > li:last-child {
    margin: 24px 0 16px 0;
    font-size: 14px;
    line-height: 20px;
    color: #939fa5;
  }

  @media screen and (max-width: 480px) {
    height: 96px;

    > li:first-child {
      > span:last-child {
        margin-top: 0px;
      }
    }

    > li:last-child {
      margin-top: 16px;
    }
  }
`;

const DetailInfo = styled(UL)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > li {
    display: flex;
    font-size: 14px;
    line-height: 20px;
    color: #323d45;

    > span + span {
      margin-left: 32px;
    }

    > span:first-child {
      width: 70px;
    }

    > span:last-child {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 480px) {
    height: 104px;
  }
`;

const CommonButton = styled(Button)`
  padding: 6px 12px;
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const FilledButton = styled(CommonButton)`
  border: none;
  background: #2196f3;
  color: #ffffff;
`;

const OutlinedButton = styled(CommonButton)`
  border-color: #2196f3;
  color: #2196f3;
`;

export default RequestItem;
