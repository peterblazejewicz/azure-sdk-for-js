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
 * An interface representing ContainerPort.
 * The port exposed on the container instance.
 *
 */
export interface ContainerPort {
  /**
   * @member {ContainerNetworkProtocol} [protocol] The protocol associated with
   * the port. Possible values include: 'TCP', 'UDP'
   */
  protocol?: ContainerNetworkProtocol;
  /**
   * @member {number} port The port number exposed within the container group.
   */
  port: number;
}

/**
 * @interface
 * An interface representing EnvironmentVariable.
 * The environment variable to set within the container instance.
 *
 */
export interface EnvironmentVariable {
  /**
   * @member {string} name The name of the environment variable.
   */
  name: string;
  /**
   * @member {string} [value] The value of the environment variable.
   */
  value?: string;
  /**
   * @member {string} [secureValue] The value of the secure environment
   * variable.
   */
  secureValue?: string;
}

/**
 * @interface
 * An interface representing ContainerState.
 * The container instance state.
 *
 */
export interface ContainerState {
  /**
   * @member {string} [state] The state of the container instance.
   */
  state?: string;
  /**
   * @member {Date} [startTime] The date-time when the container instance state
   * started.
   */
  startTime?: Date;
  /**
   * @member {number} [exitCode] The container instance exit codes correspond
   * to those from the `docker run` command.
   */
  exitCode?: number;
  /**
   * @member {Date} [finishTime] The date-time when the container instance
   * state finished.
   */
  finishTime?: Date;
  /**
   * @member {string} [detailStatus] The human-readable status of the container
   * instance state.
   */
  detailStatus?: string;
}

/**
 * @interface
 * An interface representing Event.
 * A container group or container instance event.
 *
 */
export interface Event {
  /**
   * @member {number} [count] The count of the event.
   */
  count?: number;
  /**
   * @member {Date} [firstTimestamp] The date-time of the earliest logged
   * event.
   */
  firstTimestamp?: Date;
  /**
   * @member {Date} [lastTimestamp] The date-time of the latest logged event.
   */
  lastTimestamp?: Date;
  /**
   * @member {string} [name] The event name.
   */
  name?: string;
  /**
   * @member {string} [message] The event message.
   */
  message?: string;
  /**
   * @member {string} [type] The event type.
   */
  type?: string;
}

/**
 * @interface
 * An interface representing ContainerPropertiesInstanceView.
 * The instance view of the container instance. Only valid in response.
 *
 */
export interface ContainerPropertiesInstanceView {
  /**
   * @member {number} [restartCount] The number of times that the container
   * instance has been restarted.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly restartCount?: number;
  /**
   * @member {ContainerState} [currentState] Current container instance state.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly currentState?: ContainerState;
  /**
   * @member {ContainerState} [previousState] Previous container instance
   * state.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly previousState?: ContainerState;
  /**
   * @member {Event[]} [events] The events of the container instance.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly events?: Event[];
}

/**
 * @interface
 * An interface representing GpuResource.
 * The GPU resource.
 *
 */
export interface GpuResource {
  /**
   * @member {number} count The count of the GPU resource.
   */
  count: number;
  /**
   * @member {GpuSku} sku The SKU of the GPU resource. Possible values include:
   * 'K80', 'P100', 'V100'
   */
  sku: GpuSku;
}

/**
 * @interface
 * An interface representing ResourceRequests.
 * The resource requests.
 *
 */
export interface ResourceRequests {
  /**
   * @member {number} memoryInGB The memory request in GB of this container
   * instance.
   */
  memoryInGB: number;
  /**
   * @member {number} cpu The CPU request of this container instance.
   */
  cpu: number;
  /**
   * @member {GpuResource} [gpu] The GPU request of this container instance.
   */
  gpu?: GpuResource;
}

/**
 * @interface
 * An interface representing ResourceLimits.
 * The resource limits.
 *
 */
export interface ResourceLimits {
  /**
   * @member {number} [memoryInGB] The memory limit in GB of this container
   * instance.
   */
  memoryInGB?: number;
  /**
   * @member {number} [cpu] The CPU limit of this container instance.
   */
  cpu?: number;
  /**
   * @member {GpuResource} [gpu] The GPU limit of this container instance.
   */
  gpu?: GpuResource;
}

/**
 * @interface
 * An interface representing ResourceRequirements.
 * The resource requirements.
 *
 */
export interface ResourceRequirements {
  /**
   * @member {ResourceRequests} requests The resource requests of this
   * container instance.
   */
  requests: ResourceRequests;
  /**
   * @member {ResourceLimits} [limits] The resource limits of this container
   * instance.
   */
  limits?: ResourceLimits;
}

/**
 * @interface
 * An interface representing VolumeMount.
 * The properties of the volume mount.
 *
 */
export interface VolumeMount {
  /**
   * @member {string} name The name of the volume mount.
   */
  name: string;
  /**
   * @member {string} mountPath The path within the container where the volume
   * should be mounted. Must not contain colon (:).
   */
  mountPath: string;
  /**
   * @member {boolean} [readOnly] The flag indicating whether the volume mount
   * is read-only.
   */
  readOnly?: boolean;
}

/**
 * @interface
 * An interface representing ContainerExec.
 * The container execution command, for liveness or readiness probe
 *
 */
export interface ContainerExec {
  /**
   * @member {string[]} [command] The commands to execute within the container.
   */
  command?: string[];
}

/**
 * @interface
 * An interface representing ContainerHttpGet.
 * The container Http Get settings, for liveness or readiness probe
 *
 */
export interface ContainerHttpGet {
  /**
   * @member {string} [path] The path to probe.
   */
  path?: string;
  /**
   * @member {number} port The port number to probe.
   */
  port: number;
  /**
   * @member {Scheme} [scheme] The scheme. Possible values include: 'http',
   * 'https'
   */
  scheme?: Scheme;
}

/**
 * @interface
 * An interface representing ContainerProbe.
 * The container probe, for liveness or readiness
 *
 */
export interface ContainerProbe {
  /**
   * @member {ContainerExec} [exec] The execution command to probe
   */
  exec?: ContainerExec;
  /**
   * @member {ContainerHttpGet} [httpGet] The Http Get settings to probe
   */
  httpGet?: ContainerHttpGet;
  /**
   * @member {number} [initialDelaySeconds] The initial delay seconds.
   */
  initialDelaySeconds?: number;
  /**
   * @member {number} [periodSeconds] The period seconds.
   */
  periodSeconds?: number;
  /**
   * @member {number} [failureThreshold] The failure threshold.
   */
  failureThreshold?: number;
  /**
   * @member {number} [successThreshold] The success threshold.
   */
  successThreshold?: number;
  /**
   * @member {number} [timeoutSeconds] The timeout seconds.
   */
  timeoutSeconds?: number;
}

/**
 * @interface
 * An interface representing Container.
 * A container instance.
 *
 */
export interface Container {
  /**
   * @member {string} name The user-provided name of the container instance.
   */
  name: string;
  /**
   * @member {string} image The name of the image used to create the container
   * instance.
   */
  image: string;
  /**
   * @member {string[]} [command] The commands to execute within the container
   * instance in exec form.
   */
  command?: string[];
  /**
   * @member {ContainerPort[]} [ports] The exposed ports on the container
   * instance.
   */
  ports?: ContainerPort[];
  /**
   * @member {EnvironmentVariable[]} [environmentVariables] The environment
   * variables to set in the container instance.
   */
  environmentVariables?: EnvironmentVariable[];
  /**
   * @member {ContainerPropertiesInstanceView} [instanceView] The instance view
   * of the container instance. Only valid in response.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly instanceView?: ContainerPropertiesInstanceView;
  /**
   * @member {ResourceRequirements} resources The resource requirements of the
   * container instance.
   */
  resources: ResourceRequirements;
  /**
   * @member {VolumeMount[]} [volumeMounts] The volume mounts available to the
   * container instance.
   */
  volumeMounts?: VolumeMount[];
  /**
   * @member {ContainerProbe} [livenessProbe] The liveness probe.
   */
  livenessProbe?: ContainerProbe;
  /**
   * @member {ContainerProbe} [readinessProbe] The readiness probe.
   */
  readinessProbe?: ContainerProbe;
}

/**
 * @interface
 * An interface representing AzureFileVolume.
 * The properties of the Azure File volume. Azure File shares are mounted as
 * volumes.
 *
 */
export interface AzureFileVolume {
  /**
   * @member {string} shareName The name of the Azure File share to be mounted
   * as a volume.
   */
  shareName: string;
  /**
   * @member {boolean} [readOnly] The flag indicating whether the Azure File
   * shared mounted as a volume is read-only.
   */
  readOnly?: boolean;
  /**
   * @member {string} storageAccountName The name of the storage account that
   * contains the Azure File share.
   */
  storageAccountName: string;
  /**
   * @member {string} [storageAccountKey] The storage account access key used
   * to access the Azure File share.
   */
  storageAccountKey?: string;
}

/**
 * @interface
 * An interface representing GitRepoVolume.
 * Represents a volume that is populated with the contents of a git repository
 *
 */
export interface GitRepoVolume {
  /**
   * @member {string} [directory] Target directory name. Must not contain or
   * start with '..'.  If '.' is supplied, the volume directory will be the git
   * repository.  Otherwise, if specified, the volume will contain the git
   * repository in the subdirectory with the given name.
   */
  directory?: string;
  /**
   * @member {string} repository Repository URL
   */
  repository: string;
  /**
   * @member {string} [revision] Commit hash for the specified revision.
   */
  revision?: string;
}

/**
 * @interface
 * An interface representing Volume.
 * The properties of the volume.
 *
 */
export interface Volume {
  /**
   * @member {string} name The name of the volume.
   */
  name: string;
  /**
   * @member {AzureFileVolume} [azureFile] The Azure File volume.
   */
  azureFile?: AzureFileVolume;
  /**
   * @member {any} [emptyDir] The empty directory volume.
   */
  emptyDir?: any;
  /**
   * @member {{ [propertyName: string]: string }} [secret] The secret volume.
   */
  secret?: { [propertyName: string]: string };
  /**
   * @member {GitRepoVolume} [gitRepo] The git repo volume.
   */
  gitRepo?: GitRepoVolume;
}

/**
 * @interface
 * An interface representing ContainerGroupIdentityUserAssignedIdentitiesValue.
 */
export interface ContainerGroupIdentityUserAssignedIdentitiesValue {
  /**
   * @member {string} [principalId] The principal id of user assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly principalId?: string;
  /**
   * @member {string} [clientId] The client id of user assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly clientId?: string;
}

/**
 * @interface
 * An interface representing ContainerGroupIdentity.
 * Identity for the container group.
 *
 */
export interface ContainerGroupIdentity {
  /**
   * @member {string} [principalId] The principal id of the container group
   * identity. This property will only be provided for a system assigned
   * identity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly principalId?: string;
  /**
   * @member {string} [tenantId] The tenant id associated with the container
   * group. This property will only be provided for a system assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tenantId?: string;
  /**
   * @member {ResourceIdentityType} [type] The type of identity used for the
   * container group. The type 'SystemAssigned, UserAssigned' includes both an
   * implicitly created identity and a set of user assigned identities. The
   * type 'None' will remove any identities from the container group. Possible
   * values include: 'SystemAssigned', 'UserAssigned', 'SystemAssigned,
   * UserAssigned', 'None'
   */
  type?: ResourceIdentityType;
  /**
   * @member {{ [propertyName: string]:
   * ContainerGroupIdentityUserAssignedIdentitiesValue }}
   * [userAssignedIdentities] The list of user identities associated with the
   * container group. The user identity dictionary key references will be ARM
   * resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
  userAssignedIdentities?: { [propertyName: string]: ContainerGroupIdentityUserAssignedIdentitiesValue };
}

/**
 * @interface
 * An interface representing ImageRegistryCredential.
 * Image registry credential.
 *
 */
export interface ImageRegistryCredential {
  /**
   * @member {string} server The Docker image registry server without a
   * protocol such as "http" and "https".
   */
  server: string;
  /**
   * @member {string} username The username for the private registry.
   */
  username: string;
  /**
   * @member {string} [password] The password for the private registry.
   */
  password?: string;
}

/**
 * @interface
 * An interface representing Port.
 * The port exposed on the container group.
 *
 */
export interface Port {
  /**
   * @member {ContainerGroupNetworkProtocol} [protocol] The protocol associated
   * with the port. Possible values include: 'TCP', 'UDP'
   */
  protocol?: ContainerGroupNetworkProtocol;
  /**
   * @member {number} port The port number.
   */
  port: number;
}

/**
 * @interface
 * An interface representing IpAddress.
 * IP address for the container group.
 *
 */
export interface IpAddress {
  /**
   * @member {Port[]} ports The list of ports exposed on the container group.
   */
  ports: Port[];
  /**
   * @member {ContainerGroupIpAddressType} type Specifies if the IP is exposed
   * to the public internet or private VNET. Possible values include: 'Public',
   * 'Private'
   */
  type: ContainerGroupIpAddressType;
  /**
   * @member {string} [ip] The IP exposed to the public internet.
   */
  ip?: string;
  /**
   * @member {string} [dnsNameLabel] The Dns name label for the IP.
   */
  dnsNameLabel?: string;
  /**
   * @member {string} [fqdn] The FQDN for the IP.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly fqdn?: string;
}

/**
 * @interface
 * An interface representing ContainerGroupPropertiesInstanceView.
 * The instance view of the container group. Only valid in response.
 *
 */
export interface ContainerGroupPropertiesInstanceView {
  /**
   * @member {Event[]} [events] The events of this container group.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly events?: Event[];
  /**
   * @member {string} [state] The state of the container group. Only valid in
   * response.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly state?: string;
}

/**
 * @interface
 * An interface representing LogAnalytics.
 * Container group log analytics information.
 *
 */
export interface LogAnalytics {
  /**
   * @member {string} workspaceId The workspace id for log analytics
   */
  workspaceId: string;
  /**
   * @member {string} workspaceKey The workspace key for log analytics
   */
  workspaceKey: string;
  /**
   * @member {LogAnalyticsLogType} [logType] The log type to be used. Possible
   * values include: 'ContainerInsights', 'ContainerInstanceLogs'
   */
  logType?: LogAnalyticsLogType;
  /**
   * @member {{ [propertyName: string]: string }} [metadata] Metadata for log
   * analytics.
   */
  metadata?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ContainerGroupDiagnostics.
 * Container group diagnostic information.
 *
 */
export interface ContainerGroupDiagnostics {
  /**
   * @member {LogAnalytics} [logAnalytics] Container group log analytics
   * information.
   */
  logAnalytics?: LogAnalytics;
}

/**
 * @interface
 * An interface representing ContainerGroupNetworkProfile.
 * Container group network profile information.
 *
 */
export interface ContainerGroupNetworkProfile {
  /**
   * @member {string} id The identifier for a network profile.
   */
  id: string;
}

/**
 * @interface
 * An interface representing DnsConfiguration.
 * DNS configuration for the container group.
 *
 */
export interface DnsConfiguration {
  /**
   * @member {string[]} nameServers The DNS servers for the container group.
   */
  nameServers: string[];
  /**
   * @member {string} [searchDomains] The DNS search domains for hostname
   * lookup in the container group.
   */
  searchDomains?: string;
  /**
   * @member {string} [options] The DNS options for the container group.
   */
  options?: string;
}

/**
 * @interface
 * An interface representing Resource.
 * The Resource model definition.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] The resource id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] The resource location.
   */
  location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] The resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ContainerGroup.
 * A container group.
 *
 * @extends Resource
 */
export interface ContainerGroup extends Resource {
  /**
   * @member {ContainerGroupIdentity} [identity] The identity of the container
   * group, if configured.
   */
  identity?: ContainerGroupIdentity;
  /**
   * @member {string} [provisioningState] The provisioning state of the
   * container group. This only appears in the response.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {Container[]} containers The containers within the container
   * group.
   */
  containers: Container[];
  /**
   * @member {ImageRegistryCredential[]} [imageRegistryCredentials] The image
   * registry credentials by which the container group is created from.
   */
  imageRegistryCredentials?: ImageRegistryCredential[];
  /**
   * @member {ContainerGroupRestartPolicy} [restartPolicy] Restart policy for
   * all containers within the container group.
   * - `Always` Always restart
   * - `OnFailure` Restart on failure
   * - `Never` Never restart
   * . Possible values include: 'Always', 'OnFailure', 'Never'
   */
  restartPolicy?: ContainerGroupRestartPolicy;
  /**
   * @member {IpAddress} [ipAddress] The IP address type of the container
   * group.
   */
  ipAddress?: IpAddress;
  /**
   * @member {OperatingSystemTypes} osType The operating system type required
   * by the containers in the container group. Possible values include:
   * 'Windows', 'Linux'
   */
  osType: OperatingSystemTypes;
  /**
   * @member {Volume[]} [volumes] The list of volumes that can be mounted by
   * containers in this container group.
   */
  volumes?: Volume[];
  /**
   * @member {ContainerGroupPropertiesInstanceView} [instanceView] The instance
   * view of the container group. Only valid in response.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly instanceView?: ContainerGroupPropertiesInstanceView;
  /**
   * @member {ContainerGroupDiagnostics} [diagnostics] The diagnostic
   * information for a container group.
   */
  diagnostics?: ContainerGroupDiagnostics;
  /**
   * @member {ContainerGroupNetworkProfile} [networkProfile] The network
   * profile information for a container group.
   */
  networkProfile?: ContainerGroupNetworkProfile;
  /**
   * @member {DnsConfiguration} [dnsConfig] The DNS config information for a
   * container group.
   */
  dnsConfig?: DnsConfiguration;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The display information of the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] The name of the provider of the operation.
   */
  provider?: string;
  /**
   * @member {string} [resource] The name of the resource type of the
   * operation.
   */
  resource?: string;
  /**
   * @member {string} [operation] The friendly name of the operation.
   */
  operation?: string;
  /**
   * @member {string} [description] The description of the operation.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * An operation for Azure Container Instance service.
 *
 */
export interface Operation {
  /**
   * @member {string} name The name of the operation.
   */
  name: string;
  /**
   * @member {OperationDisplay} display The display information of the
   * operation.
   */
  display: OperationDisplay;
  /**
   * @member {ContainerInstanceOperationsOrigin} [origin] The intended executor
   * of the operation. Possible values include: 'User', 'System'
   */
  origin?: ContainerInstanceOperationsOrigin;
}

/**
 * @interface
 * An interface representing OperationListResult.
 * The operation list response that contains all operations for Azure Container
 * Instance service.
 *
 */
export interface OperationListResult {
  /**
   * @member {Operation[]} [value] The list of operations.
   */
  value?: Operation[];
  /**
   * @member {string} [nextLink] The URI to fetch the next page of operations.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing UsageName.
 * The name object of the resource
 *
 */
export interface UsageName {
  /**
   * @member {string} [value] The name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly value?: string;
  /**
   * @member {string} [localizedValue] The localized name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly localizedValue?: string;
}

/**
 * @interface
 * An interface representing Usage.
 * A single usage result
 *
 */
export interface Usage {
  /**
   * @member {string} [unit] Unit of the usage result
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly unit?: string;
  /**
   * @member {number} [currentValue] The current usage of the resource
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly currentValue?: number;
  /**
   * @member {number} [limit] The maximum permitted usage of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly limit?: number;
  /**
   * @member {UsageName} [name] The name object of the resource
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: UsageName;
}

/**
 * @interface
 * An interface representing UsageListResult.
 * The response containing the usage data
 *
 */
export interface UsageListResult {
  /**
   * @member {Usage[]} [value] **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly value?: Usage[];
}

/**
 * @interface
 * An interface representing Logs.
 * The logs.
 *
 */
export interface Logs {
  /**
   * @member {string} [content] The content of the log.
   */
  content?: string;
}

/**
 * @interface
 * An interface representing ContainerExecRequestTerminalSize.
 * The size of the terminal.
 *
 */
export interface ContainerExecRequestTerminalSize {
  /**
   * @member {number} [rows] The row size of the terminal
   */
  rows?: number;
  /**
   * @member {number} [cols] The column size of the terminal
   */
  cols?: number;
}

/**
 * @interface
 * An interface representing ContainerExecRequest.
 * The container exec request.
 *
 */
export interface ContainerExecRequest {
  /**
   * @member {string} [command] The command to be executed.
   */
  command?: string;
  /**
   * @member {ContainerExecRequestTerminalSize} [terminalSize] The size of the
   * terminal.
   */
  terminalSize?: ContainerExecRequestTerminalSize;
}

/**
 * @interface
 * An interface representing ContainerExecResponse.
 * The information for the container exec command.
 *
 */
export interface ContainerExecResponse {
  /**
   * @member {string} [webSocketUri] The uri for the exec websocket.
   */
  webSocketUri?: string;
  /**
   * @member {string} [password] The password to start the exec command.
   */
  password?: string;
}

/**
 * @interface
 * An interface representing CachedImages.
 * The cached image and OS type.
 *
 */
export interface CachedImages {
  /**
   * @member {string} osType The OS type of the cached image.
   */
  osType: string;
  /**
   * @member {string} image The cached image name.
   */
  image: string;
}

/**
 * @interface
 * An interface representing CachedImagesListResult.
 * The response containing cached images.
 *
 */
export interface CachedImagesListResult {
  /**
   * @member {CachedImages[]} [value] The list of cached images.
   */
  value?: CachedImages[];
  /**
   * @member {string} [nextLink] The URI to fetch the next page of cached
   * images.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing CapabilitiesCapabilities.
 * The supported capabilities.
 *
 */
export interface CapabilitiesCapabilities {
  /**
   * @member {number} [maxMemoryInGB] The maximum allowed memory request in GB.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly maxMemoryInGB?: number;
  /**
   * @member {number} [maxCpu] The maximum allowed CPU request in cores.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly maxCpu?: number;
  /**
   * @member {number} [maxGpuCount] The maximum allowed GPU count.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly maxGpuCount?: number;
}

/**
 * @interface
 * An interface representing Capabilities.
 * The regional capabilities.
 *
 */
export interface Capabilities {
  /**
   * @member {string} [resourceType] The resource type that this capability
   * describes.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resourceType?: string;
  /**
   * @member {string} [osType] The OS type that this capability describes.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly osType?: string;
  /**
   * @member {string} [location] The resource location.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly location?: string;
  /**
   * @member {string} [ipAddressType] The ip address type that this capability
   * describes.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly ipAddressType?: string;
  /**
   * @member {string} [gpu] The GPU sku that this capability describes.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly gpu?: string;
  /**
   * @member {CapabilitiesCapabilities} [capabilities] The supported
   * capabilities.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly capabilities?: CapabilitiesCapabilities;
}

/**
 * @interface
 * An interface representing CapabilitiesListResult.
 * The response containing list of capabilities.
 *
 */
export interface CapabilitiesListResult {
  /**
   * @member {Capabilities[]} [value] The list of cached images.
   */
  value?: Capabilities[];
  /**
   * @member {string} [nextLink] The URI to fetch the next page of cached
   * images.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing ContainerListLogsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ContainerListLogsOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {number} [tail] The number of lines to show from the tail of the
   * container instance log. If not provided, all available logs are shown up
   * to 4mb.
   */
  tail?: number;
}

/**
 * @interface
 * An interface representing ContainerInstanceManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface ContainerInstanceManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the ContainerGroupListResult.
 * The container group list response that contains the container group
 * properties.
 *
 * @extends Array<ContainerGroup>
 */
export interface ContainerGroupListResult extends Array<ContainerGroup> {
  /**
   * @member {string} [nextLink] The URI to fetch the next page of container
   * groups.
   */
  nextLink?: string;
}

/**
 * Defines values for ContainerNetworkProtocol.
 * Possible values include: 'TCP', 'UDP'
 * @readonly
 * @enum {string}
 */
export type ContainerNetworkProtocol = 'TCP' | 'UDP';

/**
 * Defines values for GpuSku.
 * Possible values include: 'K80', 'P100', 'V100'
 * @readonly
 * @enum {string}
 */
export type GpuSku = 'K80' | 'P100' | 'V100';

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned', 'UserAssigned', 'SystemAssigned, UserAssigned',
 * 'None'
 * @readonly
 * @enum {string}
 */
export type ResourceIdentityType = 'SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None';

/**
 * Defines values for ContainerGroupRestartPolicy.
 * Possible values include: 'Always', 'OnFailure', 'Never'
 * @readonly
 * @enum {string}
 */
export type ContainerGroupRestartPolicy = 'Always' | 'OnFailure' | 'Never';

/**
 * Defines values for ContainerGroupNetworkProtocol.
 * Possible values include: 'TCP', 'UDP'
 * @readonly
 * @enum {string}
 */
export type ContainerGroupNetworkProtocol = 'TCP' | 'UDP';

/**
 * Defines values for ContainerGroupIpAddressType.
 * Possible values include: 'Public', 'Private'
 * @readonly
 * @enum {string}
 */
export type ContainerGroupIpAddressType = 'Public' | 'Private';

/**
 * Defines values for OperatingSystemTypes.
 * Possible values include: 'Windows', 'Linux'
 * @readonly
 * @enum {string}
 */
export type OperatingSystemTypes = 'Windows' | 'Linux';

/**
 * Defines values for LogAnalyticsLogType.
 * Possible values include: 'ContainerInsights', 'ContainerInstanceLogs'
 * @readonly
 * @enum {string}
 */
export type LogAnalyticsLogType = 'ContainerInsights' | 'ContainerInstanceLogs';

/**
 * Defines values for ContainerInstanceOperationsOrigin.
 * Possible values include: 'User', 'System'
 * @readonly
 * @enum {string}
 */
export type ContainerInstanceOperationsOrigin = 'User' | 'System';

/**
 * Defines values for Scheme.
 * Possible values include: 'http', 'https'
 * @readonly
 * @enum {string}
 */
export type Scheme = 'http' | 'https';

/**
 * Contains response data for the list operation.
 */
export type ContainerGroupsListResponse = ContainerGroupListResult & {
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
      parsedBody: ContainerGroupListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ContainerGroupsListByResourceGroupResponse = ContainerGroupListResult & {
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
      parsedBody: ContainerGroupListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ContainerGroupsGetResponse = ContainerGroup & {
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
      parsedBody: ContainerGroup;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ContainerGroupsCreateOrUpdateResponse = ContainerGroup & {
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
      parsedBody: ContainerGroup;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ContainerGroupsUpdateResponse = ContainerGroup & {
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
      parsedBody: ContainerGroup;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type ContainerGroupsDeleteMethodResponse = ContainerGroup & {
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
      parsedBody: ContainerGroup;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type ContainerGroupsBeginCreateOrUpdateResponse = ContainerGroup & {
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
      parsedBody: ContainerGroup;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ContainerGroupsListNextResponse = ContainerGroupListResult & {
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
      parsedBody: ContainerGroupListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ContainerGroupsListByResourceGroupNextResponse = ContainerGroupListResult & {
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
      parsedBody: ContainerGroupListResult;
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

/**
 * Contains response data for the list operation.
 */
export type ContainerGroupUsageListResponse = UsageListResult & {
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
      parsedBody: UsageListResult;
    };
};

/**
 * Contains response data for the listLogs operation.
 */
export type ContainerListLogsResponse = Logs & {
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
      parsedBody: Logs;
    };
};

/**
 * Contains response data for the executeCommand operation.
 */
export type ContainerExecuteCommandResponse = ContainerExecResponse & {
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
      parsedBody: ContainerExecResponse;
    };
};

/**
 * Contains response data for the getCachedImages operation.
 */
export type GetCachedImagesResponse = CachedImagesListResult & {
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
      parsedBody: CachedImagesListResult;
    };
};

/**
 * Contains response data for the getCapabilities operation.
 */
export type GetCapabilitiesResponse = CapabilitiesListResult & {
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
      parsedBody: CapabilitiesListResult;
    };
};
