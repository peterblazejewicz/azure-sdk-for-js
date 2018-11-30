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
import * as Mappers from "../models/dscCompilationJobStreamMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a DscCompilationJobStream. */
export class DscCompilationJobStream {
  private readonly client: AutomationClientContext;

  /**
   * Create a DscCompilationJobStream.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Retrieve all the job streams for the compilation Job.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobId The job id.
   * @param [options] The optional parameters
   * @returns Promise<Models.DscCompilationJobStreamListByJobResponse>
   */
  listByJob(resourceGroupName: string, automationAccountName: string, jobId: string, options?: msRest.RequestOptionsBase): Promise<Models.DscCompilationJobStreamListByJobResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobId The job id.
   * @param callback The callback
   */
  listByJob(resourceGroupName: string, automationAccountName: string, jobId: string, callback: msRest.ServiceCallback<Models.JobStreamListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobId The job id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByJob(resourceGroupName: string, automationAccountName: string, jobId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobStreamListResult>): void;
  listByJob(resourceGroupName: string, automationAccountName: string, jobId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobStreamListResult>, callback?: msRest.ServiceCallback<Models.JobStreamListResult>): Promise<Models.DscCompilationJobStreamListByJobResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobId,
        options
      },
      listByJobOperationSpec,
      callback) as Promise<Models.DscCompilationJobStreamListByJobResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByJobOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{jobId}/streams",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobStreamListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
