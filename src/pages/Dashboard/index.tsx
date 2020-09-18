import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { FiInfo, FiMail, FiPhone } from 'react-icons/fi';
import {
  WhatsApp,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
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
  FinancesToExpire,
  PaidFinances,
  CardActivitiesContainer,
} from './styles';

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
                        <span>44 9 97548484</span>
                        <p>Celular</p>
                      </div>
                    </EmployerPhone>

                    <EmployerMail>
                      <FiMail />
                      <div>
                        <span>WilliamFelizardo@mail.com</span>
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

                    <EmployerName>
                      <img
                        src="https://avatars2.githubusercontent.com/u/50719156?s=460&u=81ec30b299ffe9d9275b4e207d9c4760fcada87a&v=4"
                        alt="imagemGitHub"
                      />
                    </EmployerName>

                    <EmployerPhone>
                      <span>api googlemaps</span>
                    </EmployerPhone>
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
                      <button type="button">1</button>
                      <div>
                        <span>R$ 12.000,20</span>
                        <p>Concedido</p>
                      </div>
                    </CreditGranted>

                    <CreditAvailable>
                      <button type="button">1</button>
                      <div>
                        <span>R$ 12.000,20</span>
                        <p>Disponivel</p>
                      </div>
                    </CreditAvailable>
                  </CreditLimitContainer>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                  <SalesContainer>
                    <h3>Vendas</h3>
                    <SalesGraphic>
                      <div>Grafico aqui</div>
                      <div>Grafico aqui</div>
                      <div>Grafico aqui</div>
                      <div>Grafico aqui</div>
                      <div>Grafico aqui</div>
                      <div>Grafico aqui</div>
                      <div>Grafico aqui</div>
                    </SalesGraphic>
                  </SalesContainer>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FinancialSecurityContainer>
                    <h3>Títulos financeiros</h3>

                    <ExpiredFinances>
                      <button type="button">1</button>
                      <div>
                        <span>R$ 3.105,00</span>
                        <p>Vencidos</p>
                      </div>
                    </ExpiredFinances>
                    <FinancesToExpire>
                      <button type="button">1</button>
                      <div>
                        <span>R$ 3.105,00</span>
                        <p>A vencer</p>
                      </div>
                    </FinancesToExpire>
                    <PaidFinances>
                      <button type="button">1</button>
                      <div>
                        <span>R$ 3.105,00</span>
                        <p>Pagos</p>
                      </div>
                    </PaidFinances>
                  </FinancialSecurityContainer>
                </Grid>
              </Grid>
            </ReportInfoContainer>

            <ActivityInfoContainer item sm={6} xs={12}>
              <CardActivitiesContainer item xs={12}>
                <h3>Próximas atividades</h3>
              </CardActivitiesContainer>
            </ActivityInfoContainer>
          </CardsContainer>
        </div>
      </Main>
    </Container>
  );
};

export default Dashboard;
