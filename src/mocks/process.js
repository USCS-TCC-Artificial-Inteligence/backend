export const processGetResponse = {
  success: true,
  data: {
    page: 1,
    total_pages: 1,
    process: [
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
      {
        name: 'discord.exe',
        description: 'Processo do Discord',
        status: 'paused',
        icon_url: 'image.png',
        created_at: '2021-05-15T00:27:53+0000',
      },
    ],
  },
};

export const updateProcessTrackingStatusResponse = {
  success: true,
  data: {
    message: 'Status do processo alterado com sucesso.',
  },
};
