import { defineType, defineField, defineArrayMember } from 'sanity';

// schemas/header.js
export default {
    name: 'header',
    type: 'document',
      title: 'Header',
    fields: [
      {
        name: 'ProductName',
        type: 'string',
        title: 'Product Name'
      },
      defineField({
        name: 'body',
        title: 'תיאור',
        type: 'text',
      }),     
      defineField({
        title: 'קישור לדף המוצר',
        name: 'link',
        type: 'string',
    }),
      defineField({
        name: 'post1',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    ]
  }