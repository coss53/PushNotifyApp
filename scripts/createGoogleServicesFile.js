const fs = require('fs');

const base64 = process.env.GOOGLE_SERVICES_BASE64;

if (!base64) {
  console.error('Environment variable GOOGLE_SERVICES_BASE64 is not set.');
  process.exit(1);
}

const buffer = Buffer.from(base64, 'base64');
fs.writeFileSync('android/app/google-services.json', buffer);
console.log('Created android/app/google-services.json file.');
