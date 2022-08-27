const fs=require('fs')
const cfonts=require('cfonts')
const{say}=cfonts
require('./config.js')

function del(i){
try{fs.unlinkSync(i);
console.log(`Menghapus file: ${i}`);
}catch(err){
console.error(`${botname}: File ${i} sudah dihapus`);
}};

del('session.json');
del('package-lock.json');
del('yarn.lock');
say(`${botname}: Selesai...`,{
font:'console',
align:'left',
colors:['green']});