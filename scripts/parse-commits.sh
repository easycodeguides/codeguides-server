#!/bin/bash
repo=$1
cd $repo
# todo - add commit messages to the database
git log | egrep "^commit" | cut -d " " -f 2
