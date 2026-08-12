export const SupportedCloudStorage = [
  {
    label: "Google Drive",
    value: "google-drive",
    prefixUrl: "https://drive.google.com/file/d/",
  },
  {
    label: "SPADA",
    value: "spada",
    prefixUrl: "https://spada.uns.ac.id/",
  },
];

export type SupportedCloudStorageType = (typeof SupportedCloudStorage)[number];
