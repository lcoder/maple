

export PATH=/home/appops/node-v10.16.2-linux-x64/bin:$PATH

/home/appops/yarn-v1.17.3/bin/yarn install

/home/appops/yarn-v1.17.3/bin/yarn build

pm2 start dist/index.js -i max