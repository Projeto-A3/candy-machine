def calcula_troco(dinheiro, estado):
    if estado in [77, 87, 97]:
        return 0
    elif estado == 78:
        return dinheiro - 6
    elif estado == 88:
        return dinheiro - 7
    elif estado == 98:
        return dinheiro - 8

    # Calcula dinheiro depositado


def calcula_dinheiro(entrada):
    dinheiro = 0
    for x in entrada[:-1]:
        dinheiro += int(x)
    return dinheiro

def afd(digitado):

    aceitacao = [77, 78, 87, 88, 97, 98]
    estado_inicial = int(0)
    entrada = str(digitado)
    dinheiro = calcula_dinheiro(entrada)
    estado = estado_inicial;
    posicao = int(0)
    doce_final = 0
    while posicao < len(entrada):
        elemento = str(entrada[posicao])

        #print(entrada[0:posicao] + '|q' + str(estado) + '|' + entrada[posicao::])

        #TRANSICOES
        if estado == 0 and elemento == '1':
            estado = 1

        elif (estado == 0 and elemento == '2') or (estado == 1 and elemento == '1'):
            estado = 2

        elif (estado == 1 and elemento == '2') or (estado == 2 and elemento == '1'):
            estado = 3

        elif (estado == 2 and elemento == '2') or (estado == 3 and elemento == '1'):
            estado = 4

        elif (estado == 0 and elemento == '5') or (estado == 3 and elemento == '2') or (estado == 4 and elemento == '1'):
            estado = 5

        elif (estado == 1 and elemento == '5') or (estado == 5 and elemento == '1') or (estado == 4 and elemento == '2'):
            estado = 6

        elif (estado == 2 and elemento == '5') or (estado == 5 and elemento == '2') or (estado == 6 and elemento == '1'):
            estado = 7

        elif (estado == 3 and elemento == '5') or (estado == 6 and elemento == '2') or (estado == 7 and elemento == '1'):
            estado = 8

        elif estado in [4, 5, 6, 7] and elemento == '5':
            estado = 9

        elif estado == 7 and elemento == '2':
            estado = 9

        elif estado in [9,8] and elemento in [1,2,5]:
            estado = 9

        #FINAIS
        elif estado in [0,1,2,3,4,5] and elemento in ['a,b,c']:
            estado = 10

        elif (estado == 6 and elemento == 'b') or (estado == 6 and elemento == 'c') or (estado == 7 and elemento == 'c'):
            estado = 10

        elif estado == 6 and elemento == 'a':
            estado = 77

        elif (estado == 8 and elemento == 'a') or (estado == 7 and elemento == 'a') or (estado == 9 and elemento == 'a'):
            estado = 78

        elif estado == 7 and elemento == 'b':
            estado = 87

        elif (estado == 8 and elemento == 'b') or (estado == 9 and elemento == 'b'):
            estado = 88

        elif estado == 8 and elemento == 'c':
            estado = 97

        elif estado == 9 and elemento == 'c':
            estado = 98

        posicao += 1

    #print(entrada[0:posicao] + '|q' + str(estado) + '|' + entrada[posicao::])

    troco = 0
    aceita = False
    for x in aceitacao:
        if estado == x:
            aceita = True
            break

    if aceita == True:

        if estado in [77, 78]:
            troco = calcula_troco(dinheiro, estado)
            doce_final = estado
            #print(f"Você comprou o doce A fornecendo R${dinheiro},00. Troco: R${troco},00!!")
        elif estado in [87, 88]:
            doce_final = estado
            troco = calcula_troco(dinheiro, estado)
            #print(f"Você comprou o doce B fornecendo R${dinheiro},00. Troco: R${troco},00!!")
        elif estado in [97,98]:
            troco = calcula_troco(dinheiro, estado)
            doce_final = estado
            #print(f"Você comprou o doce C fornecendo R${dinheiro},00. Troco: R${troco},00!!")

        return list([float(troco), doce_final, entrada])
    else:
        if estado not in [77,78,87,88,97,98]:
            #print(f'Tentativa inválida, tome R$ {dinheiro} e tente novamente')
            l = list([float(0), 10, entrada])
            return l


