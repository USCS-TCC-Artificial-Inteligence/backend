export const bindProcessAndTagsResponse = {
  success: true,
  data: {
    message: 'Associação realizada com sucesso.',
  },
};

export const getProcessAssociationsResponse = {
  success: true,
  data: {
    associations: [
      {
        process_name: 'riotClient.exe',
        tags: [
          {
            name: 'Jogos',
            description: 'Classificação para aplicativos de entretenimento.',
          },
          {
            name: 'Internet',
            description: 'Classificação para aplicativos que utilizam acesso à rede.',
          },
        ],
      },
      {
        process_name: 'notepad.exe',
        tags: [
          {
            name: 'Documentos',
            description: 'Classificação para aplicativos que manipulam documentos.',
          },
        ],
      },
    ],
  },
};

export const getTagAssociationsResponse = {
  success: true,
  data: {
    associations: [
      {
        tag_name: 'Jogos',
        processes: [
          {
            name: 'riotClient.exe',
            description: 'Processo do Cliente da Riot',
            status: 'tracking',
            icon_url: 'image.png',
            created_at: '2021-05-15T00:27:53+0000',
          },
          {
            name: 'steam.exe',
            description: 'Processo do Google Chrome',
            status: 'ignored',
            icon_url: 'image.png',
            created_at: '2021-05-15T00:27:53+0000',
          },
        ],
      },
      {
        tag_name: 'Mídia',
        processes: [
          {
            name: 'vlc.exe',
            description: 'Processo para reprodutor de mídia',
            status: 'paused',
            icon_url: 'image.png',
            created_at: '2021-05-15T00:27:53+0000',
          },
        ],
      },
    ],
  },
};

export const getSuggestionsResponse = {
  success: true,
  data: {
    suggestions: [
      {
        process_name: 'riotClient.exe',
        tags: [
          {
            name: 'Jogos',
            description: 'Classificação para aplicativos de entretenimento.',
          },
          {
            name: 'Internet',
            description: 'Classificação para aplicativos que utilizam acesso à rede.',
          },
        ],
      },
      {
        process_name: 'notepad.exe',
        tags: [
          {
            name: 'Documentos',
            description: 'Classificação para aplicativos que manipulam documentos.',
          },
          {
            name: 'Trabalho',
            description: 'Classificação para aplicativos produtivos.',
          },
        ],
      },
    ],
  },
};
