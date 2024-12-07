/// <reference types="w3c-web-usb" />
type LogLevel = "debug" | "info" | "warn" | "error";
export interface Logger {
    log(level: LogLevel, message: string): void;
}
export declare const NULL_LOGGER: {
    log: (level: LogLevel, message: string) => void;
};
export declare const CONSOLE_LOGGER: {
    log: (level: LogLevel, message: string) => void;
};
export default class MobileDevice {
    static logger: Logger;
    usbDevice: USBDevice;
    usbConfiguration: USBConfiguration | null;
    usbInterface: USBInterface | null;
    private closing;
    private readInterval;
    usbInputEndpoint: USBEndpoint | null;
    usbOutputEndpoint: USBEndpoint | null;
    inputTransfer: Promise<USBInTransferResult> | null;
    handleData: ((data: ArrayBuffer) => void) | null;
    constructor(device: USBDevice);
    static supported(): boolean;
    static selectDevice(): Promise<MobileDevice>;
    static getDevices(): Promise<MobileDevice[]>;
    get name(): string;
    get serialNumber(): string;
    close(): Promise<void>;
    open(): Promise<void>;
    private deviceReader;
    sendData(data: ArrayBuffer): Promise<USBOutTransferResult | null>;
}
export {};
