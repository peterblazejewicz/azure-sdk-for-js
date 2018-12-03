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
import * as Mappers from "../models/integrationRuntimeObjectMetadataMappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClientContext } from "../dataFactoryManagementClientContext";

/** Class representing a IntegrationRuntimeObjectMetadata. */
export class IntegrationRuntimeObjectMetadata {
  private readonly client: DataFactoryManagementClientContext;

  /**
   * Create a IntegrationRuntimeObjectMetadata.
   * @param {DataFactoryManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataFactoryManagementClientContext) {
    this.client = client;
  }

  /**
   * Refresh a ssis integration runtime object metadata.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  refresh(resourceGroupName: string, factoryName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRefresh(resourceGroupName,factoryName,integrationRuntimeName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get a ssis integration runtime object metadata by specified path. The return is pageable
   * metadata list.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimeObjectMetadataGetResponse>
   */
  get(resourceGroupName: string, factoryName: string, integrationRuntimeName: string, options?: Models.IntegrationRuntimeObjectMetadataGetOptionalParams): Promise<Models.IntegrationRuntimeObjectMetadataGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, integrationRuntimeName: string, callback: msRest.ServiceCallback<Models.SsisObjectMetadataListResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, integrationRuntimeName: string, options: Models.IntegrationRuntimeObjectMetadataGetOptionalParams, callback: msRest.ServiceCallback<Models.SsisObjectMetadataListResponse>): void;
  get(resourceGroupName: string, factoryName: string, integrationRuntimeName: string, options?: Models.IntegrationRuntimeObjectMetadataGetOptionalParams | msRest.ServiceCallback<Models.SsisObjectMetadataListResponse>, callback?: msRest.ServiceCallback<Models.SsisObjectMetadataListResponse>): Promise<Models.IntegrationRuntimeObjectMetadataGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        integrationRuntimeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IntegrationRuntimeObjectMetadataGetResponse>;
  }

  /**
   * Refresh a ssis integration runtime object metadata.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRefresh(resourceGroupName: string, factoryName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        integrationRuntimeName,
        options
      },
      beginRefreshOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getObjectMetadata",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "getMetadataRequest"
    ],
    mapper: Mappers.GetSsisObjectMetadataRequest
  },
  responses: {
    200: {
      bodyMapper: Mappers.SsisObjectMetadataListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRefreshOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/refreshObjectMetadata",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
