#!/usr/bin/env bash

PUBLISH="npm publish --access=public"

cd ./dist/@authumn

cd angular-auth

$PUBLISH

cd ../angular-user
$PUBLISH

cd ../angular-templates-bootstrap3
$PUBLISH

cd ../angular-templates-material
$PUBLISH

cd ../angular
$PUBLISH

