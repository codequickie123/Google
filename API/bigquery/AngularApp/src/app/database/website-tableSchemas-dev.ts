let website:any = {}

website.convertCMS = [

    {
        "title": "bigquery",
        "type_slug": "forms",
        "metafields": [

            {
                "key": "Body",
                "type": "body",
                "stack": "60",
                "gap":20,
                "split":10,
                "background": "rgb(255, 179, 204)",
                "googleSheets": {}
            },
            {
                "key": "Heading",
                "value": "Welcome to the BigQuery Management Page",
                "type": "title",
                "split": "10",
                "googleSheets": {}
            },
            {
                "key": "main-question",
                "value": "Type in the name of the table,dataset,project as according to the backend ",
                "type": "sub-heading",
                "split": "10",
                "text-align":"center",
                "googleSheets": {}
            },
            {
                "key": "Answer",
                "value": "",
                "type": "input",
                "border":"1px solid black",
                "fontSize":"60",
                "background":"white",
                "split": "10",
                "text-align":"center",
                "googleSheets": {}
            },
            {
                "key": "Submit",
                "type": "tableSchemas button",
                "value":"Submit",
                "next":"true",
                // "split": "3",
                "height":"250",
                "googleSheets": {}
            },
            {
                "key": "Result",
                "type": "text",
                "value":"Waiting For Submission...",
                // "next":"true",
                "split": "6",
                "fontSize":"40",
                "height":"250",
                "googleSheets": {}
            },
        ]
    },
]


export default website


