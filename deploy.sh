# 首先将指定node版本添加到PATH中，yarn运行时会调用node命令，公用构建机上默认全局安装的node版本很低，会引起报错


# export PATH=/home/appops/node-v10.16.0-linux-x64/bin:$PATH

# /home/appops/.yarn/bin/yarn

# /home/appops/.yarn/bin/yarn build


export PATH=/home/ndp-soft/node-v8.11.3-linux-x64/bin:$PATH

/home/ndp-soft/node-v8.11.3-linux-x64/node_modules/yarn/bin/yarn

/home/ndp-soft/node-v8.11.3-linux-x64/node_modules/yarn/bin/yarn build

