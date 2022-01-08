import React from 'react';
import styled, { css } from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import { RequestItem, MultiSelect, Button, Switch } from '../components';
import { useRequestData } from '../hooks';

type ContentsContainerProps = {
  $loading: boolean;
};

type ContentsWrapperProps = {
  empty: boolean;
};

const EstimateRequestPage = () => {
  const {
    loading,
    requestList,
    methodTypes,
    materialTypes,
    handleMethod,
    handleMaterial,
    handleReset,
    handleStatus,
  } = useRequestData();

  return (
    <PageLayout>
      <h1>들어온 요청</h1>
      <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      <FilterContainer>
        <SelectContainer>
          <MultiSelect
            type="method"
            placeholder="가공방식"
            menuItems={['밀링', '선반']}
            selectedItems={methodTypes}
            selectHandler={handleMethod}
          />
          <MultiSelect
            type="material"
            placeholder="재료"
            menuItems={['알루미늄', '탄소강', '구리', '합금강', '강철']}
            selectedItems={materialTypes}
            selectHandler={handleMaterial}
          />
          {(methodTypes.length !== 0 || materialTypes.length !== 0) && (
            <ResetButton onClick={handleReset}>
              <Refresh color="disabled" />
              <span>필터링 리셋</span>
            </ResetButton>
          )}
        </SelectContainer>
        <SwitchContainer>
          <Switch name="consulting_status" onToggle={handleStatus} />
          <span>상담 중인 요청만 보기</span>
        </SwitchContainer>
      </FilterContainer>
      <ContentsContainer $loading={loading}>
        {loading && <LoadingIcon color="inherit" />}
        {!loading && (
          <ContentsWrapper empty={requestList.length === 0}>
            {requestList.length === 0 ? (
              <span>조건에 맞는 견적 요청이 없습니다.</span>
            ) : (
              <>
                {requestList.map((requestData) => (
                  <RequestItem key={requestData.id} requestData={requestData} />
                ))}
              </>
            )}
          </ContentsWrapper>
        )}
      </ContentsContainer>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  margin: 40px 0 60px 0;

  > h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    color: #323d45;
  }

  > span {
    font-size: 16px;
    line-height: 24px;
    color: #323d45;
  }

  @media screen and (max-width: 480px) {
    margin: 24px 0 20px 0;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    > div + div {
      margin-top: 20px;
    }
  }
`;

const SelectContainer = styled.div`
  display: flex;

  > div + div {
    margin-left: 8px;
  }
`;

const SwitchContainer = styled.div`
  display: flex;

  > span {
    margin-left: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #323d45;
  }
`;

const ResetButton = styled(Button)`
  border: none;
  color: #2196f3;
  margin-left: 20px;

  > span {
    font-size: 12px;
    line-height: 20px;
    pointer-events: none;
  }

  > svg {
    margin-right: 8px;
    color: #2196f3;
    pointer-events: none;
  }

  @media screen and (max-width: 480px) {
    margin-left: 8px;

    > svg {
      margin-right: 2px;
    }
  }
`;

const LoadingIcon = styled(CircularProgress)`
  color: #2196f3;
`;

const ContentsContainer = styled.div<ContentsContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1130px;
  min-height: ${(props) => (props.$loading ? '50vh' : '0')};

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

const ContentsWrapper = styled.div<ContentsWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  ${(props) =>
    props.empty &&
    css`
      justify-content: center;
      height: 100px;
      border: 1px solid #c2c2c2;
      border-radius: 4px;

      > span {
        font-size: 14px;
        line-height: 20px;
        color: #939fa5;
      }
    `}

  > article {
    margin-bottom: 16px;

    :nth-of-type(3n + 2) {
      margin: 0 16px 16px 16px;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    flex-wrap: nowrap;

    > article {
      margin: 0;

      :nth-of-type(3n + 2) {
        margin: 16px 0 0 0;
      }
    }

    > article + article {
      margin-top: 16px;
    }
  }
`;

export default EstimateRequestPage;
