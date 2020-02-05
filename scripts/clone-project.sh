#!/bin/bash
baseDir=$PWD
cd ../repos
git clone $1 $2
cd $baseDir
