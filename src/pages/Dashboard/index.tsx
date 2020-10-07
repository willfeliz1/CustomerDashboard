import React from 'react';

import 'react-vertical-timeline-component/style.min.css';

import { Element } from 'react-scroll';

import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

import { FiInfo, FiMail, FiPhone } from 'react-icons/fi';
import {
  WhatsApp,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Work,
  School,
  Star,
  Room,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import CanvasJSReact from '../../assets/canvasjs.react.js';

import databaseMock from '../../database/databaseMock.json';

import DrawerMenu from '../../components/DrawerMenu';

import {
  Container,
  Main,
  CardsContainer,
  ReportInfoContainer,
  ActivityInfoContainer,
  CardClient,
  EmployerName,
  EmployerPhone,
  EmployerMail,
  EmployerSocialMedia,
  CardLocal,
  AdressDescription,
  OpportunitiesContainer,
  OpportunityHeader,
  ProfitLossOpportunity,
  ProfitOpportunity,
  LossOpportunity,
  OpenDiscardOpportunity,
  OpenOpportunity,
  DiscardOpportunity,
  MoreOpportunities,
  CreditLimitContainer,
  CreditGranted,
  CreditAvailable,
  SalesContainer,
  SalesGraphic,
  FinancialSecurityContainer,
  ExpiredFinances,
  ExpiredFinancesButton,
  FinancesToExpire,
  FinancesToExpireButton,
  PaidFinances,
  PaidFinancesButton,
  CardActivitiesContainer,
  HeaderActivity,
  TextFieldActivity,
  ActivityOptions,
  TotalActivity,
  InProcessActivity,
  OverdueActivity,
  CompletedActivity,
  ForeseenActivity,
  ActivityVerticalTimeline,
} from './styles';

import LeafletMap from '../../components/LeafletMap';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  }),
);

const Dashboard: React.FC = () => {
  const classes = useStyles();

  const { CanvasJSChart } = CanvasJSReact;

  return (
    <Container>
      <DrawerMenu />

      <Main>
        <div className={classes.toolbar}>
          <CardsContainer container spacing={1}>
            <ReportInfoContainer item sm={6} xs={12}>
              <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                  <CardClient>
                    <h3>Informações gerais</h3>

                    <EmployerName>
                      <img
                        src="https://avatars2.githubusercontent.com/u/50719156?s=460&u=81ec30b299ffe9d9275b4e207d9c4760fcada87a&v=4"
                        alt="imagemGitHub"
                      />
                      <div>
                        <strong>William Felizardo</strong>
                        <p>Amazon Prime</p>
                      </div>
                    </EmployerName>

                    <EmployerPhone>
                      <FiPhone />
                      <div>
                        <strong>44 9 97548484</strong>
                        <p>Celular</p>
                      </div>
                    </EmployerPhone>

                    <EmployerMail>
                      <FiMail />
                      <div>
                        <strong>WilliamFelizardo@mail.com</strong>
                        <p>Trabalho</p>
                      </div>
                    </EmployerMail>

                    <EmployerSocialMedia>
                      <WhatsApp />
                      <Facebook />
                      <Instagram />
                      <Twitter />
                      <LinkedIn />
                    </EmployerSocialMedia>
                  </CardClient>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <CardLocal>
                    <h3>Local</h3>

                    <LeafletMap />
                    <AdressDescription>
                      <Room />
                      <strong>Avenida Paraná, 12345</strong>
                    </AdressDescription>
                  </CardLocal>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                  <OpportunitiesContainer>
                    <OpportunityHeader>
                      <div>
                        <h3>Oportunidades</h3>
                      </div>
                      <FiInfo />
                    </OpportunityHeader>

                    <ProfitLossOpportunity>
                      <ProfitOpportunity>
                        <button type="button">4</button>
                        <div>
                          <strong>Ganhas</strong>
                          <p>R$ 20.000,00</p>
                        </div>
                      </ProfitOpportunity>
                      <LossOpportunity>
                        <button type="button">4</button>
                        <div>
                          <strong>Perdas</strong>
                          <p>R$ 20.000,00</p>
                        </div>
                      </LossOpportunity>
                    </ProfitLossOpportunity>

                    <OpenDiscardOpportunity>
                      <OpenOpportunity>
                        <button type="button">4</button>
                        <div>
                          <strong>Abertos</strong>
                          <p>R$ 20.000,00</p>
                        </div>
                      </OpenOpportunity>
                      <DiscardOpportunity>
                        <button type="button">4</button>
                        <div>
                          <strong>Descartados</strong>
                          <p>R$ 20.000,00</p>
                        </div>
                      </DiscardOpportunity>
                    </OpenDiscardOpportunity>

                    <MoreOpportunities>
                      <Link to="/dashboard">
                        <strong>Ver todas as oportunidades</strong>
                      </Link>
                    </MoreOpportunities>
                  </OpportunitiesContainer>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <CreditLimitContainer>
                    <h3>Limite de crédito</h3>
                    <CreditGranted>
                      <button type="button" />
                      <div>
                        <strong>Concedido</strong>
                        <p>R$ 12.000,20</p>
                      </div>
                    </CreditGranted>

                    <CreditAvailable>
                      <button type="button" />
                      <div>
                        <strong>Disponivel</strong>
                        <p>R$ 12.000,20</p>
                      </div>
                    </CreditAvailable>
                  </CreditLimitContainer>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                  <SalesContainer>
                    <h3>Vendas</h3>
                    {/* <SalesGraphic> */}
                    <CanvasJSChart options={databaseMock.dadosGraficoVendas} />
                    {/* </SalesGraphic> */}
                  </SalesContainer>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FinancialSecurityContainer>
                    <h3>Títulos financeiros</h3>

                    <ExpiredFinances>
                      <ExpiredFinancesButton type="button">
                        1
                      </ExpiredFinancesButton>
                      <div>
                        <strong>R$ 3.105,00</strong>
                        <p>Vencidos</p>
                      </div>
                    </ExpiredFinances>
                    <FinancesToExpire>
                      <FinancesToExpireButton type="button">
                        1
                      </FinancesToExpireButton>
                      <div>
                        <strong>R$ 3.105,00</strong>
                        <p>A vencer</p>
                      </div>
                    </FinancesToExpire>
                    <PaidFinances>
                      <PaidFinancesButton type="button">1</PaidFinancesButton>
                      <div>
                        <strong>R$ 3.105,00</strong>
                        <p>Pagos</p>
                      </div>
                    </PaidFinances>
                  </FinancialSecurityContainer>
                </Grid>
              </Grid>
            </ReportInfoContainer>

            <ActivityInfoContainer item sm={6} xs={12}>
              <CardActivitiesContainer>
                <h3>Atividades</h3>

                <TextFieldActivity
                  id="outlined-basic"
                  label="Pesquisar"
                  variant="outlined"
                  color="primary"
                />

                <ActivityOptions>
                  <TotalActivity>
                    <button type="button">4</button>
                    <span>Total</span>
                  </TotalActivity>
                  <OverdueActivity>
                    <button type="button">4</button>
                    <span>Atrasados</span>
                  </OverdueActivity>
                  <InProcessActivity>
                    <button type="button">4</button>
                    <span>Andamento</span>
                  </InProcessActivity>
                  <ForeseenActivity>
                    <button type="button">4</button>
                    <span>Previstas</span>
                  </ForeseenActivity>
                  <CompletedActivity>
                    <button type="button">4</button>
                    <span>Concluidas</span>
                  </CompletedActivity>
                </ActivityOptions>

                <Element
                  name="test2"
                  className="element"
                  id="scroll-container"
                  style={{
                    position: 'relative',
                    height: '700px',
                    overflow: 'scroll',
                    marginBottom: '20px',
                  }}
                >
                  <ActivityVerticalTimeline>
                    <VerticalTimelineElement
                      contentStyle={{
                        background: '#FAF4F4',
                      }}
                      contentArrowStyle={{
                        borderRight: '7px solid  #FAF4F4',
                      }}
                      date="2011 - present"
                      iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                        boxShadow: '0 0 0 4px #0B89D1',
                      }}
                      icon={<Work />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Reunião de custos
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        Local: Sala de reunião
                      </h5>
                      <h5 className="vertical-timeline-element-subtitle">
                        Responsavel: William Felizardo
                      </h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                      }}
                      contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)',
                      }}
                      date="2011 - present"
                      iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                        boxShadow: '0 0 0 4px #0B89D1',
                      }}
                      icon={<Work />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Reunião de custos
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        Local: Sala de reunião
                      </h5>
                      <h5 className="vertical-timeline-element-subtitle">
                        Responsavel: William Felizardo
                      </h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2008 - 2010"
                      contentStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                      }}
                      iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                      }}
                      icon={<Work />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Reunião de custos
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        Local: Sala de reunião
                      </h5>
                      <h5 className="vertical-timeline-element-subtitle">
                        Responsavel: William Felizardo
                      </h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2006 - 2008"
                      iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff',
                      }}
                      icon={<Work />}
                      contentStyle={{
                        background: 'rgb(33, 150, 243)',
                      }}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Reunião de custos
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        Local: Sala de reunião
                      </h5>
                      <h5 className="vertical-timeline-element-subtitle">
                        Responsavel: William Felizardo
                      </h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="April 2013"
                      iconStyle={{
                        background: 'rgb(233, 30, 99)',
                        color: '#fff',
                      }}
                      icon={<School />}
                      contentStyle={{
                        background: 'rgb(233, 30, 99)',
                      }}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Reunião de custos
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        Local: Sala de reunião
                      </h5>
                      <h5 className="vertical-timeline-element-subtitle">
                        Responsavel: William Felizardo
                      </h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      iconStyle={{
                        background: 'rgb(16, 204, 82)',
                        color: '#fff',
                      }}
                      icon={<Star />}
                    />
                  </ActivityVerticalTimeline>
                </Element>
              </CardActivitiesContainer>
            </ActivityInfoContainer>
          </CardsContainer>
        </div>
      </Main>
    </Container>
  );
};

export default Dashboard;
