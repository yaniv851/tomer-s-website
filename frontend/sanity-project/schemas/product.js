import { defineType, defineField, defineArrayMember } from 'sanity'

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    initialValue: async () => ({
        title: await fetch('http://localhost:3001/api/data')
            .then(result => result.json())
            .then(console.log)
    }),
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            title: 'Video',
            name: 'video',
            type: 'string',
        }),
        defineField({
            title: 'Poster 1',
            name: 'poster1',
            type: 'string',
        }),
        defineField({
            title: 'Poster 2',
            name: 'poster2',
            type: 'string',
        }),
        defineField({
            title: 'Poster 3',
            name: 'poster3',
            type: 'string',
        }),
        defineField({
            title: 'Poster 4',
            name: 'poster4',
            type: 'string',
        }),
        defineField({
            title: 'Poster 5',
            name: 'poster5',
            type: 'string',
        }),
        defineField({
            title: 'Poster 6',
            name: 'poster6',
            type: 'string',
        }),
        defineField({
            title: 'Poster 7',
            name: 'poster7',
            type: 'string',
        }),
        defineField({
            title: 'Poster 8',
            name: 'poster8',
            type: 'string',
        }),
        defineField({
            title: 'Poster 9',
            name: 'poster9',
            type: 'string',
        }),
        defineField({
            title: 'Poster 10',
            name: 'poster10',
            type: 'string',
        }),
        defineField({
            title: 'Collcection',
            name: 'collection',
            type: 'string',
        }),
        defineField({
            title: 'price',
            name: 'Price',
            type: 'number'
        }),
        defineField({
            type: 'object',
            name: 'Tabs',
            fieldsets: [
                { name: 'diamondchoose', title: 'filtering stones handles' }
            ],
            fields: [
                defineField({
                    title: "Gold Karat",
                    name: "karat",
                    type: "string",
                    options: {
                        list: [
                            { title: "1K", value: "1" },
                            { title: "3K", value: "3" },
                            { title: "5K", value: "5" }
                        ],
                        layout: "radio",
                        direction: "horizontal"
                    },
                    fieldset: 'diamondchoose'
                }),
                defineField({
                    title: "Color",
                    name: "color",
                    type: "string",
                    options: {
                        list: [
                            { title: "gold", value: "1" },
                            { title: "light pink", value: "light-pink" },
                            { title: "dark blue", value: "dark-blue" }
                        ],
                        layout: "radio",
                        direction: "horizontal"
                    },
                    fieldset: 'diamondchoose'
                }),
                defineField({
                    title: "Stone kind",
                    name: "stone",
                    type: "string",
                    options: {
                        list: [
                            { title: "diamond", value: "diamond" },
                            { title: "gold", value: "gold" },
                            { title: "silver", value: "silver" }
                        ],
                        layout: "radio",
                        direction: "horizontal"
                    },
                    fieldset: 'diamondchoose'
                }),
            ]
        }),
    ]
}