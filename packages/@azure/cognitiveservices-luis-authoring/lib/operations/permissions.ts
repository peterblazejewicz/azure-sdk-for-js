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
import * as Mappers from "../models/permissionsMappers";
import * as Parameters from "../models/parameters";
import { LUISAuthoringClientContext } from "../lUISAuthoringClientContext";

/** Class representing a Permissions. */
export class Permissions {
  private readonly client: LUISAuthoringClientContext;

  /**
   * Create a Permissions.
   * @param {LUISAuthoringClientContext} client Reference to the service client.
   */
  constructor(client: LUISAuthoringClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of user emails that have permissions to access your application.
   * @param appId The application ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.PermissionsListResponse>
   */
  list(appId: string, options?: msRest.RequestOptionsBase): Promise<Models.PermissionsListResponse>;
  /**
   * @param appId The application ID.
   * @param callback The callback
   */
  list(appId: string, callback: msRest.ServiceCallback<Models.UserAccessList>): void;
  /**
   * @param appId The application ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserAccessList>): void;
  list(appId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UserAccessList>, callback?: msRest.ServiceCallback<Models.UserAccessList>): Promise<Models.PermissionsListResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PermissionsListResponse>;
  }

  /**
   * Adds a user to the allowed list of users to access this LUIS application. Users are added using
   * their email address.
   * @param appId The application ID.
   * @param userToAdd A model containing the user's email address.
   * @param [options] The optional parameters
   * @returns Promise<Models.PermissionsAddResponse>
   */
  add(appId: string, userToAdd: Models.UserCollaborator, options?: msRest.RequestOptionsBase): Promise<Models.PermissionsAddResponse>;
  /**
   * @param appId The application ID.
   * @param userToAdd A model containing the user's email address.
   * @param callback The callback
   */
  add(appId: string, userToAdd: Models.UserCollaborator, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param appId The application ID.
   * @param userToAdd A model containing the user's email address.
   * @param options The optional parameters
   * @param callback The callback
   */
  add(appId: string, userToAdd: Models.UserCollaborator, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  add(appId: string, userToAdd: Models.UserCollaborator, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.PermissionsAddResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        userToAdd,
        options
      },
      addOperationSpec,
      callback) as Promise<Models.PermissionsAddResponse>;
  }

  /**
   * Removes a user from the allowed list of users to access this LUIS application. Users are removed
   * using their email address.
   * @param appId The application ID.
   * @param userToDelete A model containing the user's email address.
   * @param [options] The optional parameters
   * @returns Promise<Models.PermissionsDeleteMethodResponse>
   */
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator, options?: msRest.RequestOptionsBase): Promise<Models.PermissionsDeleteMethodResponse>;
  /**
   * @param appId The application ID.
   * @param userToDelete A model containing the user's email address.
   * @param callback The callback
   */
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param appId The application ID.
   * @param userToDelete A model containing the user's email address.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(appId: string, userToDelete: Models.UserCollaborator, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.PermissionsDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        userToDelete,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.PermissionsDeleteMethodResponse>;
  }

  /**
   * Replaces the current users access list with the one sent in the body. If an empty list is sent,
   * all access to other users will be removed.
   * @param appId The application ID.
   * @param collaborators A model containing a list of user's email addresses.
   * @param [options] The optional parameters
   * @returns Promise<Models.PermissionsUpdateResponse>
   */
  update(appId: string, collaborators: Models.CollaboratorsArray, options?: msRest.RequestOptionsBase): Promise<Models.PermissionsUpdateResponse>;
  /**
   * @param appId The application ID.
   * @param collaborators A model containing a list of user's email addresses.
   * @param callback The callback
   */
  update(appId: string, collaborators: Models.CollaboratorsArray, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param appId The application ID.
   * @param collaborators A model containing a list of user's email addresses.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(appId: string, collaborators: Models.CollaboratorsArray, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  update(appId: string, collaborators: Models.CollaboratorsArray, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.PermissionsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        collaborators,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PermissionsUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/permissions",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UserAccessList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/permissions",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "userToAdd",
    mapper: {
      ...Mappers.UserCollaborator,
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
  path: "apps/{appId}/permissions",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "userToDelete",
    mapper: {
      ...Mappers.UserCollaborator,
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

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "apps/{appId}/permissions",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "collaborators",
    mapper: {
      ...Mappers.CollaboratorsArray,
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
