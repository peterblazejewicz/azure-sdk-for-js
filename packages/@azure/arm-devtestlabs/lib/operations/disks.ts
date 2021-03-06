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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/disksMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a Disks. */
export class Disks {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a Disks.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List disks in a given user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksListResponse>
   */
  list(resourceGroupName: string, labName: string, userName: string, options?: Models.DisksListOptionalParams): Promise<Models.DisksListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, userName: string, callback: msRest.ServiceCallback<Models.DiskList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, userName: string, options: Models.DisksListOptionalParams, callback: msRest.ServiceCallback<Models.DiskList>): void;
  list(resourceGroupName: string, labName: string, userName: string, options?: Models.DisksListOptionalParams | msRest.ServiceCallback<Models.DiskList>, callback?: msRest.ServiceCallback<Models.DiskList>): Promise<Models.DisksListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DisksListResponse>;
  }

  /**
   * Get disk.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksGetResponse>
   */
  get(resourceGroupName: string, labName: string, userName: string, name: string, options?: Models.DisksGetOptionalParams): Promise<Models.DisksGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, userName: string, name: string, callback: msRest.ServiceCallback<Models.Disk>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, userName: string, name: string, options: Models.DisksGetOptionalParams, callback: msRest.ServiceCallback<Models.Disk>): void;
  get(resourceGroupName: string, labName: string, userName: string, name: string, options?: Models.DisksGetOptionalParams | msRest.ServiceCallback<Models.Disk>, callback?: msRest.ServiceCallback<Models.Disk>): Promise<Models.DisksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DisksGetResponse>;
  }

  /**
   * Create or replace an existing disk. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param disk A Disk.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labName: string, userName: string, name: string, disk: Models.Disk, options?: msRest.RequestOptionsBase): Promise<Models.DisksCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,labName,userName,name,disk,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DisksCreateOrUpdateResponse>;
  }

  /**
   * Delete disk. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,labName,userName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Modify properties of disks.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param disk A Disk.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksUpdateResponse>
   */
  update(resourceGroupName: string, labName: string, userName: string, name: string, disk: Models.DiskFragment, options?: msRest.RequestOptionsBase): Promise<Models.DisksUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param disk A Disk.
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, userName: string, name: string, disk: Models.DiskFragment, callback: msRest.ServiceCallback<Models.Disk>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param disk A Disk.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, userName: string, name: string, disk: Models.DiskFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Disk>): void;
  update(resourceGroupName: string, labName: string, userName: string, name: string, disk: Models.DiskFragment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Disk>, callback?: msRest.ServiceCallback<Models.Disk>): Promise<Models.DisksUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        disk,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.DisksUpdateResponse>;
  }

  /**
   * Attach and create the lease of the disk to the virtual machine. This operation can take a while
   * to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param attachDiskProperties Properties of the disk to attach.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  attach(resourceGroupName: string, labName: string, userName: string, name: string, attachDiskProperties: Models.AttachDiskProperties, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginAttach(resourceGroupName,labName,userName,name,attachDiskProperties,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Detach and break the lease of the disk attached to the virtual machine. This operation can take
   * a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param detachDiskProperties Properties of the disk to detach.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  detach(resourceGroupName: string, labName: string, userName: string, name: string, detachDiskProperties: Models.DetachDiskProperties, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDetach(resourceGroupName,labName,userName,name,detachDiskProperties,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create or replace an existing disk. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param disk A Disk.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, labName: string, userName: string, name: string, disk: Models.Disk, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        disk,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete disk. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, labName: string, userName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Attach and create the lease of the disk to the virtual machine. This operation can take a while
   * to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param attachDiskProperties Properties of the disk to attach.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginAttach(resourceGroupName: string, labName: string, userName: string, name: string, attachDiskProperties: Models.AttachDiskProperties, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        attachDiskProperties,
        options
      },
      beginAttachOperationSpec,
      options);
  }

  /**
   * Detach and break the lease of the disk attached to the virtual machine. This operation can take
   * a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the disk.
   * @param detachDiskProperties Properties of the disk to detach.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDetach(resourceGroupName: string, labName: string, userName: string, name: string, detachDiskProperties: Models.DetachDiskProperties, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        name,
        detachDiskProperties,
        options
      },
      beginDetachOperationSpec,
      options);
  }

  /**
   * List disks in a given user profile.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisksListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DisksListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiskList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskList>, callback?: msRest.ServiceCallback<Models.DiskList>): Promise<Models.DisksListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DisksListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
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
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
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
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "disk",
    mapper: {
      ...Mappers.DiskFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "disk",
    mapper: {
      ...Mappers.Disk,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    201: {
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
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
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginAttachOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}/attach",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "attachDiskProperties",
    mapper: {
      ...Mappers.AttachDiskProperties,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDetachOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}/detach",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "detachDiskProperties",
    mapper: {
      ...Mappers.DetachDiskProperties,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
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
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
