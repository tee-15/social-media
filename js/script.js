const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', function(e) {
    
    if (e.target.checked) {
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        var card = document.querySelector(".row-letters").children;
        cards = Array.from(card)
        cards.forEach(function(c){
            c.style.backgroundColor = "hsl(230, 17%, 14%)";
            c.style.color ="#fff";
        })
       
      
       

    }
    

    else{
        document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        document.documentElement.setAttribute('data-theme','light');
        var card = document.querySelector(".row-letters").children;
        cards = Array.from(card)
        cards.forEach(function(c){
            c.style.backgroundColor = " hsl(225, 100%, 98%)";
            c.style.color =" hsl(230, 17%, 14%)";
           
        })

    }
    if (e.target.checked) {
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        document.body.style.color = "#fff"
        var cardless = document.querySelector(".leadboard").children;
        cardless = Array.from(cardless)
        cardless .forEach(function(c){
            c.style.backgroundColor = "hsl(230, 17%, 14%)";
            c.style.color ="#fff";
        })
       
      
       

    }
    else{
        document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        document.body.style.color = "hsl(230, 17%, 14%)"
        document.documentElement.setAttribute('data-theme','light');
        var cardless = document.querySelector(".leadboard").children;
        cardless = Array.from(cardless)
        cardless.forEach(function(c){
            c.style.backgroundColor = " hsl(225, 100%, 98%)";
            c.style.color =" hsl(230, 17%, 14%)";
           
        })

    }
    if (e.target.checked) {
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        var cardpage = document.querySelector(".champboard").children;
        cardpage = Array.from(cardpage)
        cardpage .forEach(function(c){
            c.style.backgroundColor = "hsl(230, 17%, 14%)";
            c.style.color ="#fff";
        })
       
      
       

    }
    else{
        document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        document.documentElement.setAttribute('data-theme','light');
        var cardpage = document.querySelector(".champboard").children;
        cardpage = Array.from(cardpage)
        cardpage.forEach(function(c){
            c.style.backgroundColor = " hsl(225, 100%, 98%)";
            c.style.color =" hsl(230, 17%, 14%)";
           
        })

    }

})