import shutil
import os

#Função para copiar uma arvore de pastas e substituir os arquivos existentes
def copy_all(src, dst):
    root_src_dir = src
    root_dst_dir = dst

    for src_dir, dirs, files in os.walk(root_src_dir):
        dst_dir = src_dir.replace(root_src_dir, root_dst_dir, 1)
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        for file_ in files:
            src_file = os.path.join(src_dir, file_)
            dst_file = os.path.join(dst_dir, file_)
            if os.path.exists(dst_file):
                # No caso de src e dst serem o mesmo arquivo
                if os.path.samefile(src_file, dst_file):
                    continue
                os.remove(dst_file)
            shutil.copy2(src_file, dst_dir)


print('\n\n\033[32m\033[1mRECOMENDAÇÃO DE MATRÍCULA \033[0;0m\n \n')
print('O script irá executar o comando para gerar versão de produto do front-end e em seguida irá copiar os arquivos gerados para uma pasta na raiz do projeto e irá copiar os arquivos da pasta de código para essa mesma pasta raiz. Fazendo assim que tudo esteja em ordem em uma só pasta')


#Executar o comando para buildar o front-end
print('\n\n\033[32mExecutar o comando para buildar o front-end (npm run-script build) \n\n \033[0;0m')

success = os.system('cd src; npm run build')

#Se houver sucesso, então copiar os arquivos gerados que estão na pasta '/src/build' para a pasta '/extensao'
if success==0:
    print('\n\n\033[32mCopiando os arquivos gerados para a pasta "/extensao" \n\n\033[0;0m')
    #Remover a pasta antiga para poder inserir arquivos novos e manter a pasta atualizada sem arquivo inutilizado
    if os.path.exists('build'):
        shutil.rmtree('build')
    #Copiar os arquivos para a pasta nova
    copy_all('src/build','build')            
    print('Arquivos copiados!')
    #Então, copiar os arquivos da pasta '/scripts' para a pasta '/extensao'
    #Fazendo assim com que todos os arquivos necessários para o chrome estejam na mesma pasta
    #facilitando assim o desenvolvimento tendo em vista que o teste do back-end depende do front-end e vice e versa

    print('\n\n\033[32mCopiando os arquivos de script da pasta "/scripts para a pasta "/extensao"\n\n\033[0;0m')
    copy_all('paste_in_build', 'build')

    print('\033[32m\033[1m SUCESSO! \033[0;0m\n \n')
    print("""Agora para poder executar a extensão, abra o endereço:
    \n\033[32m\033[1m chrome://extensions \033[0;0m\n
    Ative o modo de desenvolvedor e adicione a pasta \033[32m\033[1m build \033[0;0m como extensão descompactada.\n""")