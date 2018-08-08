#!/usr/bin/env bash
cd dist
git add .
git commit -m "Deploy to gh-pages as of $(git log '--format=format:%H' master -1)"
git push origin master