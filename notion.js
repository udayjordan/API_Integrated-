const{ Client }=require('@notionhq/client')
const { type } = require('express/lib/response')

const notion=new Client({auth: process.env.NORTION_API_KEY})

// async function getDatabase(){
//    const response=await notion.databases.retrieve({database_id: process.env.NOTION_DATABASE_ID})

// }

// getDatabase()
function createSuggestion({title}){
    notion.pages.create({
        parent:{
            database_id: process.env.NOTION_DATABASE_ID
        },
        properties:{
            [process.env.NOTION_TITLE_ID]:{
                title: [
                    {
                    type:'text',
                    text:{
                        content: title
                    },
                    },
                ],
            },

        },
    })
}

createSuggestion({title:"Test"})