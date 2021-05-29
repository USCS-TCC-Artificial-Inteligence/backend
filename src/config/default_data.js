import db from './db';

const DEFAULT_TAGS = [
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
];

export const insertDefaultTags = async () => {
  try {
    await db.tx((t) => {
      const queries = DEFAULT_TAGS.map((tag) => {
        return t.none(
          'INSERT INTO tags(name, description) VALUES (${name}, ${description}) ON CONFLICT DO NOTHING;',
          tag
        );
      });
      return t.batch(queries);
    });
  } catch (e) {
    throw e;
  }
};
