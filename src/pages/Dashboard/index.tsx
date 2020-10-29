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
import ButtonSpanStrong from '../../components/ButtonSpanStrong';
import formatValue from '../../utils/formatValue';

interface IActivity {
  date: string;
  type: string;
  activity: string;
  local: string;
  name: string;
  state: string;
}

interface IContact {
  id: number;
  name: string;
  cellphone: string;
  mail: string;
  contactType: string;
  job: string;
  status: string;
}

interface IOpportunity {
  idUser: number;
  profits: {
    quantityTotal: number;
    valueTotal: number;
  };
  loss: {
    quantityTotal: number;
    valueTotal: number;
  };
  open: {
    quantityTotal: number;
    valueTotal: number;
  };
  discard: {
    quantityTotal: number;
    valueTotal: number;
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  }),
);

const Dashboard: React.FC = () => {
  const classes = useStyles();

  // const { CanvasJSChart } = CanvasJSReact;

  const [Activities, setActivities] = useState<IActivity[]>([]);
  const [search, setSearch] = useState('');
  const [filteredActivities, setFilteredActivities] = useState<IActivity[]>([]);
  const [buttonsActivity, setButtonsActivity] = useState('total');
  const [contact, setContact] = useState<IContact>();
  const [opportunities, setOpportunities] = useState<IOpportunity>();

  useEffect(() => {
    setActivities(databaseMock.TimelineActivities);
    setContact(databaseMock.User);
    setOpportunities(databaseMock.Opportunities);
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
                        <strong>{contact?.name}</strong>
                        <p>{contact?.job}</p>
                      </div>
                    </EmployerName>

                    <EmployerPhone>
                      <FiPhone />
                      <div>
                        <strong>{contact?.cellphone}</strong>
                        <p>Celular</p>
                      </div>
                    </EmployerPhone>

                    <EmployerMail>
                      <FiMail />
                      <div>
                        <strong>{contact?.mail}</strong>
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
                      <ButtonSpanStrong
                        buttonColor="#008000"
                        buttonText={opportunities?.profits.quantityTotal}
                        title="Ganhas"
                        description={String(
                          opportunities?.profits.valueTotal &&
                            formatValue(opportunities?.profits.valueTotal),
                        )}
                      />
                      <LossOpportunity>
                        <ButtonSpanStrong
                          buttonColor="#ff0000"
                          buttonText={opportunities?.loss.quantityTotal}
                          title="Perdas"
                          description={String(
                            opportunities?.loss.valueTotal &&
                              formatValue(opportunities?.loss.valueTotal),
                          )}
                        />
                      </LossOpportunity>
                    </ProfitLossOpportunity>

                    <OpenDiscardOpportunity>
                      <OpenOpportunity>
                        <ButtonSpanStrong
                          buttonColor="#4169e1"
                          buttonText={1}
                          title="Abertos"
                          description={String(
                            opportunities?.open.valueTotal &&
                              formatValue(opportunities?.open.valueTotal),
                          )}
                        />
                      </OpenOpportunity>
                      <DiscardOpportunity>
                        <ButtonSpanStrong
                          buttonColor="#000"
                          buttonText={1}
                          title="Descartadas"
                          description={String(
                            opportunities?.discard.valueTotal &&
                              formatValue(opportunities?.discard.valueTotal),
                          )}
                        />
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
                  <OverdueActivity tabIndex={-1}>
                    <button
                      type="button"
                      onClick={() => setButtonsActivity('atrasado')}
                    >
                      {ActivityLength('atrasado')}
                    </button>
                    <span>Atrasados</span>
                  </OverdueActivity>
                  <InProcessActivity tabIndex={-1}>
                    <button
                      type="button"
                      onClick={() => setButtonsActivity('andamento')}
                    >
                      {ActivityLength('andamento')}
                    </button>
                    <span>Andamento</span>
                  </InProcessActivity>
                  <ForeseenActivity tabIndex={-1}>
                    <button
                      type="button"
                      onClick={() => setButtonsActivity('prevista')}
                    >
                      {ActivityLength('prevista')}
                    </button>
                    <span>Previstas</span>
                  </ForeseenActivity>
                  <CompletedActivity>
                    <button
                      type="button"
                      onClick={() => setButtonsActivity('concluida')}
                    >
                      {ActivityLength('concluida')}
                    </button>
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
