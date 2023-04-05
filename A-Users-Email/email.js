let appData = {

    name: 'Gmail',

        incomingMailType:[
        'primary',
        'promotions',
        'social',
    ],

    mailboxes: [
        'inbox',
        'starred',
        'snoozed',
        'important',
        'sent',
        'drafts',
        'spam',
        'trash',
    ],

    contacts: [
        {name:'Erin', lastMessage: "I won't be in class today"},
        {name: 'Matt', lastMessage: "Today, we are going to rock it!"}
    ],

    inbox: [
            {type: 'primary', name: 'Kartik Tyagi', emailHead: 'Celebrate 10 years with me!'},
            {type: 'primary', name: 'Full Stack 102', emailHead: 'Assignment Graded: Checking Store Hours, Full Stack 102'},
            {type: 'primary', name: 'Full Stack 102', emailHead: 'Assignment Graded: Day 23 Attendance Quiz, Full Stack 102'},
    ],

    sent: [
        {to: 'John Doe', emailHead: 'Random Email'},
    ],

    drafts: [
        {to: 'Sally Sue', emailHead: 'Random Draft'},
    ]

}

// console.log(mailboxes) - Mailbox Names
// console.log(appData.inbox,appData.sent,appData.drafts) - All Emails
// console.log(appData.inbox[1]) - Second Email Text

appData.sent[0].status = "Marked as Sent."
// console.log(appData.sent[0].status) - Marks Email as Sent

appData.drafts[1] = {to: 'The President', emailHead: 'Very Important Email' }  // Adds new draft to the drafts mailbox
console.log(appData.drafts) // -- Prints appData.drafts

