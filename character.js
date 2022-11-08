class Dogs {
    constructor(data){
        Object.assign(this, data)
    }

    getDogHtml(){
        const {name, avatar, age, bio} = this

        return `
        <img src="${avatar}" alt="">
            <div class="info">
            <p class="name">${name}</p>
            <p class="age">${age}</p>
            <p class="bio">${bio}.</p> 
        </div>
        `
    }
}

export {Dogs}