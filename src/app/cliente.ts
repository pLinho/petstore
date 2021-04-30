export interface Cliente {
    tipoPessoa: 'F' | 'J';
    cpfCnpj: string;
    nomeCompleto: string;
    nomeUsual: string;
    dataCriacao: Date;
    contribuicao?: 'C' | 'CI' | 'N';
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    email: string;
    grupo: string;
}