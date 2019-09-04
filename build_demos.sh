#!/usr/bin/env bash

rm -rf build/

ng build --prod authumn-angular-bootstrap4
ng build --prod authumn-angular-bootstrap3
ng build --prod authumn-angular-material
