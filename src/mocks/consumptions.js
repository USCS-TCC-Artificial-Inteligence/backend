export const getConsumptionsResponse = {
  success: true,
  data: {
    chosen_period: 'day',
    consumptions: [
      {
        process_name: 'explorer.exe',
        memmory: {
          percentage: 0.2,
        },
        network: {
          percentage: 0.3,
        },
        cpu: {
          percentage: 0.5,
        },
        power: {
          percentage: 0.4,
        },
      },
      {
        process_name: 'chrome.exe',
        memmory: {
          percentage: 0.2,
        },
        network: {
          percentage: 0.3,
        },
        cpu: {
          percentage: 0.5,
        },
        power: {
          percentage: 0.4,
        },
      },
    ],
  },
};
