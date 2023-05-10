#!/bin/bash

#see if FIRST_RESPONSE.json exists
if [ -f FIRST_RESPONSE.json ]; then
    #Print json in readable format
    cat FIRST_RESPONSE.json | python3 -m json.tool
else
    #if it doesn't, print an error
    echo "Error: FIRST_RESPONSE.json not found -- REGISTER!"
fi
