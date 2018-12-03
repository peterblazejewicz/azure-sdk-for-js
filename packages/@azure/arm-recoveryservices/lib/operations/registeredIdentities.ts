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
import * as Mappers from "../models/registeredIdentitiesMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesClientContext } from "../recoveryServicesClientContext";

/** Class representing a RegisteredIdentities. */
export class RegisteredIdentities {
  private readonly client: RecoveryServicesClientContext;

  /**
   * Create a RegisteredIdentities.
   * @param {RecoveryServicesClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesClientContext) {
    this.client = client;
  }

  /**
   * Unregisters the given container from your Recovery Services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param vaultName The name of the recovery services vault.
   * @param identityName Name of the protection container to unregister.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, vaultName: string, identityName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param vaultName The name of the recovery services vault.
   * @param identityName Name of the protection container to unregister.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, vaultName: string, identityName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param vaultName The name of the recovery services vault.
   * @param identityName Name of the protection container to unregister.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, vaultName: string, identityName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, vaultName: string, identityName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        identityName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/registeredIdentities/{identityName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.identityName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
