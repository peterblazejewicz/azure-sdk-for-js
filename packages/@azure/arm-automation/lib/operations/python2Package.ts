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
import * as Mappers from "../models/python2PackageMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a Python2Package. */
export class Python2Package {
  private readonly client: AutomationClientContext;

  /**
   * Create a Python2Package.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Delete the python 2 package by name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The python package name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, packageName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The python package name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, packageName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The python package name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, packageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, packageName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        packageName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve the python 2 package identified by package name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The python package name.
   * @param [options] The optional parameters
   * @returns Promise<Models.Python2PackageGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, packageName: string, options?: msRest.RequestOptionsBase): Promise<Models.Python2PackageGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The python package name.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, packageName: string, callback: msRest.ServiceCallback<Models.Module>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The python package name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, packageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Module>): void;
  get(resourceGroupName: string, automationAccountName: string, packageName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Module>, callback?: msRest.ServiceCallback<Models.Module>): Promise<Models.Python2PackageGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        packageName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.Python2PackageGetResponse>;
  }

  /**
   * Create or Update the python 2 package identified by package name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The name of python package.
   * @param parameters The create or update parameters for python package.
   * @param [options] The optional parameters
   * @returns Promise<Models.Python2PackageCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, packageName: string, parameters: Models.PythonPackageCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.Python2PackageCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The name of python package.
   * @param parameters The create or update parameters for python package.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, packageName: string, parameters: Models.PythonPackageCreateParameters, callback: msRest.ServiceCallback<Models.Module>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The name of python package.
   * @param parameters The create or update parameters for python package.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, packageName: string, parameters: Models.PythonPackageCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Module>): void;
  createOrUpdate(resourceGroupName: string, automationAccountName: string, packageName: string, parameters: Models.PythonPackageCreateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Module>, callback?: msRest.ServiceCallback<Models.Module>): Promise<Models.Python2PackageCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        packageName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.Python2PackageCreateOrUpdateResponse>;
  }

  /**
   * Update the python 2 package identified by package name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The name of python package.
   * @param parameters The update parameters for python package.
   * @param [options] The optional parameters
   * @returns Promise<Models.Python2PackageUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, packageName: string, parameters: Models.PythonPackageUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.Python2PackageUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The name of python package.
   * @param parameters The update parameters for python package.
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, packageName: string, parameters: Models.PythonPackageUpdateParameters, callback: msRest.ServiceCallback<Models.Module>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The name of python package.
   * @param parameters The update parameters for python package.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, packageName: string, parameters: Models.PythonPackageUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Module>): void;
  update(resourceGroupName: string, automationAccountName: string, packageName: string, parameters: Models.PythonPackageUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Module>, callback?: msRest.ServiceCallback<Models.Module>): Promise<Models.Python2PackageUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        packageName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.Python2PackageUpdateResponse>;
  }

  /**
   * Retrieve a list of python 2 packages.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.Python2PackageListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.Python2PackageListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.ModuleListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ModuleListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ModuleListResult>, callback?: msRest.ServiceCallback<Models.ModuleListResult>): Promise<Models.Python2PackageListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.Python2PackageListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of python 2 packages.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.Python2PackageListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.Python2PackageListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ModuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ModuleListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ModuleListResult>, callback?: msRest.ServiceCallback<Models.ModuleListResult>): Promise<Models.Python2PackageListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.Python2PackageListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.packageName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.packageName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Module
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.packageName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PythonPackageCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Module
    },
    201: {
      bodyMapper: Mappers.Module
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.packageName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PythonPackageUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Module
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ModuleListResult
    },
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
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ModuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
