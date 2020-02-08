#!/bin/bash
ROOT=$3
cd $ROOT/repos
git clone $1 $2
echo git clone $1 $2
