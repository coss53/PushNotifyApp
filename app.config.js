export default ({ config }) => {
  return {
    ...config,
    android: {
      ...config.android,
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON
        ? './android/app/google-services.json'
        : undefined,
    },
    ios: {
      ...config.ios,
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON
        ? './ios/google-services.json'
        : undefined,
    },
  };
};
