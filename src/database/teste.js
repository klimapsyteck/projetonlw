const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {

    proffyValue = {
        name: "Kesley Lima", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v4", whatsapp:"9494", 
        bio:"paixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões"        
    },

    classValue = {
        subject: 1, 
        cost:"20",         
    },

    classScheduleValues = [
        {
            weekday: [1], 
            time_from: [700], 
            time_to: [1200]    
        },

        {
            weekday: [0], 
            time_from: [500], 
            time_to: [1200]    
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule 
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "1201";

    `)
    console.log(selectClassesSchedules)
})
