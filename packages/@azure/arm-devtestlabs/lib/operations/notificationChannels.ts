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
import * as Models from "../models";
import * as Mappers from "../models/notificationChannelsMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a NotificationChannels. */
export class NotificationChannels {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a NotificationChannels.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List notificationchannels in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<Models.NotificationChannelsListResponse>
   */
  list(resourceGroupName: string, labName: string, options?: Models.NotificationChannelsListOptionalParams): Promise<Models.NotificationChannelsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, callback: msRest.ServiceCallback<Models.NotificationChannelList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, options: Models.NotificationChannelsListOptionalParams, callback: msRest.ServiceCallback<Models.NotificationChannelList>): void;
  list(resourceGroupName: string, labName: string, options?: Models.NotificationChannelsListOptionalParams | msRest.ServiceCallback<Models.NotificationChannelList>, callback?: msRest.ServiceCallback<Models.NotificationChannelList>): Promise<Models.NotificationChannelsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.NotificationChannelsListResponse>;
  }

  /**
   * Get notificationchannel.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param [options] The optional parameters
   * @returns Promise<Models.NotificationChannelsGetResponse>
   */
  get(resourceGroupName: string, labName: string, name: string, options?: Models.NotificationChannelsGetOptionalParams): Promise<Models.NotificationChannelsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, name: string, callback: msRest.ServiceCallback<Models.NotificationChannel>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, name: string, options: Models.NotificationChannelsGetOptionalParams, callback: msRest.ServiceCallback<Models.NotificationChannel>): void;
  get(resourceGroupName: string, labName: string, name: string, options?: Models.NotificationChannelsGetOptionalParams | msRest.ServiceCallback<Models.NotificationChannel>, callback?: msRest.ServiceCallback<Models.NotificationChannel>): Promise<Models.NotificationChannelsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.NotificationChannelsGetResponse>;
  }

  /**
   * Create or replace an existing notificationChannel.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notificationChannel A notification.
   * @param [options] The optional parameters
   * @returns Promise<Models.NotificationChannelsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labName: string, name: string, notificationChannel: Models.NotificationChannel, options?: msRest.RequestOptionsBase): Promise<Models.NotificationChannelsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notificationChannel A notification.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labName: string, name: string, notificationChannel: Models.NotificationChannel, callback: msRest.ServiceCallback<Models.NotificationChannel>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notificationChannel A notification.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labName: string, name: string, notificationChannel: Models.NotificationChannel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NotificationChannel>): void;
  createOrUpdate(resourceGroupName: string, labName: string, name: string, notificationChannel: Models.NotificationChannel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NotificationChannel>, callback?: msRest.ServiceCallback<Models.NotificationChannel>): Promise<Models.NotificationChannelsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        notificationChannel,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.NotificationChannelsCreateOrUpdateResponse>;
  }

  /**
   * Delete notificationchannel.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, labName: string, name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, labName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Modify properties of notificationchannels.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notificationChannel A notification.
   * @param [options] The optional parameters
   * @returns Promise<Models.NotificationChannelsUpdateResponse>
   */
  update(resourceGroupName: string, labName: string, name: string, notificationChannel: Models.NotificationChannelFragment, options?: msRest.RequestOptionsBase): Promise<Models.NotificationChannelsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notificationChannel A notification.
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, name: string, notificationChannel: Models.NotificationChannelFragment, callback: msRest.ServiceCallback<Models.NotificationChannel>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notificationChannel A notification.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, name: string, notificationChannel: Models.NotificationChannelFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NotificationChannel>): void;
  update(resourceGroupName: string, labName: string, name: string, notificationChannel: Models.NotificationChannelFragment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NotificationChannel>, callback?: msRest.ServiceCallback<Models.NotificationChannel>): Promise<Models.NotificationChannelsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        notificationChannel,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.NotificationChannelsUpdateResponse>;
  }

  /**
   * Send notification to provided channel.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notifyParameters Properties for generating a Notification.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  notify(resourceGroupName: string, labName: string, name: string, notifyParameters: Models.NotifyParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notifyParameters Properties for generating a Notification.
   * @param callback The callback
   */
  notify(resourceGroupName: string, labName: string, name: string, notifyParameters: Models.NotifyParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the notificationChannel.
   * @param notifyParameters Properties for generating a Notification.
   * @param options The optional parameters
   * @param callback The callback
   */
  notify(resourceGroupName: string, labName: string, name: string, notifyParameters: Models.NotifyParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  notify(resourceGroupName: string, labName: string, name: string, notifyParameters: Models.NotifyParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        notifyParameters,
        options
      },
      notifyOperationSpec,
      callback);
  }

  /**
   * List notificationchannels in a given lab.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NotificationChannelsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NotificationChannelsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NotificationChannelList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NotificationChannelList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NotificationChannelList>, callback?: msRest.ServiceCallback<Models.NotificationChannelList>): Promise<Models.NotificationChannelsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.NotificationChannelsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NotificationChannelList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NotificationChannel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "notificationChannel",
    mapper: {
      ...Mappers.NotificationChannel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NotificationChannel
    },
    201: {
      bodyMapper: Mappers.NotificationChannel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "notificationChannel",
    mapper: {
      ...Mappers.NotificationChannelFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NotificationChannel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const notifyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}/notify",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "notifyParameters",
    mapper: {
      ...Mappers.NotifyParameters,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.NotificationChannelList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
