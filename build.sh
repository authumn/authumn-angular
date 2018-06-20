#!/usr/bin/env bash

rm -rf dist/
ng build --prod @authumn/angular-auth
ng build --prod @authumn/angular-user
ng build --prod @authumn/angular-templates-bootstrap3
ng build --prod @authumn/angular-templates-material
ng build --prod @authumn/angular

cd ./dist/@authumn

cd angular-auth
npm pack

cd ../angular-auth
npm pack

cd ../angular-user
npm pack

cd ../angular-templates-bootstrap3
npm pack

cd ../angular-templates-material
npm pack

cd ../angular
npm pack

