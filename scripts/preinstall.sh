#!/bin/bash
echo "$GOOGLE_SERVICES_BASE64" | base64 -d > android/app/google-services.json
