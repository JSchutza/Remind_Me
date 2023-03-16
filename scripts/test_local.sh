#!/bin/bash


printf "Do you want to build and serve with Firebase on your local machine? \n"
printf "Choice:    yes \n"
printf "Choice:    no \n"

read -r build_serve_choice


if [[ "$build_serve_choice" == "yes" ]]; then
  cd frontend
  npm run build
  firebase serve
else
  printf "Setup option to just run project without build."
fi
