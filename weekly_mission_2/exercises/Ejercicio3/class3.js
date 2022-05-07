class Repo {
    constructor (name,author,language){
        this.name = name,
        this.author = author,
        this.language = language,
        this.stars = 0,
        this.forks = 0,
        this.issues_open = 0,
        this.issues_close = 0
    }
    get getStars(){
        return this.stars
    }
    get getForks(){
        return this.forks
    }
    get getIssuesOpen(){
        return this.issues_open
    }
    get getIssuesClose(){
        return this.issues_close
    }

    set setStars(stars){
        this.stars = stars
    }
    set setForks(forks){
        this.forks = forks
    }
    set setIssuesOpen(issues_open){
        this.issues_open = issues_open
    }
    set setIssuesClose(issues_close){
        this.issues_close = issues_close
    }
}
console.log("Clase repo")
const repo = new Repo("Launch X","David","Javascript");
console.log("Repositorio:" + repo.name)
repo.setForks = 5
repo.setIssuesOpen = 2
repo.setIssuesClose = 8
repo.setStars = 20
const totalIssues = repo.setIssuesOpen + repo.setIssuesClose
const generalInfo = `This repository ${repo.name} was created by ${repo.name}`
console.log("Issues totales: " + totalIssues)
console.log(generalInfo)


class Twitter {
    constructor (username,twUser,bio,age){
        this.username = username,
        this.age = age,
        this.followers = 0,
        this.temes = [],
        this.twUser = twUser,
        this.bio = bio,
        this.hashtag = []
    }
    get getFollow(){
        return this.followers
    }
    get getTemes(){
        return this.temes
    }
    get getHashtag(){
        return this.hashtag
    }

    set setFollow(followers){
        this.followers = followers
    }
    set setTemes(temes){
        this.temes = temes
    }
    set setHashtag(hashtag){
        this.hashtag = hashtag
    }
}
console.log("Clase Twitter")
const tw = new Twitter("David","@david","...",25);
tw.setFollow = 4
tw.temes = ["tecnologia","python","dibujo"]
tw.hashtag = ["#NodeJS","#LaunchX"]
console.log(tw)

class Uber {
    constructor(user,payment,car){
        this.user = user,
        this.payment = payment,
        this.car = car,
        this.travel = {origen:"",destino:""}
    }
    get getOrigen(){
        return this.travel.origen
    }
    get getDestino(){
        return this.travel.destino
    }
    set setOrigen(origen){
        this.travel.origen = origen
    }
    set setDestino(destino){
        this.travel.destino = destino
    }
}

console.log("Clase Uber")
const trip = new Uber("David","Efectivo","Black")
trip.travel.origen = "Casa"
trip.travel.destino = "Santa Fe"
console.log(trip)