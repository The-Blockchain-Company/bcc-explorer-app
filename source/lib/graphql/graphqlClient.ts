import { GraphQLClient } from 'graphql-request';
import { environment } from '../../environment';

export const graphqlClient = new GraphQLClient(
  environment.BCC.GRAPHQL.HTTP_URL
);
