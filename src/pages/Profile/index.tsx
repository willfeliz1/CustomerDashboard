import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import '../../components/TimeLine/style.css';

import { Element } from 'react-scroll';

import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

import { FiMail, FiPhone } from 'react-icons/fi';
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
  CameraAlt,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import databaseMock from '../../database/databaseMock.json';

import DrawerMenu from '../../components/DrawerMenu/DrawerMenu';

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
  OpenDiscardOpportunity,
  MoreOpportunities,
  CreditLimitContainer,
  CreditGranted,
  CreditAvailable,
  SalesContainer,
  FinancialSecurityContainer,
  ExpiredFinances,
  FinancesToExpire,
  PaidFinances,
  CardActivitiesContainer,
  TextFieldActivity,
  ActivityOptions,
  TotalActivity,
  InProcessActivity,
  OverdueActivity,
  CompletedActivity,
  ForeseenActivity,
  ActivityVerticalTimeline,
  AvatarInput,
} from './styles';

import LeafletMap from '../../components/LeafletMap/LeafletMap';
import ButtonSpanStrong from '../../components/ButtonSpanStrong/ButtonSpanStrong';
import TransitionTooltip from '../../components/TransitionTooltip/TransitionTooltip';
import BarChart from '../../components/Charts/BarChart';
import coinFormat from '../../utils/coinFormat';
import api from '../../services/api';

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
  avatarUrl?: string;
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

interface ICreditLimit {
  idBeneficiary: number;
  creditGranted: {
    valueTotal: number;
  };
  creditAvailable: {
    valueTotal: number;
  };
}

interface IFinancialSecurity {
  expired: {
    quantityTotal: number;
    valueTotal: number;
  };
  paid: {
    quantityTotal: number;
    valueTotal: number;
  };
  financesToExpire: {
    quantityTotal: number;
    valueTotal: number;
  };
}

interface ISales {
  id: number;
  type: string;
  quantity: number;
  Value: number;
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

const OpportunityInfo = `Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.`;

const Profile: React.FC = () => {
  const classes = useStyles();

  const [Activities, setActivities] = useState<IActivity[]>([]);
  const [search, setSearch] = useState('');
  const [filteredActivities, setFilteredActivities] = useState<IActivity[]>([]);
  const [buttonsActivity, setButtonsActivity] = useState('total');
  const [contact, setContact] = useState<IContact>();
  const [opportunities, setOpportunities] = useState<IOpportunity>();
  const [creditLimities, setCreditLimites] = useState<ICreditLimit>();
  const [financialSecurities, setFinancialSecurities] = useState<
    IFinancialSecurity
  >();
  const [sales, setSales] = useState<ISales[]>([]);
  const [photo, setPhoto] = useState();

  // useEffect(() => {
  //   setActivities(databaseMock.TimelineActivities);
  //   setContact(databaseMock.User);
  //   setOpportunities(databaseMock.Opportunities);
  //   setCreditLimites(databaseMock.CreditLimit);
  //   setFinancialSecurities(databaseMock.financialSecurity);
  //   setSales(databaseMock.Sales);
  // }, []);

  useEffect(() => {
    api.get('User').then((response) => {
      setContact(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('Opportunities').then((response) => {
      setOpportunities(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('CreditLimit').then((response) => {
      setCreditLimites(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('Sales').then((response) => {
      setSales(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('financialSecurity').then((response) => {
      setFinancialSecurities(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('TimelineActivities').then((response) => {
      setActivities(response.data);
    });
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

  // const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const data = new FormData();

  //     data.append('avatar', e.target.files[0]);

  //     const teste = e.target.files[0];

  //     // setContact({
  //     //   avatarUrl: data.getAll('avatar'),
  //     // });
  //   }
  // }, []);

  const groupSaleValues = useCallback((array: Array<number>) => {
    const Total = array.reduce((acc, current) => acc + current, 0);

    return Math.floor(Total * 100) / 100;
  }, []);

  const getSaleValues = useCallback(() => {
    const sale = Number(
      groupSaleValues(
        sales
          .filter((state) => state.type === 'Sale')
          .map((saleState) => {
            return saleState.Value * saleState.quantity;
          }),
      ),
    );

    const warrantySale = groupSaleValues(
      sales
        .filter((state) => state.type === 'WarrantySale')
        .map((saleState) => {
          return saleState.Value * saleState.quantity;
        }),
    );

    const canceledSale = groupSaleValues(
      sales
        .filter((state) => state.type === 'CanceledSale')
        .map((saleState) => {
          return saleState.Value * saleState.quantity;
        }),
    );

    const deferredSale = groupSaleValues(
      sales
        .filter((state) => state.type === 'DeferredSale')
        .map((saleState) => {
          return saleState.Value * saleState.quantity;
        }),
    );

    const salesAmount = [];

    salesAmount.push(sale, warrantySale, canceledSale, deferredSale);

    return salesAmount;
  }, [sales]);

  const data = {
    labels: ['normais', 'garantias', 'canceladas', 'diferidas'],
    datasets: [
      {
        label: 'Valor das vendas',
        data: getSaleValues(),
        backgroundColor: [
          'rgba(93, 255, 72, 0.219)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 92, 86, 0.2)',
          'rgba(245, 180, 82, 0.2)',
        ],
        borderColor: ['#94ff63', 'rgba(54, 162, 235, 1)', '#ff5656', '#ebb236'],
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            // Include a dollar sign in the ticks
            callback(value: number, index: any, values: any) {
              return `R$${value}`;
            },
            suggestedMin: 0,
          },
          stacked: true,
        },
      ],
    },
  };

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
                      <AvatarInput>
                        <img src={contact?.avatarUrl} alt="imageGit" />
                        <label htmlFor="avatar">
                          <CameraAlt />

                          <input
                            type="file"
                            id="avatar"
                            // onChange={handleAvatarChange}
                            // value={contact?.avatarUrl}
                          />
                        </label>
                      </AvatarInput>

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

                      <TransitionTooltip texto={OpportunityInfo} />
                    </OpportunityHeader>

                    <ProfitLossOpportunity>
                      <ButtonSpanStrong
                        buttonColor="#008000"
                        buttonText={opportunities?.profits.quantityTotal}
                        title="Ganhas"
                        description={String(
                          opportunities?.profits.valueTotal &&
                            coinFormat(opportunities?.profits.valueTotal),
                        )}
                      />
                      <ButtonSpanStrong
                        buttonColor="#ff0000"
                        buttonText={opportunities?.loss.quantityTotal}
                        title="Perdas"
                        description={String(
                          opportunities?.loss.valueTotal &&
                            coinFormat(opportunities?.loss.valueTotal),
                        )}
                      />
                    </ProfitLossOpportunity>

                    <OpenDiscardOpportunity>
                      <ButtonSpanStrong
                        buttonColor="#4169e1"
                        buttonText={1}
                        title="Abertos"
                        description={String(
                          opportunities?.open.valueTotal &&
                            coinFormat(opportunities?.open.valueTotal),
                        )}
                      />
                      <ButtonSpanStrong
                        buttonColor="#000"
                        buttonText={1}
                        title="Descartadas"
                        description={String(
                          opportunities?.discard.valueTotal &&
                            coinFormat(opportunities?.discard.valueTotal),
                        )}
                      />
                    </OpenDiscardOpportunity>

                    <MoreOpportunities>
                      <Link to="/">
                        <strong>Ver todas as oportunidades</strong>
                      </Link>
                    </MoreOpportunities>
                  </OpportunitiesContainer>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <CreditLimitContainer>
                    <h3>Limite de crédito</h3>
                    <CreditGranted>
                      <ButtonSpanStrong
                        buttonColor="#4169e1"
                        title="Concedido"
                        description={String(
                          creditLimities?.creditGranted.valueTotal &&
                            coinFormat(creditLimities.creditGranted.valueTotal),
                        )}
                      />
                    </CreditGranted>

                    <CreditAvailable>
                      <ButtonSpanStrong
                        buttonColor="#008000"
                        title="Disponivel"
                        description={String(
                          creditLimities?.creditAvailable.valueTotal &&
                            coinFormat(
                              creditLimities.creditAvailable.valueTotal,
                            ),
                        )}
                      />
                    </CreditAvailable>
                  </CreditLimitContainer>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                  <SalesContainer>
                    <h3>Vendas</h3>

                    <BarChart data={data} options={options} />
                  </SalesContainer>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FinancialSecurityContainer>
                    <h3>Títulos financeiros</h3>

                    <ExpiredFinances>
                      <ButtonSpanStrong
                        buttonColor="#ff0000"
                        buttonText={financialSecurities?.expired.quantityTotal}
                        title={String(
                          financialSecurities?.expired.valueTotal &&
                            coinFormat(financialSecurities?.expired.valueTotal),
                        )}
                        description="Vencidos"
                      />
                    </ExpiredFinances>
                    <FinancesToExpire>
                      <ButtonSpanStrong
                        buttonColor="#b8860b"
                        buttonText={
                          financialSecurities?.financesToExpire.quantityTotal
                        }
                        title={String(
                          financialSecurities?.financesToExpire.valueTotal &&
                            coinFormat(
                              financialSecurities?.financesToExpire.valueTotal,
                            ),
                        )}
                        description="A vencer"
                      />
                    </FinancesToExpire>
                    <PaidFinances>
                      <ButtonSpanStrong
                        buttonColor="#008000"
                        buttonText={financialSecurities?.paid.quantityTotal}
                        title={String(
                          financialSecurities?.paid.valueTotal &&
                            coinFormat(financialSecurities?.paid.valueTotal),
                        )}
                        description="Pagos"
                      />
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

export default Profile;
