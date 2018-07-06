#!/usr/bin/env bash

BUMP="npm version patch"

cd ./projects/angular-auth

$BUMP

cd ../angular-user
$BUMP

cd ../angular-templates-bootstrap3
$BUMP

cd ../angular-templates-bootstrap4
$BUMP

cd ../angular-templates-material
$BUMP

cd ../angular
$BUMP

