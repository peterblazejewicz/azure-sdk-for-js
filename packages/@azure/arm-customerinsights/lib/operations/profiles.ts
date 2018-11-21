/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/profilesMappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClientContext } from "../customerInsightsManagementClientContext";

/** Class representing a Profiles. */
export class Profiles {
  private readonly client: CustomerInsightsManagementClientContext;

  /**
   * Create a Profiles.
   * @param {CustomerInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: CustomerInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a profile within a Hub, or updates an existing profile.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param parameters Parameters supplied to the create/delete Profile type operation
   * @param [options] The optional parameters
   * @returns Promise<Models.ProfilesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, hubName: string, profileName: string, parameters: Models.ProfileResourceFormat, options?: msRest.RequestOptionsBase): Promise<Models.ProfilesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,hubName,profileName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ProfilesCreateOrUpdateResponse>;
  }

  /**
   * Gets information about the specified profile.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProfilesGetResponse>
   */
  get(resourceGroupName: string, hubName: string, profileName: string, options?: Models.ProfilesGetOptionalParams): Promise<Models.ProfilesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, profileName: string, callback: msRest.ServiceCallback<Models.ProfileResourceFormat>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, profileName: string, options: Models.ProfilesGetOptionalParams, callback: msRest.ServiceCallback<Models.ProfileResourceFormat>): void;
  get(resourceGroupName: string, hubName: string, profileName: string, options?: Models.ProfilesGetOptionalParams | msRest.ServiceCallback<Models.ProfileResourceFormat>, callback?: msRest.ServiceCallback<Models.ProfileResourceFormat>): Promise<Models.ProfilesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        profileName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProfilesGetResponse>;
  }

  /**
   * Deletes a profile within a hub
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, hubName: string, profileName: string, options?: Models.ProfilesDeleteMethodOptionalParams): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,hubName,profileName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets all profile in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProfilesListByHubResponse>
   */
  listByHub(resourceGroupName: string, hubName: string, options?: Models.ProfilesListByHubOptionalParams): Promise<Models.ProfilesListByHubResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, callback: msRest.ServiceCallback<Models.ProfileListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, options: Models.ProfilesListByHubOptionalParams, callback: msRest.ServiceCallback<Models.ProfileListResult>): void;
  listByHub(resourceGroupName: string, hubName: string, options?: Models.ProfilesListByHubOptionalParams | msRest.ServiceCallback<Models.ProfileListResult>, callback?: msRest.ServiceCallback<Models.ProfileListResult>): Promise<Models.ProfilesListByHubResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        options
      },
      listByHubOperationSpec,
      callback) as Promise<Models.ProfilesListByHubResponse>;
  }

  /**
   * Gets the KPIs that enrich the profile Type identified by the supplied name. Enrichment happens
   * through participants of the Interaction on an Interaction KPI and through Relationships for
   * Profile KPIs.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProfilesGetEnrichingKpisResponse>
   */
  getEnrichingKpis(resourceGroupName: string, hubName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProfilesGetEnrichingKpisResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param callback The callback
   */
  getEnrichingKpis(resourceGroupName: string, hubName: string, profileName: string, callback: msRest.ServiceCallback<Models.KpiDefinition[]>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEnrichingKpis(resourceGroupName: string, hubName: string, profileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.KpiDefinition[]>): void;
  getEnrichingKpis(resourceGroupName: string, hubName: string, profileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.KpiDefinition[]>, callback?: msRest.ServiceCallback<Models.KpiDefinition[]>): Promise<Models.ProfilesGetEnrichingKpisResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        profileName,
        options
      },
      getEnrichingKpisOperationSpec,
      callback) as Promise<Models.ProfilesGetEnrichingKpisResponse>;
  }

  /**
   * Creates a profile within a Hub, or updates an existing profile.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param parameters Parameters supplied to the create/delete Profile type operation
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, hubName: string, profileName: string, parameters: Models.ProfileResourceFormat, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hubName,
        profileName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a profile within a hub
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, hubName: string, profileName: string, options?: Models.ProfilesBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hubName,
        profileName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets all profile in the hub.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProfilesListByHubNextResponse>
   */
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProfilesListByHubNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProfileListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProfileListResult>): void;
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProfileListResult>, callback?: msRest.ServiceCallback<Models.ProfileListResult>): Promise<Models.ProfilesListByHubNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByHubNextOperationSpec,
      callback) as Promise<Models.ProfilesListByHubNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.profileName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.localeCode,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResourceFormat
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.localeCode,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getEnrichingKpisOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}/getEnrichingKpis",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.profileName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KpiDefinition"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.profileName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ProfileResourceFormat,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResourceFormat
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.profileName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.localeCode,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
