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
import * as Mappers from "../models/jobOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a JobOperations. */
export class JobOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a JobOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Retrieve the job output identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The name of the job to be created.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobGetOutputResponse>
   */
  getOutput(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobGetOutputOptionalParams): Promise<Models.JobGetOutputResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The name of the job to be created.
   * @param callback The callback
   */
  getOutput(resourceGroupName: string, automationAccountName: string, jobName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The name of the job to be created.
   * @param options The optional parameters
   * @param callback The callback
   */
  getOutput(resourceGroupName: string, automationAccountName: string, jobName: string, options: Models.JobGetOutputOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getOutput(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobGetOutputOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobGetOutputResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobName,
        options
      },
      getOutputOperationSpec,
      callback) as Promise<Models.JobGetOutputResponse>;
  }

  /**
   * Retrieve the runbook content of the job identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobGetRunbookContentResponse>
   */
  getRunbookContent(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobGetRunbookContentOptionalParams): Promise<Models.JobGetRunbookContentResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param callback The callback
   */
  getRunbookContent(resourceGroupName: string, automationAccountName: string, jobName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getRunbookContent(resourceGroupName: string, automationAccountName: string, jobName: string, options: Models.JobGetRunbookContentOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getRunbookContent(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobGetRunbookContentOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobGetRunbookContentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobName,
        options
      },
      getRunbookContentOperationSpec,
      callback) as Promise<Models.JobGetRunbookContentResponse>;
  }

  /**
   * Suspend the job identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  suspend(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobSuspendOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param callback The callback
   */
  suspend(resourceGroupName: string, automationAccountName: string, jobName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The optional parameters
   * @param callback The callback
   */
  suspend(resourceGroupName: string, automationAccountName: string, jobName: string, options: Models.JobSuspendOptionalParams, callback: msRest.ServiceCallback<void>): void;
  suspend(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobSuspendOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobName,
        options
      },
      suspendOperationSpec,
      callback);
  }

  /**
   * Stop the job identified by jobName.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobStopOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param callback The callback
   */
  stop(resourceGroupName: string, automationAccountName: string, jobName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The optional parameters
   * @param callback The callback
   */
  stop(resourceGroupName: string, automationAccountName: string, jobName: string, options: Models.JobStopOptionalParams, callback: msRest.ServiceCallback<void>): void;
  stop(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobStopOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobName,
        options
      },
      stopOperationSpec,
      callback);
  }

  /**
   * Retrieve the job identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobGetOptionalParams): Promise<Models.JobGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, jobName: string, callback: msRest.ServiceCallback<Models.Job>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, jobName: string, options: Models.JobGetOptionalParams, callback: msRest.ServiceCallback<Models.Job>): void;
  get(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobGetOptionalParams | msRest.ServiceCallback<Models.Job>, callback?: msRest.ServiceCallback<Models.Job>): Promise<Models.JobGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobGetResponse>;
  }

  /**
   * Create a job of the runbook.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param parameters The parameters supplied to the create job operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobCreateResponse>
   */
  create(resourceGroupName: string, automationAccountName: string, jobName: string, parameters: Models.JobCreateParameters, options?: Models.JobCreateOptionalParams): Promise<Models.JobCreateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param parameters The parameters supplied to the create job operation.
   * @param callback The callback
   */
  create(resourceGroupName: string, automationAccountName: string, jobName: string, parameters: Models.JobCreateParameters, callback: msRest.ServiceCallback<Models.Job>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param parameters The parameters supplied to the create job operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, automationAccountName: string, jobName: string, parameters: Models.JobCreateParameters, options: Models.JobCreateOptionalParams, callback: msRest.ServiceCallback<Models.Job>): void;
  create(resourceGroupName: string, automationAccountName: string, jobName: string, parameters: Models.JobCreateParameters, options?: Models.JobCreateOptionalParams | msRest.ServiceCallback<Models.Job>, callback?: msRest.ServiceCallback<Models.Job>): Promise<Models.JobCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobName,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.JobCreateResponse>;
  }

  /**
   * Retrieve a list of jobs.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.JobListByAutomationAccountOptionalParams): Promise<Models.JobListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.JobListResultV2>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: Models.JobListByAutomationAccountOptionalParams, callback: msRest.ServiceCallback<Models.JobListResultV2>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.JobListByAutomationAccountOptionalParams | msRest.ServiceCallback<Models.JobListResultV2>, callback?: msRest.ServiceCallback<Models.JobListResultV2>): Promise<Models.JobListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.JobListByAutomationAccountResponse>;
  }

  /**
   * Resume the job identified by jobName.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resume(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobResumeOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param callback The callback
   */
  resume(resourceGroupName: string, automationAccountName: string, jobName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The optional parameters
   * @param callback The callback
   */
  resume(resourceGroupName: string, automationAccountName: string, jobName: string, options: Models.JobResumeOptionalParams, callback: msRest.ServiceCallback<void>): void;
  resume(resourceGroupName: string, automationAccountName: string, jobName: string, options?: Models.JobResumeOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobName,
        options
      },
      resumeOperationSpec,
      callback);
  }

  /**
   * Retrieve a list of jobs.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: Models.JobListByAutomationAccountNextOptionalParams): Promise<Models.JobListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobListResultV2>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: Models.JobListByAutomationAccountNextOptionalParams, callback: msRest.ServiceCallback<Models.JobListResultV2>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: Models.JobListByAutomationAccountNextOptionalParams | msRest.ServiceCallback<Models.JobListResultV2>, callback?: msRest.ServiceCallback<Models.JobListResultV2>): Promise<Models.JobListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.JobListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOutputOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/output",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getRunbookContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/runbookContent",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const suspendOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/suspend",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const stopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/stop",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.JobCreateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobListResultV2
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const resumeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/resume",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobListResultV2
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
