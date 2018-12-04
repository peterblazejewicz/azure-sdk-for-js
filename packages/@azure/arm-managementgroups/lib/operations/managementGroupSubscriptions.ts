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
import * as Mappers from "../models/managementGroupSubscriptionsMappers";
import * as Parameters from "../models/parameters";
import { ManagementGroupsAPIContext } from "../managementGroupsAPIContext";

/** Class representing a ManagementGroupSubscriptions. */
export class ManagementGroupSubscriptions {
  private readonly client: ManagementGroupsAPIContext;

  /**
   * Create a ManagementGroupSubscriptions.
   * @param {ManagementGroupsAPIContext} client Reference to the service client.
   */
  constructor(client: ManagementGroupsAPIContext) {
    this.client = client;
  }

  /**
   * Associates existing subscription with the management group.
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  create(groupId: string, subscriptionId: string, options?: Models.ManagementGroupSubscriptionsCreateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param callback The callback
   */
  create(groupId: string, subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(groupId: string, subscriptionId: string, options: Models.ManagementGroupSubscriptionsCreateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  create(groupId: string, subscriptionId: string, options?: Models.ManagementGroupSubscriptionsCreateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        groupId,
        subscriptionId,
        options
      },
      createOperationSpec,
      callback);
  }

  /**
   * De-associates subscription from the management group.
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(groupId: string, subscriptionId: string, options?: Models.ManagementGroupSubscriptionsDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param callback The callback
   */
  deleteMethod(groupId: string, subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(groupId: string, subscriptionId: string, options: Models.ManagementGroupSubscriptionsDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(groupId: string, subscriptionId: string, options?: Models.ManagementGroupSubscriptionsDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        groupId,
        subscriptionId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId}",
  urlParameters: [
    Parameters.groupId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.cacheControl,
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId}",
  urlParameters: [
    Parameters.groupId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.cacheControl,
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
