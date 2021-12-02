import { GraphQLClient } from 'graphql-request';
import { GraphQLRequest } from '../../../lib/graphql/GraphQLRequest';
import {
  BccDynamicQuery,
  BccStaticQuery,
} from '../../../typings/graphql-schema';
import bccDynamic from './bccDynamic.graphql';
import bccStatic from './bccStatic.graphql';

export class NetworkInfoApi {
  public fetchDynamic: GraphQLRequest<BccDynamicQuery, {}>;
  public fetchStatic: GraphQLRequest<BccStaticQuery, {}>;

  constructor(client: GraphQLClient) {
    this.fetchDynamic = new GraphQLRequest(client, bccDynamic);
    this.fetchStatic = new GraphQLRequest(client, bccStatic);
  }
}
