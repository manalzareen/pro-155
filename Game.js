AFrame.registerComponent("game-play",{
    schema:{
        eId:{type:"string",default:"#coin"}
    },
    IsCollide:function(new_eId){
        const element=document.querySelector(new_eid)
        element.addEventListener("collide",(e) => {
            if(new_eId.includes("coin")){
                console.log(new_eId + "collision")
            }
            else if(new_eId.includes("fish")){
                console.log("fish has been collided")
            }


        })
    }
})