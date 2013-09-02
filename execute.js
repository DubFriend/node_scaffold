#!/bin/env node

var net = require('./setup');

net.get('/', require('./src/hello'));
