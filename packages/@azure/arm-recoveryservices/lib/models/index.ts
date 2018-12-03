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
 * An interface representing RawCertificateData.
 * Raw certificate data.
 *
 */
export interface RawCertificateData {
  /**
   * @member {AuthType} [authType] Specifies the authentication type. Possible
   * values include: 'Invalid', 'ACS', 'AAD', 'AccessControlService',
   * 'AzureActiveDirectory'
   */
  authType?: AuthType;
  /**
   * @member {Uint8Array} [certificate] The base64 encoded certificate raw data
   * string
   */
  certificate?: Uint8Array;
}

/**
 * @interface
 * An interface representing CertificateRequest.
 * Details of the certificate to be uploaded to the vault.
 *
 */
export interface CertificateRequest {
  /**
   * @member {RawCertificateData} [properties]
   */
  properties?: RawCertificateData;
}

/**
 * Contains the possible cases for ResourceCertificateDetails.
 */
export type ResourceCertificateDetailsUnion = ResourceCertificateDetails | ResourceCertificateAndAadDetails | ResourceCertificateAndAcsDetails;

/**
 * @interface
 * An interface representing ResourceCertificateDetails.
 * Certificate details representing the Vault credentials.
 *
 */
export interface ResourceCertificateDetails {
  /**
   * @member {string} authType Polymorphic Discriminator
   */
  authType: "ResourceCertificateDetails";
  /**
   * @member {Uint8Array} [certificate] The base64 encoded certificate raw data
   * string.
   */
  certificate?: Uint8Array;
  /**
   * @member {string} [friendlyName] Certificate friendly name.
   */
  friendlyName?: string;
  /**
   * @member {string} [issuer] Certificate issuer.
   */
  issuer?: string;
  /**
   * @member {number} [resourceId] Resource ID of the vault.
   */
  resourceId?: number;
  /**
   * @member {string} [subject] Certificate Subject Name.
   */
  subject?: string;
  /**
   * @member {string} [thumbprint] Certificate thumbprint.
   */
  thumbprint?: string;
  /**
   * @member {Date} [validFrom] Certificate Validity start Date time.
   */
  validFrom?: Date;
  /**
   * @member {Date} [validTo] Certificate Validity End Date time.
   */
  validTo?: Date;
}

/**
 * @interface
 * An interface representing ResourceCertificateAndAadDetails.
 * Certificate details representing the Vault credentials for AAD.
 *
 */
export interface ResourceCertificateAndAadDetails {
  /**
   * @member {string} authType Polymorphic Discriminator
   */
  authType: "AzureActiveDirectory";
  /**
   * @member {Uint8Array} [certificate] The base64 encoded certificate raw data
   * string.
   */
  certificate?: Uint8Array;
  /**
   * @member {string} [friendlyName] Certificate friendly name.
   */
  friendlyName?: string;
  /**
   * @member {string} [issuer] Certificate issuer.
   */
  issuer?: string;
  /**
   * @member {number} [resourceId] Resource ID of the vault.
   */
  resourceId?: number;
  /**
   * @member {string} [subject] Certificate Subject Name.
   */
  subject?: string;
  /**
   * @member {string} [thumbprint] Certificate thumbprint.
   */
  thumbprint?: string;
  /**
   * @member {Date} [validFrom] Certificate Validity start Date time.
   */
  validFrom?: Date;
  /**
   * @member {Date} [validTo] Certificate Validity End Date time.
   */
  validTo?: Date;
  /**
   * @member {string} aadAuthority AAD tenant authority.
   */
  aadAuthority: string;
  /**
   * @member {string} aadTenantId AAD tenant Id.
   */
  aadTenantId: string;
  /**
   * @member {string} servicePrincipalClientId AAD service principal clientId.
   */
  servicePrincipalClientId: string;
  /**
   * @member {string} servicePrincipalObjectId AAD service principal ObjectId.
   */
  servicePrincipalObjectId: string;
  /**
   * @member {string} azureManagementEndpointAudience Azure Management Endpoint
   * Audience.
   */
  azureManagementEndpointAudience: string;
}

/**
 * @interface
 * An interface representing ResourceCertificateAndAcsDetails.
 * Certificate details representing the Vault credentials for ACS.
 *
 */
export interface ResourceCertificateAndAcsDetails {
  /**
   * @member {string} authType Polymorphic Discriminator
   */
  authType: "AccessControlService";
  /**
   * @member {Uint8Array} [certificate] The base64 encoded certificate raw data
   * string.
   */
  certificate?: Uint8Array;
  /**
   * @member {string} [friendlyName] Certificate friendly name.
   */
  friendlyName?: string;
  /**
   * @member {string} [issuer] Certificate issuer.
   */
  issuer?: string;
  /**
   * @member {number} [resourceId] Resource ID of the vault.
   */
  resourceId?: number;
  /**
   * @member {string} [subject] Certificate Subject Name.
   */
  subject?: string;
  /**
   * @member {string} [thumbprint] Certificate thumbprint.
   */
  thumbprint?: string;
  /**
   * @member {Date} [validFrom] Certificate Validity start Date time.
   */
  validFrom?: Date;
  /**
   * @member {Date} [validTo] Certificate Validity End Date time.
   */
  validTo?: Date;
  /**
   * @member {string} globalAcsNamespace ACS namespace name - tenant for our
   * service.
   */
  globalAcsNamespace: string;
  /**
   * @member {string} globalAcsHostName Acs mgmt host name to connect to.
   */
  globalAcsHostName: string;
  /**
   * @member {string} globalAcsRPRealm Global ACS namespace RP realm.
   */
  globalAcsRPRealm: string;
}

/**
 * @interface
 * An interface representing VaultCertificateResponse.
 * Certificate corresponding to a vault that can be used by clients to register
 * themselves with the vault.
 *
 * @extends BaseResource
 */
export interface VaultCertificateResponse extends BaseResource {
  /**
   * @member {string} [name] Resource name associated with the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type represents the complete path of the
   * form Namespace/ResourceType/ResourceType/...
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [id] Resource Id represents the complete path to the
   * resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {ResourceCertificateDetailsUnion} [properties]
   */
  properties?: ResourceCertificateDetailsUnion;
}

/**
 * @interface
 * An interface representing JobsSummary.
 * Summary of the replication job data for this vault.
 *
 */
export interface JobsSummary {
  /**
   * @member {number} [failedJobs] Count of failed jobs.
   */
  failedJobs?: number;
  /**
   * @member {number} [suspendedJobs] Count of suspended jobs.
   */
  suspendedJobs?: number;
  /**
   * @member {number} [inProgressJobs] Count of in-progress jobs.
   */
  inProgressJobs?: number;
}

/**
 * @interface
 * An interface representing MonitoringSummary.
 * Summary of the replication monitoring data for this vault.
 *
 */
export interface MonitoringSummary {
  /**
   * @member {number} [unHealthyVmCount] Count of unhealthy VMs.
   */
  unHealthyVmCount?: number;
  /**
   * @member {number} [unHealthyProviderCount] Count of unhealthy replication
   * providers.
   */
  unHealthyProviderCount?: number;
  /**
   * @member {number} [eventsCount] Count of all critical warnings.
   */
  eventsCount?: number;
  /**
   * @member {number} [deprecatedProviderCount] Count of all deprecated
   * recovery service providers.
   */
  deprecatedProviderCount?: number;
  /**
   * @member {number} [supportedProviderCount] Count of all the supported
   * recovery service providers.
   */
  supportedProviderCount?: number;
  /**
   * @member {number} [unsupportedProviderCount] Count of all the unsupported
   * recovery service providers.
   */
  unsupportedProviderCount?: number;
}

/**
 * @interface
 * An interface representing ReplicationUsage.
 * Replication usages of a vault.
 *
 */
export interface ReplicationUsage {
  /**
   * @member {MonitoringSummary} [monitoringSummary] Summary of the replication
   * monitoring data for this vault.
   */
  monitoringSummary?: MonitoringSummary;
  /**
   * @member {JobsSummary} [jobsSummary] Summary of the replication jobs data
   * for this vault.
   */
  jobsSummary?: JobsSummary;
  /**
   * @member {number} [protectedItemCount] Number of replication protected
   * items for this vault.
   */
  protectedItemCount?: number;
  /**
   * @member {number} [recoveryPlanCount] Number of replication recovery plans
   * for this vault.
   */
  recoveryPlanCount?: number;
  /**
   * @member {number} [registeredServersCount] Number of servers registered to
   * this vault.
   */
  registeredServersCount?: number;
  /**
   * @member {number} [recoveryServicesProviderAuthType] The authentication
   * type of recovery service providers in the vault.
   */
  recoveryServicesProviderAuthType?: number;
}

/**
 * @interface
 * An interface representing ClientDiscoveryDisplay.
 * Localized display information of an operation.
 *
 */
export interface ClientDiscoveryDisplay {
  /**
   * @member {string} [provider] Name of the provider for display purposes
   */
  provider?: string;
  /**
   * @member {string} [resource] ResourceType for which this Operation can be
   * performed.
   */
  resource?: string;
  /**
   * @member {string} [operation] Operations Name itself.
   */
  operation?: string;
  /**
   * @member {string} [description] Description of the operation having details
   * of what operation is about.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing ClientDiscoveryForLogSpecification.
 * Class to represent shoebox log specification in json client discovery.
 *
 */
export interface ClientDiscoveryForLogSpecification {
  /**
   * @member {string} [name] Name of the log.
   */
  name?: string;
  /**
   * @member {string} [displayName] Localized display name
   */
  displayName?: string;
  /**
   * @member {string} [blobDuration] Blobs created in customer storage account
   * per hour
   */
  blobDuration?: string;
}

/**
 * @interface
 * An interface representing ClientDiscoveryForServiceSpecification.
 * Class to represent shoebox service specification in json client discovery.
 *
 */
export interface ClientDiscoveryForServiceSpecification {
  /**
   * @member {ClientDiscoveryForLogSpecification[]} [logSpecifications] List of
   * log specifications of this operation.
   */
  logSpecifications?: ClientDiscoveryForLogSpecification[];
}

/**
 * @interface
 * An interface representing ClientDiscoveryForProperties.
 * Class to represent shoebox properties in json client discovery.
 *
 */
export interface ClientDiscoveryForProperties {
  /**
   * @member {ClientDiscoveryForServiceSpecification} [serviceSpecification]
   * Operation properties.
   */
  serviceSpecification?: ClientDiscoveryForServiceSpecification;
}

/**
 * @interface
 * An interface representing ClientDiscoveryValueForSingleApi.
 * Available operation details.
 *
 */
export interface ClientDiscoveryValueForSingleApi {
  /**
   * @member {string} [name] Name of the Operation.
   */
  name?: string;
  /**
   * @member {ClientDiscoveryDisplay} [display] Contains the localized display
   * information for this particular operation
   */
  display?: ClientDiscoveryDisplay;
  /**
   * @member {string} [origin] The intended executor of the operation;governs
   * the display of the operation in the RBAC UX and the audit logs UX
   */
  origin?: string;
  /**
   * @member {ClientDiscoveryForProperties} [properties] ShoeBox properties for
   * the given operation.
   */
  properties?: ClientDiscoveryForProperties;
}

/**
 * @interface
 * An interface representing Resource.
 * ARM Resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id represents the complete path to the
   * resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name associated with the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type represents the complete path of the
   * form Namespace/ResourceType/ResourceType/...
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [eTag] Optional ETag.
   */
  eTag?: string;
}

/**
 * @interface
 * An interface representing Sku.
 * Identifies the unique system identifier for each Azure resource.
 *
 */
export interface Sku {
  /**
   * @member {SkuName} name The Sku name. Possible values include: 'Standard',
   * 'RS0'
   */
  name: SkuName;
}

/**
 * @interface
 * An interface representing TrackedResource.
 * Tracked resource with location.
 *
 * @extends Resource
 */
export interface TrackedResource extends Resource {
  /**
   * @member {string} location Resource location.
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing PatchTrackedResource.
 * Tracked resource with location.
 *
 * @extends Resource
 */
export interface PatchTrackedResource extends Resource {
  /**
   * @member {string} [location] Resource location.
   */
  location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing UpgradeDetails.
 * Details for upgrading vault.
 *
 */
export interface UpgradeDetails {
  /**
   * @member {string} [operationId] ID of the vault upgrade operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operationId?: string;
  /**
   * @member {Date} [startTimeUtc] UTC time at which the upgrade operation has
   * started.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly startTimeUtc?: Date;
  /**
   * @member {Date} [lastUpdatedTimeUtc] UTC time at which the upgrade
   * operation status was last updated.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly lastUpdatedTimeUtc?: Date;
  /**
   * @member {Date} [endTimeUtc] UTC time at which the upgrade operation has
   * ended.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly endTimeUtc?: Date;
  /**
   * @member {VaultUpgradeState} [status] Status of the vault upgrade
   * operation. Possible values include: 'Unknown', 'InProgress', 'Upgraded',
   * 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly status?: VaultUpgradeState;
  /**
   * @member {string} [message] Message to the user containing information
   * about the upgrade operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly message?: string;
  /**
   * @member {TriggerType} [triggerType] The way the vault upgrade was
   * triggered. Possible values include: 'UserTriggered', 'ForcedUpgrade'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly triggerType?: TriggerType;
  /**
   * @member {string} [upgradedResourceId] Resource ID of the upgraded vault.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly upgradedResourceId?: string;
  /**
   * @member {string} [previousResourceId] Resource ID of the vault before the
   * upgrade.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly previousResourceId?: string;
}

/**
 * @interface
 * An interface representing VaultProperties.
 * Properties of the vault.
 *
 */
export interface VaultProperties {
  /**
   * @member {string} [provisioningState] Provisioning State.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {UpgradeDetails} [upgradeDetails]
   */
  upgradeDetails?: UpgradeDetails;
}

/**
 * @interface
 * An interface representing Vault.
 * Resource information, as returned by the resource provider.
 *
 * @extends TrackedResource
 */
export interface Vault extends TrackedResource {
  /**
   * @member {VaultProperties} [properties]
   */
  properties?: VaultProperties;
  /**
   * @member {Sku} [sku]
   */
  sku?: Sku;
}

/**
 * @interface
 * An interface representing PatchVault.
 * Patch Resource information, as returned by the resource provider.
 *
 * @extends PatchTrackedResource
 */
export interface PatchVault extends PatchTrackedResource {
  /**
   * @member {VaultProperties} [properties]
   */
  properties?: VaultProperties;
  /**
   * @member {Sku} [sku]
   */
  sku?: Sku;
}

/**
 * @interface
 * An interface representing VaultExtendedInfoResource.
 * Vault extended information.
 *
 * @extends Resource
 */
export interface VaultExtendedInfoResource extends Resource {
  /**
   * @member {string} [integrityKey] Integrity key.
   */
  integrityKey?: string;
  /**
   * @member {string} [encryptionKey] Encryption key.
   */
  encryptionKey?: string;
  /**
   * @member {string} [encryptionKeyThumbprint] Encryption key thumbprint.
   */
  encryptionKeyThumbprint?: string;
  /**
   * @member {string} [algorithm] Algorithm for Vault ExtendedInfo
   */
  algorithm?: string;
}

/**
 * @interface
 * An interface representing NameInfo.
 * The name of usage.
 *
 */
export interface NameInfo {
  /**
   * @member {string} [value] Value of usage.
   */
  value?: string;
  /**
   * @member {string} [localizedValue] Localized value of usage.
   */
  localizedValue?: string;
}

/**
 * @interface
 * An interface representing VaultUsage.
 * Usages of a vault.
 *
 */
export interface VaultUsage {
  /**
   * @member {UsagesUnit} [unit] Unit of the usage. Possible values include:
   * 'Count', 'Bytes', 'Seconds', 'Percent', 'CountPerSecond', 'BytesPerSecond'
   */
  unit?: UsagesUnit;
  /**
   * @member {string} [quotaPeriod] Quota period of usage.
   */
  quotaPeriod?: string;
  /**
   * @member {Date} [nextResetTime] Next reset time of usage.
   */
  nextResetTime?: Date;
  /**
   * @member {number} [currentValue] Current value of usage.
   */
  currentValue?: number;
  /**
   * @member {number} [limit] Limit of usage.
   */
  limit?: number;
  /**
   * @member {NameInfo} [name] Name of usage.
   */
  name?: NameInfo;
}

/**
 * @interface
 * An interface representing RecoveryServicesClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface RecoveryServicesClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the ReplicationUsageList.
 * Replication usages for vault.
 *
 * @extends Array<ReplicationUsage>
 */
export interface ReplicationUsageList extends Array<ReplicationUsage> {
}

/**
 * @interface
 * An interface representing the VaultList.
 * The response model for a list of Vaults.
 *
 * @extends Array<Vault>
 */
export interface VaultList extends Array<Vault> {
  /**
   * @member {string} [nextLink] **NOTE: This property will not be serialized.
   * It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the ClientDiscoveryResponse.
 * Operations List response which contains list of available APIs.
 *
 * @extends Array<ClientDiscoveryValueForSingleApi>
 */
export interface ClientDiscoveryResponse extends Array<ClientDiscoveryValueForSingleApi> {
  /**
   * @member {string} [nextLink] Link to the next chunk of the response
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the VaultUsageList.
 * Usage for vault.
 *
 * @extends Array<VaultUsage>
 */
export interface VaultUsageList extends Array<VaultUsage> {
}

/**
 * Defines values for AuthType.
 * Possible values include: 'Invalid', 'ACS', 'AAD', 'AccessControlService', 'AzureActiveDirectory'
 * @readonly
 * @enum {string}
 */
export type AuthType = 'Invalid' | 'ACS' | 'AAD' | 'AccessControlService' | 'AzureActiveDirectory';

/**
 * Defines values for SkuName.
 * Possible values include: 'Standard', 'RS0'
 * @readonly
 * @enum {string}
 */
export type SkuName = 'Standard' | 'RS0';

/**
 * Defines values for VaultUpgradeState.
 * Possible values include: 'Unknown', 'InProgress', 'Upgraded', 'Failed'
 * @readonly
 * @enum {string}
 */
export type VaultUpgradeState = 'Unknown' | 'InProgress' | 'Upgraded' | 'Failed';

/**
 * Defines values for TriggerType.
 * Possible values include: 'UserTriggered', 'ForcedUpgrade'
 * @readonly
 * @enum {string}
 */
export type TriggerType = 'UserTriggered' | 'ForcedUpgrade';

/**
 * Defines values for UsagesUnit.
 * Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountPerSecond',
 * 'BytesPerSecond'
 * @readonly
 * @enum {string}
 */
export type UsagesUnit = 'Count' | 'Bytes' | 'Seconds' | 'Percent' | 'CountPerSecond' | 'BytesPerSecond';

/**
 * Contains response data for the create operation.
 */
export type VaultCertificatesCreateResponse = VaultCertificateResponse & {
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
      parsedBody: VaultCertificateResponse;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ReplicationUsagesListResponse = ReplicationUsageList & {
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
      parsedBody: ReplicationUsageList;
    };
};

/**
 * Contains response data for the listBySubscriptionId operation.
 */
export type VaultsListBySubscriptionIdResponse = VaultList & {
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
      parsedBody: VaultList;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type VaultsListByResourceGroupResponse = VaultList & {
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
      parsedBody: VaultList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VaultsGetResponse = Vault & {
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
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VaultsCreateOrUpdateResponse = Vault & {
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
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the update operation.
 */
export type VaultsUpdateResponse = Vault & {
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
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the listBySubscriptionIdNext operation.
 */
export type VaultsListBySubscriptionIdNextResponse = VaultList & {
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
      parsedBody: VaultList;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type VaultsListByResourceGroupNextResponse = VaultList & {
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
      parsedBody: VaultList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = ClientDiscoveryResponse & {
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
      parsedBody: ClientDiscoveryResponse;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = ClientDiscoveryResponse & {
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
      parsedBody: ClientDiscoveryResponse;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VaultExtendedInfoGetResponse = VaultExtendedInfoResource & {
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
      parsedBody: VaultExtendedInfoResource;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VaultExtendedInfoCreateOrUpdateResponse = VaultExtendedInfoResource & {
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
      parsedBody: VaultExtendedInfoResource;
    };
};

/**
 * Contains response data for the update operation.
 */
export type VaultExtendedInfoUpdateResponse = VaultExtendedInfoResource & {
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
      parsedBody: VaultExtendedInfoResource;
    };
};

/**
 * Contains response data for the listByVaults operation.
 */
export type UsagesListByVaultsResponse = VaultUsageList & {
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
      parsedBody: VaultUsageList;
    };
};
