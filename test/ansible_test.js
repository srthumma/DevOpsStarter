var Ansible = require('src/ansible');

var util = require('util');

var command = new Ansible.Playbook().playbook("<path to palybook>");

command.privateKey("<key file>")

command.inventory('<host ip>,')
command.user('centos')

command.variables({outFile: 'test.out'})

command.on('stdout', function(data) { console.log("stdout:",data.toString()); });
command.on('stderr', function(data) { console.log("stderr",data.toString()); });

command.exec();