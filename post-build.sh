rm -rf ./dist
mkdir -p ./dist/keyscroll

cp ./index.html ./dist/keyscroll/
mv ./packages/keyscroll-ng/dist/keyscroll-ng-demo ./dist/keyscroll/keyscroll-ng
mv ./packages/keyscroll-docs/dist ./dist/keyscroll/keyscroll-docs
