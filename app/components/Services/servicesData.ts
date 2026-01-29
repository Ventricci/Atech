export interface ServiceContent {
  introduction: string;
  offerings: {
    title: string;
    items: string[];
  };
  target: string;
}

export const servicesContent: Record<number, ServiceContent> = {
  1: {
    introduction: 'Criação de sistemas e aplicações sob medida, desenvolvidos conforme as necessidades específicas de cada cliente.',
    offerings: {
      title: 'O que oferecemos:',
      items: [
        'Sistemas Web e Desktop: Plataformas robustas para gestão empresarial, e-commerce, portais corporativos e muito mais.',
        'Aplicativos Mobile: Desenvolvimento nativo e multiplataforma (iOS e Android) para levar seu negócio ao bolso dos clientes.',
        'Automação de Processos: Soluções que eliminam tarefas manuais e aumentam a produtividade da sua equipe.',
        'APIs e Microsserviços: Arquiteturas modernas e escaláveis que crescem junto com seu negócio.',
        'Dashboards e Relatórios: Visualização inteligente de dados para tomada de decisões estratégicas.',
      ],
    },
    target: 'Empresas que precisam de soluções únicas que sistemas prontos não oferecem.',
  },
  2: {
    introduction: 'Análise, orientação e proposição de soluções tecnológicas voltadas à melhoria de processos, sistemas e infraestrutura de TI.',
    offerings: {
      title: 'O que oferecemos:',
      items: [
        'Diagnóstico Tecnológico: Avaliação completa da infraestrutura e sistemas atuais, identificando gargalos e oportunidades.',
        'Planejamento Estratégico de TI: Definição de roadmap tecnológico alinhado aos objetivos de negócio.',
        'Seleção de Tecnologias: Orientação na escolha das melhores ferramentas, linguagens e frameworks para cada projeto.',
        'Otimização de Processos: Mapeamento e redesenho de fluxos de trabalho usando tecnologia como facilitador.',
        'Segurança da Informação: Análise de vulnerabilidades e implementação de boas práticas de proteção de dados.',
        'Migração para Nuvem: Planejamento e execução de migração de sistemas legados para ambientes cloud.',
      ],
    },
    target: 'Empresas que desejam modernizar sua infraestrutura, reduzir custos operacionais, melhorar a segurança ou que precisam de orientação técnica especializada antes de grandes investimentos em tecnologia.',
  },
  3: {
    introduction: 'Acompanhamento contínuo do funcionamento de softwares, com identificação preventiva de falhas, correções e ajustes técnicos.',
    offerings: {
      title: 'O que oferecemos:',
      items: [
        'Monitoramento 24/7: Vigilância constante da saúde das aplicações, servidores e bancos de dados.',
        'Suporte Técnico Especializado: Atendimento ágil para resolução de incidentes e dúvidas dos usuários.',
        'Manutenção Preventiva: Atualizações regulares, otimizações de performance e patches de segurança.',
        'Correção de Bugs: Identificação e resolução rápida de falhas e comportamentos inesperados.',
        'Backup e Recuperação: Estratégias de proteção de dados e planos de contingência.',
        'Relatórios de Performance: Análise de métricas de uso, disponibilidade e desempenho.',
        'Evolução Contínua: Pequenos ajustes e melhorias incrementais baseadas no feedback dos usuários.',
      ],
    },
    target: 'Empresas que dependem de sistemas críticos para suas operações e não podem correr o risco de indisponibilidade, buscando tranquilidade e garantia de funcionamento contínuo.',
  },
  4: {
    introduction: 'Desenvolvimento e implementação de soluções que permitem a comunicação e intercâmbio de informações e processos entre diferentes sistemas.',
    offerings: {
      title: 'O que oferecemos:',
      items: [
        'Integração de ERPs: Conexão entre sistemas de gestão empresarial (SAP, TOTVS, Oracle, etc.) e outras ferramentas.',
        'APIs RESTful e SOAP: Desenvolvimento de interfaces de comunicação padronizadas e seguras.',
        'Sincronização de Dados: Fluxo automático de informações entre plataformas diferentes (CRM, e-commerce, financeiro, estoque).',
        'Middleware e ESB: Camadas de integração que orquestram a comunicação entre múltiplos sistemas.',
        'Integração com Serviços Externos: Conexão com APIs de pagamento, envio de e-mails, SMS, geolocalização, etc.',
        'ETL (Extract, Transform, Load): Processos de extração, transformação e carga de dados entre sistemas.',
        'Automação de Workflows: Integração que dispara ações automáticas baseadas em eventos (ex: pedido criado no e-commerce → atualiza estoque → gera nota fiscal).',
      ],
    },
    target: 'Empresas que utilizam múltiplos sistemas e precisam eliminar retrabalho manual, reduzir erros de digitação, acelerar processos e ter uma visão unificada das informações.',
  },
};
