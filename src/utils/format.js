const subjects = [    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const arrayPsoition = +subjectNumber - 1
    return subjects[arrayPsoition]
}

function getNumber(numberCorrect){      
    return numberCorrect.toString().replace(".", ",")
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':')

  return Number((hour * 60) + minutes)
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    getNumber,
    convertHoursToMinutes
}