#!/usr/bin/env bash

rm -rf dist/
ng build --prod @authumn/angular-auth
ng build --prod @authumn/angular-user
ng build --prod @authumn/angular-templates-bootstrap3
ng build --prod @authumn/angular-templates-material
ng build --prod @authumn/angular

