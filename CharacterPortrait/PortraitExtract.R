#https://pkmn.net/?action=content&page=viewpage&id=8710&parentsection=87

#https://pkmn.net/sprites/md2/491.png

for (val in c(1:491)){
  download.file(paste('https://pkmn.net/sprites/md2/',val,'.png',sep=''),
                basename(paste('https://pkmn.net/sprites/md2/',val,'.png',sep='')),
                mode = 'wb')
}