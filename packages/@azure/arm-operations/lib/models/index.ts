/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing OperationDisplay.
 * Display metadata associated with the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft
   * OperationsManagement.
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed
   * etc.
   */
  resource?: string;
  /**
   * @member {string} [operation] Type of operation: get, read, delete, etc.
   */
  operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Supported operation of OperationsManagement resource provider.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] Display metadata associated with the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing SolutionProperties.
 * Solution properties supported by the OperationsManagement resource provider.
 *
 * @extends BaseResource
 */
export interface SolutionProperties extends BaseResource {
  /**
   * @member {string} workspaceResourceId The azure resourceId for the
   * workspace where the solution will be deployed/enabled.
   */
  workspaceResourceId: string;
  /**
   * @member {string} [provisioningState] The provisioning state for the
   * solution.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {string[]} [containedResources] The azure resources that will be
   * contained within the solutions. They will be locked and gets deleted
   * automatically when the solution is deleted.
   */
  containedResources?: string[];
  /**
   * @member {string[]} [referencedResources] The resources that will be
   * referenced from this solution. Deleting any of those solution out of band
   * will break the solution.
   */
  referencedResources?: string[];
}

/**
 * @interface
 * An interface representing ManagementAssociationProperties.
 * ManagementAssociation properties supported by the OperationsManagement
 * resource provider.
 *
 * @extends BaseResource
 */
export interface ManagementAssociationProperties extends BaseResource {
  /**
   * @member {string} applicationId The applicationId of the appliance for this
   * association.
   */
  applicationId: string;
}

/**
 * @interface
 * An interface representing ArmTemplateParameter.
 * Parameter to pass to ARM template
 *
 */
export interface ArmTemplateParameter {
  /**
   * @member {string} [name] name of the parameter.
   */
  name?: string;
  /**
   * @member {string} [value] value for the parameter. In Jtoken
   */
  value?: string;
}

/**
 * @interface
 * An interface representing ManagementConfigurationProperties.
 * ManagementConfiguration properties supported by the OperationsManagement
 * resource provider.
 *
 * @extends BaseResource
 */
export interface ManagementConfigurationProperties extends BaseResource {
  /**
   * @member {string} [applicationId] The applicationId of the appliance for
   * this Management.
   */
  applicationId?: string;
  /**
   * @member {string} parentResourceType The type of the parent resource.
   */
  parentResourceType: string;
  /**
   * @member {ArmTemplateParameter[]} parameters Parameters to run the ARM
   * template
   */
  parameters: ArmTemplateParameter[];
  /**
   * @member {string} [provisioningState] The provisioning state for the
   * ManagementConfiguration.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {any} template The Json object containing the ARM template to
   * deploy
   */
  template: any;
}

/**
 * @interface
 * An interface representing SolutionPlan.
 * Plan for solution object supported by the OperationsManagement resource
 * provider.
 *
 */
export interface SolutionPlan {
  /**
   * @member {string} [name] name of the solution to be created. For Microsoft
   * published solution it should be in the format of
   * solutionType(workspaceName). SolutionType part is case sensitive. For
   * third party solution, it can be anything.
   */
  name?: string;
  /**
   * @member {string} [publisher] Publisher name. For gallery solution, it is
   * Microsoft.
   */
  publisher?: string;
  /**
   * @member {string} [promotionCode] promotionCode, Not really used now, can
   * you left as empty
   */
  promotionCode?: string;
  /**
   * @member {string} [product] name of the solution to enabled/add. For
   * Microsoft published gallery solution it should be in the format of
   * OMSGallery/<solutionType>. This is case sensitive
   */
  product?: string;
}

/**
 * @interface
 * An interface representing Solution.
 * The container for solution.
 *
 * @extends BaseResource
 */
export interface Solution extends BaseResource {
  /**
   * @member {string} [id] Resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {SolutionPlan} [plan] Plan for solution object supported by the
   * OperationsManagement resource provider.
   */
  plan?: SolutionPlan;
  /**
   * @member {SolutionProperties} [properties] Properties for solution object
   * supported by the OperationsManagement resource provider.
   */
  properties?: SolutionProperties;
}

/**
 * @interface
 * An interface representing SolutionPropertiesList.
 * the list of solution response
 *
 */
export interface SolutionPropertiesList {
  /**
   * @member {Solution[]} [value] List of solution properties within the
   * subscription.
   */
  value?: Solution[];
}

/**
 * @interface
 * An interface representing ManagementAssociation.
 * The container for solution.
 *
 * @extends BaseResource
 */
export interface ManagementAssociation extends BaseResource {
  /**
   * @member {string} [id] Resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {ManagementAssociationProperties} [properties] Properties for
   * ManagementAssociation object supported by the OperationsManagement
   * resource provider.
   */
  properties?: ManagementAssociationProperties;
}

/**
 * @interface
 * An interface representing ManagementAssociationPropertiesList.
 * the list of ManagementAssociation response
 *
 */
export interface ManagementAssociationPropertiesList {
  /**
   * @member {ManagementAssociation[]} [value] List of Management Association
   * properties within the subscription.
   */
  value?: ManagementAssociation[];
}

/**
 * @interface
 * An interface representing ManagementConfiguration.
 * The container for solution.
 *
 * @extends BaseResource
 */
export interface ManagementConfiguration extends BaseResource {
  /**
   * @member {string} [id] Resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {ManagementConfigurationProperties} [properties] Properties for
   * ManagementConfiguration object supported by the OperationsManagement
   * resource provider.
   */
  properties?: ManagementConfigurationProperties;
}

/**
 * @interface
 * An interface representing ManagementConfigurationPropertiesList.
 * the list of ManagementConfiguration response
 *
 */
export interface ManagementConfigurationPropertiesList {
  /**
   * @member {ManagementConfiguration[]} [value] List of Management
   * Configuration properties within the subscription.
   */
  value?: ManagementConfiguration[];
}

/**
 * @interface
 * An interface representing CodeMessageErrorError.
 * The error details for a failed request.
 *
 */
export interface CodeMessageErrorError {
  /**
   * @member {string} [code] The error type.
   */
  code?: string;
  /**
   * @member {string} [message] The error message.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing CodeMessageError.
 * The error body contract.
 *
 */
export interface CodeMessageError {
  /**
   * @member {CodeMessageErrorError} [error] The error details for a failed
   * request.
   */
  error?: CodeMessageErrorError;
}

/**
 * @interface
 * An interface representing OperationsManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface OperationsManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list solution operations.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
}

/**
 * Contains response data for the createOrUpdate operation.
 */
export type SolutionsCreateOrUpdateResponse = Solution & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Solution;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SolutionsGetResponse = Solution & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Solution;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type SolutionsListByResourceGroupResponse = SolutionPropertiesList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SolutionPropertiesList;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type SolutionsListBySubscriptionResponse = SolutionPropertiesList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SolutionPropertiesList;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type SolutionsBeginCreateOrUpdateResponse = Solution & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Solution;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type ManagementAssociationsListBySubscriptionResponse = ManagementAssociationPropertiesList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementAssociationPropertiesList;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ManagementAssociationsCreateOrUpdateResponse = ManagementAssociation & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementAssociation;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ManagementAssociationsGetResponse = ManagementAssociation & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementAssociation;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type ManagementConfigurationsListBySubscriptionResponse = ManagementConfigurationPropertiesList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementConfigurationPropertiesList;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ManagementConfigurationsCreateOrUpdateResponse = ManagementConfiguration & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementConfiguration;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ManagementConfigurationsGetResponse = ManagementConfiguration & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementConfiguration;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};
