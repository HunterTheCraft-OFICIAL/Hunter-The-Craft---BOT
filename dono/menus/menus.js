const menu = (prefix, NomeDoBot, sender) => {
  
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Menu De Comandos*

• Usuário:
 @${sender.split("@")[0]}

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 COMANDOS TERMUX*

➥ ${prefix}Comandos-termux
➥ ${prefix}Hospedar-heroku
➥ ${prefix}Configurar-bot
➥ ${prefix}Git-bot

*•〢 INFO - DONO*

➥ ${prefix}InfoBemvindo
➥ ${prefix}Infopalavrão
➥ ${prefix}Infolistanegra
➥ ${prefix}Infobancarac
➥ ${prefix}Infovotação
➥ ${prefix}Infocontador
➥ ${prefix}Infosorteio 
➥ ${prefix}InfoAnotação

*•〢 DIVERSOS MENUS*

➥ ${prefix}Menudono
➥ ${prefix}Menuadm
➥ ${prefix}Menupremium
➥ ${prefix}Efeitosimg
➥ ${prefix}Logos
➥ ${prefix}Brincadeiras

*•〢 COMANDOS DE MEMBRO* 👥

➥ ${prefix}Infobot
➥ ${prefix}Idiomas 
➥ ${prefix}Bug (QUESTIONE) 
➥ ${prefix}Sugestao (DICA) 
➥ ${prefix}Avalie (O-QUAO-BOM) 

*•〢 🔎PESQUISAS -  ⬇️BAIXAR* 

➥ ${prefix}Play (NOME) 
➥ ${prefix}Playmp4 (NOME) 
➥ ${prefix}Ytsearch (NOME)
➥ ${prefix}Ytmp4 (LINK) 
➥ ${prefix}Ytmp3 (LINK) 
➥ ${prefix}Tiktok (LINK) 
➥ ${prefix}Instagram (LINK) 
➥ ${prefix}Facebook (LINK) 
➥ ${prefix}Twitter (LINK) 
➥ ${prefix}Imgpralink (MARCAR)
➥ ${prefix}Videopralink (MARCAR-V) 

*•〢 ℹ️ INFORMAÇÕES*

➥ ${prefix}Ping (VELO) 
➥ ${prefix}Gitdobot
➥ ${prefix}Atividade
➥ ${prefix}Rankativo
➥ ${prefix}Checkativo (@MARCAR)
➥ ${prefix}Ranklevel (DE-TODOS) 

*•〢 🎮 JOGOS/QUIZ*

➥ ${prefix}Ppt (PEDRA/PAPEL/TESOURA) 
➥ ${prefix}Jogodavelha (@MARCAR) 
➥ ${prefix}Ttt (JOGO-DA-VELHA) 
➥ ${prefix}Cassino
➥ ${prefix}Quizanimais 1 / 0
➥ ${prefix}Anagrama 1 / 0

*•〢 FIGURINHAS*

➥ ${prefix}Attp (TEXTO)
➥ ${prefix}Ttp (TEXTO)
➥ ${prefix}Fsticker (MARCAR-FOTO)
➥ ${prefix}Sticker (MARCAR-FOTO)
➥ ${prefix}Toimg (MARCAR-FIGU)
➥ ${prefix}Togif (MARCAR-FIGU)
➥ ${prefix}Roubar (TEXT/TEXT)

*•〢 COMANDOS/BÁSICOS*

➥ ${prefix}Gtts (LINGUAGEM + TEXTO)
➥ ${prefix}Traduzir Hello 
➥ ${prefix}Tagme 
➥ ${prefix}Emoji 😏/whatsapp
➥ ${prefix}Emojimix 😉+🙂
➥ ${prefix}Tabela (LETRAS) 
➥ ${prefix}Conselhobiblico
➥ ${prefix}Simi (FALE-ALGO)  
➥ ${prefix}Perfil
➥ ${prefix}Calcular 1 + 1
➥ ${prefix}Fazernick (NICK)
➥ ${prefix}Bot

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★

`
}

exports.menu = menu

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.
const anotacao = (prefix) => {
return `

Olá. Se você está lendo isso, provavelmente está curioso sobre o comando anotação. 

Existe os seguintes comando:

1 ${prefix}anotações

2 ${prefix}anotar

3 ${prefix}tirar_nota

4 ${prefix}nota titulo


O primeiro ele mostra todas as anotações do grupo, criada. 

O segundo, ele é usado para criar a nota, tipo um bloco de notas, exemplo: ${prefix}anotar ABC|ABC são 3 letras do alfabeto, utilizada bastante

Isso foi um exemplo, mas pode ser utilizado da fórma que quiser, mas lembre que antes do | é o título, depois é a anotação.

Ja o terceiro, é pra tirar a nota, Exemplo como expliquei, ${prefix}tirar_nota ABC 

Com isso a anotação que estava criada foi apagada. 

Já o terceiro, ele é pra buscar a anotação que deseja, pelo título, exemplo: ${prefix}nota ABC

É isso... 

Boa sorte. 
`
}

exports.anotacao = anotacao

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

	return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Menu De ADMs*

• Usuário:
 @${sender.split("@")[0]}

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★

➥ ${prefix}ativacoes
➥ ${prefix}listanegra (NUMERO)
➥ ${prefix}tirardalista (NUMERO)
➥ ${prefix}listanegraG (NÚMERO)
➥ ${prefix}tirardalistaG (NÚMERO)
➥ ${prefix}Kick [@] (pra-remover) 
➥ ${prefix}Ban (responder-mensagem)
➥ ${prefix}Promover [@] (Ser-ADM)
➥ ${prefix}Rebaixar [@] (rebaixar-adm)
➥ ${prefix}Totag (menciona-algo)
➥ ${prefix}Grupo f/a
➥ ${prefix}Status
➥ ${prefix}Limpar (texto-invisível-gp)
➥ ${prefix}Atividades (DO-GRUPO)
➥ ${prefix}Linkgp
➥ ${prefix}Grupoinfo
➥ ${prefix}Hidetag (txt) (marcação)
➥ ${prefix}Marcar (marca tds do gp)
➥ ${prefix}Marcar2 (Marca-tds-Wa.me/)
➥ ${prefix}Anagrama 1 / 0
➥ ${prefix}Antipalavra 1 / 0
➥ ${prefix}Descgp (TXT)
➥ ${prefix}Nomegp (Nome)
➥ ${prefix}Criartabela (ESCREVA-ALGO)
➥ ${prefix}Tabelagp

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★

`
}

exports.adms = adms

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 


// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
	
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Menu Do Dono 👨‍💻*

• Usuário:
 @${sender.split("@")[0]}

• Config:
➥ ${prefix}Configurar-bot

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★


➥ ${prefix}ativacoes_dono
➥ ${prefix}Botoes
➥ ${prefix}Bangp
➥ ${prefix}Unbangp
➥ ${prefix}Fotomenu (MARCAR-IMG) 
➥ ${prefix}Blockcmd  (cmd)
➥ ${prefix}Unblockcmd (cmd)
➥ ${prefix}Legenda_estrangeiro (msg)
➥ ${prefix}Legendabv (oq qr)
➥ ${prefix}Legendasaiu (oq qr)
➥ ${prefix}Legendasaiu2 (oq qr)
➥ ${prefix}Legendabv2 (oq qr)
➥ ${prefix}Prefixo_tipo2 simbolo
➥ ${prefix}Prefixo_tipo_off
➥ ${prefix}Fundobemvindo (marcar-img)
➥ ${prefix}Fundosaiu (marcar-img)
➥ ${prefix}Serpremium
➥ ${prefix}Listagp
➥ ${prefix}Antipalavrão 1 / 0
➥ ${prefix}Antiligar 1 / 0
➥ ${prefix}Addpalavra (palavrão)
➥ ${prefix}Delpalavra (palavrão)
➥ ${prefix}Ativo
➥ ${prefix}Ausente (fale-oq-faz)
➥ ${prefix}Delpremium @(marca)
➥ ${prefix}Addpremium @(marca)
➥ ${prefix}Clonar [@] (rouba ft de prf)
➥ ${prefix}Fotobot (img, = foto do BT)
➥ ${prefix}Descriçãogp (digite-algo)
➥ ${prefix}Block [@] (bloq de usar cmds) 
➥ ${prefix}Unblock [@] (desbloquear) 
➥ ${prefix}Setprefix  (prefixo-novo)
➥ ${prefix}Dono2 @marca
➥ ${prefix}Dono3 @marca
➥ ${prefix}Dono4 @marca
➥ ${prefix}Dono5 @marca
➥ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
╰──────────┘
`

}

exports.menudono = menudono

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Menu De Logos*

• Usuário:
 @${sender.split("@")[0]}

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Logos de 1 Texto*

➥ ${prefix}Txtquadrinhos (txt) 
➥ ${prefix}HackNeon (txt) 
➥ ${prefix}EquipeMascote (txt) 
➥ ${prefix}FFavatar (txt) 
➥ ${prefix}Gizquadro (txt) 
➥ ${prefix}Angelglx (txt) 
➥ ${prefix}WingEffect (txt) 
➥ ${prefix}Angelwing (txt) 
➥ ${prefix}Blackpink (txt) 
➥ ${prefix}Girlmascote (txt) 
➥ ${prefix}Mascotegame (txt) 
➥ ${prefix}Fpsmascote (txt) 
➥ ${prefix}Logogame (txt) 
➥ ${prefix}Glitch2 (txt) 
➥ ${prefix}3DGold (txt)
➥ ${prefix}Placaloli (txt)
➥ ${prefix}Phadow (txt)
➥ ${prefix}Efeitoneon (txt)
➥ ${prefix}Cemiterio (txt)
➥ ${prefix}Metalgold (txt)
➥ ${prefix}Narutologo (txt)
➥ ${prefix}Fire (txt)
➥ ${prefix}Romantic (txt)
➥ ${prefix}Smoke (txt)
➥ ${prefix}Papel (txt)
➥ ${prefix}Lovemsg (txt)
➥ ${prefix}Lovemsg2 (txt)
➥ ${prefix}Lovemsg3 (txt)
➥ ${prefix}Coffecup (txt)
➥ ${prefix}Coffecup2 (txt)
➥ ${prefix}Cup (txt)
➥ ${prefix}Florwooden (txt)
➥ ${prefix}Lobometal (txt)
➥ ${prefix}Harryp (txt)
➥ ${prefix}Txtborboleta (txt)
➥ ${prefix}Madeira (txt)
➥ ${prefix}Pornhub (txt)
➥ ${prefix}Escudo (txt)
➥ ${prefix}Transformer (txt)
➥ ${prefix}America (txt)
➥ ${prefix}Demongreen (txt)
➥ ${prefix}Wetglass (txt)    
➥ ${prefix}Toxic (txt)     
➥ ${prefix}Neon3 (txt)   
➥ ${prefix}Neondevil (txt) 
➥ ${prefix}Neongreen (txt)
➥ ${prefix}Lava (txt)
➥ ${prefix}Halloween (txt)
➥ ${prefix}Neondevil (txt)
➥ ${prefix}DemonFire (txt)
➥ ${prefix}DemonGreen (txt)
➥ ${prefix}Thunderv2 (txt)
➥ ${prefix}Thunder (txt)
➥ ${prefix}Colaq (txt)
➥ ${prefix}Luxury (txt)
➥ ${prefix}Berry (txt)
➥ ${prefix}Transformer (txt)
➥ ${prefix}Matrix (txt)
➥ ${prefix}Horror (txt)
➥ ${prefix}Nuvem (txt)
➥ ${prefix}Neon (txt)
➥ ${prefix}Neon1 (txt)
➥ ${prefix}Neon2 (txt)
➥ ${prefix}Neon3d (txt)
➥ ${prefix}NeonGreen (txt)
➥ ${prefix}Neon3 (txt)
➥ ${prefix}Neve (txt)
➥ ${prefix}Areia (txt)
➥ ${prefix}Vidro (txt)
➥ ${prefix}Style (txt)
➥ ${prefix}Pink (txt)
➥ ${prefix}Carbon (txt)
➥ ${prefix}Tetalblue (txt)
➥ ${prefix}Toxic (txt)
➥ ${prefix}Jeans (txt)
➥ ${prefix}Ossos (txt)
➥ ${prefix}Asfalto (txt)
➥ ${prefix}Natal (txt)
➥ ${prefix}Joker (txt)
➥ ${prefix}Blood (txt)
➥ ${prefix}Break (txt)
➥ ${prefix}Fiction (txt)
➥ ${prefix}3dstone (txt)
➥ ${prefix}Lapis (txt)
➥ ${prefix}Gelo (txt)
➥ ${prefix}Rainbow (txt)
➥ ${prefix}Metalfire (txt)

*•〢 Logos de 2 Texto*

➥ ${prefix}Comporn (txt/txt) 
➥ ${prefix}Glitch (txt/txt)
➥ ${prefix}Glitch3 (txt/txt)
➥ ${prefix}Grafity (txt-txt)
➥ ${prefix}Space (txt/txt)
➥ ${prefix}Marvel (txt/txt)
➥ ${prefix}GamePlay (txt/txt)
➥ ${prefix}Stone (txt/txt)
➥ ${prefix}Steel (txt/txt)
➥ ${prefix}Ffbanner (txt/txt) 
➥ ${prefix}Mascoteavatar (txt/txt) 
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★

`
}

exports.menulogos = menulogos

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Alternadores*

• Usuário:
 @${sender.split("@")[0]}

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Vídeos 📽️*

➥ ${prefix}Videolento (marca)
➥ ${prefix}Videorapido (marca)
➥ ${prefix}Videocontrario (marca)

*•〢 Fotos 🖼️*

➥ ${prefix}Audiolento (marca)
➥ ${prefix}Audiorapido (marca)
➥ ${prefix}Grave (marca)
➥ ${prefix}Grave2 (marca)
➥ ${prefix}Esquilo (marca)
➥ ${prefix}Estourar (marca)
➥ ${prefix}Bass (marca)
➥ ${prefix}Bass2 (marca)
➥ ${prefix}Vozmenino (marca)
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
`
}

exports.alteradores = alteradores

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Menu Premium 🤴*

• Usuário:
 @${sender.split("@")[0]}

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★

➥ ${prefix}Destrava
➥ ${prefix}Destrava2
➥ ${prefix}Ddd (DDD)
➥ ${prefix}Cep (NÚMERO)
➥ ${prefix}GerarCPF
➥ ${prefix}PremiumList
➥ ${prefix}EncurtaLink (LINK)
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
`
}

exports.menuprem = menuprem

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Menu De Bricadeiras*

• Usuário:
 @${sender.split("@")[0]}

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★

➥ ${prefix}Gay (marca (@))
➥ ${prefix}Feio (marca (@))
➥ ${prefix}Corno (marca (@))
➥ ${prefix}Vesgo (marca (@))
➥ ${prefix}Bebado (marca (@))
➥ ${prefix}Gostoso (marca (@))
➥ ${prefix}Gostosa (marca (@))
➥ ${prefix}Beijo (marca (@))
➥ ${prefix}Matar (marca (@))
➥ ${prefix}Tapa (marca (@))
➥ ${prefix}Chute (marca (@))
➥ ${prefix}Dogolpe (marca (@))   
➥ ${prefix}Nazista (marca (@))
➥ ${prefix}Chance (fale algo) 
➥ ${prefix}Casal   
➥ ${prefix}Rankgay     
➥ ${prefix}Rankgado
➥ ${prefix}Rankcorno  
➥ ${prefix}Rankgostoso
➥ ${prefix}Rankgostosa
➥ ${prefix}Ranknazista
➥ ${prefix}Rankotakus
➥ ${prefix}Rankpau

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
`
}

exports.brincadeiras = brincadeiras

// MENU DE EFEITOS DE IMAGEM, MONTAGEM Tops Kkk

const efeitos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
★ ▬▬▬▬▬🫡▬▬▬▬▬ ★
*•〢 Menu De Efeitos*

• Usuário:
 @${sender.split("@")[0]}

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★

➥ ${prefix}Legenda (marcar)-(img)
➥ ${prefix}Procurado (marcar)-(img)
➥ ${prefix}Hitler (marcar)-(img)
➥ ${prefix}Preso (marcar)-(img)
➥ ${prefix}Lixo (marcar)-(img)
➥ ${prefix}Deletef (marcar)-(img)
➥ ${prefix}Morto (marcar)-(img) 
➥ ${prefix}Lgbt (marcar)-(img) 

★ ▬▬▬▬▬🫡▬▬▬▬▬ ★

`
}

exports.efeitos = efeitos