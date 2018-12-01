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
import * as Mappers from "../models/appsMappers";
import * as Parameters from "../models/parameters";
import { LUISAuthoringClientContext } from "../lUISAuthoringClientContext";

/** Class representing a Apps. */
export class Apps {
  private readonly client: LUISAuthoringClientContext;

  /**
   * Create a Apps.
   * @param {LUISAuthoringClientContext} client Reference to the service client.
   */
  constructor(client: LUISAuthoringClientContext) {
    this.client = client;
  }

  /**
   * Creates a new LUIS app.
   * @param applicationCreateObject A model containing Name, Description (optional), Culture, Usage
   * Scenario (optional), Domain (optional) and initial version ID (optional) of the application.
   * Default value for the version ID is 0.1. Note: the culture cannot be changed after the app is
   * created.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsAddResponse>
   */
  add(applicationCreateObject: Models.ApplicationCreateObject, options?: msRest.RequestOptionsBase): Promise<Models.AppsAddResponse>;
  /**
   * @param applicationCreateObject A model containing Name, Description (optional), Culture, Usage
   * Scenario (optional), Domain (optional) and initial version ID (optional) of the application.
   * Default value for the version ID is 0.1. Note: the culture cannot be changed after the app is
   * created.
   * @param callback The callback
   */
  add(applicationCreateObject: Models.ApplicationCreateObject, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param applicationCreateObject A model containing Name, Description (optional), Culture, Usage
   * Scenario (optional), Domain (optional) and initial version ID (optional) of the application.
   * Default value for the version ID is 0.1. Note: the culture cannot be changed after the app is
   * created.
   * @param options The optional parameters
   * @param callback The callback
   */
  add(applicationCreateObject: Models.ApplicationCreateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  add(applicationCreateObject: Models.ApplicationCreateObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.AppsAddResponse> {
    return this.client.sendOperationRequest(
      {
        applicationCreateObject,
        options
      },
      addOperationSpec,
      callback) as Promise<Models.AppsAddResponse>;
  }

  /**
   * Lists all of the user applications.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListResponse>
   */
  list(options?: Models.AppsListOptionalParams): Promise<Models.AppsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ApplicationInfoResponse[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.AppsListOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationInfoResponse[]>): void;
  list(options?: Models.AppsListOptionalParams | msRest.ServiceCallback<Models.ApplicationInfoResponse[]>, callback?: msRest.ServiceCallback<Models.ApplicationInfoResponse[]>): Promise<Models.AppsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AppsListResponse>;
  }

  /**
   * Imports an application to LUIS, the application's structure should be included in the request
   * body.
   * @param luisApp A LUIS application structure.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsImportMethodResponse>
   */
  importMethod(luisApp: Models.LuisApp, options?: Models.AppsImportMethodOptionalParams): Promise<Models.AppsImportMethodResponse>;
  /**
   * @param luisApp A LUIS application structure.
   * @param callback The callback
   */
  importMethod(luisApp: Models.LuisApp, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param luisApp A LUIS application structure.
   * @param options The optional parameters
   * @param callback The callback
   */
  importMethod(luisApp: Models.LuisApp, options: Models.AppsImportMethodOptionalParams, callback: msRest.ServiceCallback<string>): void;
  importMethod(luisApp: Models.LuisApp, options?: Models.AppsImportMethodOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.AppsImportMethodResponse> {
    return this.client.sendOperationRequest(
      {
        luisApp,
        options
      },
      importMethodOperationSpec,
      callback) as Promise<Models.AppsImportMethodResponse>;
  }

  /**
   * Gets the endpoint URLs for the prebuilt Cortana applications.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListCortanaEndpointsResponse>
   */
  listCortanaEndpoints(options?: msRest.RequestOptionsBase): Promise<Models.AppsListCortanaEndpointsResponse>;
  /**
   * @param callback The callback
   */
  listCortanaEndpoints(callback: msRest.ServiceCallback<Models.PersonalAssistantsResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listCortanaEndpoints(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PersonalAssistantsResponse>): void;
  listCortanaEndpoints(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PersonalAssistantsResponse>, callback?: msRest.ServiceCallback<Models.PersonalAssistantsResponse>): Promise<Models.AppsListCortanaEndpointsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listCortanaEndpointsOperationSpec,
      callback) as Promise<Models.AppsListCortanaEndpointsResponse>;
  }

  /**
   * Gets the available application domains.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListDomainsResponse>
   */
  listDomains(options?: msRest.RequestOptionsBase): Promise<Models.AppsListDomainsResponse>;
  /**
   * @param callback The callback
   */
  listDomains(callback: msRest.ServiceCallback<string[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listDomains(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
  listDomains(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string[]>, callback?: msRest.ServiceCallback<string[]>): Promise<Models.AppsListDomainsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listDomainsOperationSpec,
      callback) as Promise<Models.AppsListDomainsResponse>;
  }

  /**
   * Gets the application available usage scenarios.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListUsageScenariosResponse>
   */
  listUsageScenarios(options?: msRest.RequestOptionsBase): Promise<Models.AppsListUsageScenariosResponse>;
  /**
   * @param callback The callback
   */
  listUsageScenarios(callback: msRest.ServiceCallback<string[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listUsageScenarios(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
  listUsageScenarios(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string[]>, callback?: msRest.ServiceCallback<string[]>): Promise<Models.AppsListUsageScenariosResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listUsageScenariosOperationSpec,
      callback) as Promise<Models.AppsListUsageScenariosResponse>;
  }

  /**
   * Gets the supported application cultures.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListSupportedCulturesResponse>
   */
  listSupportedCultures(options?: msRest.RequestOptionsBase): Promise<Models.AppsListSupportedCulturesResponse>;
  /**
   * @param callback The callback
   */
  listSupportedCultures(callback: msRest.ServiceCallback<Models.AvailableCulture[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listSupportedCultures(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailableCulture[]>): void;
  listSupportedCultures(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailableCulture[]>, callback?: msRest.ServiceCallback<Models.AvailableCulture[]>): Promise<Models.AppsListSupportedCulturesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listSupportedCulturesOperationSpec,
      callback) as Promise<Models.AppsListSupportedCulturesResponse>;
  }

  /**
   * Gets the query logs of the past month for the application.
   * @param appId The application ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsDownloadQueryLogsResponse>
   */
  downloadQueryLogs(appId: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsDownloadQueryLogsResponse>;
  /**
   * @param appId The application ID.
   * @param callback The callback
   */
  downloadQueryLogs(appId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param appId The application ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  downloadQueryLogs(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  downloadQueryLogs(appId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.AppsDownloadQueryLogsResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      downloadQueryLogsOperationSpec,
      callback) as Promise<Models.AppsDownloadQueryLogsResponse>;
  }

  /**
   * Gets the application info.
   * @param appId The application ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsGetResponse>
   */
  get(appId: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsGetResponse>;
  /**
   * @param appId The application ID.
   * @param callback The callback
   */
  get(appId: string, callback: msRest.ServiceCallback<Models.ApplicationInfoResponse>): void;
  /**
   * @param appId The application ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInfoResponse>): void;
  get(appId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInfoResponse>, callback?: msRest.ServiceCallback<Models.ApplicationInfoResponse>): Promise<Models.AppsGetResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AppsGetResponse>;
  }

  /**
   * Updates the name or description of the application.
   * @param appId The application ID.
   * @param applicationUpdateObject A model containing Name and Description of the application.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsUpdateResponse>
   */
  update(appId: string, applicationUpdateObject: Models.ApplicationUpdateObject, options?: msRest.RequestOptionsBase): Promise<Models.AppsUpdateResponse>;
  /**
   * @param appId The application ID.
   * @param applicationUpdateObject A model containing Name and Description of the application.
   * @param callback The callback
   */
  update(appId: string, applicationUpdateObject: Models.ApplicationUpdateObject, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param appId The application ID.
   * @param applicationUpdateObject A model containing Name and Description of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(appId: string, applicationUpdateObject: Models.ApplicationUpdateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  update(appId: string, applicationUpdateObject: Models.ApplicationUpdateObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.AppsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        applicationUpdateObject,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AppsUpdateResponse>;
  }

  /**
   * Deletes an application.
   * @param appId The application ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsDeleteMethodResponse>
   */
  deleteMethod(appId: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsDeleteMethodResponse>;
  /**
   * @param appId The application ID.
   * @param callback The callback
   */
  deleteMethod(appId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param appId The application ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(appId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.AppsDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.AppsDeleteMethodResponse>;
  }

  /**
   * Publishes a specific version of the application.
   * @param appId The application ID.
   * @param applicationPublishObject The application publish object. The region is the target region
   * that the application is published to.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsPublishResponse>
   */
  publish(appId: string, applicationPublishObject: Models.ApplicationPublishObject, options?: msRest.RequestOptionsBase): Promise<Models.AppsPublishResponse>;
  /**
   * @param appId The application ID.
   * @param applicationPublishObject The application publish object. The region is the target region
   * that the application is published to.
   * @param callback The callback
   */
  publish(appId: string, applicationPublishObject: Models.ApplicationPublishObject, callback: msRest.ServiceCallback<Models.ProductionOrStagingEndpointInfo>): void;
  /**
   * @param appId The application ID.
   * @param applicationPublishObject The application publish object. The region is the target region
   * that the application is published to.
   * @param options The optional parameters
   * @param callback The callback
   */
  publish(appId: string, applicationPublishObject: Models.ApplicationPublishObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductionOrStagingEndpointInfo>): void;
  publish(appId: string, applicationPublishObject: Models.ApplicationPublishObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductionOrStagingEndpointInfo>, callback?: msRest.ServiceCallback<Models.ProductionOrStagingEndpointInfo>): Promise<Models.AppsPublishResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        applicationPublishObject,
        options
      },
      publishOperationSpec,
      callback) as Promise<Models.AppsPublishResponse>;
  }

  /**
   * Get the application settings.
   * @param appId The application ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsGetSettingsResponse>
   */
  getSettings(appId: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsGetSettingsResponse>;
  /**
   * @param appId The application ID.
   * @param callback The callback
   */
  getSettings(appId: string, callback: msRest.ServiceCallback<Models.ApplicationSettings>): void;
  /**
   * @param appId The application ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  getSettings(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSettings>): void;
  getSettings(appId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationSettings>, callback?: msRest.ServiceCallback<Models.ApplicationSettings>): Promise<Models.AppsGetSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      getSettingsOperationSpec,
      callback) as Promise<Models.AppsGetSettingsResponse>;
  }

  /**
   * Updates the application settings.
   * @param appId The application ID.
   * @param applicationSettingUpdateObject An object containing the new application settings.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsUpdateSettingsResponse>
   */
  updateSettings(appId: string, applicationSettingUpdateObject: Models.ApplicationSettingUpdateObject, options?: msRest.RequestOptionsBase): Promise<Models.AppsUpdateSettingsResponse>;
  /**
   * @param appId The application ID.
   * @param applicationSettingUpdateObject An object containing the new application settings.
   * @param callback The callback
   */
  updateSettings(appId: string, applicationSettingUpdateObject: Models.ApplicationSettingUpdateObject, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param appId The application ID.
   * @param applicationSettingUpdateObject An object containing the new application settings.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSettings(appId: string, applicationSettingUpdateObject: Models.ApplicationSettingUpdateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  updateSettings(appId: string, applicationSettingUpdateObject: Models.ApplicationSettingUpdateObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.AppsUpdateSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        applicationSettingUpdateObject,
        options
      },
      updateSettingsOperationSpec,
      callback) as Promise<Models.AppsUpdateSettingsResponse>;
  }

  /**
   * Get the application publish settings.
   * @param appId The application ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsGetPublishSettingsResponse>
   */
  getPublishSettings(appId: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsGetPublishSettingsResponse>;
  /**
   * @param appId The application ID.
   * @param callback The callback
   */
  getPublishSettings(appId: string, callback: msRest.ServiceCallback<Models.PublishSettings>): void;
  /**
   * @param appId The application ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  getPublishSettings(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublishSettings>): void;
  getPublishSettings(appId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublishSettings>, callback?: msRest.ServiceCallback<Models.PublishSettings>): Promise<Models.AppsGetPublishSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      getPublishSettingsOperationSpec,
      callback) as Promise<Models.AppsGetPublishSettingsResponse>;
  }

  /**
   * Updates the application publish settings.
   * @param appId The application ID.
   * @param publishSettingUpdateObject An object containing the new publish application settings.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsUpdatePublishSettingsResponse>
   */
  updatePublishSettings(appId: string, publishSettingUpdateObject: Models.PublishSettingUpdateObject, options?: msRest.RequestOptionsBase): Promise<Models.AppsUpdatePublishSettingsResponse>;
  /**
   * @param appId The application ID.
   * @param publishSettingUpdateObject An object containing the new publish application settings.
   * @param callback The callback
   */
  updatePublishSettings(appId: string, publishSettingUpdateObject: Models.PublishSettingUpdateObject, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param appId The application ID.
   * @param publishSettingUpdateObject An object containing the new publish application settings.
   * @param options The optional parameters
   * @param callback The callback
   */
  updatePublishSettings(appId: string, publishSettingUpdateObject: Models.PublishSettingUpdateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  updatePublishSettings(appId: string, publishSettingUpdateObject: Models.PublishSettingUpdateObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.AppsUpdatePublishSettingsResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        publishSettingUpdateObject,
        options
      },
      updatePublishSettingsOperationSpec,
      callback) as Promise<Models.AppsUpdatePublishSettingsResponse>;
  }

  /**
   * Returns the available endpoint deployment regions and URLs.
   * @param appId The application ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListEndpointsResponse>
   */
  listEndpoints(appId: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsListEndpointsResponse>;
  /**
   * @param appId The application ID.
   * @param callback The callback
   */
  listEndpoints(appId: string, callback: msRest.ServiceCallback<{ [propertyName: string]: string }>): void;
  /**
   * @param appId The application ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  listEndpoints(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<{ [propertyName: string]: string }>): void;
  listEndpoints(appId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<{ [propertyName: string]: string }>, callback?: msRest.ServiceCallback<{ [propertyName: string]: string }>): Promise<Models.AppsListEndpointsResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      listEndpointsOperationSpec,
      callback) as Promise<Models.AppsListEndpointsResponse>;
  }

  /**
   * Gets all the available custom prebuilt domains for all cultures.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListAvailableCustomPrebuiltDomainsResponse>
   */
  listAvailableCustomPrebuiltDomains(options?: msRest.RequestOptionsBase): Promise<Models.AppsListAvailableCustomPrebuiltDomainsResponse>;
  /**
   * @param callback The callback
   */
  listAvailableCustomPrebuiltDomains(callback: msRest.ServiceCallback<Models.PrebuiltDomain[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAvailableCustomPrebuiltDomains(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrebuiltDomain[]>): void;
  listAvailableCustomPrebuiltDomains(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrebuiltDomain[]>, callback?: msRest.ServiceCallback<Models.PrebuiltDomain[]>): Promise<Models.AppsListAvailableCustomPrebuiltDomainsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAvailableCustomPrebuiltDomainsOperationSpec,
      callback) as Promise<Models.AppsListAvailableCustomPrebuiltDomainsResponse>;
  }

  /**
   * Adds a prebuilt domain along with its models as a new application.
   * @param prebuiltDomainCreateObject A prebuilt domain create object containing the name and
   * culture of the domain.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsAddCustomPrebuiltDomainResponse>
   */
  addCustomPrebuiltDomain(prebuiltDomainCreateObject: Models.PrebuiltDomainCreateObject, options?: msRest.RequestOptionsBase): Promise<Models.AppsAddCustomPrebuiltDomainResponse>;
  /**
   * @param prebuiltDomainCreateObject A prebuilt domain create object containing the name and
   * culture of the domain.
   * @param callback The callback
   */
  addCustomPrebuiltDomain(prebuiltDomainCreateObject: Models.PrebuiltDomainCreateObject, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param prebuiltDomainCreateObject A prebuilt domain create object containing the name and
   * culture of the domain.
   * @param options The optional parameters
   * @param callback The callback
   */
  addCustomPrebuiltDomain(prebuiltDomainCreateObject: Models.PrebuiltDomainCreateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  addCustomPrebuiltDomain(prebuiltDomainCreateObject: Models.PrebuiltDomainCreateObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.AppsAddCustomPrebuiltDomainResponse> {
    return this.client.sendOperationRequest(
      {
        prebuiltDomainCreateObject,
        options
      },
      addCustomPrebuiltDomainOperationSpec,
      callback) as Promise<Models.AppsAddCustomPrebuiltDomainResponse>;
  }

  /**
   * Gets all the available custom prebuilt domains for a specific culture.
   * @param culture Culture.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListAvailableCustomPrebuiltDomainsForCultureResponse>
   */
  listAvailableCustomPrebuiltDomainsForCulture(culture: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsListAvailableCustomPrebuiltDomainsForCultureResponse>;
  /**
   * @param culture Culture.
   * @param callback The callback
   */
  listAvailableCustomPrebuiltDomainsForCulture(culture: string, callback: msRest.ServiceCallback<Models.PrebuiltDomain[]>): void;
  /**
   * @param culture Culture.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAvailableCustomPrebuiltDomainsForCulture(culture: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrebuiltDomain[]>): void;
  listAvailableCustomPrebuiltDomainsForCulture(culture: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrebuiltDomain[]>, callback?: msRest.ServiceCallback<Models.PrebuiltDomain[]>): Promise<Models.AppsListAvailableCustomPrebuiltDomainsForCultureResponse> {
    return this.client.sendOperationRequest(
      {
        culture,
        options
      },
      listAvailableCustomPrebuiltDomainsForCultureOperationSpec,
      callback) as Promise<Models.AppsListAvailableCustomPrebuiltDomainsForCultureResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/",
  urlParameters: [
    Parameters.endpoint
  ],
  requestBody: {
    parameterPath: "applicationCreateObject",
    mapper: {
      ...Mappers.ApplicationCreateObject,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Uuid"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.take
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
              className: "ApplicationInfoResponse"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const importMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/import",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.appName
  ],
  requestBody: {
    parameterPath: "luisApp",
    mapper: {
      ...Mappers.LuisApp,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Uuid"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listCortanaEndpointsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/assistants",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PersonalAssistantsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listDomainsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/domains",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listUsageScenariosOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/usagescenarios",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listSupportedCulturesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/cultures",
  urlParameters: [
    Parameters.endpoint
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
              className: "AvailableCulture"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const downloadQueryLogsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/querylogs",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
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
    default: {}
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInfoResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "apps/{appId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "applicationUpdateObject",
    mapper: {
      ...Mappers.ApplicationUpdateObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "apps/{appId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const publishOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/publish",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "applicationPublishObject",
    mapper: {
      ...Mappers.ApplicationPublishObject,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.ProductionOrStagingEndpointInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/settings",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSettings
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "apps/{appId}/settings",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "applicationSettingUpdateObject",
    mapper: {
      ...Mappers.ApplicationSettingUpdateObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getPublishSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/publishsettings",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PublishSettings
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updatePublishSettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "apps/{appId}/publishsettings",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "publishSettingUpdateObject",
    mapper: {
      ...Mappers.PublishSettingUpdateObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listEndpointsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/endpoints",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listAvailableCustomPrebuiltDomainsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/customprebuiltdomains",
  urlParameters: [
    Parameters.endpoint
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
              className: "PrebuiltDomain"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const addCustomPrebuiltDomainOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/customprebuiltdomains",
  urlParameters: [
    Parameters.endpoint
  ],
  requestBody: {
    parameterPath: "prebuiltDomainCreateObject",
    mapper: {
      ...Mappers.PrebuiltDomainCreateObject,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Uuid"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listAvailableCustomPrebuiltDomainsForCultureOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/customprebuiltdomains/{culture}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.culture
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
              className: "PrebuiltDomain"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
