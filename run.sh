#!/bin/bash


printf "Do you want to build and deploy to Firebase? \n"
printf "Choice:    yes \n"
printf "Choice:    no \n"

read -r build_deploy_choice

if [[ "$build_deploy_choice" == "yes" ]]; then
  cd frontend
  npm run build
  cd ../
  firebase deploy --only hosting,firestore
else
  /bin/bash ./scripts/test_local.sh
fi