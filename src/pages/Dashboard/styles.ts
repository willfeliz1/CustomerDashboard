import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex-grow: 1;

  padding: 75px 5px 5px 5px;
`;

export const CardsContainer = styled(Grid)`
  flex: 1;
  flex-grow: 1;
`;

export const ReportInfoContainer = styled(Grid)``;

export const ActivityInfoContainer = styled(Grid)``;

export const CardClient = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300;
  height: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  background: #808080;
  align-items: flex-start;

  h3 {
    padding-bottom: 20px;
    align-self: center;
  }
`;

export const CardLocal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300;
  height: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  background: #808080;
  align-items: flex-start;

  h3 {
    padding-bottom: 20px;
    align-self: center;
  }
`;

export const EmployerName = styled.div`
  display: flex;
  line-height: 24px;
  margin-top: 5px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin: 5px 10px;

    p {
      font-size: 13px;
    }
  }
`;

export const EmployerPhone = styled.div`
  display: flex;
  padding: 15px 35px;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;

    span {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const EmployerMail = styled.div`
  display: flex;
  padding: 0px 0px 25px 35px;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;

    p {
      font-size: 13px;
    }
  }
`;

export const EmployerSocialMedia = styled.div`
  display: flex;
  margin-top: auto;

  svg {
    margin: 0 20px 0 10px;
  }
`;

export const OpportunitiesContainer = styled.section`
  min-width: 300;
  padding: 15px 20px;
  border-radius: 5px;
  background: #808080;
`;

export const MoreOpportunities = styled.div`
  margin-top: 20px;
`;

export const OpportunityHeader = styled.div`
  display: flex;
  margin-bottom: 25px;

  > div {
    display: flex;
    flex: 1;
    justify-content: center;
  }
`;

export const ProfitLossOpportunity = styled.section`
  display: flex;
  margin-bottom: 25px;
`;

export const ProfitOpportunity = styled.div`
  display: flex;
  margin-right: 18px;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const LossOpportunity = styled.div`
  display: flex;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const OpenDiscardOpportunity = styled.section`
  display: flex;
`;

export const OpenOpportunity = styled.div`
  display: flex;
  margin-right: 18px;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const DiscardOpportunity = styled.div`
  display: flex;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const CreditLimitContainer = styled.section`
  display: flex;
  min-width: 300px;
  height: 100%;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 5px;
  background: #808080;
  align-items: flex-start;

  h3 {
    padding-bottom: 25px;
    align-self: center;
  }
`;

export const CreditGranted = styled.div`
  display: flex;
  margin-bottom: 25px;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const CreditAvailable = styled.div`
  display: flex;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const SalesContainer = styled.section`
  display: flex;
  min-width: 300px;
  height: 100%;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 5px;
  background: #808080;
  align-items: flex-start;

  h3 {
    padding-bottom: 25px;
    align-self: center;
  }
`;

export const SalesGraphic = styled.div``;

export const FinancialSecurityContainer = styled.section`
  display: flex;
  min-width: 300px;
  height: 100%;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 5px;
  background: #808080;
  align-items: flex-start;

  h3 {
    padding-bottom: 25px;
    align-self: center;
  }
`;

export const ExpiredFinances = styled.div`
  display: flex;
  margin-bottom: 25px;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const FinancesToExpire = styled.div`
  display: flex;
  margin-bottom: 25px;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const PaidFinances = styled.div`
  display: flex;

  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const CardActivitiesContainer = styled(Grid)`
  display: flex;
  height: 100%;
  background: #808080;
  border-radius: 5px;
`;
