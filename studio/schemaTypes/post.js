export default {
    name: 'post',
    title: 'Post (Artigo)',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título do Artigo',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'URL Amigável (Slug)',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'content',
        title: 'Conteúdo do Artigo',
        type: 'array', 
        of: [{type: 'block'}, {type: 'image'}] 
      },
      {
        name: 'excerpt',
        title: 'Resumo para SEO',
        type: 'text',
        rows: 3
      },
      {
        name: 'featuredImage',
        title: 'Imagem de Destaque (DALL-E 3)',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'category',
        title: 'Categoria',
        type: 'string',
        options: {
          list: [
            {title: 'Notícias', value: 'noticias'},
            {title: 'Análises Táticas', value: 'analises'},
            {title: 'Mercado da Bola', value: 'mercado'},
            {title: 'Curiosidades', value: 'curiosidades'}
          ]
        }
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'author',
        title: 'Autor',
        type: 'string',
        initialValue: 'BORA JOGADOR AI',
        readOnly: true
      },
      {
        name: 'publishedAt',
        title: 'Data de Publicação',
        type: 'datetime',
      },
      {
        name: 'seoTitle',
        title: 'Título SEO (Meta Title)',
        type: 'string',
      },
      {
        name: 'seoDescription',
        title: 'Meta Description',
        type: 'text',
        rows: 2
      }
    ],
  }