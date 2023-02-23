import { defineType, defineField, defineArrayMember } from 'sanity'

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    // initialValue: async () => ({
    //     title: await fetch('http://localhost:3001/api/data')
    //         .then(result => result.json())
    //         .then(console.log)
    // }),
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .slice(0, 200)
            }
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'string',
        }),
        defineField({
            title: 'Poster',
            name: 'poster',
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