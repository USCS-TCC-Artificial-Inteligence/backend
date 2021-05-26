export const getGeneralSummaryResponse = {
  success: true,
  data: {
    chosen_period: 'day',
    run_time: 240, // <- Em minutos
    most_used_processes: [
      {
        name: 'explorer.exe',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        icon_url: 'image.png',
        created_at: '2021-05-15T00:27:53+0000',
      },
      {
        name: 'chrome.exe',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        icon_url: 'image.png',
        created_at: '2021-05-15T00:27:53+0000',
      },
    ],
    most_used_tags: [
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
};

export const getTagsSummaryResponse = {
  success: true,
  data: {
    chosen_period: 'day',
    most_used_tags: [
      {
        name: 'Jogos',
        description: 'Classificação para aplicativos de entretenimento.',
        usage_time: 240, // <- Em minutos
      },
      {
        name: 'Internet',
        description: 'Classificação para aplicativos que utilizam acesso à rede.',
        usage_time: 240, // <- Em minutos
      },
    ],
  },
};

export const getProcessSummaryResponse = {
  success: true,
  data: {
    chosen_period: 'day',
    most_used_processes: [
      {
        name: 'explorer.exe',
        description: 'Processo do Windows Explorer',
        status: 'tracking',
        icon_url: 'image.png',
        created_at: '2021-05-15T00:27:53+0000',
        usage_time: 240, // <- Em minutos
      },
      {
        name: 'chrome.exe',
        description: 'Processo do Google Chrome',
        status: 'ignored',
        icon_url: 'image.png',
        created_at: '2021-05-15T00:27:53+0000',
        usage_time: 240, // <- Em minutos
      },
    ],
  },
};
