export interface Client {

    tipoPessoa: 'F' | 'J';
    cpfCnpj: string;
    nomeCompleto: string;
    nomeUsal:string;
    dataCriacao:Date;
    contribuicao?: 'C' | 'CI' | 'N';
    inscricaoEstadual:string;
    inscricaMunicipal: string;
    email: string;
    grupo: string;
    
}
