/* eslint-disable @typescript-eslint/naming-convention */

export {};

declare global {
    interface Window {
        readonly ipc: Electron.IpcRenderer;
    }
}
