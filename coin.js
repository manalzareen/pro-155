AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `coin${i}`;
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
       
        this.createCoins(id , position)
        
      }
  
    } ,
  
    createCoins: function(id, position) { 
    
      var islandEl = document.querySelector("#island")
      
      var coinEl = document.createElement("a-entity");
    
      coinEl.setAttribute("id" , id)
  
      coinEl.setAttribute("position",position);
  
      coinEl.setAttribute("material","color","yellow");
      
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });   
      coinEl.setAttribute("static-body",{shape:"sphere",sphereRadius:"2"})
      coinEl.setAttribute("game-play",{
        eId:`#${id}`
       })
      islandEl.appendChild(coinEl)
    }
  });
  
  
  