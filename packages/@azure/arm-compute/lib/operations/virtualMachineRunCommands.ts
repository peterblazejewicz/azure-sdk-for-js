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
import * as Mappers from "../models/virtualMachineRunCommandsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a VirtualMachineRunCommands. */
export class VirtualMachineRunCommands {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a VirtualMachineRunCommands.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all available run commands for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineRunCommandsListResponse>
   */
  list(location: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineRunCommandsListResponse>;
  /**
   * @param location The location upon which run commands is queried.
   * @param callback The callback
   */
  list(location: string, callback: msRest.ServiceCallback<Models.RunCommandListResult>): void;
  /**
   * @param location The location upon which run commands is queried.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunCommandListResult>): void;
  list(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RunCommandListResult>, callback?: msRest.ServiceCallback<Models.RunCommandListResult>): Promise<Models.VirtualMachineRunCommandsListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualMachineRunCommandsListResponse>;
  }

  /**
   * Gets specific run command for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param commandId The command id.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineRunCommandsGetResponse>
   */
  get(location: string, commandId: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineRunCommandsGetResponse>;
  /**
   * @param location The location upon which run commands is queried.
   * @param commandId The command id.
   * @param callback The callback
   */
  get(location: string, commandId: string, callback: msRest.ServiceCallback<Models.RunCommandDocument>): void;
  /**
   * @param location The location upon which run commands is queried.
   * @param commandId The command id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(location: string, commandId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunCommandDocument>): void;
  get(location: string, commandId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RunCommandDocument>, callback?: msRest.ServiceCallback<Models.RunCommandDocument>): Promise<Models.VirtualMachineRunCommandsGetResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        commandId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualMachineRunCommandsGetResponse>;
  }

  /**
   * Lists all available run commands for a subscription in a location.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineRunCommandsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineRunCommandsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RunCommandListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunCommandListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RunCommandListResult>, callback?: msRest.ServiceCallback<Models.RunCommandListResult>): Promise<Models.VirtualMachineRunCommandsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualMachineRunCommandsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands",
  urlParameters: [
    Parameters.location1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands/{commandId}",
  urlParameters: [
    Parameters.location1,
    Parameters.commandId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandDocument
    },
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
      bodyMapper: Mappers.RunCommandListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
