#!/bin/bash

#Run curl, save to FIRST_RESPONSE.json, and print the response
curl --request POST \
 --url 'https://api.spacetraders.io/v2/register' \
 --header 'Content-Type: application/json' \
 --data '{
    "symbol": "-------------PLACE HERE-------------",
    "faction": "COSMIC"
   }' \
   --output FIRST_RESPONSE.json \
   --silent
   
cat FIRST_RESPONSE.json
