// tentativa 1
// Acender interruptor 1 e 2 e entrar na sala 'A' e manter o interruptor 3 sempre desligado.
// Sala 'A' acendeu?

// *** Fluxo positivo da primeira pergunta ***
// Se SIM = interruptor 1 ou 2 é responsavel por acender essa sala
// Interruptor 1 = acendeu sala 'A' 
// interruptor 2 = acendeu sala 'A' '
// Interruptor 3 = indefinido

// ENTÃO
// Na segunda tentativa entrar na sala 'B', desligar interruptor 1 e manter ligado o interruptor 2
// Sala 'B' está acesa ?

// Se SIM
// Interruptor 1 = sala 'A' 
// interruptor 2 = sala 'B'
// Interruptor 3 = sala 'C'

// Se NÃO
// verificar a temperatura da lâmpada
// SE estiver quente
// Interruptor 1 = sala 'B' 
// interruptor 2 = sala 'A'
// Interruptor 3 = sala 'C'
// Se estiver fria
// Interruptor 1 = sala 'A' 
// interruptor 2 = sala 'C'
// Interruptor 3 = sala 'B'



// *** Fluxo negativo da primeira pergunta ***
// Se NÃO - interruptor 3 controla sala 'A'
// Interruptor 1 = indefinido 
// interruptor 2 = indefinido'
// Interruptor 3 = sala 'A'

// ENTÃO
// Na segunda tentativa entrar na sala 'B', manter ligado interruptor 1 e desligar interruptor 2
// Sala 'B' está acesa?

// Se SIM
// Interruptor 1 = sala 'B' 
// interruptor 2 = sala 'C'
// Interruptor 3 = sala 'A'

// Se NÃO
// interruptor 1 = sala 'C'
// interruptor 2 = sala 'B'
// interruptor 3 = sala 'A'


