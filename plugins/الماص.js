
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    conn.reply(m.chat, `
┌───⊷ *𝑺𝒖𝒌𝒖𝒏𝒂-𝑩𝒐𝒕-𝑴𝒅* ⊶
▢ *📌الشخص* : _@${who.split('@')[0]}_
▢ *💎الماسك* : _${user.diamond}_
▢ *⬆️*الاكس بي* : _Total ${user.exp}_
└──────────────

*NOTE :* 
You can buy 💎 diamonds using the commands*
❏ *${usedPrefix}todiamond* <amount>
❏ *${usedPrefix}todiamondall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'الماسي', 'diamond', 'balance'] 

export default handler
