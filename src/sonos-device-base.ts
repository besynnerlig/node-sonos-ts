// Automatically generated by service-generator.js, don't change!
import { AVTransportService, AlarmClockService, AudioInService, ConnectionManagerService, ContentDirectoryService, DevicePropertiesService, GroupManagementService, GroupRenderingControlService, MusicServicesService, QPlayService, QueueService, RenderingControlService, SystemPropertiesService, VirtualLineInService, ZoneGroupTopologyService } from './services'
import { Guid } from 'guid-typescript'
import { Debugger } from 'debug'
import debug = require('debug')

/**
 * SonosDeviceBase is auto-generated to link to all available services of your Sonos Device
 *
 * @export
 * @class SonosDeviceBase
 */
export class SonosDeviceBase {
  protected readonly host: string;
  protected readonly port: number;
  private _debugger?: Debugger;
  protected get debug(): Debugger { if (this._debugger === undefined) this._debugger = debug('sonos:device'); return this._debugger; }
  public readonly uuid: string;
  constructor(host: string, port = 1400, uuid: string = Guid.create().toString()) {
    this.host = host;
    this.port = port;
    this.uuid = uuid;
  }

  private avtransportservice: AVTransportService | undefined;
  /**
    * Service that controls stuff related to transport (play/pause/next/special urls)
    * will be initialized on first use.
    *
    * @readonly
    * @type {AVTransportService}
    * @memberof SonosDeviceBase
    */
  public get AVTransportService(): AVTransportService {
    if (this.avtransportservice === undefined) this.avtransportservice = new AVTransportService(this.host, this.port, this.uuid);
    return this.avtransportservice;
  }

  private alarmclockservice: AlarmClockService | undefined;
  /**
    * Control the sonos alarms
    * will be initialized on first use.
    *
    * @readonly
    * @type {AlarmClockService}
    * @memberof SonosDeviceBase
    */
  public get AlarmClockService(): AlarmClockService {
    if (this.alarmclockservice === undefined) this.alarmclockservice = new AlarmClockService(this.host, this.port, this.uuid);
    return this.alarmclockservice;
  }

  private audioinservice: AudioInService | undefined;
  public get AudioInService(): AudioInService {
    if (this.audioinservice === undefined) this.audioinservice = new AudioInService(this.host, this.port, this.uuid);
    return this.audioinservice;
  }

  private connectionmanagerservice: ConnectionManagerService | undefined;
  public get ConnectionManagerService(): ConnectionManagerService {
    if (this.connectionmanagerservice === undefined) this.connectionmanagerservice = new ConnectionManagerService(this.host, this.port, this.uuid);
    return this.connectionmanagerservice;
  }

  private contentdirectoryservice: ContentDirectoryService | undefined;
  /**
    * Browse for local content
    * will be initialized on first use.
    *
    * @readonly
    * @type {ContentDirectoryService}
    * @memberof SonosDeviceBase
    */
  public get ContentDirectoryService(): ContentDirectoryService {
    if (this.contentdirectoryservice === undefined) this.contentdirectoryservice = new ContentDirectoryService(this.host, this.port, this.uuid);
    return this.contentdirectoryservice;
  }

  private devicepropertiesservice: DevicePropertiesService | undefined;
  /**
    * Modify device properties, like led status and stereo pairs
    * will be initialized on first use.
    *
    * @readonly
    * @type {DevicePropertiesService}
    * @memberof SonosDeviceBase
    */
  public get DevicePropertiesService(): DevicePropertiesService {
    if (this.devicepropertiesservice === undefined) this.devicepropertiesservice = new DevicePropertiesService(this.host, this.port, this.uuid);
    return this.devicepropertiesservice;
  }

  private groupmanagementservice: GroupManagementService | undefined;
  public get GroupManagementService(): GroupManagementService {
    if (this.groupmanagementservice === undefined) this.groupmanagementservice = new GroupManagementService(this.host, this.port, this.uuid);
    return this.groupmanagementservice;
  }

  private grouprenderingcontrolservice: GroupRenderingControlService | undefined;
  /**
    * Volume related controls for groups
    * will be initialized on first use.
    *
    * @readonly
    * @type {GroupRenderingControlService}
    * @memberof SonosDeviceBase
    */
  public get GroupRenderingControlService(): GroupRenderingControlService {
    if (this.grouprenderingcontrolservice === undefined) this.grouprenderingcontrolservice = new GroupRenderingControlService(this.host, this.port, this.uuid);
    return this.grouprenderingcontrolservice;
  }

  private musicservicesservice: MusicServicesService | undefined;
  /**
    * External music services
    * will be initialized on first use.
    *
    * @readonly
    * @type {MusicServicesService}
    * @memberof SonosDeviceBase
    */
  public get MusicServicesService(): MusicServicesService {
    if (this.musicservicesservice === undefined) this.musicservicesservice = new MusicServicesService(this.host, this.port, this.uuid);
    return this.musicservicesservice;
  }

  private qplayservice: QPlayService | undefined;
  public get QPlayService(): QPlayService {
    if (this.qplayservice === undefined) this.qplayservice = new QPlayService(this.host, this.port, this.uuid);
    return this.qplayservice;
  }

  private queueservice: QueueService | undefined;
  /**
    * Modify and browse queues
    * will be initialized on first use.
    *
    * @readonly
    * @type {QueueService}
    * @memberof SonosDeviceBase
    */
  public get QueueService(): QueueService {
    if (this.queueservice === undefined) this.queueservice = new QueueService(this.host, this.port, this.uuid);
    return this.queueservice;
  }

  private renderingcontrolservice: RenderingControlService | undefined;
  /**
    * Volume related controls
    * will be initialized on first use.
    *
    * @readonly
    * @type {RenderingControlService}
    * @memberof SonosDeviceBase
    */
  public get RenderingControlService(): RenderingControlService {
    if (this.renderingcontrolservice === undefined) this.renderingcontrolservice = new RenderingControlService(this.host, this.port, this.uuid);
    return this.renderingcontrolservice;
  }

  private systempropertiesservice: SystemPropertiesService | undefined;
  public get SystemPropertiesService(): SystemPropertiesService {
    if (this.systempropertiesservice === undefined) this.systempropertiesservice = new SystemPropertiesService(this.host, this.port, this.uuid);
    return this.systempropertiesservice;
  }

  private virtuallineinservice: VirtualLineInService | undefined;
  public get VirtualLineInService(): VirtualLineInService {
    if (this.virtuallineinservice === undefined) this.virtuallineinservice = new VirtualLineInService(this.host, this.port, this.uuid);
    return this.virtuallineinservice;
  }

  private zonegrouptopologyservice: ZoneGroupTopologyService | undefined;
  /**
    * Zone config stuff, eg getting all the configured sonos zones.
    * will be initialized on first use.
    *
    * @readonly
    * @type {ZoneGroupTopologyService}
    * @memberof SonosDeviceBase
    */
  public get ZoneGroupTopologyService(): ZoneGroupTopologyService {
    if (this.zonegrouptopologyservice === undefined) this.zonegrouptopologyservice = new ZoneGroupTopologyService(this.host, this.port, this.uuid);
    return this.zonegrouptopologyservice;
  }
}