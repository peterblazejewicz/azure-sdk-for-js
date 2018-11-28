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
import * as Models from "../models";
import * as Mappers from "../models/availabilityStatusesMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealthContext } from "../microsoftResourceHealthContext";

/** Class representing a AvailabilityStatuses. */
export class AvailabilityStatuses {
  private readonly client: MicrosoftResourceHealthContext;

  /**
   * Create a AvailabilityStatuses.
   * @param {MicrosoftResourceHealthContext} client Reference to the service client.
   */
  constructor(client: MicrosoftResourceHealthContext) {
    this.client = client;
  }

  /**
   * Lists the current availability status for all the resources in the subscription. Use the
   * nextLink property in the response to get the next page of availability statuses.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilityStatusesListBySubscriptionIdResponse>
   */
  listBySubscriptionId(options?: Models.AvailabilityStatusesListBySubscriptionIdOptionalParams): Promise<Models.AvailabilityStatusesListBySubscriptionIdResponse>;
  /**
   * @param callback The callback
   */
  listBySubscriptionId(callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionId(options: Models.AvailabilityStatusesListBySubscriptionIdOptionalParams, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  listBySubscriptionId(options?: Models.AvailabilityStatusesListBySubscriptionIdOptionalParams | msRest.ServiceCallback<Models.AvailabilityStatusListResult>, callback?: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): Promise<Models.AvailabilityStatusesListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionIdOperationSpec,
      callback) as Promise<Models.AvailabilityStatusesListBySubscriptionIdResponse>;
  }

  /**
   * Lists the current availability status for all the resources in the resource group. Use the
   * nextLink property in the response to get the next page of availability statuses.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilityStatusesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.AvailabilityStatusesListByResourceGroupOptionalParams): Promise<Models.AvailabilityStatusesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.AvailabilityStatusesListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.AvailabilityStatusesListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.AvailabilityStatusListResult>, callback?: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): Promise<Models.AvailabilityStatusesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AvailabilityStatusesListByResourceGroupResponse>;
  }

  /**
   * Gets current availability status for a single resource
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilityStatusesGetByResourceResponse>
   */
  getByResource(resourceUri: string, options?: Models.AvailabilityStatusesGetByResourceOptionalParams): Promise<Models.AvailabilityStatusesGetByResourceResponse>;
  /**
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param callback The callback
   */
  getByResource(resourceUri: string, callback: msRest.ServiceCallback<Models.AvailabilityStatus>): void;
  /**
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The optional parameters
   * @param callback The callback
   */
  getByResource(resourceUri: string, options: Models.AvailabilityStatusesGetByResourceOptionalParams, callback: msRest.ServiceCallback<Models.AvailabilityStatus>): void;
  getByResource(resourceUri: string, options?: Models.AvailabilityStatusesGetByResourceOptionalParams | msRest.ServiceCallback<Models.AvailabilityStatus>, callback?: msRest.ServiceCallback<Models.AvailabilityStatus>): Promise<Models.AvailabilityStatusesGetByResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      getByResourceOperationSpec,
      callback) as Promise<Models.AvailabilityStatusesGetByResourceResponse>;
  }

  /**
   * Lists all historical availability transitions and impacting events for a single resource. Use
   * the nextLink property in the response to get the next page of availability status
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilityStatusesListResponse>
   */
  list(resourceUri: string, options?: Models.AvailabilityStatusesListOptionalParams): Promise<Models.AvailabilityStatusesListResponse>;
  /**
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param callback The callback
   */
  list(resourceUri: string, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  /**
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceUri: string, options: Models.AvailabilityStatusesListOptionalParams, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  list(resourceUri: string, options?: Models.AvailabilityStatusesListOptionalParams | msRest.ServiceCallback<Models.AvailabilityStatusListResult>, callback?: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): Promise<Models.AvailabilityStatusesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AvailabilityStatusesListResponse>;
  }

  /**
   * Lists the current availability status for all the resources in the subscription. Use the
   * nextLink property in the response to get the next page of availability statuses.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilityStatusesListBySubscriptionIdNextResponse>
   */
  listBySubscriptionIdNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilityStatusesListBySubscriptionIdNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionIdNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionIdNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  listBySubscriptionIdNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilityStatusListResult>, callback?: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): Promise<Models.AvailabilityStatusesListBySubscriptionIdNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionIdNextOperationSpec,
      callback) as Promise<Models.AvailabilityStatusesListBySubscriptionIdNextResponse>;
  }

  /**
   * Lists the current availability status for all the resources in the resource group. Use the
   * nextLink property in the response to get the next page of availability statuses.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilityStatusesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilityStatusesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilityStatusListResult>, callback?: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): Promise<Models.AvailabilityStatusesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.AvailabilityStatusesListByResourceGroupNextResponse>;
  }

  /**
   * Lists all historical availability transitions and impacting events for a single resource. Use
   * the nextLink property in the response to get the next page of availability status
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilityStatusesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilityStatusesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilityStatusListResult>, callback?: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): Promise<Models.AvailabilityStatusesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AvailabilityStatusesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/availabilityStatuses",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceHealth/availabilityStatuses",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses/current",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionIdNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
