const repo = {
    name: "LaunchX",
    author: "david-malpica",
    language: "JavaScript",
    numberOfCommits: 10,
    stars: 9,
    forks: 2,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())


const twitter = {
    user: {user:"david",username:"david_malpi",age:25,followers:4,bio:"..."},
    temes: ["tecnologia","anime","paisajes","dibujo"],
    hashtag:["#FrontEnd","#javascript","#NodeJS"]
}

const facebook = {
  fb_user: {user:"david",username:"davidmg"},
  friends: 50,
  liked: ["GitHub","Linux"],
  active: 22
}

const uber = {
  profile: {user:"David"},
  payment: ["Efectivo", "Tarjeta", "Google Pay", "Apple Pay"],
  travel: {origen:"casa", destino:"Santa Fe"},
  car: ["Uber X", "Black", "Uber XL"]
}