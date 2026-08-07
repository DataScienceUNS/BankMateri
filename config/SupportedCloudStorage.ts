export const SupportedCloudStorage = [
    {
        label: "Google Drive",
        value: "google-drive",
        prefixUrl: "https://drive.google.com/file/d/"
    }
];

export type SupportedCloudStorageType = (typeof SupportedCloudStorage)[number];