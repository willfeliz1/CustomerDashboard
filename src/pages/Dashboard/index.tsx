import React, { useCallback, useEffect, useState } from 'react';

import '../../components/TimeLine/style.css';

import { Element } from 'react-scroll';

import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

import { FiInfo, FiMail, FiPhone } from 'react-icons/fi';
import {
  WhatsApp,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Star,
  Room,
  Phone,
  People,
  MailOutline,
  CalendarToday,
  ContactSupport,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

// import CanvasJSReact from '../../assets/canvasjs.react.js';

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
  FinancialSecurityContainer,
  ExpiredFinances,
  ExpiredFinancesButton,
  FinancesToExpire,
  FinancesToExpireButton,
  PaidFinances,
  PaidFinancesButton,
  CardActivitiesContainer,
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

interface IActivity {
  date: string;
  type: string;
  activity: string;
  local: string;
  name: string;
  state: string;
}

// interface IStatesColor {
//   color: '#ff0000 | #4169e1 | #b8860b | #008000';
// }

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

  // const { CanvasJSChart } = CanvasJSReact;

  // const stateColors = ['#ff0000', '#4169e1', '#b8860b', '#008000'];

  const [Activities, setActivities] = useState<IActivity[]>([]);
  const [search, setSearch] = useState('');
  const [filteredActivities, setFilteredActivities] = useState<IActivity[]>([]);
  const [buttonsActivity, setButtonsActivity] = useState('total');

  useEffect(() => {
    setActivities(databaseMock.TimelineActivities);
  }, []);

  function filterByActivity() {
    return setFilteredActivities(
      Activities.filter(
        (activityState) =>
          activityState.state === buttonsActivity &&
          activityState.activity.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }

  useEffect(() => {
    setFilteredActivities(
      Activities.filter((activityState) =>
        activityState.activity.toLowerCase().includes(search.toLowerCase()),
      ),
    );
    if (buttonsActivity !== 'total') {
      filterByActivity();
    }
  }, [Activities, search, buttonsActivity]);

  const addStateColor = useCallback((state) => {
    switch (state) {
      case 'atrasado':
        return '#ff0000';

      case 'prevista':
        return '#b8860b';

      case 'concluida':
        return '#008000';

      default:
        return '#4169e1';
    }
  }, []);

  const addStateType = useCallback((type) => {
    switch (type) {
      case 'ligacao':
        return <Phone />;
      case 'reuniao':
        return <People />;
      case 'email':
        return <MailOutline />;
      case 'almoco':
        return <CalendarToday />;
      default:
        return <ContactSupport />;
    }
  }, []);

  const ActivityLength = useCallback(
    (state: string) => {
      const activityLength = Activities.filter(
        (activity) => activity.state === state,
      ).length;

      return activityLength;
    },
    [Activities],
  );

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
                    {/* <CanvasJSChart options={databaseMock.dadosGraficoVendas} /> */}
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
                  onChange={(e) => setSearch(e.target.value)}
                />

                <ActivityOptions>
                  <TotalActivity>
                    <button
                      type="button"
                      onClick={() => setButtonsActivity('total')}
                    >
                      {Activities.length}
                    </button>
                    <span>Total</span>
                  </TotalActivity>
                  <OverdueActivity>
                    <button
                      type="button"
                      onClick={() => setButtonsActivity('atrasado')}
                    >
                      {ActivityLength('atrasado')}
                    </button>
                    <span>Atrasados</span>
                  </OverdueActivity>
                  <InProcessActivity>
                    <button type="button">{ActivityLength('andamento')}</button>
                    <span>Andamento</span>
                  </InProcessActivity>
                  <ForeseenActivity>
                    <button type="button">{ActivityLength('prevista')}</button>
                    <span>Previstas</span>
                  </ForeseenActivity>
                  <CompletedActivity>
                    <button type="button">{ActivityLength('concluida')}</button>
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
                    {filteredActivities.map((activityState) => (
                      <VerticalTimelineElement
                        contentStyle={{
                          background: addStateColor(activityState.state),
                        }}
                        contentArrowStyle={{
                          borderRight: `7px solid ${addStateColor(
                            activityState.state,
                          )}`,
                        }}
                        date={activityState.date}
                        iconStyle={{
                          background: addStateColor(activityState.state),
                        }}
                        icon={addStateType(activityState.type)}
                      >
                        <h3 className="vertical-timeline-element-title">
                          {activityState.activity}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                          Local: {activityState.local}
                        </h5>
                        <h5 className="vertical-timeline-element-subtitle">
                          Responsavel: {activityState.name}
                        </h5>
                      </VerticalTimelineElement>
                    ))}

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
