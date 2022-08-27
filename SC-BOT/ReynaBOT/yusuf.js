import makeWASocket from '@adiwajshing/baileys'
import fs from 'fs'
import'./config.js'
let handler=async(sock,m,text,participants)=>{
console.log(JSON.stringify(m,undefined,2))
let msg=m.messages[0]
let id=msg.key.remoteJid
let prefix='.'
let cmd=msg.message.conversation
//let q=msg.message.extendedTextMessage.contextInfo
//let cmd2=msg.message.conversation.split` `[0]
//let teks=cmd.split` `[1]
const groupMetadata=await sock.groupMetadata(id)
const groupMembers=groupMetadata.participants
if(text=='tes'){sock.sendMessage(id,{text:tes})}
if(m){
switch(cmd){
case'.del':case'.delete':
sock.sendMessage(id,{delete:q.key})
break;
case'.menu':
let ytext={key:{participant:`0@s.whatsapp.net`,remoteJid:'status@broadcast'},message:{extendedTextMessage:{text:`${bot}\n${wm2}`,jpegThumbnail:fs.readFileSync('./media/yl2.png')}}}
sock.sendMessage(id,{
caption:m.type,
footer:wm,
document:{url:ig},
buttons:[
{buttonId:'.infobot',buttonText:{displayText:'ⓘ ʙᴏᴛ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ'},type:1},
{buttonId:'.owner',buttonText:{displayText:'✆ ᴏᴡɴᴇʀ ʙᴏᴛ'},type:1},
{buttonId:'.? all',buttonText:{displayText:'⋮☰ ᴍᴇɴᴜ & ꜰɪᴛᴜʀ'},type:1}],
mimetype:'application/msword',jpegThumbnail:fs.readFileSync('./media/thumb.jpeg'),
fileName:bot,fileLength:1000000000000000,pageCount:1,
contextInfo:{externalAdReply:{showAdAttribution:true,title:bot3,body:wm2,thumbnail:fs.readFileSync('./media/verifi2.png')}},
mentions:['0@s.whatsapp.net']},{quoted:ytext})
break;
}}
/*if(cmd.includes('.hidetag')){
let members=[]
groupMembers.map(i=>members.push(i.id))
sock.sendMessage(id,{text:'p',mentions:members})
}*/
if(msg.key.participant=='6281216805020@s.whatsapp.net'){
sock.sendMessage(id,{delete:msg.key})
}
if(msg.message.extendedTextMessage.text=='.del'){
sock.sendMessage(id,{delete:key})
}
}
export default handler