import { Grid, TextField } from '@material-ui/core';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  p {
    color: #7f7f7f;
  }
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
  height: 320px;
  padding: 15px 20px;
  align-items: flex-start;
  background: #fff;
  border-radius: 5px;

  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  h3 {
    padding-bottom: 20px;
    align-self: center;
  }
`;

export const EmployerName = styled.div`
  display: flex;
  line-height: 24px;
  margin-top: 5px;

  > div {
    display: flex;
    flex-direction: column;
    margin: 0px 10px 5px 0px;
  }
`;

export const AvatarInput = styled.div`
  position: relative;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 22px;
    height: 22px;
    border: none;
    background: #f6f6f6;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 17px;
      height: 17px;
      color: #312e38;
    }

    input {
      display: none;
    }
  }
`;

export const EmployerPhone = styled.div`
  display: flex;
  padding: 25px 0px 17px;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
  }
`;

export const EmployerMail = styled.div`
  display: flex;
  padding: 0px 0px 20px 0px;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
  }
`;

export const EmployerSocialMedia = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: left;
  width: 100%;

  svg {
    margin-right: 35px;
  }
`;

export const CardLocal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300;
  height: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  background: #fff;
  align-items: flex-start;

  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  h3 {
    padding-bottom: 20px;
    align-self: center;
  }
`;

export const AdressDescription = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  strong {
    padding-top: 3px;
  }
`;

export const OpportunitiesContainer = styled.section`
  min-width: 300;
  padding: 15px 20px;
  border-radius: 5px;
  background: #fff;
  height: 100%;

  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const OpportunityHeader = styled.div`
  display: flex;
  margin-bottom: 25px;

  div {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  div + div {
    width: 20px;
  }

  svg {
    :hover {
      color: #808080;
    }
  }
`;

export const ProfitLossOpportunity = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const OpenDiscardOpportunity = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const MoreOpportunities = styled.div`
  margin-top: 20px;
`;

export const CreditLimitContainer = styled.section`
  display: flex;
  min-width: 300;
  height: 100%;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 5px;
  background: #fff;
  align-items: flex-start;

  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

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
    background-color: #4169e1;
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
    background-color: #008000;
  }
`;

export const SalesContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 300;
  height: 320px;
  padding: 15px 20px;
  align-items: flex-start;
  background: #fff;
  border-radius: 5px;

  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  h3 {
    padding-bottom: 25px;
    align-self: center;
  }
`;

export const SalesGraphic = styled.div``;

export const FinancialSecurityContainer = styled.section`
  display: flex;
  min-width: 300;
  height: 100%;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 5px;
  background: #fff;
  align-items: flex-start;

  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

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

export const ExpiredFinancesButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #ff0000;
  color: #fff;
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

export const FinancesToExpireButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #b8860b;
  color: #fff;
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

export const PaidFinancesButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #008000;
  color: #fff;
`;

export const CardActivitiesContainer = styled.section`
  display: flex;
  height: 100%;
  border-radius: 5px;
  flex-direction: column;
  background-color: #fff;

  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  > h3 {
    display: flex;
    padding: 15px 0 15px 0;
    justify-content: center;
  }
`;

export const TextFieldActivity = styled(TextField)`
  margin: 0 15px;
`;

export const HeaderActivity = styled.div`
  display: flex;
  padding-top: 15px;
  justify-content: center;
`;

export const ActivityOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 0 15px;
  margin-bottom: 5px;
`;

export const TotalActivity = styled.div`
  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #000;
    color: #fff;
  }
`;

export const OverdueActivity = styled.div`
  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #ff0000;
    color: #fff;
  }
`;

export const InProcessActivity = styled.div`
  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #4169e1;
    color: #fff;
  }
`;

export const ForeseenActivity = styled.div`
  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #b8860b;
    color: #fff;
  }
`;

export const CompletedActivity = styled.div`
  button {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #008000;
    color: #fff;
  }
`;

export const DivTest = styled.div``;

export const ActivityVerticalTimeline = styled(VerticalTimeline)`
  ::before {
    background: #ebeceb;
  }
`;
