import { init, track, identify as amplitudeIdentify, setUserId, setDeviceId, Identify } from '@amplitude/analytics-browser';

export class Amplitude {
    initialize(): void {
        let deviceId = localStorage.getItem('amplitude_device_id');

        if (!deviceId) {
            deviceId = this.generateRandomId();
            localStorage.setItem('amplitude_device_id', deviceId);
        }

        setDeviceId(deviceId);

        // 저장된 userId 가져오기
        const userId = localStorage.getItem('amplitude_user_id');
        if (userId) {
            setUserId(userId);
        }
    }

    logEvent(eventName: string, properties: Record<string, any> = {}): void {
        if (Object.keys(properties).length === 0) {
            track(eventName);
        } else {
            track(eventName, properties);
        }
    }

    setUserId(userId: string): void {
        localStorage.setItem('amplitude_user_id', userId);
        setUserId(userId);
    }

    clearUserId(): void {
        localStorage.removeItem('amplitude_user_id');
        setUserId('unknown');
    }

    setUserInformation(properties: Record<string, any>): void {
        const identifyObj = new Identify();
        Object.entries(properties).forEach(([key, value]) => {
            identifyObj.set(key, value);
        });

        amplitudeIdentify(identifyObj);
    }

    private generateRandomId(): string {
        return Math.random().toString(36).substring(2, 15);
    }
}

const amplitudeTool = new Amplitude();
export default amplitudeTool;