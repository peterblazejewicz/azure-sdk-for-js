/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { KustoManagementClientContext } from "./kustoManagementClientContext";


class KustoManagementClient extends KustoManagementClientContext {
  // Operation groups
  clusters: operations.Clusters;
  databases: operations.Databases;
  eventHubConnections: operations.EventHubConnections;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the KustoManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.KustoManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.clusters = new operations.Clusters(this);
    this.databases = new operations.Databases(this);
    this.eventHubConnections = new operations.EventHubConnections(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  KustoManagementClient,
  KustoManagementClientContext,
  Models as KustoManagementModels,
  Mappers as KustoManagementMappers
};
export * from "./operations";
