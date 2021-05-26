export const postTagResponse = {
  success: true,
  data: {
    message: 'Tag adicionada com sucesso.',
  },
};

export const getTagResponse = {
  success: true,
  data: {
    page: 1,
    total_pages: 1,
    tags: [
      {
        name: 'Jogos',
        description: 'Classificação para aplicativos de entretenimento.',
      },
      {
        name: 'Internet',
        description: 'Classificação para aplicativos que utilizam acesso à rede.',
      },
      {
        name: 'Navegador',
        description: 'Classificação para aplicativos que possibilitam acesso a rede.',
      },
      {
        name: 'Mídia',
        description: 'Classificação para aplicativos reprodutores de mídias.',
      },
      {
        name: 'Documentos',
        description: 'Classificação para aplicativos que manipulam documentos.',
      },
      {
        name: 'Trabalho',
        description: 'Classificação para aplicativos produtivos.',
      },
      {
        name: 'Notícias',
        description: 'Classificação para aplicativos de informação.',
      },
    ],
  },
};
