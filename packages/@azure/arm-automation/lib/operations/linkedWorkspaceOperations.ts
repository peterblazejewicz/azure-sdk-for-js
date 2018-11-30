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
import * as Mappers from "../models/linkedWorkspaceOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a LinkedWorkspaceOperations. */
export class LinkedWorkspaceOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a LinkedWorkspaceOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Retrieve the linked workspace for the account id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.LinkedWorkspaceGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.LinkedWorkspaceGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.LinkedWorkspace>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LinkedWorkspace>): void;
  get(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LinkedWorkspace>, callback?: msRest.ServiceCallback<Models.LinkedWorkspace>): Promise<Models.LinkedWorkspaceGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LinkedWorkspaceGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/linkedWorkspace",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
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
      bodyMapper: Mappers.LinkedWorkspace
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
