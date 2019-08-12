

export PATH=/home/appops/node-v10.16.0-linux-x64/bin:$PATH

/home/appops/.yarn/bin/yarn install --production

pm2 start dist/index.js -i max